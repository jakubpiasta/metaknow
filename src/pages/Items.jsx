import { useState } from "react"
import { items as wszystkiePrzedmioty, sampleBuilds as przykladoweBuildy } from "../data/items"

// komponent do wyświetlania itemów z LoLa (filtrowanie, wyszukiwanie itd.)
export default function ListaPrzedmiotow() {

  // na razie tylko podstawowa wersja, potem może dorzucę coś więcej
  const [aktualnaKategoria, ustawAktualnaKategoria] = useState("Wszystkie")
  const [szukane, ustawSzukane] = useState("")
  const [wybranyItem, ustawWybranyItem] = useState(null)

  // kategorie itemów (można by to pewnie wynieść do osobnego pliku, ale meh)
  const kategorieItemow = ["Wszystkie", "Starter", "AD", "AP", "Tank", "Support", "Buty"]

  // filtrowanie - pamiętać żeby porównywać lowercase, bo inaczej nie działa dobrze
  const przefiltrowane = wszystkiePrzedmioty.filter(przedmiot => {
    const pasujeKategoria = aktualnaKategoria === "Wszystkie" || przedmiot.category === aktualnaKategoria
    const q = szukane.toLowerCase()
    const pasujeTekst = przedmiot.name.toLowerCase().includes(q) || przedmiot.description.toLowerCase().includes(q)
    return pasujeKategoria && pasujeTekst
  })

  // generowanie linku do obrazka - trochę hardcode, ale działa
  const getIkonaItemu = (id) => {
    return `https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/${id}.png`
  }

  return (
    <div className="bg-lol-dark min-h-screen text-white">
      <div className="max-w-6xl mx-auto p-6">

        {/* nagłówek */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-lol-gold mb-2">🛡️ System Przedmiotów</h1>
          <p className="text-gray-300">Lista itemów z LoL-a – można filtrować, szukać i sprawdzać co robią</p>
        </div>

        {/* wyszukiwarka */}
        <div className="max-w-md mx-auto mb-8">
          <input
            type="text"
            placeholder="🔍 Szukaj itemów..."
            value={szukane}
            onChange={e => ustawSzukane(e.target.value)}
            className="w-full bg-gray-800 p-3 rounded border border-lol-gold/30 focus:border-lol-blue outline-none"
          />
        </div>

        {/* kategorie (trochę na sztywno, ale działa) */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {kategorieItemow.map(kat => (
            <button
              key={kat}
              onClick={() => ustawAktualnaKategoria(kat)}
              className={`px-4 py-2 rounded font-semibold transition-all ${
                aktualnaKategoria === kat
                  ? "bg-lol-blue text-white scale-105"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {kat === "Wszystkie" ? "📦 Wszystkie" :
               kat === "Starter" ? "🎯 Starter" :
               kat === "AD" ? "⚔️ AD" :
               kat === "AP" ? "✨ AP" :
               kat === "Tank" ? "🛡️ Tank" :
               kat === "Support" ? "💚 Support" : "👟 Buty"}
            </button>
          ))}
        </div>

        {/* ile znaleziono */}
        <p className="text-center text-gray-400 mb-6">
          Znaleziono <span className="text-lol-gold font-bold">{przefiltrowane.length}</span> przedmiotów
        </p>

        {/* siatka itemów */}
        {przefiltrowane.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {przefiltrowane.map((itm) => (
              <div
                key={itm.id}
                onClick={() => ustawWybranyItem(itm)}
                className="bg-gray-800 rounded p-5 border border-lol-gold/20 hover:border-lol-blue cursor-pointer hover:scale-[1.02] transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={getIkonaItemu(itm.image)}
                    alt={itm.name}
                    className="w-16 h-16 rounded border border-lol-gold/50"
                  />
                  <div>
                    <h3 className="text-lol-gold text-xl font-bold">{itm.name}</h3>
                    <p className="text-yellow-500 text-sm">💰 {itm.price}g</p>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-2">{itm.stats}</p>
                {itm.passive && (
                  <p className="text-purple-400 text-sm mb-2">⚡ {itm.passive}</p>
                )}
                <p className="text-gray-400 text-sm mb-3">{itm.description}</p>

                <div className="flex flex-wrap gap-2">
                  {itm.goodFor.map((rola, idx) => (
                    <span
                      key={idx}
                      className="border border-lol-gold/30 text-lol-gold px-2 py-1 text-xs rounded"
                    >
                      {rola}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-400 text-xl">😕 Nic nie znaleziono</p>
            <p className="text-gray-500 mt-2">Spróbuj wpisać coś innego (np. “miecz”)</p>
          </div>
        )}

        {/* przykładowe buildy */}
        <div className="mt-16">
          <h2 className="text-3xl text-lol-gold font-bold text-center mb-8">📋 Przykładowe Buildy</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {przykladoweBuildy.map((build, idx) => (
              <div key={idx} className="bg-gray-800 p-6 rounded border border-lol-gold/30">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">
                    {build.role === "ADC" ? "🏹" :
                     build.role === "Mid AP" ? "✨" :
                     build.role === "Top Tank" ? "🛡️" : "💚"}
                  </span>
                  <div>
                    <h3 className="text-lol-gold text-xl font-bold">{build.role}</h3>
                    <p className="text-gray-400 text-sm">{build.champion}</p>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-3">{build.description}</p>

                {build.items.map((itm, j) => (
                  <div key={j} className="flex items-center gap-2 bg-gray-900 p-2 rounded">
                    <span className="text-lol-blue font-bold text-sm">{j + 1}.</span>
                    <span className="text-gray-300 text-sm">{itm}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* okienko z pojedynczym itemem */}
      {wybranyItem && (
        <div
          className="fixed inset-0 bg-black/80 flex justify-center items-center p-4 z-50"
          onClick={() => ustawWybranyItem(null)}
        >
          <div
            onClick={e => e.stopPropagation()}
            className="bg-gray-900 p-8 rounded-lg border-2 border-lol-gold max-w-lg w-full"
          >
            <div className="flex items-center gap-4 mb-5">
              <img
                src={getIkonaItemu(wybranyItem.image)}
                alt={wybranyItem.name}
                className="w-20 h-20 rounded border-2 border-lol-gold"
              />
              <div>
                <h2 className="text-3xl text-lol-gold font-bold">{wybranyItem.name}</h2>
                <p className="text-yellow-500">💰 {wybranyItem.price} gold</p>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div>
                <h3 className="text-lol-blue font-bold mb-1">📊 Statystyki</h3>
                <p className="text-gray-300">{wybranyItem.stats}</p>
              </div>

              {wybranyItem.passive && (
                <div>
                  <h3 className="text-purple-400 font-bold mb-1">⚡ Pasywna</h3>
                  <p className="text-gray-300">{wybranyItem.passive}</p>
                </div>
              )}

              <div>
                <h3 className="text-green-400 font-bold mb-1">💡 Kiedy kupić</h3>
                <p className="text-gray-300">{wybranyItem.whenToBuy}</p>
              </div>

              <div>
                <h3 className="text-lol-gold font-bold mb-1">🎮 Dla kogo</h3>
                <div className="flex gap-2 flex-wrap">
                  {wybranyItem.goodFor.map((rola, i) => (
                    <span key={i} className="bg-lol-blue text-white px-3 py-1 text-sm rounded">
                      {rola}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* przycisk zamykania */}
            <button
              onClick={() => ustawWybranyItem(null)}
              className="mt-6 w-full bg-lol-blue hover:bg-lol-gold hover:text-lol-dark font-bold py-3 rounded-lg transition-all"
            >
              Zamknij
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
