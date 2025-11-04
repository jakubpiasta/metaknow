import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-lol-dark min-h-screen text-white">
      {/* Hero Sekcja */}
      <section className="relative bg-gradient-to-b from-lol-dark to-gray-900 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-lol-gold mb-6">
            Witaj w <span className="text-lol-blue">Metaknow</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Opanuj fundamenty League of Legends dzięki naszym narzędziom edukacyjnym
          </p>
          <Link 
            to="/basics" 
            className="inline-block bg-lol-blue hover:bg-lol-gold text-lol-dark font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Rozpocznij naukę
          </Link>
        </div>
      </section>

      {/* Funkcjonalności */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-lol-gold mb-12">
            Co oferujemy?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Karta 1 */}
            <div className="bg-lol-dark p-6 rounded-lg border border-lol-gold/20 hover:border-lol-blue transition-all">
              <div className="text-lol-blue text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-lol-gold mb-3">Analiza mety</h3>
              <p className="text-gray-300">
                Aktualne tier listy, statystyki i rekomendacje dla każdej linii
              </p>
            </div>

            {/* Karta 2 */}
            <div className="bg-lol-dark p-6 rounded-lg border border-lol-gold/20 hover:border-lol-blue transition-all">
              <div className="text-lol-blue text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-lol-gold mb-3">System przedmiotów</h3>
              <p className="text-gray-300">
                Interaktywny kreator buildów i szczegółowe opisy przedmiotów
              </p>
            </div>

            {/* Karta 3 */}
            <div className="bg-lol-dark p-6 rounded-lg border border-lol-gold/20 hover:border-lol-blue transition-all">
              <div className="text-lol-blue text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-lol-gold mb-3">Quizy edukacyjne</h3>
              <p className="text-gray-300">
                Testuj swoją wiedzę i utrwalaj mechaniki gry
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stopka */}
      <footer className="bg-black/80 py-8 border-t border-lol-gold/20">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© 2025 Metaknow | Praca dyplomowa</p>
        </div>
      </footer>
    </div>
  );
}