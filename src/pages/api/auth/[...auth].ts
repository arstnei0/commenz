import { Auth, AuthConfig } from "@auth/core"
import Github from "@auth/core/providers/github"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import type { APIRoute } from "astro"
import { prisma } from "~/server/db"

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

export const all: APIRoute = async ({ request }) => {
	const response = await Auth(request, authConfig)
	return response
}
