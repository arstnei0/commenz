import { TRPCError, initTRPC } from "@trpc/server"
import type { Context } from "./context"
import { createContext } from "./context"

/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.context<Context>().create()

/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const router = t.router
export const publicProcedure = t.procedure
export const protectedProcedure = t.procedure.use(({ ctx, next }) => {
	const { user } = ctx
	if (!user) {
		throw new TRPCError({
			code: "UNAUTHORIZED",
			message: "Unauthorized",
		})
	}

	return next({ ctx: ctx as typeof ctx & { user: NonNullable<(typeof ctx)["user"]> } })
})
