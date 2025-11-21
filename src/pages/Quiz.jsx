import { useState } from 'react';
import { quizQuestions, rankings, getCategoryStats } from '../data/quizQuestions';

export default function Quiz() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const totalQuestions = quizQuestions.length;
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  // Start quiz
  const startQuiz = () => {
    setStarted(true);
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  // Wybór odpowiedzi
  const handleAnswer = (answerIndex) => {
    if (showExplanation) return; // Nie pozwól zmienić odpowiedzi po pokazaniu wyjaśnienia
    
    setSelectedAnswer(answerIndex);
    setAnswers({
      ...answers,
      [quizQuestions[currentQuestion].id]: answerIndex
    });
  };

  // Sprawdź odpowiedź
  const checkAnswer = () => {
    if (selectedAnswer === null) return;
    setShowExplanation(true);
  };

  // Następne pytanie
  const nextQuestion = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      // Koniec quizu
      setShowResults(true);
    }
  };

  // Oblicz wynik
  const calculateScore = () => {
    let correct = 0;
    quizQuestions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  // Znajdź ranking
  const getRanking = (score) => {
    return rankings.find(r => score >= r.min && score <= r.max);
  };

  // Restart quiz
  const restartQuiz = () => {
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  const currentQ = quizQuestions[currentQuestion];
  const isCorrect = selectedAnswer === currentQ?.correctAnswer;

  // ==================== EKRAN STARTOWY ====================
  if (!started) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center px-6">
        <div className="max-w-2xl w-full">
          <div className="bg-gray-800 rounded-2xl p-12 border-2 border-yellow-500/30 text-center">
            <div className="text-6xl mb-6">🧠</div>
            <h1 className="text-5xl font-bold text-yellow-400 mb-4">
              Quiz League of Legends
            </h1>
            <p className="text-gray-300 text-xl mb-8">
              Sprawdź swoją wiedzę o grze!
            </p>

            <div className="bg-gray-900 rounded-lg p-6 mb-8 text-left">
              <h3 className="text-yellow-400 font-bold mb-4 text-lg">📋 Informacje:</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• <strong>{totalQuestions} pytań</strong> w 4 kategoriach</li>
                <li>• Kategorie: Podstawy, Przedmioty, Meta, Zaawansowane</li>
                <li>• Wyjaśnienia po każdej odpowiedzi</li>
                <li>• Ranking od Iron do Challenger</li>
                <li>• Czas: bez limitu - ucz się w swoim tempie</li>
              </ul>
            </div>

            <button
              onClick={startQuiz}
              className="bg-blue-600 hover:bg-yellow-500 text-white hover:text-gray-900 font-bold py-4 px-12 rounded-lg text-xl transition-all transform hover:scale-105 shadow-lg"
            >
              Rozpocznij Quiz 🚀
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ==================== EKRAN WYNIKÓW ====================
  if (showResults) {
    const score = calculateScore();
    const ranking = getRanking(score);
    const categoryStats = getCategoryStats(answers);

    return (
      <div className="min-h-screen bg-gray-900 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-2xl p-8 border-2 border-yellow-500/50">
            {/* Nagłówek */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-yellow-400 mb-4">
                🏆 Wyniki Quizu
              </h1>
              <p className="text-gray-300 text-lg">Oto jak sobie poradziłeś!</p>
            </div>

            {/* Główny wynik */}
            <div className="bg-gradient-to-br from-blue-900/30 to-gray-900 rounded-xl p-8 mb-8 text-center border-2" style={{ borderColor: ranking.color }}>
              <div className="text-7xl mb-4">🎮</div>
              <h2 className="text-5xl font-bold mb-4" style={{ color: ranking.color }}>
                {ranking.rank}
              </h2>
              <p className="text-3xl font-bold text-white mb-2">
                {score} / {totalQuestions}
              </p>
              <p className="text-xl text-gray-300 mb-4">
                {Math.round((score / totalQuestions) * 100)}% poprawnych odpowiedzi
              </p>
              <p className="text-lg text-gray-400 italic">
                {ranking.message}
              </p>
            </div>

            {/* Statystyki kategorii */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4 text-center">
                📊 Wyniki według kategorii
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(categoryStats).map(([cat, stats]) => (
                  <div key={cat} className="bg-gray-900 rounded-lg p-5 border border-gray-700">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-lg font-bold text-yellow-400">{cat}</h4>
                      <span className="text-2xl font-bold text-white">
                        {stats.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
                      <div 
                        className="bg-blue-500 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${stats.percentage}%` }}
                      ></div>
                    </div>
                    <p className="text-gray-400 text-sm">
                      {stats.correct} / {stats.total} poprawnych
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Przyciski */}
            <div className="flex gap-4 justify-center">
              <button
                onClick={restartQuiz}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all"
              >
                🔄 Spróbuj ponownie
              </button>
              <a
                href="/"
                className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg transition-all"
              >
                🏠 Strona główna
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ==================== EKRAN PYTAŃ ====================
  return (
    <div className="min-h-screen bg-gray-900 py-8 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-400 font-semibold">
              Pytanie {currentQuestion + 1} / {totalQuestions}
            </span>
            <span className="text-yellow-400 font-semibold">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3">
            <div 
              className="bg-blue-500 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Kategoria */}
        <div className="text-center mb-6">
          <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
            {currentQ.category}
          </span>
        </div>

        {/* Pytanie */}
        <div className="bg-gray-800 rounded-2xl p-8 border-2 border-yellow-500/30 mb-6">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            {currentQ.question}
          </h2>

          {/* Opcje */}
          <div className="space-y-4 mb-6">
            {currentQ.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrectAnswer = index === currentQ.correctAnswer;
              
              let bgColor = 'bg-gray-700 hover:bg-gray-600';
              let borderColor = 'border-gray-600';
              let textColor = 'text-white';

              if (showExplanation) {
                if (isCorrectAnswer) {
                  bgColor = 'bg-green-900/50';
                  borderColor = 'border-green-500';
                  textColor = 'text-green-400';
                } else if (isSelected && !isCorrectAnswer) {
                  bgColor = 'bg-red-900/50';
                  borderColor = 'border-red-500';
                  textColor = 'text-red-400';
                } else {
                  bgColor = 'bg-gray-700';
                  borderColor = 'border-gray-600';
                }
              } else if (isSelected) {
                bgColor = 'bg-blue-700';
                borderColor = 'border-blue-500';
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={showExplanation}
                  className={`w-full ${bgColor} border-2 ${borderColor} ${textColor} p-4 rounded-lg text-left transition-all transform hover:scale-102 disabled:cursor-not-allowed`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-lg">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    <span className="text-lg">{option}</span>
                    {showExplanation && isCorrectAnswer && (
                      <span className="ml-auto text-2xl">✓</span>
                    )}
                    {showExplanation && isSelected && !isCorrectAnswer && (
                      <span className="ml-auto text-2xl">✗</span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Wyjaśnienie */}
          {showExplanation && (
            <div className={`rounded-lg p-5 border-2 ${isCorrect ? 'bg-green-900/20 border-green-500' : 'bg-red-900/20 border-red-500'}`}>
              <h3 className={`font-bold text-lg mb-2 ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                {isCorrect ? '✓ Poprawna odpowiedź!' : '✗ Niepoprawna odpowiedź'}
              </h3>
              <p className="text-gray-300">
                <strong>Wyjaśnienie:</strong> {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Przyciski */}
          <div className="mt-6 flex gap-4">
            {!showExplanation ? (
              <button
                onClick={checkAnswer}
                disabled={selectedAnswer === null}
                className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-all"
              >
                Sprawdź odpowiedź
              </button>
            ) : (
              <button
                onClick={nextQuestion}
                className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition-all"
              >
                {currentQuestion < totalQuestions - 1 ? 'Następne pytanie →' : 'Zobacz wyniki 🏆'}
              </button>
            )}
          </div>
        </div>

        {/* Info o quicie */}
        <div className="text-center">
          <button
            onClick={restartQuiz}
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            Przerwij quiz
          </button>
        </div>
      </div>
    </div>
  );
}