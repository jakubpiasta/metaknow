import { useState } from "react"
import { items as wszystkiePrzedmioty, sampleBuilds as przykladoweBuildy } from "../data/items"

// Uwaga: Upewnij się że plik ../data/items.js istnieje z pełną bazą itemów
// komponent do wyświetlania itemów z LoLa (filtrowanie, wyszukiwanie itd.)
export default function ListaPrzedmiotow() {

  // na razie tylko podstawowa wersja, potem może dorzucę coś więcej
  const [aktualnaKategoria, ustawAktualnaKategoria] = useState("Wszystkie")
  const [szukane, ustawSzukane] = useState("")
  const [wybranyItem, ustawWybranyItem] = useState(null)
  const [aktywnaZakladka, ustawAktywnaZakladka] = useState("lista") // lista, kreator, buildy
  
  // Kreator buildu - 6 slotów na itemy + buty
  const [mojBuild, ustawMojBuild] = useState({
    buty: null,
    slot1: null,
    slot2: null,
    slot3: null,
    slot4: null,
    slot5: null,
    slot6: null
  })
  const [aktywnySlot, ustawAktywnySlot] = useState(null) // który slot wypełniamy

  // kategorie itemów (można by to pewnie wynieść do osobnego pliku, ale meh)
  const kategorieItemow = ["Wszystkie", "Starter", "AD", "AP", "Tank", "Support", "Buty"]

  // filtrowanie - 
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

  // Funkcje kreatora
  const dodajDoBuildu = (item) => {
    if (!aktywnySlot) {
      alert("Najpierw wybierz slot (kliknij na pusty kwadrat)")
      return
    }
    
    ustawMojBuild(prev => ({
      ...prev,
      [aktywnySlot]: item
    }))
    ustawAktywnySlot(null) // zresetuj po dodaniu
  }

  const usunZeSlotu = (slot) => {
    ustawMojBuild(prev => ({
      ...prev,
      [slot]: null
    }))
  }

  const wyczyscBuild = () => {
    ustawMojBuild({
      buty: null,
      slot1: null,
      slot2: null,
      slot3: null,
      slot4: null,
      slot5: null,
      slot6: null
    })
    ustawAktywnySlot(null)
  }

  const obliczKosztCalkowity = () => {
    return Object.values(mojBuild)
      .filter(item => item !== null)
      .reduce((suma, item) => suma + item.price, 0)
  }

  const obliczStaty = () => {
    const staty = {
      AD: 0,
      AP: 0,
      HP: 0,
      Armor: 0,
      MR: 0,
      AS: 0,
      CDR: 0,
      LS: 0
    }

    Object.values(mojBuild).forEach(item => {
      if (!item || !item.stats) return
      
      const stats = item.stats.toLowerCase()
      
      // Parsowanie statów (bardzo uproszczone)
      if (stats.includes('ad') || stats.includes('atak')) {
        const match = stats.match(/(\d+)\s*ad|(\d+)\s*atak/)
        if (match) staty.AD += parseInt(match[1] || match[2])
      }
      if (stats.includes('ap') || stats.includes('moc')) {
        const match = stats.match(/(\d+)\s*ap|(\d+)\s*moc/)
        if (match) staty.AP += parseInt(match[1] || match[2])
      }
      if (stats.includes('hp') || stats.includes('zdrowie')) {
        const match = stats.match(/(\d+)\s*hp|(\d+)\s*zdrowie/)
        if (match) staty.HP += parseInt(match[1] || match[2])
      }
      if (stats.includes('armor') || stats.includes('pancerz')) {
        const match = stats.match(/(\d+)\s*armor|(\d+)\s*pancerz/)
        if (match) staty.Armor += parseInt(match[1] || match[2])
      }
      if (stats.includes('mr') || stats.includes('magiczn')) {
        const match = stats.match(/(\d+)\s*mr/)
        if (match) staty.MR += parseInt(match[1])
      }
    })

    return staty
  }

  return (
    <div className="bg-lol-dark min-h-screen text-white">
      <div className="max-w-7xl mx-auto p-6">

        {/* nagłówek */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-lol-gold mb-2">🛡️ System Przedmiotów</h1>
          <p className="text-gray-300">Lista itemów, kreator buildów i przykładowe zestawy</p>
        </div>

        {/* Zakładki */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <button
            onClick={() => ustawAktywnaZakladka("lista")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              aktywnaZakladka === "lista"
                ? "bg-lol-blue text-white shadow-lg scale-105"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            📦 Lista Itemów
          </button>
          <button
            onClick={() => ustawAktywnaZakladka("kreator")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              aktywnaZakladka === "kreator"
                ? "bg-lol-blue text-white shadow-lg scale-105"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            🎨 Kreator Buildu
          </button>
          <button
            onClick={() => ustawAktywnaZakladka("buildy")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              aktywnaZakladka === "buildy"
                ? "bg-lol-blue text-white shadow-lg scale-105"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            📋 Przykładowe Buildy
          </button>
        </div>

        {/* LISTA ITEMÓW */}
        {aktywnaZakladka === "lista" && (
          <>
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
                <p className="text-gray-500 mt-2">Spróbuj wpisać coś innego (np. "miecz")</p>
              </div>
            )}
          </>
        )}

        {/* KREATOR BUILDU */}
        {aktywnaZakladka === "kreator" && (
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 border-2 border-lol-gold/30 mb-8">
              <h2 className="text-3xl font-bold text-lol-gold mb-6 text-center">
                🎨 Stwórz Własny Build
              </h2>

              {/* Sloty na itemy */}
              <div className="bg-gray-900/50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-lol-blue mb-4 text-center">
                  {aktywnySlot ? `📌 Wybierz item do slotu: ${aktywnySlot}` : '👇 Kliknij slot aby dodać item'}
                </h3>
                
                <div className="flex flex-wrap justify-center gap-4 mb-4">
                  {/* Buty */}
                  <div
                    onClick={() => ustawAktywnySlot('buty')}
                    className={`relative w-24 h-24 rounded-lg border-4 cursor-pointer transition-all ${
                      aktywnySlot === 'buty' 
                        ? 'border-lol-blue scale-110 shadow-lg shadow-lol-blue/50' 
                        : 'border-gray-700 hover:border-lol-gold/50'
                    } ${mojBuild.buty ? 'bg-gray-800' : 'bg-gray-900'}`}
                  >
                    {mojBuild.buty ? (
                      <>
                        <img
                          src={getIkonaItemu(mojBuild.buty.image)}
                          alt={mojBuild.buty.name}
                          className="w-full h-full object-cover rounded"
                        />
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            usunZeSlotu('buty')
                          }}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold hover:bg-red-600"
                        >
                          ✕
                        </button>
                      </>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-4xl text-gray-600">
                        👟
                      </div>
                    )}
                    <div className="absolute -bottom-6 left-0 right-0 text-center text-xs text-gray-400">
                      Buty
                    </div>
                  </div>

                  {/* 6 slotów */}
                  {['slot1', 'slot2', 'slot3', 'slot4', 'slot5', 'slot6'].map((slot, idx) => (
                    <div
                      key={slot}
                      onClick={() => ustawAktywnySlot(slot)}
                      className={`relative w-24 h-24 rounded-lg border-4 cursor-pointer transition-all ${
                        aktywnySlot === slot 
                          ? 'border-lol-blue scale-110 shadow-lg shadow-lol-blue/50' 
                          : 'border-gray-700 hover:border-lol-gold/50'
                      } ${mojBuild[slot] ? 'bg-gray-800' : 'bg-gray-900'}`}
                    >
                      {mojBuild[slot] ? (
                        <>
                          <img
                            src={getIkonaItemu(mojBuild[slot].image)}
                            alt={mojBuild[slot].name}
                            className="w-full h-full object-cover rounded"
                          />
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              usunZeSlotu(slot)
                            }}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold hover:bg-red-600"
                          >
                            ✕
                          </button>
                        </>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-3xl text-gray-600">
                          {idx + 1}
                        </div>
                      )}
                      <div className="absolute -bottom-6 left-0 right-0 text-center text-xs text-gray-400">
                        Slot {idx + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Statystyki buildu */}
              <div className="bg-gradient-to-r from-lol-blue/20 to-purple-900/20 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-lol-gold mb-4">📊 Statystyki Buildu</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-900/50 rounded p-3 text-center">
                    <p className="text-gray-400 text-sm">Koszt Całkowity</p>
                    <p className="text-yellow-500 font-bold text-xl">{obliczKosztCalkowity()}g</p>
                  </div>
                  <div className="bg-gray-900/50 rounded p-3 text-center">
                    <p className="text-gray-400 text-sm">Liczba Itemów</p>
                    <p className="text-lol-blue font-bold text-xl">
                      {Object.values(mojBuild).filter(i => i !== null).length}/7
                    </p>
                  </div>
                  {obliczStaty().AD > 0 && (
                    <div className="bg-gray-900/50 rounded p-3 text-center">
                      <p className="text-gray-400 text-sm">Attack Damage</p>
                      <p className="text-red-400 font-bold text-xl">+{obliczStaty().AD}</p>
                    </div>
                  )}
                  {obliczStaty().AP > 0 && (
                    <div className="bg-gray-900/50 rounded p-3 text-center">
                      <p className="text-gray-400 text-sm">Ability Power</p>
                      <p className="text-purple-400 font-bold text-xl">+{obliczStaty().AP}</p>
                    </div>
                  )}
                  {obliczStaty().HP > 0 && (
                    <div className="bg-gray-900/50 rounded p-3 text-center">
                      <p className="text-gray-400 text-sm">Health</p>
                      <p className="text-green-400 font-bold text-xl">+{obliczStaty().HP}</p>
                    </div>
                  )}
                  {obliczStaty().Armor > 0 && (
                    <div className="bg-gray-900/50 rounded p-3 text-center">
                      <p className="text-gray-400 text-sm">Armor</p>
                      <p className="text-yellow-400 font-bold text-xl">+{obliczStaty().Armor}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Przyciski akcji */}
              <div className="flex gap-4 flex-wrap justify-center">
                <button
                  onClick={wyczyscBuild}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-lg transition-all flex items-center gap-2"
                >
                  🗑️ Wyczyść Build
                </button>
                {aktywnySlot && (
                  <button
                    onClick={() => ustawAktywnySlot(null)}
                    className="bg-gray-600 hover:bg-gray-700 text-white font-bold px-8 py-3 rounded-lg transition-all"
                  >
                    Anuluj wybór slotu
                  </button>
                )}
              </div>
            </div>

            {/* Lista itemów do dodania */}
            {aktywnySlot && (
              <div className="bg-gray-800 rounded-lg p-6 border-2 border-lol-blue/50">
                <h3 className="text-2xl font-bold text-lol-blue mb-4 text-center">
                  📦 Wybierz Item do {aktywnySlot === 'buty' ? 'Butów' : `Slot ${aktywnySlot.replace('slot', '')}`}
                </h3>

                {/* Filtr kategorii */}
                <div className="flex flex-wrap justify-center gap-3 mb-6">
                  {kategorieItemow.filter(k => aktywnySlot === 'buty' ? k === 'Buty' || k === 'Wszystkie' : k !== 'Buty').map(kat => (
                    <button
                      key={kat}
                      onClick={() => ustawAktualnaKategoria(kat)}
                      className={`px-4 py-2 rounded font-semibold transition-all text-sm ${
                        aktualnaKategoria === kat
                          ? "bg-lol-blue text-white scale-105"
                          : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      }`}
                    >
                      {kat}
                    </button>
                  ))}
                </div>

                {/* Wyszukiwarka */}
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="🔍 Szukaj..."
                    value={szukane}
                    onChange={e => ustawSzukane(e.target.value)}
                    className="w-full bg-gray-900 p-3 rounded border border-lol-blue/30 focus:border-lol-blue outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-h-96 overflow-y-auto">
                  {przefiltrowane.map(item => (
                    <div
                      key={item.id}
                      onClick={() => dodajDoBuildu(item)}
                      className="bg-gray-900 rounded-lg p-3 border-2 border-gray-700 hover:border-lol-gold cursor-pointer transition-all hover:scale-105"
                    >
                      <img
                        src={getIkonaItemu(item.image)}
                        alt={item.name}
                        className="w-full h-20 object-cover rounded mb-2"
                      />
                      <p className="text-white text-sm font-semibold text-center truncate">{item.name}</p>
                      <p className="text-yellow-500 text-xs text-center">{item.price}g</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* PRZYKŁADOWE BUILDY */}
        {aktywnaZakladka === "buildy" && (
          <div>
            <h2 className="text-3xl text-lol-gold font-bold text-center mb-8">📋 Przykładowe Buildy</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {przykladoweBuildy.map((build, idx) => (
                <div key={idx} className="bg-gray-800 p-6 rounded border border-lol-gold/30 hover:border-lol-gold transition-all">
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

                  <div className="space-y-2">
                    {build.items.map((itm, j) => (
                      <div key={j} className="flex items-center gap-2 bg-gray-900 p-2 rounded">
                        <span className="text-lol-blue font-bold text-sm">{j + 1}.</span>
                        <span className="text-gray-300 text-sm">{itm}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

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