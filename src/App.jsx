import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Basics from './pages/Basics';
import Items from './pages/Items';
import Meta from './pages/Meta';
import Quiz from './pages/Quiz';
import Glossary from './pages/Glossary';
import logo from './assets/logo.png';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="bg-lol-dark min-h-screen text-white">
      {/* Nawigacja */}
      <nav className="bg-black/90 backdrop-blur-sm py-4 px-4 border-b-2 border-lol-gold/30 sticky top-0 z-40">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo - WIĘKSZE */}
          <Link to="/" className="group" onClick={closeMenu}>
            <img 
              src={logo} 
              alt="LoL Knowledge" 
              className="h-16 md:h-20 w-auto transition-transform group-hover:scale-105 drop-shadow-[0_0_10px_rgba(200,155,60,0.3)]" 
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <Link 
              to="/basics" 
              className="text-gray-300 hover:text-lol-gold transition-all duration-200 font-medium text-base relative group"
            >
              Podstawy
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lol-gold group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              to="/glossary" 
              className="text-gray-300 hover:text-lol-gold transition-all duration-200 font-medium text-base relative group"
            >
              Słownik
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lol-gold group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              to="/items" 
              className="text-gray-300 hover:text-lol-gold transition-all duration-200 font-medium text-base relative group"
            >
              Przedmioty
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lol-gold group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              to="/meta" 
              className="text-gray-300 hover:text-lol-gold transition-all duration-200 font-medium text-base relative group"
            >
              Meta
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lol-gold group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              to="/quiz" 
              className="bg-lol-gold/10 hover:bg-lol-gold/20 text-lol-gold px-5 py-2.5 rounded-lg transition-all duration-200 font-semibold text-base border border-lol-gold/30 hover:border-lol-gold/50"
            >
              Quiz
            </Link>
          </div>

          {/* Burger Button - Mobile Only */}
          <button 
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5 z-50 p-2 hover:bg-lol-gold/10 rounded transition-colors"
            aria-label="Toggle menu"
          >
            <span className={`w-7 h-0.5 bg-lol-gold transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-7 h-0.5 bg-lol-gold transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-7 h-0.5 bg-lol-gold transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`
          md:hidden absolute top-full left-0 w-full bg-gradient-to-b from-black/95 to-black/90 backdrop-blur-md border-b border-lol-gold/30
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}
        `}>
          <div className="flex flex-col py-4 px-6 gap-1">
            <Link 
              to="/basics" 
              className="text-gray-300 hover:text-lol-gold hover:bg-lol-gold/5 transition-all duration-200 py-3 px-4 rounded-lg font-medium"
              onClick={closeMenu}
            >
              📚 Podstawy
            </Link>
            <Link 
              to="/glossary" 
              className="text-gray-300 hover:text-lol-gold hover:bg-lol-gold/5 transition-all duration-200 py-3 px-4 rounded-lg font-medium"
              onClick={closeMenu}
            >
              📖 Słownik
            </Link>
            <Link 
              to="/items" 
              className="text-gray-300 hover:text-lol-gold hover:bg-lol-gold/5 transition-all duration-200 py-3 px-4 rounded-lg font-medium"
              onClick={closeMenu}
            >
              ⚔️ Przedmioty
            </Link>
            <Link 
              to="/meta" 
              className="text-gray-300 hover:text-lol-gold hover:bg-lol-gold/5 transition-all duration-200 py-3 px-4 rounded-lg font-medium"
              onClick={closeMenu}
            >
              📊 Meta
            </Link>
            <Link 
              to="/quiz" 
              className="bg-lol-gold/20 text-lol-gold hover:bg-lol-gold/30 transition-all duration-200 py-3 px-4 rounded-lg font-semibold mt-2 text-center border border-lol-gold/40"
              onClick={closeMenu}
            >
              🎯 Quiz
            </Link>
          </div>
        </div>
      </nav>

      {/* Główne ścieżki */}
      <main className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basics" element={<Basics />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/items" element={<Items />} />
          <Route path="/meta" element={<Meta />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </main>
    </div>
  );
}