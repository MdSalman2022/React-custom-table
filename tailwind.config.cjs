/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#ffce0a",
        
"secondary": "#a7e8e8",
        
"accent": "#f7f7f7",
        
"neutral": "#25222A",
        
"base-100": "#FFFFFF",
        
"info": "#7AC1F0",
        
"success": "#179271",
        
"warning": "#F7D426",
        
"error": "#F24A6E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}