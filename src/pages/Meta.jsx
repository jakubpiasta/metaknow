import { useState } from 'react';
import { metaChampions, currentPatch, tierDescriptions } from '../data/metaChampions';

export default function Meta() {
  const [selectedRole, setSelectedRole] = useState('All');
  const [selectedTier, setSelectedTier] = useState('All');
  const [sortBy, setSortBy] = useState('tier');
  const [selectedChampion, setSelectedChampion] = useState(null);

  const roles = ['All', 'Top', 'Jungle', 'Mid', 'ADC', 'Support'];
  const tiers = ['All', 'S', 'A', 'B', 'C'];

  // Filtrowanie
  const filteredChampions = metaChampions.filter(champ => {
    const matchesRole = selectedRole === 'All' || champ.role === selectedRole;
    const matchesTier = selectedTier === 'All' || champ.tier === selectedTier;
    return matchesRole && matchesTier;
  });

  // Sortowanie
  const sortedChampions = [...filteredChampions].sort((a, b) => {
    if (sortBy === 'tier') {
      const tierOrder = { S: 0, A: 1, B: 2, C: 3, D: 4 };
      return tierOrder[a.tier] - tierOrder[b.tier];
    }
    if (sortBy === 'winRate') return b.winRate - a.winRate;
    if (sortBy === 'pickRate') return b.pickRate - a.pickRate;
    if (sortBy === 'banRate') return b.banRate - a.banRate;
    return 0;
  });

  // Funkcja do generowania URL obrazka
  const getChampionImage = (imageName) => {
    return `https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/${imageName}.png`;
  };

  // Kolor tier badge
  const getTierColor = (tier) => {
    const colors = {
      S: 'bg-red-500',
      A: 'bg-orange-500',
      B: 'bg-yellow-500',
      C: 'bg-green-500',
      D: 'bg-gray-500'
    };
    return colors[tier] || 'bg-gray-500';
  };

  // Kolor trendu
  const getTrendIcon = (trend) => {
    if (trend === 'up') return <span className="text-green-400">▲</span>;
    if (trend === 'down') return <span className="text-red-400">▼</span>;
    return <span className="text-gray-400">●</span>;
  };

  return (
    <div className="min-h-screen bg-lol-dark">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-5xl font-bold text-lol-gold mb-2">
                📊 LoL Tier List
              </h1>
              <p className="text-gray-400">
                Patch {currentPatch.version} • Zaktualizowano: {currentPatch.lastUpdate}
              </p>
            </div>
            <div className="text-right">
              <p className="text-lol-blue text-sm">Analizowano</p>
              <p className="text-3xl font-bold text-lol-gold">1.6M+</p>
              <p className="text-gray-400 text-sm">gier</p>
            </div>
          </div>

          {/* Info box */}
          <div className="bg-lol-blue/20 border border-lol-blue/50 rounded-lg p-4">
            <p className="text-gray-300 text-sm">
              💡 <span className="text-lol-gold font-semibold">Wskazówka:</span> Tier lista pokazuje najpotężniejszych championów w aktualnej mecie na podstawie win rate, pick rate i ban rate w rankingowych grach Emerald+
            </p>
          </div>
        </div>

        {/* Filtry - Role */}
        <div className="mb-6">
          <h3 className="text-gray-400 text-sm font-semibold mb-3 uppercase">Filtruj po roli:</h3>
          <div className="flex flex-wrap gap-3">
            {roles.map(role => (
              <button
                key={role}
                onClick={() => setSelectedRole(role)}
                className={`px-5 py-2 rounded-lg font-semibold transition-all ${
                  selectedRole === role
                    ? 'bg-lol-blue text-white shadow-lg scale-105'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {role === 'All' ? '🌐 Wszystkie' :
                 role === 'Top' ? '⚔️ Top' :
                 role === 'Jungle' ? '🌲 Jungle' :
                 role === 'Mid' ? '✨ Mid' :
                 role === 'ADC' ? '🏹 ADC' :
                 '💚 Support'}
              </button>
            ))}
          </div>
        </div>

        {/* Filtry - Tier */}
        <div className="mb-6">
          <h3 className="text-gray-400 text-sm font-semibold mb-3 uppercase">Filtruj po tierze:</h3>
          <div className="flex flex-wrap gap-3">
            {tiers.map(tier => (
              <button
                key={tier}
                onClick={() => setSelectedTier(tier)}
                className={`px-5 py-2 rounded-lg font-semibold transition-all ${
                  selectedTier === tier
                    ? 'bg-lol-gold text-lol-dark shadow-lg scale-105'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {tier === 'All' ? 'Wszystkie tiery' : `Tier ${tier}`}
              </button>
            ))}
          </div>
        </div>

        {/* Sortowanie */}
        <div className="mb-6">
          <h3 className="text-gray-400 text-sm font-semibold mb-3 uppercase">Sortuj według:</h3>
          <div className="flex gap-3">
            <button
              onClick={() => setSortBy('tier')}
              className={`px-4 py-2 rounded text-sm ${sortBy === 'tier' ? 'bg-lol-blue text-white' : 'bg-gray-700 text-gray-300'}`}
            >
              Tier
            </button>
            <button
              onClick={() => setSortBy('winRate')}
              className={`px-4 py-2 rounded text-sm ${sortBy === 'winRate' ? 'bg-lol-blue text-white' : 'bg-gray-700 text-gray-300'}`}
            >
              Win Rate
            </button>
            <button
              onClick={() => setSortBy('pickRate')}
              className={`px-4 py-2 rounded text-sm ${sortBy === 'pickRate' ? 'bg-lol-blue text-white' : 'bg-gray-700 text-gray-300'}`}
            >
              Pick Rate
            </button>
            <button
              onClick={() => setSortBy('banRate')}
              className={`px-4 py-2 rounded text-sm ${sortBy === 'banRate' ? 'bg-lol-blue text-white' : 'bg-gray-700 text-gray-300'}`}
            >
              Ban Rate
            </button>
          </div>
        </div>

        {/* Wyniki - licznik */}
        <div className="mb-4 text-gray-400">
          Pokazano: <span className="text-lol-gold font-bold">{sortedChampions.length}</span> championów
        </div>

        {/* Tabela championów */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl">
          {/* Nagłówek tabeli */}
          <div className="grid grid-cols-12 gap-4 bg-gray-900 p-4 text-gray-400 text-sm font-semibold">
            <div className="col-span-1">Tier</div>
            <div className="col-span-3">Champion</div>
            <div className="col-span-1">Rola</div>
            <div className="col-span-2 text-center">Win Rate</div>
            <div className="col-span-2 text-center">Pick Rate</div>
            <div className="col-span-2 text-center">Ban Rate</div>
            <div className="col-span-1 text-center">Trend</div>
          </div>

          {/* Wiersze championów */}
          {sortedChampions.map((champ) => (
            <div
              key={champ.id}
              onClick={() => setSelectedChampion(champ)}
              className="grid grid-cols-12 gap-4 p-4 border-b border-gray-700 hover:bg-gray-700 transition-all cursor-pointer items-center"
            >
              {/* Tier Badge */}
              <div className="col-span-1">
                <span className={`${getTierColor(champ.tier)} text-white font-bold px-3 py-1 rounded text-sm`}>
                  {champ.tier}
                </span>
              </div>

              {/* Champion */}
              <div className="col-span-3 flex items-center gap-3">
                <img
                  src={getChampionImage(champ.image)}
                  alt={champ.name}
                  className="w-12 h-12 rounded border-2 border-lol-gold/50"
                />
                <div>
                  <p className="text-white font-bold">{champ.name}</p>
                  <p className="text-gray-400 text-xs">{champ.difficulty}</p>
                </div>
              </div>

              {/* Rola */}
              <div className="col-span-1">
                <span className="text-gray-300 text-sm">{champ.role}</span>
              </div>

              {/* Win Rate */}
              <div className="col-span-2 text-center">
                <span className={`font-bold ${champ.winRate >= 52 ? 'text-green-400' : champ.winRate >= 50 ? 'text-yellow-400' : 'text-red-400'}`}>
                  {champ.winRate.toFixed(1)}%
                </span>
              </div>

              {/* Pick Rate */}
              <div className="col-span-2 text-center">
                <span className="text-gray-300">{champ.pickRate.toFixed(1)}%</span>
              </div>

              {/* Ban Rate */}
              <div className="col-span-2 text-center">
                <span className="text-gray-300">{champ.banRate.toFixed(1)}%</span>
              </div>

              {/* Trend */}
              <div className="col-span-1 text-center text-lg">
                {getTrendIcon(champ.trend)}
              </div>
            </div>
          ))}
        </div>

        {/* Brak wyników */}
        {sortedChampions.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">😕 Brak championów w wybranej kategorii</p>
          </div>
        )}

        {/* Tier descriptions */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-lol-gold mb-6">📖 Wyjaśnienie Tierów</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(tierDescriptions).map(([tier, desc]) => (
              <div key={tier} className="bg-gray-800 rounded-lg p-4 border-l-4" style={{ borderColor: getTierColor(tier).replace('bg-', '') }}>
                <h3 className="text-xl font-bold text-lol-gold mb-2">Tier {tier}</h3>
                <p className="text-gray-300 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal ze szczegółami championa */}
      {selectedChampion && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50 overflow-y-auto"
          onClick={() => setSelectedChampion(null)}
        >
          <div
            className="bg-gray-900 rounded-lg p-8 max-w-2xl w-full border-2 border-lol-gold my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <img
                src={getChampionImage(selectedChampion.image)}
                alt={selectedChampion.name}
                className="w-24 h-24 rounded border-2 border-lol-gold"
              />
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-3xl font-bold text-lol-gold">{selectedChampion.name}</h2>
                  <span className={`${getTierColor(selectedChampion.tier)} text-white font-bold px-3 py-1 rounded`}>
                    Tier {selectedChampion.tier}
                  </span>
                </div>
                <p className="text-gray-400">{selectedChampion.role} • {selectedChampion.difficulty}</p>
                <div className="flex gap-2 mt-2">
                  {selectedChampion.tags.map(tag => (
                    <span key={tag} className="bg-lol-blue/30 text-lol-blue px-2 py-1 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Statystyki */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-800 p-4 rounded text-center">
                <p className="text-gray-400 text-sm mb-1">Win Rate</p>
                <p className={`text-2xl font-bold ${selectedChampion.winRate >= 52 ? 'text-green-400' : 'text-yellow-400'}`}>
                  {selectedChampion.winRate.toFixed(1)}%
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded text-center">
                <p className="text-gray-400 text-sm mb-1">Pick Rate</p>
                <p className="text-2xl font-bold text-lol-blue">{selectedChampion.pickRate.toFixed(1)}%</p>
              </div>
              <div className="bg-gray-800 p-4 rounded text-center">
                <p className="text-gray-400 text-sm mb-1">Ban Rate</p>
                <p className="text-2xl font-bold text-red-400">{selectedChampion.banRate.toFixed(1)}%</p>
              </div>
            </div>

            {/* Matchupy */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-green-400 font-bold mb-3 flex items-center gap-2">
                  ✓ Dobry przeciwko:
                </h3>
                <div className="space-y-2">
                  {selectedChampion.goodAgainst.map(champ => (
                    <div key={champ} className="bg-green-900/20 border border-green-500/30 rounded p-2 text-sm text-gray-300">
                      {champ}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-red-400 font-bold mb-3 flex items-center gap-2">
                  ✗ Słaby przeciwko:
                </h3>
                <div className="space-y-2">
                  {selectedChampion.counters.map(champ => (
                    <div key={champ} className="bg-red-900/20 border border-red-500/30 rounded p-2 text-sm text-gray-300">
                      {champ}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => setSelectedChampion(null)}
              className="w-full bg-lol-blue hover:bg-lol-gold hover:text-lol-dark text-white font-bold py-3 rounded-lg transition-all"
            >
              Zamknij
            </button>
          </div>
        </div>
      )}
    </div>
  );
}