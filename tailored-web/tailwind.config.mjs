/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#007F5F',
					508: '#3fb380',
					dark: '#285943',
					darker: '#19381F',
					light: '#F8FFE5',
				},
				secondary: {
					DEFAULT: '#9477A1',
					dark: '#6B4B69',
					darker: '#4A3958',
					light: '#FFE0DE',
				},
				gray: {
					DEFAULT: '#707070',
					light: '#EDEDED',
				},
				dark: '#011C26',
				white: '#FFFFFF',
			},
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
				sans: ['Inter', 'sans-serif'],
			},
			fontSize: {
				sm: '0.875rem',
				md: '1rem',
				lg: '1.25rem',
				xl: '1.75rem',
				'2xl': '2rem',
				'3xl': '2.25rem',
				'4xl': '2.75rem',
			},
			screens: {
				xxs: '300px',
				xs: '415px',
			},
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '4rem',
					xl: '5rem',
					'2xl': '6rem',
				},
			},
		},
	},
	plugins: [require('@tailwindcss/container-queries')],
};
