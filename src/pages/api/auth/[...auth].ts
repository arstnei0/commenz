import { Auth } from "@auth/core"
import type { APIRoute } from "astro"
import { authConfig } from "~/server/auth"

export const all: APIRoute = async ({ request }) => {
	const response = await Auth(request, authConfig)
	return response
}
