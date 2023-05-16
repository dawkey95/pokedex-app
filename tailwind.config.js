/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				// GRAYSCALE
				darkGray: 'var(--dark-gray)',
				grayscaleLight: 'var(--grayscale-light)',
				grayscaleMedium: 'var(--grayscale-medium)',
				background: 'var(--background)',
				white: 'var(--white)',

				// PRIMARY
				primary: 'var(--primary)',

				// TYPES
				bug: 'var(--bug)',
				dark: 'var(--dark)',
				dragon: 'var(--dragon)',
				electric: 'var(--electric)',
				fairy: 'var(--fairy)',
				fighting: 'var(--fighting)',
				fire: 'var(--fire)',
				flying: 'var(--flying)',
				ghost: 'var(--ghost)',
				normal: 'var(--normal)',
				grass: 'var(--grass)',
				ground: 'var(--ground)',
				ice: 'var(--ice)',
				poison: 'var(--poison)',
				psychic: 'var(--psychic)',
				rock: 'var(--rock)',
				steel: 'var(--steel)',
				water: 'var(--water)',
			},

			fontFamily: {
				mono: ['var(--font-poppins)'],
			},

			boxShadow: {
				primaryShadow: 'var(--primary-shadow)',
				ballShadow: 'var(--ball-shadow)',
				innerShadow: 'var(--inner-shadow)',
				dropShadowLight: 'var(--drop-shadow-light)',
				dropShadowHeavy: 'var(--drop-shadow-heavy)',
			},
		},
	},
	plugins: [],
};