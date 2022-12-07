/** @type {import('tailwindcss').Config} */
module.exports = {
	important: true,
	corePlugins: {
		preflight: false,
	},
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./containers/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					1: "#4BA063",
					2: "#013423",
					font: "#04251A",
				},
				secondary: {
					1: "#F1C411",
					2: "#D5AB35",
				},
				grey: {
					80: "#333333",
					60: "#666666",
					20: "#CCCCCC",
					10: "#F2F2F2",
				},
				error: "#E11C00",
				success: "#2CB44D",
				warning: "#FA7206",
				black: "#000000",
				text: {
					primary: "#04251A",
					secondary: "#666666",
				},
			},
		},
		fontFamily: {
			manrope: ["Manrope", "sans-serif"],
		},
	},
	plugins: [],
};
