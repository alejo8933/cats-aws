function CatDetail({ cat, onClose }) {
  if (!cat) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1a0f00] border border-[#5c3a1e] rounded-2xl max-w-lg w-full overflow-y-auto max-h-[90vh]">
        <img src={cat.imagenUrl} alt={cat.nombre} className="w-full h-64 object-cover rounded-t-2xl" />
        <div className="p-6">
          <h2 className="text-white text-2xl font-bold">{cat.nombre}</h2>
          <p className="text-[#b07040] text-sm mt-1 mb-4">{cat.descripcion}</p>
          {cat.videoUrl && (
            <video controls className="w-full rounded-xl mb-4">
              <source src={cat.videoUrl} type="video/mp4" />
            </video>
          )}
          {cat.pdfUrl && (
            <a href={cat.pdfUrl} target="_blank" rel="noreferrer"
               className="block text-center bg-[#5c3a1e] text-[#f0c080] py-2 rounded-xl hover:bg-[#7a4e2a] text-sm mb-4">
              📄 Ficha técnica PDF → {cat.pdfUrl}
            </a>
          )}
          <button onClick={onClose}
            className="w-full bg-[#c87941] text-white py-3 rounded-xl font-bold hover:bg-[#a85f2e] mt-2">
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
export default CatDetail;
