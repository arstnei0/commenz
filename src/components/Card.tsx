import type { Component, JSX } from "solid-js"

export default (props: { children: JSX.Element }) => {
	return (
		<div class="border-black border-2 rounded-xl lg:p-8 p-4 shadow-large bg-white m-4">
			{props.children}
		</div>
	)
}
