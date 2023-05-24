module.exports = {
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#9C27B0",      
                    secondary: "#FFCA28",
                    accent: "#FFFFFF",
                    neutral: "#212121",
                    "base-100": "#121212",
                    info: "#3ABFF8",
                    success: "#36D399",
                    warning: "#FBBD23",
                    error: "#F87272",
                },
            },
        ],
    },
    plugins: [
        require("@tailwindcss/typography"),
        require('daisyui')
    ],
};  