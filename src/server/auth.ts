import type { AuthConfig } from "@auth/core"
import Github from "@auth/core/providers/github"
import type { Session } from "@auth/core/types"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "~/server/db"
import { Auth } from "@auth/core"

export const authConfig: AuthConfig = {
	adapter: PrismaAdapter(prisma),
	providers: [
		// @ts-ignore
		Github({
			clientId: import.meta.env.GITHUB_ID,
			clientSecret: import.meta.env.GITHUB_SECRET,
		}),
	],
	trustHost: true,
	secret: import.meta.env.SECRET,
}

export type User = {
	name: string
	email: string
	image: string
	id: string
}

export const getUser = (session: Session | null) => {
	const user = (session ? session.user : null) as User | null
	return user
}

export type Session = {
	user: User
	expires: string
} | null

export const getSession = async (req: Request) => {
	const url = new URL("/api/auth/session", req.url)
	const response = await Auth(new Request(url, { headers: req.headers }), {
		trustHost: true,
		...authConfig,
		callbacks: {
			...authConfig.callbacks,
			session: ({ user, session, token }) => {
				return {
					...session,
					user: {
						...session.user,
						id: user.id,
					},
				}
			},
		},
	})
	const data = await response.json()

	return data
}
