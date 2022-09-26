/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#EAF7CF',
				secondary: {
					DEFAULT: '#1D1E2C',
					500: '#181925',
				},
				tertiary: '#77867F',
				accent: '#FF5964'
			},
			keyframes: {
				pulse: {
					'50%': { opacity: 0.85 },
				},
			}
		},
	},
	plugins: [],
}
