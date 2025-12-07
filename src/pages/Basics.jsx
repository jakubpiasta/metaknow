import { useState } from 'react';
import { Link } from 'react-router-dom';
import { championCounters } from '../data/championCounters';

export default function Basics() {
  const [activeTab, setActiveTab] = useState('roles');
  const [searchChampion, setSearchChampion] = useState('');
  const [counterResults, setCounterResults] = useState(null);

  // Funkcje wyszukiwania
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
      description: 'Samotny wojownik na górnej linii. Często to czempioni wytrzymali (tanki) lub bruiserzy.',
      tips: ['Ucz się tradować', 'Kontroluj wave management', 'Stawiaj wardy na rzece'],
      examples: ['Garen', 'Darius', 'Malphite']
    },
    {
      name: 'Jungle',
      description: 'Porusza się po dżungli między liniami, zabija neutralne potwory i pomaga drużynie.',
      tips: ['Pamiętaj o objective timing', 'Gankuj linie które są pushowane', 'Kontroluj vision'],
      examples: ['Warwick', 'Amumu', 'Master Yi']
    },
    {
      name: 'Mid Lane',
      description: 'Środkowa linia - często magowie lub assassyni. Centrum mapy, łatwy roaming.',
      tips: ['Pushuj i roamuj', 'Kontroluj rzekę', 'Pomagaj jungleowi przy scuttle'],
      examples: ['Annie', 'Lux', 'Ahri']
    },
    {
      name: 'ADC (Bot Carry)',
      description: 'Strzelec na dolnej linii. Główne źródło obrażeń fizycznych w późnej grze.',
      tips: ['Farmuj bezpiecznie', 'Pozycjonowanie w teamfightach', 'Komunikuj się z supportem'],
      examples: ['Ashe', 'Miss Fortune', 'Caitlyn']
    },
    {
      name: 'Support',
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
    },
    {
      term: 'Roaming',
      definition: 'Opuszczanie swojej linii żeby pomóc innym liniom.',
      importance: 'Zwiększa pressure na mapie i pomaga teamowi'
    },
    {
      term: 'Kiting',
      definition: 'Atakowanie podczas poruszania się - utrzymywanie dystansu.',
      importance: 'Kluczowe dla ADC - zadajesz damage będąc bezpieczny'
    },
    {
      term: 'Peel',
      definition: 'Ochrona carry poprzez odciąganie wrogów (CC, knockback).',
      importance: 'Support/Tank chroni ADC przed assassynami'
    },
    {
      term: 'Engage',
      definition: 'Rozpoczęcie walki - wskoczenie do wroga.',
      importance: 'Dobry engage wygrywa teamfighty'
    },
    {
      term: 'Recall / Back',
      definition: 'Teleport do bazy (8 sekund). Kupujesz itemy i healujesz.',
      importance: 'Używaj po push-nięciu fali lub po zabójstwie'
    },
    {
      term: 'CC (Crowd Control)',
      definition: 'Efekty kontroli: stun, root, slow, knock-up.',
      importance: 'Uniemożliwia wrogowi ruch lub atakowanie'
    }
  ];

  const objectives = [
    {
      name: 'Drake (Smok)',
      info: 'Daje buffy całej drużynie. 4 draki = silny buff Soul'
    },
    {
      name: 'Baron Nashor',
      info: 'Pojawia się po 20 min. Daje ogromny buff do push-owania'
    },
    {
      name: 'Herald',
      info: 'Pomaga burzyć wieże. Dostępny wcześniej gry'
    },
    {
      name: 'Wieże',
      info: 'Dają gold i otwierają mapę. Priorytet!'
    }
  ];

  const gamePhases = [
    {
      phase: 'Early Game',
      time: '0-15 min',
      color: 'from-green-900/30 to-gray-800',
      borderColor: 'border-green-500/30',
      objectives: [
        {
          title: 'Farmowanie',
          desc: 'Skup się na CS, każdy minion się liczy. Cel: 70+ CS @ 10 min'
        },
        {
          title: 'Lane Control',
          desc: 'Zarządzaj falą minionów - freeze, slow push lub fast push'
        },
        {
          title: 'Trading',
          desc: 'Wymiana obrażeń gdy przeciwnik farmuje - używaj auto-ataków'
        },
        {
          title: 'Vision',
          desc: 'Postaw wardy w river, dbaj o jungle tracking'
        }
      ],
      tips: [
        'Nie goniń za killami - farm jest ważniejszy',
        'Obserwuj pozycję junglera przeciwnika',
        'Używaj recall po push-nięciu fali pod wieżę',
        'Ucz się timingów pierwszego ganku (level 3-4)'
      ]
    },
    {
      phase: 'Mid Game',
      time: '15-30 min',
      color: 'from-blue-900/30 to-gray-800',
      borderColor: 'border-blue-500/30',
      objectives: [
        {
          title: 'Groupowanie',
          desc: 'Zbieraj się z teamem do celów - Drake, Herald, wieże'
        },
        {
          title: 'Objectives',
          desc: 'Priorytet: 1st tower, Drake Soul stack, Herald na mid'
        },
        {
          title: 'Roaming',
          desc: 'Pomóż innym liniom, stwórz number advantage (3v2, 4v3)'
        },
        {
          title: 'Skirmishe',
          desc: 'Małe walki 2v2, 3v3 w jungle - walcz z przewagą'
        }
      ],
      tips: [
        'Nie farmuj sam gdy team walczy o objective',
        'Split push tylko gdy masz escape lub TP',
        'Vision wokół kolejnego Drake jest kluczowa',
        'Nie inituj 4v5 - czekaj na cały team'
      ]
    },
    {
      phase: 'Late Game',
      time: '30+ min',
      color: 'from-purple-900/30 to-gray-800',
      borderColor: 'border-purple-500/30',
      objectives: [
        {
          title: 'Baron Control',
          desc: 'Baron = win condition. Warda, pressure, setup'
        },
        {
          title: 'Team Fighting',
          desc: 'Grupuj się z teamem 24/7. Jeden błąd = koniec gry'
        },
        {
          title: 'Elder Drake',
          desc: 'Elder Dragon execute - game changer w late'
        },
        {
          title: 'Death Timers',
          desc: 'Respawn 50+ sec - jedna walka wygrywa grę'
        }
      ],
      tips: [
        'NIE UMIERAJ za darmo - death timer jest zbyt długi',
        'Nie walcz bez vision na Baron/Elder',
        'Kupuj Elixiry (czerwony, niebieski, pomarańczowy)',
        'Jeden pick-off = kończy grę, bądź ostrożny',
        'Nie forcuj plays - czekaj na błąd przeciwnika'
      ]
    }
  ];

  const microMacro = {
    micro: [
      {
        skill: 'Last Hitting',
        desc: 'Zabijanie minionów w ostatnim momencie dla maksymalnego golda',
        howTo: 'Obserwuj HP bar miniona, atakuj gdy jest na ~50 HP',
        practice: 'Practice Tool: Cel 90+ CS @ 10 min bez itemów'
      },
      {
        skill: 'Trading Stance',
        desc: 'Pozycjonowanie agresywne gdy przeciwnik farmuje',
        howTo: 'Stań blisko gdy przeciwnik idzie po CS, auto + spell combo',
        practice: 'Ucz się cooldownów przeciwnika, trade gdy ma spelle na CD'
      },
      {
        skill: 'Skill Shots',
        desc: 'Celowanie umiejętności kierunkowych (Q, E itp.)',
        howTo: 'Przewiduj ruch przeciwnika, celuj gdzie będzie, nie gdzie jest',
        practice: 'Użyj skillshotów gdy przeciwnik farmuje (mniej ruchu)'
      },
      {
        skill: 'Orb Walking / Kiting',
        desc: 'Atakowanie → ruch → atakowanie (cancel animacji)',
        howTo: 'Auto attack → natychmiast ruch → auto attack',
        practice: 'Kluczowe dla ADC i marksmana - utrzymuj dystans'
      },
      {
        skill: 'Animation Canceling',
        desc: 'Przerywanie animacji auto-attacku dla szybszych combo',
        howTo: 'Różne dla każdego champ (np. Riven Q-AA-Q-AA)',
        practice: 'YouTube guides dla twojego championa'
      },
      {
        skill: 'Flash Mechanics',
        desc: 'Używanie Flash do dodge, engage lub escape',
        howTo: 'Flash + combo (np. Flash + R na Malphite)',
        practice: 'Nie trzymaj Flash całą grę "na później"'
      }
    ],
    macro: [
      {
        skill: 'Wave Management',
        desc: 'Kontrola pozycji fali minionów na linii',
        types: [
          'Freeze - fala pod TWOJĄ wieżą (bezpieczny farm)',
          'Slow Push - budowanie dużej fali (3+ wave)',
          'Fast Push - szybkie clear (roaming, recall)'
        ],
        importance: 'Najważniejsza macro skill dla lanerów'
      },
      {
        skill: 'Map Awareness',
        desc: 'Obserwowanie mini-mapy co 3-5 sekund',
        howTo: 'Sprawdzaj pozycje przeciwników, missing pings',
        impact: 'Zapobiega gankom, umożliwia counter-plays',
        importance: 'Unikaj śmierci przez awareness'
      },
      {
        skill: 'Objective Priority',
        desc: 'Wiedza co jest ważniejsze w danym momencie',
        priority: [
          '1. Nexus/Inhibitory (gdy możliwe)',
          '2. Baron/Elder Dragon',
          '3. Wieże + Drake Soul',
          '4. Herald + standardowe Drake',
          '5. Farm gdy nic się nie dzieje'
        ],
        importance: 'Wygrywa gry przez dobre decyzje'
      },
      {
        skill: 'Vision Control',
        desc: 'Stawianie i usuwanie wardów strategicznie',
        howTo: 'Ward przed objectives (60-90 sec wcześniej), Control Ward w brushach',
        impact: 'Team z lepszą vision wygrywa 70%+ teamfightów',
        importance: 'Różnica między low i high elo'
      },
      {
        skill: 'Jungle Tracking',
        desc: 'Przewidywanie gdzie jest jungler przeciwnika',
        howTo: 'Obserwuj gdzie zaczął, timuj campy (2:00-2:30 respawn)',
        impact: 'Wiesz czy możesz grać agresywnie czy pasywnie',
        importance: 'Zapobiega gankom i umożliwia invades'
      },
      {
        skill: 'Split Push Timing',
        desc: 'Kiedy pushować linię samemu vs groupowanie',
        whenTo: 'Split gdy: (1) Masz dueling potential, (2) Masz escape/TP, (3) Team może obronić 4v5',
        whenNot: 'Nie split gdy: (1) Baron/Elder spawn, (2) Nie masz vision, (3) Za słaby do 1v1',
        importance: 'Wymaga komunikacji z teamem'
      }
    ]
  };

  const beginnerMistakes = [
    {
      mistake: 'Chasing za Killami',
      why: 'Tracisz czas na farm, ryzykujesz śmierć, zostawiasz cele',
      solution: 'Farmuj konsekwentnie, bierz tylko bezpieczne kille',
      color: 'border-red-500/30'
    },
    {
      mistake: 'Zero Wardów',
      why: 'Nie widzisz ganków, umierasz za darmo, team nie ma info',
      solution: 'Kup Control Ward KAŻDEGO backa, używaj Trinket',
      color: 'border-red-500/30'
    },
    {
      mistake: 'Złe Timigi Recall',
      why: 'Tracisz CS i gold pod wieżą, przeciwnik dostaje free push',
      solution: 'Recall po push-nięciu fali lub po zdobyciu kill',
      color: 'border-red-500/30'
    },
    {
      mistake: 'Tunnel Vision',
      why: 'Ignorujesz mapę, nie widzisz ganków ani możliwości',
      solution: 'Patrzenie na mini-mapę co 3-5 sekund (habit)',
      color: 'border-red-500/30'
    },
    {
      mistake: 'Fighting bez Powodu',
      why: 'Dajesz darmowe kille, wyrzucasz przewagę',
      solution: 'Walcz tylko o cele lub z liczebną przewagą',
      color: 'border-orange-500/30'
    },
    {
      mistake: 'Złe Pozycjonowanie',
      why: 'Szczególnie ADC - wchodzisz za daleko, umierasz pierwszy',
      solution: 'Stój ZA swoim frontem, atakuj co w range',
      color: 'border-orange-500/30'
    },
    {
      mistake: 'Nie Używanie Pingów',
      why: 'Team nie wie co robisz, brak koordynacji',
      solution: 'Ping missing, ping objectives, ping danger',
      color: 'border-orange-500/30'
    },
    {
      mistake: 'Blame Game',
      why: 'Obwinianie innych psuje mental i teamwork',
      solution: 'Skup się na SWOICH błędach, mute toxic',
      color: 'border-yellow-500/30'
    },
    {
      mistake: 'Granie za Wielu Championów',
      why: 'Nie uczysz się żadnego porządnie, inconsistent',
      solution: 'Main 2-3 championów i naucz się ich perfekcyjnie',
      color: 'border-yellow-500/30'
    },
    {
      mistake: 'Ignorowanie Itemizacji',
      why: 'Budujesz to samo co guide, ignorujesz sytuację',
      solution: 'Dostosuj build do: (1) Przeciwnika, (2) Team comp, (3) Czy wygrywasz/przegrywasz',
      color: 'border-yellow-500/30'
    },
    {
      mistake: 'Solo Push bez Vision',
      why: 'Łatwy target dla 3-4 przeciwników, długi death timer',
      solution: 'Push tylko z vision lub gdy wiesz gdzie są przeciwnicy',
      color: 'border-red-500/30'
    },
    {
      mistake: 'Nie Adaptacja do Stanu Gry',
      why: 'Grasz tak samo gdy wygrywasz 10k golda i przegrywasz',
      solution: 'Ahead = bądź ostrożny, nie daj comeback. Behind = szukaj picks, riskuj',
      color: 'border-yellow-500/30'
    }
  ];

  return (
    <div className="min-h-screen bg-lol-dark">
      <div className="container mx-auto px-6 py-8">
        {/* Nagłówek */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-lol-gold mb-4">
            Podstawy League of Legends
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Od ról i mechanik po fazy gry, mikro/makro i najczęstsze błędy początkujących
          </p>
        </div>

        {/* Zakładki */}
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          <button
            onClick={() => setActiveTab('roles')}
            className={`px-5 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'roles'
                ? 'bg-lol-blue text-white shadow-lg scale-105'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Role
          </button>
          <button
            onClick={() => setActiveTab('mechanics')}
            className={`px-5 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'mechanics'
                ? 'bg-lol-blue text-white shadow-lg scale-105'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Mechaniki
          </button>
          <button
            onClick={() => setActiveTab('objectives')}
            className={`px-5 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'objectives'
                ? 'bg-lol-blue text-white shadow-lg scale-105'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Cele
          </button>
          <button
            onClick={() => setActiveTab('phases')}
            className={`px-5 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'phases'
                ? 'bg-lol-blue text-white shadow-lg scale-105'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Fazy Gry
          </button>
          <button
            onClick={() => setActiveTab('micro-macro')}
            className={`px-5 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'micro-macro'
                ? 'bg-lol-blue text-white shadow-lg scale-105'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Mikro/Makro
          </button>
          <button
            onClick={() => setActiveTab('mistakes')}
            className={`px-5 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'mistakes'
                ? 'bg-lol-blue text-white shadow-lg scale-105'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Błędy
          </button>
          <button
            onClick={() => setActiveTab('counters')}
            className={`px-5 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'counters'
                ? 'bg-lol-blue text-white shadow-lg scale-105'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Countery
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
                  <h3 className="text-2xl font-bold text-lol-gold mb-3 text-center">
                    {role.name}
                  </h3>
                  <p className="text-gray-300 mb-4 text-center">
                    {role.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-lol-blue font-semibold mb-2">Wskazówki:</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {role.tips.map((tip, i) => (
                        <li key={i}>• {tip}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-green-400 font-semibold mb-2">
                      Łatwe postacie:
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
                      {mechanic.importance}
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
                  <h3 className="text-xl font-bold text-lol-gold mb-3">
                    {obj.name}
                  </h3>
                  <p className="text-gray-300 text-sm">{obj.info}</p>
                </div>
              ))}
            </div>
          )}

          {/* FAZY GRY */}
          {activeTab === 'phases' && (
            <div className="space-y-8">
              {gamePhases.map((phase, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${phase.color} rounded-lg p-8 border-2 ${phase.borderColor}`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div>
                      <h3 className="text-3xl font-bold text-lol-gold">{phase.phase}</h3>
                      <p className="text-gray-400 text-lg">{phase.time}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {phase.objectives.map((obj, i) => (
                      <div key={i} className="bg-gray-900/50 rounded-lg p-5 border border-gray-700">
                        <div className="flex items-start gap-3">
                          <div>
                            <h4 className="text-lg font-bold text-white mb-2">{obj.title}</h4>
                            <p className="text-gray-300 text-sm">{obj.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-900/70 rounded-lg p-5 border border-gray-700">
                    <h4 className="text-lg font-bold text-lol-gold mb-3">
                      Pro Tips:
                    </h4>
                    <ul className="text-gray-300 space-y-2">
                      {phase.tips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-lol-blue mt-1">▸</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* MIKRO/MAKRO */}
          {activeTab === 'micro-macro' && (
            <div className="space-y-8">
              {/* MICRO */}
              <div>
                <div className="text-center mb-6">
                  <h2 className="text-4xl font-bold text-lol-gold mb-2">Mechaniki Mikro</h2>
                  <p className="text-gray-300">Indywidualne umiejętności mechaniczne - wykonanie i precyzja</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {microMacro.micro.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-purple-900/20 to-gray-800 rounded-lg p-6 border-2 border-purple-500/30 hover:border-purple-500 transition-all"
                    >
                      <div className="mb-3">
                        <h3 className="text-xl font-bold text-lol-gold">{skill.skill}</h3>
                      </div>
                      <p className="text-gray-300 mb-3">{skill.desc}</p>
                      <div className="space-y-2">
                        <div className="bg-gray-900/50 rounded p-3 border-l-4 border-blue-500">
                          <p className="text-sm text-gray-300"><span className="text-blue-400 font-semibold">Jak:</span> {skill.howTo}</p>
                        </div>
                        <div className="bg-gray-900/50 rounded p-3 border-l-4 border-green-500">
                          <p className="text-sm text-gray-300"><span className="text-green-400 font-semibold">Trening:</span> {skill.practice}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* MACRO */}
              <div>
                <div className="text-center mb-6 mt-12">
                  <h2 className="text-4xl font-bold text-lol-gold mb-2">Mechaniki Makro</h2>
                  <p className="text-gray-300">Strategiczne decyzje i wiedza o grze - map awareness i cele</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {microMacro.macro.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-blue-900/20 to-gray-800 rounded-lg p-6 border-2 border-blue-500/30 hover:border-blue-500 transition-all"
                    >
                      <div className="mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-lol-gold mb-1">{skill.skill}</h3>
                          <p className="text-xs text-yellow-400 font-semibold">{skill.importance}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-3">{skill.desc}</p>
                      
                      {skill.types && (
                        <div className="bg-gray-900/50 rounded p-3 space-y-1">
                          {skill.types.map((type, i) => (
                            <p key={i} className="text-sm text-gray-300">• {type}</p>
                          ))}
                        </div>
                      )}
                      
                      {skill.priority && (
                        <div className="bg-gray-900/50 rounded p-3 space-y-1">
                          {skill.priority.map((item, i) => (
                            <p key={i} className="text-sm text-gray-300">{item}</p>
                          ))}
                        </div>
                      )}
                      
                      {skill.howTo && (
                        <div className="bg-gray-900/50 rounded p-3 border-l-4 border-blue-500 mb-2">
                          <p className="text-sm text-gray-300"><span className="text-blue-400 font-semibold">Jak:</span> {skill.howTo}</p>
                        </div>
                      )}
                      
                      {skill.impact && (
                        <div className="bg-gray-900/50 rounded p-3 border-l-4 border-green-500">
                          <p className="text-sm text-gray-300"><span className="text-green-400 font-semibold">Impact:</span> {skill.impact}</p>
                        </div>
                      )}
                      
                      {skill.whenTo && (
                        <div className="space-y-2">
                          <div className="bg-green-900/30 rounded p-3 border-l-4 border-green-500">
                            <p className="text-sm text-gray-300"><span className="text-green-400 font-semibold">✓ Kiedy:</span> {skill.whenTo}</p>
                          </div>
                          <div className="bg-red-900/30 rounded p-3 border-l-4 border-red-500">
                            <p className="text-sm text-gray-300"><span className="text-red-400 font-semibold">✗ Nie:</span> {skill.whenNot}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Porównanie */}
              <div className="bg-gradient-to-r from-lol-blue/20 to-purple-900/20 rounded-lg p-8 border-2 border-lol-gold/30 mt-8">
                <h3 className="text-2xl font-bold text-lol-gold mb-4 text-center">
                  Mikro vs Makro - Co jest ważniejsze?
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-900/50 rounded-lg p-5">
                    <h4 className="text-lg font-bold text-purple-400 mb-3">Mikro (Mechaniki)</h4>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li>• Ważne na low elo - możesz outplayować</li>
                      <li>• Wymaga praktyki i muscle memory</li>
                      <li>• Daje spektakularne momenty</li>
                      <li>• Limit zależy od talentu i czasu</li>
                    </ul>
                  </div>
                  <div className="bg-gray-900/50 rounded-lg p-5">
                    <h4 className="text-lg font-bold text-blue-400 mb-3">Makro (Strategia)</h4>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li>• Ważniejsze na high elo - decyduje o grach</li>
                      <li>• Możesz nauczyć się w każdym wieku</li>
                      <li>• Wygrywa gry konsekwentnie</li>
                      <li>• Nieograniczony potential rozwoju</li>
                    </ul>
                  </div>
                </div>
                <p className="text-center text-lol-gold mt-5 font-semibold">
                  Prawda: Potrzebujesz OBYDWU, ale makro jest łatwiejsze do nauczenia i ma większy impact!
                </p>
              </div>
            </div>
          )}

          {/* BŁĘDY POCZĄTKUJĄCYCH */}
          {activeTab === 'mistakes' && (
            <div>
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-lol-gold mb-3">Najczęstsze Błędy Początkujących</h2>
                <p className="text-gray-300 text-lg">Unikaj tych pułapek i przyspiesz swój rozwój!</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {beginnerMistakes.map((mistake, index) => (
                  <div
                    key={index}
                    className={`bg-gray-800 rounded-lg p-6 border-2 ${mistake.color} hover:scale-105 transition-all shadow-lg`}
                  >
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold text-red-400 mb-2">
                        {mistake.mistake}
                      </h3>
                    </div>

                    <div className="space-y-3">
                      <div className="bg-red-900/20 rounded-lg p-3 border-l-4 border-red-500">
                        <p className="text-sm text-gray-300">
                          <span className="text-red-400 font-semibold">❌ Problem:</span><br />
                          {mistake.why}
                        </p>
                      </div>

                      <div className="bg-green-900/20 rounded-lg p-3 border-l-4 border-green-500">
                        <p className="text-sm text-gray-300">
                          <span className="text-green-400 font-semibold">✅ Rozwiązanie:</span><br />
                          {mistake.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dodatkowe Wskazówki */}
              <div className="mt-12 bg-gradient-to-r from-lol-blue/30 to-gray-800/50 rounded-lg p-8 border-2 border-lol-blue/30">
                <h3 className="text-2xl font-bold text-lol-gold mb-4 text-center">
                  Jak Szybko Się Poprawić?
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-900/50 rounded-lg p-5 text-center">
                    <h4 className="text-lg font-bold text-lol-gold mb-2">Skup się na 1-2 rzeczach</h4>
                    <p className="text-gray-300 text-sm">Nie próbuj poprawiać wszystkiego naraz. Jeden tydzień = jedna skill (np. CS, warding)</p>
                  </div>
                  <div className="bg-gray-900/50 rounded-lg p-5 text-center">
                    <h4 className="text-lg font-bold text-lol-gold mb-2">Oglądaj swoje Replaye</h4>
                    <p className="text-gray-300 text-sm">Po każdej śmierci zadaj pytanie: "Co mogłem zrobić inaczej?"</p>
                  </div>
                  <div className="bg-gray-900/50 rounded-lg p-5 text-center">
                    <h4 className="text-lg font-bold text-lol-gold mb-2">Mental &gt; Wszystko</h4>
                    <p className="text-gray-300 text-sm">Dobry mental = lepsze decyzje. Zła gra? Bierz break. Toxic? /mute all</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* COUNTER SEARCH */}
          {activeTab === 'counters' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-800 rounded-lg p-8 border border-lol-gold/30 mb-8">
                <h3 className="text-2xl font-bold text-lol-gold mb-4 text-center">
                  Znajdź Countery dla Championa
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
                      <div>
                        <h4 className="text-2xl font-bold text-lol-gold">{searchChampion}</h4>
                        <p className="text-gray-400">{counterResults.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* Counters */}
                  <div className="bg-gradient-to-br from-red-900/20 to-gray-800 rounded-lg p-6 border-2 border-red-500/30">
                    <h4 className="text-xl font-bold text-red-400 mb-4">
                      Słaby przeciwko:
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
                    <h4 className="text-xl font-bold text-green-400 mb-4">
                      Dobry przeciwko:
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
                    <h4 className="text-lg font-bold text-lol-blue mb-3">Wskazówki:</h4>
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
                  <p className="text-red-400 text-lg font-bold mb-2">Champion nie znaleziony</p>
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
              Gotowy na więcej?
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