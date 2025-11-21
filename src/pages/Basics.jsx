import { useState } from 'react';
import { Link } from 'react-router-dom';
import { championCounters } from '../data/championCounters';

export default function Basics() {
  const [activeTab, setActiveTab] = useState('roles');
  const [searchChampion, setSearchChampion] = useState('');
  const [counterResults, setCounterResults] = useState(null);

  // Funkcje
  const handleSearchCounter = () => {
    const champion = searchChampion.trim();
    if (championCounters[champion]) {
      setCounterResults(championCounters[champion]);
    } else {
      setCounterResults({ error: true });
    }
  };

  const clearSearch = () => {
    setSearchChampion('');
    setCounterResults(null);
  };

  const roles = [
    {
      name: 'Top Lane',
      icon: '⚔️',
      description: 'Samotny wojownik na górnej linii. Często to czempioni wytrzymali (tanki) lub bruiserzy.',
      tips: ['Ucz się tradować', 'Kontroluj wave management', 'Stawiaj wardy na rzece'],
      examples: ['Garen', 'Darius', 'Malphite']
    },
    {
      name: 'Jungle',
      icon: '🌲',
      description: 'Porusza się po dżungli między liniami, zabija neutralne potwory i pomaga drużynie.',
      tips: ['Pamiętaj o objective timing', 'Gankuj linie które są pushowane', 'Kontroluj vision'],
      examples: ['Warwick', 'Amumu', 'Master Yi']
    },
    {
      name: 'Mid Lane',
      icon: '✨',
      description: 'Środkowa linia - często magowie lub assassyni. Centrum mapy, łatwy roaming.',
      tips: ['Pushuj i roamuj', 'Kontroluj rzekę', 'Pomagaj jungleowi przy scuttle'],
      examples: ['Annie', 'Lux', 'Ahri']
    },
    {
      name: 'ADC (Bot Carry)',
      icon: '🏹',
      description: 'Strzelec na dolnej linii. Główne źródło obrażeń fizycznych w późnej grze.',
      tips: ['Farmuj bezpiecznie', 'Pozycjonowanie w teamfightach', 'Komunikuj się z supportem'],
      examples: ['Ashe', 'Miss Fortune', 'Caitlyn']
    },
    {
      name: 'Support',
      icon: '🛡️',
      description: 'Wspiera ADC na dolnej linii. Stawia wardy, inicjuje walki lub leczy.',
      tips: ['Kontroluj vision', 'Chroń carry', 'Roamuj na mid gdy bot jest bezpieczny'],
      examples: ['Soraka', 'Leona', 'Thresh']
    }
  ];

  const mechanics = [
    {
      term: 'CS (Creep Score)',
      definition: 'Liczba zabitych minionów. Główne źródło golda w grze.',
      importance: '10 CS ≈ 1 kill w goldzie'
    },
    {
      term: 'Gank',
      definition: 'Niespodziewany atak na przeciwnika, zazwyczaj z pomocą junglera.',
      importance: 'Kluczowy do zdobywania przewagi'
    },
    {
      term: 'Vision',
      definition: 'Kontrola mapy poprzez wardy (różowe i żółte).',
      importance: 'Zapobiega gankom i pozwala kontrolować cele'
    },
    {
      term: 'Objectives',
      definition: 'Cele na mapie: Drake, Baron, Herald, Wieże.',
      importance: 'Dają przewagę całej drużynie'
    },
    {
      term: 'Trade',
      definition: 'Wymiana obrażeń z przeciwnikiem na linii.',
      importance: 'Pozwala zdobyć przewagę HP przed walką'
    },
    {
      term: 'Wave Management',
      definition: 'Kontrolowanie pozycji fali minionów.',
      importance: 'Umożliwia bezpieczny farm lub agresywną grę'
    }
  ];

  const objectives = [
    {
      name: 'Drake (Smok)',
      icon: '🐉',
      info: 'Daje buffy całej drużynie. 4 draki = silny buff Soul'
    },
    {
      name: 'Baron Nashor',
      icon: '👹',
      info: 'Pojawia się po 20 min. Daje ogromny buff do push-owania'
    },
    {
      name: 'Herald',
      icon: '👁️',
      info: 'Pomaga burzyć wieże. Dostępny wcześniej gry'
    },
    {
      name: 'Wieże',
      icon: '🗼',
      info: 'Dają gold i otwierają mapę. Priorytet!'
    }
  ];

  return (
    <div className="min-h-screen bg-lol-dark">
      <div className="container mx-auto px-6 py-8">
        {/* Nagłówek */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-lol-gold mb-4">
            📚 Podstawy League of Legends
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Poznaj fundamenty gry, role na linii i najważniejsze mechaniki
          </p>
        </div>

        {/* Zakładki */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <button
            onClick={() => setActiveTab('roles')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'roles'
                ? 'bg-lol-blue text-white shadow-lg scale-105'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            🎭 Role
          </button>
          <button
            onClick={() => setActiveTab('mechanics')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'mechanics'
                ? 'bg-lol-blue text-white shadow-lg scale-105'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            ⚙️ Mechaniki
          </button>
          <button
            onClick={() => setActiveTab('objectives')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'objectives'
                ? 'bg-lol-blue text-white shadow-lg scale-105'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            🎯 Cele
          </button>
          <button
            onClick={() => setActiveTab('counters')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'counters'
                ? 'bg-lol-blue text-white shadow-lg scale-105'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            ⚔️ Counter Search
          </button>
        </div>

        {/* Zawartość zakładek */}
        <div className="mt-8">
          {/* ROLE */}
          {activeTab === 'roles' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roles.map((role, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg p-6 border-2 border-lol-gold/20 hover:border-lol-blue transition-all hover:scale-105 shadow-xl"
                >
                  <div className="text-5xl mb-3 text-center">{role.icon}</div>
                  <h3 className="text-2xl font-bold text-lol-gold mb-3 text-center">
                    {role.name}
                  </h3>
                  <p className="text-gray-300 mb-4 text-center">
                    {role.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-lol-blue font-semibold mb-2">💡 Wskazówki:</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {role.tips.map((tip, i) => (
                        <li key={i}>• {tip}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-green-400 font-semibold mb-2">
                      🎮 Łatwe postacie:
                    </h4>
                    <div className="flex gap-2 flex-wrap">
                      {role.examples.map((champ, i) => (
                        <span
                          key={i}
                          className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm"
                        >
                          {champ}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* MECHANIKI */}
          {activeTab === 'mechanics' && (
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {mechanics.map((mechanic, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg p-6 border-l-4 border-lol-blue shadow-lg hover:shadow-lol-blue/20 transition-all"
                >
                  <h3 className="text-2xl font-bold text-lol-gold mb-3">
                    {mechanic.term}
                  </h3>
                  <p className="text-gray-300 mb-3">{mechanic.definition}</p>
                  <div className="bg-lol-blue/20 border border-lol-blue/30 rounded p-3">
                    <p className="text-lol-blue text-sm font-semibold">
                      ⚡ {mechanic.importance}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* CELE */}
          {activeTab === 'objectives' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {objectives.map((obj, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 text-center border-2 border-lol-gold/30 hover:border-lol-gold transition-all hover:scale-105 shadow-xl"
                >
                  <div className="text-6xl mb-4">{obj.icon}</div>
                  <h3 className="text-xl font-bold text-lol-gold mb-3">
                    {obj.name}
                  </h3>
                  <p className="text-gray-300 text-sm">{obj.info}</p>
                </div>
              ))}
            </div>
          )}

          {/* COUNTER SEARCH */}
          {activeTab === 'counters' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-800 rounded-lg p-8 border border-lol-gold/30 mb-8">
                <h3 className="text-2xl font-bold text-lol-gold mb-4 text-center">
                  🔍 Znajdź Countery dla Championa
                </h3>
                <p className="text-gray-300 text-center mb-6">
                  Wpisz nazwę championa, aby zobaczyć kto go counteruje i przeciwko komu jest dobry
                </p>

                {/* Search Bar */}
                <div className="flex gap-3 mb-4">
                  <input
                    type="text"
                    value={searchChampion}
                    onChange={(e) => setSearchChampion(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearchCounter()}
                    placeholder="Wpisz nazwę championa (np. Yasuo, Darius, Lux)..."
                    className="flex-1 px-4 py-3 bg-gray-900 text-white border border-lol-blue/30 rounded-lg focus:outline-none focus:border-lol-blue"
                  />
                  <button
                    onClick={handleSearchCounter}
                    className="bg-lol-blue hover:bg-lol-gold text-white hover:text-lol-dark font-bold px-8 py-3 rounded-lg transition-all"
                  >
                    Szukaj
                  </button>
                  {counterResults && (
                    <button
                      onClick={clearSearch}
                      className="bg-gray-700 hover:bg-gray-600 text-white font-bold px-6 py-3 rounded-lg transition-all"
                    >
                      Wyczyść
                    </button>
                  )}
                </div>

                {/* Popular Champions */}
                <div className="flex flex-wrap gap-2 justify-center">
                  <p className="text-gray-400 text-sm w-full text-center mb-2">Popularne:</p>
                  {['Yasuo', 'Zed', 'Darius', 'Jinx', 'Thresh', 'Master Yi', 'Lux', 'Ahri'].map(champ => (
                    <button
                      key={champ}
                      onClick={() => {
                        setSearchChampion(champ);
                        if (championCounters[champ]) {
                          setCounterResults(championCounters[champ]);
                        } else {
                          setCounterResults({ error: true });
                        }
                      }}
                      className="bg-gray-700 hover:bg-lol-blue text-gray-300 hover:text-white px-3 py-1 rounded text-sm transition-all"
                    >
                      {champ}
                    </button>
                  ))}
                </div>
              </div>

              {/* Results */}
              {counterResults && !counterResults.error && (
                <div className="space-y-6">
                  <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-lol-gold">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">🎮</span>
                      <div>
                        <h4 className="text-2xl font-bold text-lol-gold">{searchChampion}</h4>
                        <p className="text-gray-400">{counterResults.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* Counters */}
                  <div className="bg-gradient-to-br from-red-900/20 to-gray-800 rounded-lg p-6 border-2 border-red-500/30">
                    <h4 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                      <span>✗</span> Słaby przeciwko:
                    </h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      {counterResults.counters.map((counter, i) => (
                        <div
                          key={i}
                          className="bg-gray-900/50 p-4 rounded-lg text-center border border-red-500/20"
                        >
                          <p className="text-white font-bold text-lg">{counter}</p>
                          <p className="text-red-400 text-sm mt-1">Unikaj tego matchupu!</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Good Against */}
                  <div className="bg-gradient-to-br from-green-900/20 to-gray-800 rounded-lg p-6 border-2 border-green-500/30">
                    <h4 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                      <span>✓</span> Dobry przeciwko:
                    </h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      {counterResults.goodAgainst.map((good, i) => (
                        <div
                          key={i}
                          className="bg-gray-900/50 p-4 rounded-lg text-center border border-green-500/20"
                        >
                          <p className="text-white font-bold text-lg">{good}</p>
                          <p className="text-green-400 text-sm mt-1">Świetny pick!</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tips */}
                  <div className="bg-lol-blue/20 border border-lol-blue/50 rounded-lg p-6">
                    <h4 className="text-lg font-bold text-lol-blue mb-3">💡 Wskazówki:</h4>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li>• <strong>Countery</strong> to championi którzy mają przewagę w tym matchupie</li>
                      <li>• <strong>Dobre matchupy</strong> to championi przeciwko którym masz przewagę</li>
                      <li>• Pamiętaj: skill i doświadczenie są ważniejsze niż countery!</li>
                      <li>• Zawsze lepiej grać championem którego znasz, niż counterem którego nie umiesz</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Error */}
              {counterResults && counterResults.error && (
                <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-6 text-center">
                  <p className="text-red-400 text-lg font-bold mb-2">😕 Champion nie znaleziony</p>
                  <p className="text-gray-300 text-sm">
                    Sprawdź pisownię lub wybierz z popularnych championów powyżej
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Stopka sekcji */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-lol-blue/30 to-gray-800/50 rounded-lg p-8 border border-lol-blue/30">
            <h3 className="text-2xl font-bold text-lol-gold mb-3">
              🎯 Gotowy na więcej?
            </h3>
            <p className="text-gray-300 mb-4">
              Sprawdź quiz i przetestuj swoją wiedzę!
            </p>
            <Link 
              to="/quiz"
              className="inline-block bg-lol-blue hover:bg-lol-gold hover:text-lol-dark text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105"
            >
              Rozpocznij Quiz →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}