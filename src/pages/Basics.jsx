import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Basics() {
  const [activeTab, setActiveTab] = useState('roles');
  const [searchChampion, setSearchChampion] = useState('');
  const [counterResults, setCounterResults] = useState(null);

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