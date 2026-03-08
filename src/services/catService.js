const S3 = import.meta.env.VITE_S3_URL;

export const getCats = async () => {
  return [
    { id:1, nombre:'Abisinio',   descripcion:'Ágil y curioso, siempre en movimiento',  imagenUrl:`${S3}/cats/Abisinio.jpg`,   videoUrl:`${S3}/cats-video/Gaticos_Jugando_Parque.mp4`, pdfUrl:null },
    { id:2, nombre:'Bengala',    descripcion:'Salvaje por fuera, tierno por dentro',    imagenUrl:`${S3}/cats/Bengala.jpg`,    videoUrl:null, pdfUrl:null },
    { id:3, nombre:'Maine Coon', descripcion:'El gigante gentil de los gatos',          imagenUrl:`${S3}/cats/Maine_Coon.jpg`, videoUrl:`${S3}/cats-video/Gaticos_Jugando_Parque.mp4`, pdfUrl:null },
    { id:4, nombre:'Pelo Corto', descripcion:'Elegante y de bajo mantenimiento',        imagenUrl:`${S3}/cats/Pelo_Corto.jpg`, videoUrl:null, pdfUrl:`${S3}/cats-pdf/Ficha_Britanico_de_Pelo_Corto.pdf` },
    { id:5, nombre:'Persa',      descripcion:'Majestuoso y tranquilo como un rey',      imagenUrl:`${S3}/cats/Persa.jpg`,      videoUrl:null, pdfUrl:null },
    { id:6, nombre:'Ragdoll',    descripcion:'Se derrite entre tus brazos',             imagenUrl:`${S3}/cats/Ragdoll.jpg`,    videoUrl:null, pdfUrl:null },
    { id:7, nombre:'Siamés',     descripcion:'Elegante, vocal y muy inteligente',       imagenUrl:`${S3}/cats/Siames.jpg`,     videoUrl:null, pdfUrl:null },
    { id:8, nombre:'Sphynx',     descripcion:'Sin pelo pero lleno de amor',             imagenUrl:`${S3}/cats/Sphynx.jpg`,     videoUrl:null, pdfUrl:null },
  ];
};
