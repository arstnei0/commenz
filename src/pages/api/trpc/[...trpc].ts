import { fetchRequestHandler } from "@trpc/server/adapters/fetch"
import type { APIRoute } from "astro"
import { createContext } from "~/server/trpc/context"
import { appRouter } from "~/server/app"

export const all: APIRoute = ({ params, request }) => {
	return fetchRequestHandler({
		endpoint: "/api/trpc",
		req: request,
		router: appRouter,
		createContext,
	})
}
