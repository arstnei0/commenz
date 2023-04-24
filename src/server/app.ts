import { protectedProcedure, publicProcedure, router } from "./trpc"

export const appRouter = router({
	hello: protectedProcedure.query(({ ctx: { user } }) => {
		return `Hello, ${user.name}`
	}),
})

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter
