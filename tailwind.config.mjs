/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				lora: ['Lora Variable', 'sans-serif'],
				noto: ['Noto Sans Variable', 'sans-serif'],
				dancing: ['Dancing Script Variable', 'cursive']
			}
		},
	},
	plugins: [],
}
