import { TipoEvento } from './tipo-evento';

export interface Post {
  id?: number;
  title: string;
  body: string; // Contenido en HTML (usaremos un editor enriquecido)
  section: string; // Categoría (Noticias, Eventos, etc.)
  imageUrl?: string;
  videoUrl?: string;
  createdAt: string;
}

export interface PostResponseDto {
  id: number;
  title: string;
  body: string;
  tipoEvento: TipoEvento;
  fechaHora: string;
  idImage: number;
  imageUrl: string;
  createdAt: string;
}

export interface PostDataResponseDto {
  data: PostResponseDto[];
}
