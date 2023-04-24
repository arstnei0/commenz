import type { inferAsyncReturnType } from "@trpc/server"
import type { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch"
import { prisma } from "../db"
import { authConfig, getUser, getSession } from "~/server/auth"

export async function createContext({ req, resHeaders }: FetchCreateContextFnOptions) {
	const session = await getSession(req)
	const user = getUser(session)
	return { req, resHeaders, prisma, session, user }
}

export type Context = inferAsyncReturnType<typeof createContext>
