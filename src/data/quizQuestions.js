// BAZA PYTAŃ DO QUIZU - 30 pytań w 4 kategoriach

export const quizQuestions = [
  // ==================== KATEGORIA: PODSTAWY ====================
  {
    id: 1,
    category: "Podstawy",
    question: "Co oznacza skrót 'CS'?",
    options: [
      "Counter Strike",
      "Creep Score (liczba zabitych minionów)",
      "Champion Skill",
      "Critical Strike"
    ],
    correctAnswer: 1,
    explanation: "CS to Creep Score - liczba zabitych minionów. To główne źródło golda w grze. ~10 CS = wartość 1 killa!"
  },
  {
    id: 2,
    category: "Podstawy",
    question: "Ile ról jest w League of Legends?",
    options: ["4", "5", "6", "7"],
    correctAnswer: 1,
    explanation: "Jest 5 głównych ról: Top, Jungle, Mid, ADC i Support."
  },
  {
    id: 3,
    category: "Podstawy",
    question: "Która rola NIE idzie na bot lane?",
    options: ["ADC", "Support", "Jungle", "Wszystkie idą na bot"],
    correctAnswer: 2,
    explanation: "Jungle porusza się po dżungli między liniami. Na bot lane idą ADC i Support."
  },
  {
    id: 4,
    category: "Podstawy",
    question: "Co to jest 'gank'?",
    options: [
      "Zabicie miniona",
      "Niespodziewany atak na przeciwnika (często z pomocą junglera)",
      "Zniszczenie wieży",
      "Ucieczka z walki"
    ],
    correctAnswer: 1,
    explanation: "Gank to niespodziewany atak na przeciwnika, zazwyczaj z pomocą junglera. Kluczowy do zdobywania przewagi!"
  },
  {
    id: 5,
    category: "Podstawy",
    question: "Ile draków trzeba zabić, aby zdobyć Dragon Soul?",
    options: ["3", "4", "5", "6"],
    correctAnswer: 1,
    explanation: "4 draki tego samego typu dają potężny buff Dragon Soul całej drużynie!"
  },
  {
    id: 6,
    category: "Podstawy",
    question: "Po ilu minutach pojawia się Baron Nashor?",
    options: ["15 min", "20 min", "25 min", "30 min"],
    correctAnswer: 1,
    explanation: "Baron Nashor pojawia się po 20 minutach i daje ogromny buff do push-owania linii."
  },
  {
    id: 7,
    category: "Podstawy",
    question: "Co to jest 'wave management'?",
    options: [
      "Kontrolowanie pozycji fali minionów",
      "Czyszczenie jungle camps",
      "Stawianie wardów",
      "Budowanie itemów"
    ],
    correctAnswer: 0,
    explanation: "Wave management to kontrolowanie gdzie znajduje się fala minionów - umożliwia bezpieczny farm lub agresywną grę."
  },
  {
    id: 8,
    category: "Podstawy",
    question: "Która z tych umiejętności NIE jest Summoner Spell?",
    options: ["Flash", "Ignite", "Teleport", "Dash"],
    correctAnswer: 3,
    explanation: "Dash nie jest Summoner Spell - to mechanika niektórych championów. Flash, Ignite i Teleport to prawdziwe Summoner Spells."
  },

  // ==================== KATEGORIA: PRZEDMIOTY ====================
  {
    id: 9,
    category: "Przedmioty",
    question: "Który item daje 'revive' po śmierci?",
    options: ["Zhonya's Hourglass", "Guardian Angel", "Stopwatch", "Sterak's Gage"],
    correctAnswer: 1,
    explanation: "Guardian Angel wskrzesza Cię po śmierci z częścią HP. Świetny defensywny item dla carry!"
  },
  {
    id: 10,
    category: "Przedmioty",
    question: "Który starter item kupuje ADC na początku gry?",
    options: ["Doran's Shield", "Doran's Blade", "Doran's Ring", "Long Sword"],
    correctAnswer: 1,
    explanation: "Doran's Blade (+8 AD, +80 HP, lifesteal) to standardowy starter dla ADC!"
  },
  {
    id: 11,
    category: "Przedmioty",
    question: "Który item daje najwięcej AP w grze?",
    options: ["Luden's Tempest", "Rabadon's Deathcap", "Zhonya's Hourglass", "Void Staff"],
    correctAnswer: 1,
    explanation: "Rabadon's Deathcap daje 120 AP + zwiększa całkowite AP o 35%! Najdroższy, ale najbardziej opłacalny AP item."
  },
  {
    id: 12,
    category: "Przedmioty",
    question: "Co robi Zhonya's Hourglass?",
    options: [
      "Daje shield",
      "2.5s niezniszczalności (nie możesz atakować ani się ruszać)",
      "Heal",
      "Zwiększa movement speed"
    ],
    correctAnswer: 1,
    explanation: "Zhonya's aktywna daje 2.5s NIEZNISZCZALNOŚCI - nie możesz być zaatakowany, ale też sam nie możesz atakować!"
  },
  {
    id: 13,
    category: "Przedmioty",
    question: "Który item kupujesz przeciwko healing/lifesteal?",
    options: ["Thornmail", "Guardian Angel", "Warmog's Armor", "Spirit Visage"],
    correctAnswer: 0,
    explanation: "Thornmail nakłada Grievous Wounds (zmniejsza healing o 40%). Kupuj przeciwko Soraka, Vladimir, etc.!"
  },
  {
    id: 14,
    category: "Przedmioty",
    question: "Ile kosztuje Control Ward?",
    options: ["50g", "75g", "100g", "125g"],
    correctAnswer: 1,
    explanation: "Control Ward kosztuje 75g i jest ESSENTIAL dla vision control! Zawsze noś 1-2 w inventory."
  },
  {
    id: 15,
    category: "Przedmioty",
    question: "Co to jest Mythic item?",
    options: [
      "Pierwszy duży item (możesz mieć tylko 1)",
      "Najdroższy item",
      "Item tylko dla junglera",
      "Legendary item"
    ],
    correctAnswer: 0,
    explanation: "Mythic item to potężny pierwszy duży przedmiot. Możesz mieć tylko JEDEN mythic item w buildzie!"
  },
  {
    id: 16,
    category: "Przedmioty",
    question: "Który boots kupujesz przeciwko heavy CC?",
    options: ["Berserker's Greaves", "Sorcerer's Shoes", "Mercury's Treads", "Plated Steelcaps"],
    correctAnswer: 2,
    explanation: "Mercury's Treads dają +30% Tenacity (zmniejsza czas CC) i +25 MR. Świetne przeciwko CC teamom!"
  },

  // ==================== KATEGORIA: META & CHAMPIONI ====================
  {
    id: 17,
    category: "Meta",
    question: "Który champion jest znany z 'windwall' (ściana blokująca pociski)?",
    options: ["Yasuo", "Zed", "Fizz", "Katarina"],
    correctAnswer: 0,
    explanation: "Yasuo ma W - Wind Wall, która blokuje wszystkie pociski przez 4 sekundy!"
  },
  {
    id: 18,
    category: "Meta",
    question: "Która rola jest odpowiedzialna za stawianie większości wardów?",
    options: ["Top", "Jungle", "Mid", "Support"],
    correctAnswer: 3,
    explanation: "Support jest głównie odpowiedzialny za vision control i stawianie wardów dla całego teamu!"
  },
  {
    id: 19,
    category: "Meta",
    question: "Co counteruje Yasuo?",
    options: ["Lux", "Annie", "Xerath", "Ziggs"],
    correctAnswer: 1,
    explanation: "Annie świetnie counteruje Yasuo - ma point-and-click stun i burst damage, które Yasuo nie może zablokować windwallem!"
  },
  {
    id: 20,
    category: "Meta",
    question: "Który champion jest znany jako 'Master of Shadows'?",
    options: ["Zed", "Talon", "Nocturne", "Kayn"],
    correctAnswer: 0,
    explanation: "Zed - Master of Shadows! Assassin z shadow clones i burst damage."
  },
  {
    id: 21,
    category: "Meta",
    question: "Który jungle champion jest najlepszy dla beginnerów?",
    options: ["Lee Sin", "Nidalee", "Warwick", "Elise"],
    correctAnswer: 2,
    explanation: "Warwick jest NAJŁATWIEJSZY dla beginnerów - zdrowy clear, łatwe ganki (W pokazuje low HP wrogów), prosty kit!"
  },
  {
    id: 22,
    category: "Meta",
    question: "Co oznacza 'S tier' w tier liście?",
    options: [
      "Super słaby",
      "Najlepsi championi w aktualnej mecie",
      "Średni poziom",
      "Starter champions"
    ],
    correctAnswer: 1,
    explanation: "S tier = najlepsi, najbardziej OP championi w aktualnym patchu. Wysoki win rate i dominująca pozycja!"
  },
  {
    id: 23,
    category: "Meta",
    question: "Jak często Riot Games wypuszcza nowe patche?",
    options: ["Co tydzień", "Co 2 tygodnie", "Co miesiąc", "Co 3 miesiące"],
    correctAnswer: 1,
    explanation: "Nowe patche wychodzą co ~2 tygodnie. Zmienia się meta, balans championów i itemów!"
  },

  // ==================== KATEGORIA: ZAAWANSOWANE ====================
  {
    id: 24,
    category: "Zaawansowane",
    question: "Co to jest 'kiting'?",
    options: [
      "Uciekanie z walki",
      "Atakowanie podczas poruszania się (utrzymywanie dystansu)",
      "Stawianie wardów",
      "Farmienie jungle"
    ],
    correctAnswer: 1,
    explanation: "Kiting to atakowanie wroga podczas poruszania się - utrzymujesz dystans, zadajesz damage i jesteś trudny do złapania!"
  },
  {
    id: 25,
    category: "Zaawansowane",
    question: "Co to jest 'roaming'?",
    options: [
      "Farmienie na linii",
      "Opuszczanie swojej linii żeby pomóc innym",
      "Wracanie do bazy",
      "Zabijanie jungle monsters"
    ],
    correctAnswer: 1,
    explanation: "Roaming to opuszczanie swojej linii (zazwyczaj mid) żeby gankować inne linie i pomagać teamowi!"
  },
  {
    id: 26,
    category: "Zaawansowane",
    question: "Co to jest 'split pushing'?",
    options: [
      "Dzielenie golda z supportem",
      "Push-owanie linii sam, podczas gdy team jest gdzie indziej",
      "Zabijanie draka",
      "Groupowanie na mid"
    ],
    correctAnswer: 1,
    explanation: "Split push to push-owanie linii samemu (często top), zmuszając przeciwników do reagowania i dzieląc ich team!"
  },
  {
    id: 27,
    category: "Zaawansowane",
    question: "Co oznacza 'peel' w kontekście supporta/tanka?",
    options: [
      "Inicjowanie walki",
      "Ochrona carry przed wrogami (CC, knockback)",
      "Healing",
      "Damage dealing"
    ],
    correctAnswer: 1,
    explanation: "Peel to ochrona swojego carry - używasz CC, knockback, slow żeby odciągnąć wrogów od Twojego ADC/carry!"
  },
  {
    id: 28,
    category: "Zaawansowane",
    question: "Ile maximum stacków ma Rabadon's Deathcap?",
    options: ["0 - nie stackuje się", "10", "25", "Infinite"],
    correctAnswer: 0,
    explanation: "Rabadon's nie stackuje się! Po prostu daje +35% do CAŁEGO Twojego AP. Nie trzeba nic stackować."
  },
  {
    id: 29,
    category: "Zaawansowane",
    question: "Co to jest 'freezing lane'?",
    options: [
      "Zamrażanie wroga",
      "Utrzymywanie fali minionów w bezpiecznym miejscu (blisko swojej wieży)",
      "Kupowanie Frozen Heart",
      "Slowowanie przeciwnika"
    ],
    correctAnswer: 1,
    explanation: "Freezing to utrzymywanie fali blisko swojej wieży - bezpieczny farm dla Ciebie, niebezpieczny dla wroga!"
  },
  {
    id: 30,
    category: "Zaawansowane",
    question: "Ile czasu trwa respawn Barona Nashora po zabiciu?",
    options: ["5 minut", "6 minut", "7 minut", "10 minut"],
    correctAnswer: 1,
    explanation: "Baron respawnuje się po 6 minutach od zabicia. Zapamiętaj timer żeby kontrolować następnego!"
  }
];

// Rankingi na podstawie wyniku
export const rankings = [
  { min: 0, max: 9, rank: "Iron", color: "#4A4A4A", message: "Początek przygody! Czas na naukę podstaw." },
  { min: 10, max: 14, rank: "Bronze", color: "#CD7F32", message: "Nieźle! Znasz podstawy, ale jest jeszcze dużo do nauki." },
  { min: 15, max: 19, rank: "Silver", color: "#C0C0C0", message: "Dobra robota! Masz solidne podstawy LoL." },
  { min: 20, max: 24, rank: "Gold", color: "#FFD700", message: "Świetnie! Znasz większość mechanik i strategii." },
  { min: 25, max: 27, rank: "Platinum", color: "#00CED1", message: "Imponujące! Jesteś powyżej średniej." },
  { min: 28, max: 29, rank: "Diamond", color: "#B9F2FF", message: "Znakomicie! Prawie perfekcyjny wynik!" },
  { min: 30, max: 30, rank: "Challenger", color: "#F4C430", message: "🏆 PERFEKCYJNIE! Jesteś ekspertem LoL!" }
];

// Statystyki kategorii
export const getCategoryStats = (answers) => {
  const categories = ["Podstawy", "Przedmioty", "Meta", "Zaawansowane"];
  const stats = {};

  categories.forEach(cat => {
    const categoryQuestions = quizQuestions.filter(q => q.category === cat);
    const correctAnswers = categoryQuestions.filter(q => 
      answers[q.id] === q.correctAnswer
    ).length;
    
    stats[cat] = {
      correct: correctAnswers,
      total: categoryQuestions.length,
      percentage: Math.round((correctAnswers / categoryQuestions.length) * 100)
    };
  });

  return stats;
};