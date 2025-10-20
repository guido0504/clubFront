
export interface Post {
  id?: number;
  title: string;
  body: string; // Contenido en HTML (usaremos un editor enriquecido)
  section: string; // Categoría (Noticias, Eventos, etc.)
  imageUrl?: string; 
  videoUrl?: string; 
  createdAt: string; 
}