import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: { xs: '430px', sm: '640px', md: '768px', lg: '1024px', xl: '1280px', '2xl': '1536px' },
		container: { center: true, padding: { DEFAULT: '1.5rem', xl: '3rem', '2xl': '6rem' } },
		extend: {
			transitionDuration: { DEFAULT: '300ms' },
			fontFamily: {
				sans: ['Sofia Sans', 'sans-serif'],
				condensed: ['Sofia Sans Condensed', 'sans-serif'],
				serif: ['Awesome Serif', 'serif'],
			},
			spacing: Object.fromEntries([...Array(97).keys()].slice(17).map(v => [v * 4, `${v}rem`])),
			colors: {
				blue: {
					100: '#F2F5FF',
					600: '#2658EC',
					800: '#1F4CD1',
				},
				orange: {
					600: '#F55800',
				},
				lime: {
					500: '#6CCC1D',
				},
			},
		},
	},
	plugins: [
		plugin(function ({ addVariant }) {
			addVariant('reveal', '.reveal &')
			addVariant('revealed', '.revealed &')
		}),
	],
} satisfies Config
