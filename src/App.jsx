import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Items from './pages/Items';
import Meta from './pages/Meta';
import Quiz from './pages/Quiz';
import logo from './assets/logo.png';

export default function App() {
  return (
    <div className="bg-lol-dark min-h-screen text-white">
      {/* Nawigacja */}
      <nav className="bg-black/80 py-0.5 px-4 border-b border-lol-gold/50">
  <div className="container mx-auto flex justify-between items-center">
    <Link to="/" className="flex items-center gap-2">
      <img src={logo} alt="Logo" className="h-32 w-auto block" />
      <span className="text-lol-gold font-bold text-lg leading-tight"></span>
    </Link>
    <div className="flex gap-6 text-sm">
      <Link to="/items" className="hover:text-lol-blue">Przedmioty</Link>
      <Link to="/meta" className="hover:text-lol-blue">Meta</Link>
      <Link to="/quiz" className="hover:text-lol-blue">Quiz</Link>
    </div>
  </div>
</nav>

      {/* Główne ścieżki */}
      <main className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<Items />} />
          <Route path="/meta" element={<Meta />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </main>
    </div>
  );
}