import { Component, For, createEffect } from "solid-js"
import { client, trpc } from "~/lib/trpc"
import { QueryClient, QueryClientProvider, createQuery } from "@tanstack/solid-query"
import { signIn } from "@auth/solid-start/client"
import { Route, Router, Routes } from "@solidjs/router"
import Card from "~/components/Card"

const queryClient = new QueryClient()

export const Index: Component = () => {
	const sites = trpc.site.get.useQuery()
	const createSite = trpc.site.create.useMutation()
	createEffect(() => {
		console.log(sites.data)
	})

	return (
		<>
			<div>
				<For each={sites.data}>
					{(site) => (
						<>
							<Card>
								<h1>{site.name}</h1>
							</Card>
						</>
					)}
				</For>
			</div>
		</>
	)
}

export const App: Component = () => {
	return (
		<>
			<trpc.Provider client={client} queryClient={queryClient}>
				<Router base="/app">
					<Routes>
						<Route path="/" component={Index} />
					</Routes>
				</Router>
			</trpc.Provider>
		</>
	)
}
