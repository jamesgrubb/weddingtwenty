const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		container: (theme) => ({
			center: true,
			padding: theme('spacing.4'),
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
			},
		}),

		extend: {
			colors: {
				gray: colors.warmGray,
				teal: colors.teal,
				red: colors.rose,
			},
			fontFamily: {
				mono: ["'Dm Mono'", ...defaultTheme.fontFamily.mono],
				lora: ["'Lora', serif", ...defaultTheme.fontFamily.serif],
				hatton: ["'Hatton'", ...defaultTheme.fontFamily.serif],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('tailwindcss-breakpoints-inscpector'),
	],
};

//({ strategy: 'class' })
