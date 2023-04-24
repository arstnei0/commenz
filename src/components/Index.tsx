import type { Component } from "solid-js"
import { client, trpc } from "~/lib/trpc"
import { QueryClient, QueryClientProvider, createQuery } from "@tanstack/solid-query"
import { signIn } from "@auth/solid-start/client"

const queryClient = new QueryClient()

export const Index: Component = () => {
	const message = trpc.hello.useQuery()

	return (
		<>
			<div>{message.data}</div>
		</>
	)
}

export const App: Component = () => {
	return (
		<>
			<trpc.Provider client={client} queryClient={queryClient}>
				<Index />
			</trpc.Provider>
		</>
	)
}
