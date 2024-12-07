/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				lora: ['Lora Variable', 'sans-serif'],
				noto: ['Noto Sans Variable', 'sans-serif'],
				dancing: ['Dancing Script Variable', 'cursive'],
				cinzel: ['Cinzel Variable', 'serif'],
				marcellus: ['Marcellus', 'serif'],
				fleur: ['Fleur De Leah', 'cursive'],
				windsong: ['Windsong', 'cursive'],
				great: ['Great Vibes', 'cursive']
			}
		},
	},
	plugins: [],
}
