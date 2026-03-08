import { useState, useEffect } from 'react';
import CatCard from './components/CatCard';
import CatDetail from './components/CatDetail'; 
import { getCats } from './services/catService';

function App() {
  const [cats, setCats] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    getCats().then(setCats);
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0600] px-6 py-10">
      <div className="text-center mb-10">
        <span className="text-xs text-[#c87941] border border-[#5c3a1e] px-3 py-1 rounded-full">AWS S3 · CATS</span>
        <h1 className="text-white text-6xl font-serif font-bold mt-4">Nuestros</h1>
        <h1 className="text-[#c87941] text-6xl font-serif italic">Gaticos</h1>
        <p className="text-[#7a5535] mt-2">8 razas · imágenes servidas desde AWS</p>
        <div className="w-10 h-1 bg-[#c87941] mx-auto mt-3 rounded"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {cats.map(cat => (
          <CatCard key={cat.id} {...cat} onClick={() => setSelected(cat)} />
        ))}
      </div>
      <CatDetail cat={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
export default App;
