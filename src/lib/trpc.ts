import { createTRPCProxyClient, httpBatchLink } from "@trpc/client"
import type { AppRouter } from "~/server/app"
import { createTRPCSolid } from "solid-trpc"

export const trpc = createTRPCSolid<AppRouter>()
export const client = trpc.createClient({
	links: [
		httpBatchLink({
			url: "/api/trpc",
			// async headers() {
			// 	return {
			// 		authorization: getAuthCookie(),
			// 	}
			// },
		}),
	],
})
