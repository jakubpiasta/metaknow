import { items } from '../data/items';

export default function Items() {
  return (
    <div className="bg-lol-dark min-h-screen p-6">
      <h1 className="text-3xl font-bold text-lol-gold mb-6">System Przedmiotów</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map(item => (
          <div key={item.id} className="bg-gray-800 p-4 rounded-lg border border-lol-gold/30">
            <h3 className="text-xl text-lol-blue">{item.name}</h3>
            <p className="text-gray-300 mt-2">{item.description}</p>
            <div className="mt-3 flex gap-2">
              {item.tags.map(tag => (
                <span className="bg-lol-dark text-lol-gold px-2 py-1 text-xs rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}