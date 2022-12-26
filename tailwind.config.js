/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx}'], // Configured to all html, js, and jsx files in the src folder.
	mode: 'jit', // Enables just-in-time for performance.
	theme: {
		extend: {
			// Color palette.
			colors: {
				red: '#DC4492',
				yellow: '#FDCC49',
				blue: '#2CBCE9',
				'deep-blue': '#010026',
				grey: '#ededed',
				'dark-grey': '#757575',
				'opaque-black': 'rgba(0,0,0,0.35)'
			},
			// Background images.
			backgroundImage: () => ({
				'gradient-rainbow':
					'linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)',
				'gradient-rainblue':
					'linear-gradient(90deg, #24cbff 14.53%, #Fc59ff 69.36%, #FFBD0C 107.73%)'
			}),
			// Font families.
			fontFamily: {
				opensans: ['Open Sans', 'sans-serif'],
				playfair: ['Playfair Display', 'serif']
			},
			// Images.
			content: {
				brush: "url('./assets/brush.png')"
			},
			// Keyframes.
			keyframes: {
				bob: {
					'0%': {transform: 'translateY(0)'},
					'50%': {transform: 'translateY(-30px)'},
					'100%': {transform: 'translateY(0)'}
				}
			},
			// Animations.
			animation: {
				'space-bob': 'bob 2s linear infinite'
			}
		},
		// Viewport breakpoints.
		screens: {
			xs: '480px',
			sm: '768px',
			md: '1060px'
		}
	},
	plugins: []
};
