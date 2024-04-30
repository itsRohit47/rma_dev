/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        paralax: "url(/images/roads.jpeg)",
        about: "url(/images/team.jpeg)",
        team: "url(/images/team.jpeg)",
        service: "url(/images/earthworks.jpg)",
        project: "url(/images/rails.jpeg)",
        careers: "url(/images/team.jpeg)",
      },
      fontFamily: {
        Rma: ['"Archivo"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
