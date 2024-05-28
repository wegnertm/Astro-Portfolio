/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				bright: '#20FC8F',
				primary: {
					DEFAULT: '#007F5F',
					dark: '#285943',
					darker: '#19381F',
					light: '#F8FFE5',
				},
				gray: {
					DEFAULT: '#707070',
					light: '#EDEDED',
				},
				dark: '#011C26',
				white: '#FFFFFF',
				// ------------------ //
				'highlight-pink': '#FFE0DE',
				purple: {
					DEFAULT: '#6B4B69',
					dark: '#4A3958',
					light: '#9477A1',
				},
			},
			backgroundImage: {
				'primary-gradient': 'linear-gradient(90deg, highlight 0%, primary 35%, primary-dark 100%)',
			},
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
				sans: ['Inter', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
