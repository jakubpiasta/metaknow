import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Home() {
  const [activeStep, setActiveStep] = useState(0);
  const [championCount] = useState(174);
  const [itemCount] = useState(18);
  const [visibleStats, setVisibleStats] = useState(false);

  // Animacja liczników po załadowaniu
  useEffect(() => {
    setVisibleStats(true);
  }, []);

  const steps = [
    {
      number: 1,
      title: "Poznaj Podstawy",
      description: "Zacznij od nauki ról, mechanik i podstawowych zasad gry",
      icon: "📚",
      link: "/basics"
    },
    {
      number: 2,
      title: "Studiuj Metę",
      description: "Zobacz aktualne tier listy i wybierz championów dla siebie",
      icon: "📊",
      link: "/meta"
    },
    {
      number: 3,
      title: "Zrozum Przedmioty",
      description: "Naucz się kiedy i jakie itemy kupować",
      icon: "🛡️",
      link: "/items"
    },
    {
      number: 4,
      title: "Przetestuj Wiedzę",
      description: "Sprawdź się w quizie i utrwalaj materiał",
      icon: "🧠",
      link: "/quiz"
    }
  ];

  const features = [
    {
      icon: "📊",
      title: "Aktualna Meta",
      description: "Tier listy oparte na statystykach z ponad 1.6M gier rankingowych",
      highlight: "174 Championów"
    },
    {
      icon: "🛡️",
      title: "System Przedmiotów",
      description: "Kompleksowe buildy i wskazówki kiedy kupować konkretne itemy",
      highlight: "Wszystkie Role"
    },
    {
      icon: "🧠",
      title: "Quizy Edukacyjne",
      description: "Interaktywne pytania testujące twoją wiedzę o grze",
      highlight: "Wkrótce"
    }
  ];

  const faq = [
    {
      q: "Czym jest meta w League of Legends?",
      a: "Meta to skrót od 'metagame' - najbardziej efektywne strategie, championi i buildy w danym patchu. Zmienia się co 2 tygodnie z nowym patchem."
    },
    {
      q: "Którą rolę powinienem wybrać jako początkujący?",
      a: "Polecamy zacząć od Support lub Top Lane - są najbardziej przebaczające dla nowicjuszy. Support uczy gry zespołowej, a Top pozwala skupić się na pojedynkach 1v1."
    },
    {
      q: "Jak często aktualizujecie dane?",
      a: "Nasze tier listy są aktualizowane co patch (co ~2 tygodnie), bazując na najnowszych statystykach z rankingowych gier."
    },
    {
      q: "Czy mogę grać championami z niższych tierów?",
      a: "Oczywiście! Tier listy pokazują statystyczną przewagę, ale skill i praktyka są ważniejsze. Graj tym, co lubisz!"
    }
  ];

  const stats = [
    { value: championCount, label: "Championów", suffix: "" },
    { value: itemCount, label: "Przedmiotów", suffix: "+" },
    { value: 5, label: "Ról", suffix: "" },
    { value: 1600000, label: "Analizowanych Gier", suffix: "+" }
  ];

  // Formatowanie dużych liczb
  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K";
    return num;
  };

  return (
    <div className="bg-lol-dark min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-lol-dark via-gray-900 to-lol-dark py-20 overflow-hidden">
        {/* Efekt tła */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-lol-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-lol-blue rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="text-lol-gold">Meta</span>
              <span className="text-lol-blue">Know</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4">
              Twój przewodnik po League of Legends
            </p>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Poznaj podstawy, opanuj metę i zostań lepszym graczem dzięki naszym narzędziom edukacyjnym
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/basics"
                className="bg-lol-blue hover:bg-lol-gold text-white hover:text-lol-dark font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                🚀 Zacznij Naukę
              </Link>
              <Link
                to="/meta"
                className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 border-2 border-lol-gold/30 hover:border-lol-gold"
              >
                📊 Zobacz Metę
              </Link>
            </div>

            {/* Statystyki */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-lol-gold/20 transition-all duration-500 ${
                    visibleStats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <p className="text-3xl md:text-4xl font-bold text-lol-gold mb-2">
                    {formatNumber(stat.value)}{stat.suffix}
                  </p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Jak zacząć? */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-lol-gold mb-4">
              🎯 Jak zacząć?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Postępuj według naszej sprawdzonej ścieżki nauki
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveStep(index)}
                className={`relative bg-gray-800 p-6 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                  activeStep === index
                    ? 'border-lol-blue scale-105 shadow-xl shadow-lol-blue/20'
                    : 'border-lol-gold/20 hover:border-lol-gold/50'
                }`}
              >
                {/* Numer */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-lol-blue rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  {step.number}
                </div>

                <div className="text-6xl mb-4 mt-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-lol-gold mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-300 mb-4 min-h-[60px]">
                  {step.description}
                </p>

                <Link
                  to={step.link}
                  className="inline-block text-lol-blue hover:text-lol-gold transition-colors font-semibold"
                >
                  Rozpocznij →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funkcjonalności */}
      <section className="py-20 bg-lol-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-lol-gold mb-4">
              💎 Co oferujemy?
            </h2>
            <p className="text-xl text-gray-300">
              Kompleksowe narzędzia dla początkujących graczy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border-2 border-lol-gold/20 hover:border-lol-blue transition-all hover:scale-105 shadow-xl"
              >
                <div className="text-6xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-lol-gold mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {feature.description}
                </p>
                <div className="bg-lol-blue/20 border border-lol-blue/50 rounded px-4 py-2 inline-block">
                  <span className="text-lol-blue font-bold">{feature.highlight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-lol-gold mb-4">
              ❓ Często Zadawane Pytania
            </h2>
            <p className="text-xl text-gray-300">
              Odpowiedzi na najczęstsze pytania początkujących
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faq.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 border-l-4 border-lol-blue hover:border-lol-gold transition-all"
              >
                <h3 className="text-xl font-bold text-lol-gold mb-3 flex items-start gap-3">
                  <span className="text-lol-blue">Q:</span>
                  {item.q}
                </h3>
                <p className="text-gray-300 pl-8">
                  <span className="text-green-400 font-bold">A:</span> {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-b from-lol-dark to-gray-900">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-lol-blue/30 to-gray-800/50 rounded-2xl p-12 border-2 border-lol-blue/50 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-lol-gold mb-6">
              🎮 Gotowy na więcej?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Dołącz do tysięcy graczy którzy poprawili swoją grę dzięki Metaknow
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/basics"
                className="bg-lol-gold hover:bg-yellow-500 text-lol-dark font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Rozpocznij Teraz
              </Link>
              <Link
                to="/quiz"
                className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 border-2 border-lol-gold/30 hover:border-lol-gold"
              >
                Sprawdź Quiz
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stopka */}
      <footer className="bg-black/80 py-8 border-t border-lol-gold/20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-gray-400 mb-2">© 2025 Metaknow | Praca dyplomowa</p>
            <p className="text-gray-500 text-sm">
              Projekt edukacyjny stworzony dla początkujących graczy League of Legends
            </p>
            <div className="mt-4 flex justify-center gap-4 text-sm">
              <Link to="/basics" className="text-lol-blue hover:text-lol-gold transition-colors">
                Podstawy
              </Link>
              <span className="text-gray-600">•</span>
              <Link to="/meta" className="text-lol-blue hover:text-lol-gold transition-colors">
                Meta
              </Link>
              <span className="text-gray-600">•</span>
              <Link to="/items" className="text-lol-blue hover:text-lol-gold transition-colors">
                Przedmioty
              </Link>
              <span className="text-gray-600">•</span>
              <Link to="/quiz" className="text-lol-blue hover:text-lol-gold transition-colors">
                Quiz
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}