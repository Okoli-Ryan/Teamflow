const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
        fontFamily: {
            Nunito: "Nunito",
            Poppins: "Poppins"
        },
		extend: {
            fontFamily: {
                'sans': ["Nunito", ...defaultTheme.fontFamily.sans]
            },
			colors: {
				secondary: "#FFCA1D",
				primary: "#4B4AEF",
				gray: "#757575",
				darkgray: "#1F1F1F",
                customgreen: "#3ADAD9",
                lightgray: "#606060",
                textPrimary: "#2D3150",
                textLight: "#5C5E87",
                textSecondary: "#2B3377"
			},
		},
	},
	plugins: [],
};
