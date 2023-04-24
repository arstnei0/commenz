import type { inferAsyncReturnType } from "@trpc/server"
import type { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch"
import { prisma } from "../db"
import { getSession } from "@auth/solid-start"
import { authConfig } from "~/pages/api/auth/[...auth]"

export async function createContext({ req, resHeaders }: FetchCreateContextFnOptions) {
	const session = await getSession(req, authConfig)
	const user = (session ? session.user : null) as {
		name: string
		email: string
		image: string
	} | null
	return { req, resHeaders, prisma, session, user }
}

export type Context = inferAsyncReturnType<typeof createContext>
