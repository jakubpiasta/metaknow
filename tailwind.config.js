/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Upewnij się, że ścieżki obejmują wszystkie pliki projektu
  ],
  theme: {
    extend: {
      colors: { // Tutaj dodajemy własne kolory
        'lol-dark': '#0a0a12', // Ciemny bazowy kolor (np. tło)
        'lol-gold': '#c8aa6e',  // Złoty akcent (przyciski, nagłówki)
        'lol-blue': '#1a8cff',  // Niebieski (linki, akcenty)
        'lol-red': '#e84057',   // Czerwony (błędy, alerty)
        'lol-green': '#2ecc71',  // Zielony (sukces, potwierdzenia)
      },
    },
  },
  plugins: [],
}