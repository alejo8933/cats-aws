function CatCard({ nombre, descripcion, imagenUrl, onClick }) {
  return (
    <div onClick={onClick} className="bg-[#1a0f00] border border-[#5c3a1e] rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform shadow-lg">
      <img src={imagenUrl} alt={nombre} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-white font-bold text-lg">{nombre}</h2>
        <p className="text-[#b07040] text-sm mt-1">{descripcion}</p>
        <span className="text-[#c87941] text-xs font-semibold mt-3 block tracking-widest">VER DETALLE →</span>
      </div>
    </div>
  );
}
export default CatCard;
