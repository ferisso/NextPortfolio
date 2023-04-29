/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Inter': ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'gradient1': 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
        'topo': 'url(/topograph.svg)',
        'ferisso': 'url(/ferisso.png)',
        'fundoVetor': 'url(/fundo.svg)',
        'gradiente-2': 'linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(255, 255, 255, 0))'
      }
    },
  },
  plugins: [],
}
