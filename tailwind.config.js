/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx}'], // Configured to all html, js, and jsx files in the src folder.
	mode: 'jit', // Enables just-in-time for performance.
	theme: {
		extend: {
			// Color palette.
			colors: {
				red: '#9d3582',
				yellow: '#feba41',
				blue: '#5daff8',
				'dark-blue': '#5b4db3',
				black: '#121212',
				'opaque-black': 'rgba(0,0,0,0.35)',
				grey: '#ededed',
				'dark-grey': '#757575',
				white: '#FBF9F3'
			},
			// Background images.
			backgroundImage: () => ({
				'gradient-rainbow':
					'linear-gradient(90deg, #5daff8 14.53%, #9d3582 69.36%, #feba41 107.73%)',
				'gradient-space':
					'radial-gradient(circle at 0% 100%, #49273f, #2d2450 13%, #121212 20%)',
				'gradient-reverse-space':
					'radial-gradient(circle at 100% 0%, #49273f 18%, #2d2450 36%, #121212 50%)'
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
				},
				slideLeft: {
					'0%': {transform: 'translateX(300px)'},
					'100%': {transform: 'translateX(0)'}
				}
			},
			// Animations.
			animation: {
				'space-bob': 'bob 2s linear infinite',
				'slide-left': 'slideLeft 0.5s ease-out'
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
