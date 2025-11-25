import { useState, useMemo } from 'react';
import { glossaryTerms, categories } from '../data/glossaryTerms';

export default function Glossary() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Wszystkie');
  const [selectedLetter, setSelectedLetter] = useState('Wszystkie');

  const alphabet = ['Wszystkie', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  // Filtrowanie terminów
  const filteredTerms = useMemo(() => {
    return glossaryTerms.filter(term => {
      const matchesSearch = term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           term.fullName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           term.definition.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'Wszystkie' || term.category === selectedCategory;
      
      const matchesLetter = selectedLetter === 'Wszystkie' || term.term.charAt(0).toUpperCase() === selectedLetter;
      
      return matchesSearch && matchesCategory && matchesLetter;
    });
  }, [searchQuery, selectedCategory, selectedLetter]);

  // Grupowanie po literach
  const termsByLetter = useMemo(() => {
    const grouped = {};
    filteredTerms.forEach(term => {
      const firstLetter = term.term.charAt(0).toUpperCase();
      if (!grouped[firstLetter]) {
        grouped[firstLetter] = [];
      }
      grouped[firstLetter].push(term);
    });
    return grouped;
  }, [filteredTerms]);

  const sortedLetters = Object.keys(termsByLetter).sort();

  return (
    <div className="min-h-screen bg-lol-dark">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-lol-gold mb-4">
            📖 Słownik Terminów LoL
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Kompletny słownik pojęć i terminów League of Legends dla początkujących
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg p-4 text-center border border-lol-gold/20">
            <p className="text-3xl font-bold text-lol-gold">{glossaryTerms.length}</p>
            <p className="text-gray-400 text-sm">Terminów</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center border border-lol-blue/20">
            <p className="text-3xl font-bold text-lol-blue">{categories.length - 1}</p>
            <p className="text-gray-400 text-sm">Kategorii</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center border border-green-500/20">
            <p className="text-3xl font-bold text-green-400">{filteredTerms.length}</p>
            <p className="text-gray-400 text-sm">Wyniki</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center border border-purple-500/20">
            <p className="text-3xl font-bold text-purple-400">A-Z</p>
            <p className="text-gray-400 text-sm">Alfabetycznie</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-8 max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="🔍 Szukaj terminu (np. CS, Gank, Flash)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-4 bg-gray-800 text-white border-2 border-lol-gold/30 rounded-lg focus:outline-none focus:border-lol-blue text-lg"
          />
        </div>

        {/* Filters */}
        <div className="mb-8">
          {/* Categories */}
          <div className="mb-6">
            <h3 className="text-gray-400 text-sm font-semibold mb-3 uppercase">Kategorie:</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-lol-blue text-white scale-105'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Alphabet */}
          <div>
            <h3 className="text-gray-400 text-sm font-semibold mb-3 uppercase">Litery:</h3>
            <div className="flex flex-wrap gap-2">
              {alphabet.map(letter => (
                <button
                  key={letter}
                  onClick={() => setSelectedLetter(letter)}
                  className={`w-10 h-10 rounded-lg text-sm font-bold transition-all ${
                    selectedLetter === letter
                      ? 'bg-lol-gold text-lol-dark scale-110'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {letter === 'Wszystkie' ? 'All' : letter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-center text-gray-400">
          Znaleziono: <span className="text-lol-gold font-bold">{filteredTerms.length}</span> terminów
          {selectedCategory !== 'Wszystkie' && (
            <span> w kategorii <span className="text-lol-blue font-bold">{selectedCategory}</span></span>
          )}
        </div>

        {/* Terms List */}
        {filteredTerms.length > 0 ? (
          <div className="space-y-8">
            {sortedLetters.map(letter => (
              <div key={letter}>
                {/* Letter Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-lol-gold text-lol-dark w-12 h-12 rounded-lg flex items-center justify-center font-bold text-2xl">
                    {letter}
                  </div>
                  <div className="flex-1 h-px bg-lol-gold/30"></div>
                </div>

                {/* Terms */}
                <div className="grid md:grid-cols-2 gap-4">
                  {termsByLetter[letter].map((term, index) => (
                    <div
                      key={index}
                      className="bg-gray-800 rounded-lg p-6 border-l-4 border-lol-blue hover:border-lol-gold transition-all hover:shadow-lg"
                    >
                      {/* Term Header */}
                      <div className="mb-3">
                        <h3 className="text-2xl font-bold text-lol-gold mb-1">
                          {term.term}
                        </h3>
                        {term.fullName && (
                          <p className="text-gray-400 text-sm italic">
                            {term.fullName}
                          </p>
                        )}
                        <span className="inline-block bg-lol-blue/20 text-lol-blue px-3 py-1 rounded-full text-xs font-semibold mt-2">
                          {term.category}
                        </span>
                      </div>

                      {/* Definition */}
                      <p className="text-gray-300 mb-3 leading-relaxed">
                        {term.definition}
                      </p>

                      {/* Example */}
                      {term.example && (
                        <div className="bg-gray-900/50 border-l-2 border-green-500 pl-4 py-2 rounded">
                          <p className="text-green-400 text-sm font-semibold mb-1">
                            💡 Przykład:
                          </p>
                          <p className="text-gray-400 text-sm italic">
                            "{term.example}"
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          // No Results
          <div className="text-center py-20">
            <div className="text-6xl mb-4">😕</div>
            <p className="text-gray-400 text-xl mb-2">Nie znaleziono terminów</p>
            <p className="text-gray-500">
              Spróbuj zmienić filtry lub wyszukiwanie
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('Wszystkie');
                setSelectedLetter('Wszystkie');
              }}
              className="mt-6 bg-lol-blue hover:bg-lol-gold text-white hover:text-lol-dark font-bold py-3 px-6 rounded-lg transition-all"
            >
              Resetuj filtry
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-lol-blue/30 to-gray-800/50 rounded-lg p-8 border border-lol-blue/30 text-center">
            <h3 className="text-2xl font-bold text-lol-gold mb-3">
              🎓 Chcesz przetestować swoją wiedzę?
            </h3>
            <p className="text-gray-300 mb-6">
              Sprawdź quiz i zobacz ile terminów znasz!
            </p>
            <a
              href="/quiz"
              className="inline-block bg-lol-blue hover:bg-lol-gold hover:text-lol-dark text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105"
            >
              Przejdź do Quizu →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}