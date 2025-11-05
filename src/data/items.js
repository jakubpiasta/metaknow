export const items = [
  // STARTER ITEMS
  {
    id: 1,
    name: "Doran's Blade",
    category: "Starter",
    price: 450,
    stats: "+8 AD, +80 HP",
    passive: "+2.5% Omnivamp",
    description: "Starter item dla ADC i niektórych Top lanerów",
    whenToBuy: "Kupuj jako pierwszy item jeśli grasz agresywnie na linii i chcesz tradować",
    goodFor: ["ADC", "Top"],
    image: "1055" // ID z Data Dragon
  },
  {
    id: 2,
    name: "Doran's Ring",
    category: "Starter",
    price: 400,
    stats: "+15 AP, +70 HP",
    passive: "+5 Mana za zabicie miniona",
    description: "Podstawowy item dla magów",
    whenToBuy: "Standardowy start dla wszystkich AP midów",
    goodFor: ["Mid AP", "Support AP"],
    image: "1056"
  },
  {
    id: 3,
    name: "Doran's Shield",
    category: "Starter",
    price: 450,
    stats: "+80 HP",
    passive: "Regeneracja HP, blokuje damage z poke",
    description: "Defensywny starter",
    whenToBuy: "Gdy grasz przeciwko heavy poke (np. Teemo, Quinn)",
    goodFor: ["Top", "Support"],
    image: "1054"
  },

  // AD ITEMS
  {
    id: 4,
    name: "Infinity Edge",
    category: "AD",
    price: 3400,
    stats: "+70 AD, +20% Crit",
    passive: "Zwiększa critical strike damage o 35%",
    description: "Must-have dla każdego ADC w late game",
    whenToBuy: "Jako 3-4 item, gdy masz już 60%+ crit chance",
    goodFor: ["ADC"],
    image: "3031"
  },
  {
    id: 5,
    name: "Kraken Slayer",
    category: "AD",
    price: 3400,
    stats: "+65 AD, +25% AS, +20% Crit",
    passive: "Co trzeci atak zadaje dodatkowe true damage",
    description: "Mythic item - świetny przeciwko tankom",
    whenToBuy: "Pierwszy item dla ADC gdy przeciwnik ma dużo HP/tanków",
    goodFor: ["ADC"],
    image: "6672"
  },
  {
    id: 6,
    name: "The Collector",
    category: "AD",
    price: 3000,
    stats: "+55 AD, +20% Crit, +12 Lethality",
    passive: "Egzekucja przy <5% HP + bonus gold",
    description: "Snowballowy item, świetny gdy prowadzisz",
    whenToBuy: "Drugi item gdy masz przewagę i chcesz ją zwiększyć",
    goodFor: ["ADC", "Assassin"],
    image: "6676"
  },

  // AP ITEMS
  {
    id: 7,
    name: "Luden's Tempest",
    category: "AP",
    price: 3200,
    stats: "+90 AP, +600 Mana, +20 AH",
    passive: "AoE burst damage po użyciu ability",
    description: "Mythic item - burst damage dla magów",
    whenToBuy: "Pierwszy item dla burst magów (Lux, Syndra, Ahri)",
    goodFor: ["Mid AP"],
    image: "6655"
  },
  {
    id: 8,
    name: "Zhonya's Hourglass",
    category: "AP",
    price: 3250,
    stats: "+80 AP, +45 Armor, +15 AH",
    passive: "Aktywna: 2.5s niezniszczalności",
    description: "Defensywny item z potężną aktywną",
    whenToBuy: "Przeciwko assassynom lub gdy potrzebujesz survivability",
    goodFor: ["Mid AP", "Support AP"],
    image: "3157"
  },
  {
    id: 9,
    name: "Rabadon's Deathcap",
    category: "AP",
    price: 3600,
    stats: "+120 AP",
    passive: "Zwiększa całkowite AP o 35%",
    description: "Najdroższy, ale najbardziej opłacalny AP item",
    whenToBuy: "Jako 3-4 item gdy już masz trochę AP",
    goodFor: ["Mid AP", "Support AP"],
    image: "3089"
  },

  // TANK ITEMS
  {
    id: 10,
    name: "Sunfire Aegis",
    category: "Tank",
    price: 3200,
    stats: "+450 HP, +30 Armor, +30 MR, +15 AH",
    passive: "Zadaje AoE magic damage wokół ciebie",
    description: "Mythic tank item - damage + tankiness",
    whenToBuy: "Pierwszy item dla tanków którzy chcą clearować fale",
    goodFor: ["Top Tank", "Jungle Tank"],
    image: "3068"
  },
  {
    id: 11,
    name: "Thornmail",
    category: "Tank",
    price: 2700,
    stats: "+60 Armor, +350 HP",
    passive: "Odbija damage + grievous wounds",
    description: "Anty-healing tank item",
    whenToBuy: "Przeciwko team z dużym healingiem (Soraka, Vladimir)",
    goodFor: ["Top Tank", "Jungle Tank", "Support Tank"],
    image: "3075"
  },
  {
    id: 12,
    name: "Spirit Visage",
    category: "Tank",
    price: 2900,
    stats: "+450 HP, +60 MR, +15 AH",
    passive: "Zwiększa healing o 25%",
    description: "MR item ze zwiększonym healingiem",
    whenToBuy: "Przeciwko AP team gdy masz healing w kicie",
    goodFor: ["Top Tank", "Jungle"],
    image: "3065"
  },

  // SUPPORT ITEMS
  {
    id: 13,
    name: "Imperial Mandate",
    category: "Support",
    price: 2300,
    stats: "+55 AP, +200 HP, +100% Mana Regen, +25 AH",
    passive: "Oznaczasz wrogów, sojusznicy zadają bonus damage",
    description: "Mythic support item dla enchanterów",
    whenToBuy: "Pierwszy item dla enchanterów (Janna, Nami, Lulu)",
    goodFor: ["Support"],
    image: "4005"
  },
  {
    id: 14,
    name: "Redemption",
    category: "Support",
    price: 2300,
    stats: "+200 HP, +150% Mana Regen, +20 AH",
    passive: "Aktywna: AoE heal + damage dla wrogów",
    description: "Team utility item",
    whenToBuy: "Drugi item dla enchanterów w teamfightach",
    goodFor: ["Support"],
    image: "3107"
  },
  {
    id: 15,
    name: "Mikael's Blessing",
    category: "Support",
    price: 2300,
    stats: "+20 AP, +200 HP, +100% Mana Regen, +20 AH",
    passive: "Aktywna: Cleanse CC ze sojusznika + heal",
    description: "Anty-CC support item",
    whenToBuy: "Gdy przeciwnik ma dużo crowd control",
    goodFor: ["Support"],
    image: "3222"
  },

  // BOOTS
  {
    id: 16,
    name: "Berserker's Greaves",
    category: "Boots",
    price: 1100,
    stats: "+35% Attack Speed",
    description: "Podstawowe buty dla ADC",
    whenToBuy: "Standardowy wybór dla marksmańów",
    goodFor: ["ADC"],
    image: "3006"
  },
  {
    id: 17,
    name: "Sorcerer's Shoes",
    category: "Boots",
    price: 1100,
    stats: "+18 Magic Penetration",
    description: "Boots dla magów",
    whenToBuy: "Standardowy wybór dla AP",
    goodFor: ["Mid AP", "Support AP"],
    image: "3020"
  },
  {
    id: 18,
    name: "Plated Steelcaps",
    category: "Boots",
    price: 1100,
    stats: "+20 Armor",
    passive: "Blokuje 12% damage z basic attacks",
    description: "Defensywne buty przeciwko AD",
    whenToBuy: "Przeciwko heavy AD teamom lub fed ADC",
    goodFor: ["Top", "Jungle", "Support"],
    image: "3047"
  }
];

// Przykładowe buildy dla każdej roli
export const sampleBuilds = [
  {
    role: "ADC",
    champion: "Ashe",
    items: ["Kraken Slayer", "Berserker's Greaves", "The Collector", "Infinity Edge", "Lord Dominik's Regards", "Guardian Angel"],
    description: "Standard ADC build - crit focus"
  },
  {
    role: "Mid AP",
    champion: "Lux",
    items: ["Luden's Tempest", "Sorcerer's Shoes", "Zhonya's Hourglass", "Rabadon's Deathcap", "Void Staff", "Morellonomicon"],
    description: "Burst mage build z survivability"
  },
  {
    role: "Top Tank",
    champion: "Malphite",
    items: ["Sunfire Aegis", "Plated Steelcaps", "Thornmail", "Spirit Visage", "Randuin's Omen", "Warmog's Armor"],
    description: "Full tank build przeciwko AD"
  },
  {
    role: "Support",
    champion: "Soraka",
    items: ["Imperial Mandate", "Sorcerer's Shoes", "Redemption", "Mikael's Blessing", "Staff of Flowing Water", "Ardent Censer"],
    description: "Enchanter support build - max healing"
  }
];