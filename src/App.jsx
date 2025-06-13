// src/App.jsx
import './index.css'; // Upewnij się, że importujesz style Tailwind

export default function App() {
  return (
    <div className="bg-lol-dark min-h-screen text-white p-8">
      <h1 className="text-4xl font-bold text-lol-gold mb-6">
        Witaj w Metaknow!
      </h1>
      <p className="text-lg text-lol-blue">
        Aplikacja do nauki mechanik League of Legends
      </p>
      
      {/* Przykładowy przycisk z Twoimi kolorami */}
      <button className="mt-6 bg-lol-gold hover:bg-lol-red text-lol-dark font-bold py-2 px-4 rounded transition-colors">
        Rozpocznij naukę
      </button>
    </div>
  );
}