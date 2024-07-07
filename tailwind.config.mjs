/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				bgColor1: "rgb(38, 39, 43)",
				bgColor2: "rgb(31, 32, 35)",
        		bgColor3: "rgb(48, 49, 54)",

			}
		},
	},
	plugins: [],
}
