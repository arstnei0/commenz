import { site } from "./app/site"
import { protectedProcedure, publicProcedure, router } from "./trpc"

export const appRouter = router({
	site,
})

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter
