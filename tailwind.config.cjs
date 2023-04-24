/** @type {import('tailwindcss').Config} */
module.exports = {
	mod: "jit",
	purge: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {},
		boxShadow: {
			large: "var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),10px 10px",
		},
	},
	plugins: [],
}
