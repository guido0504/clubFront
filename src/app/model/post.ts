import { TipoEvento } from './tipo-evento';
export interface PostResponseDto {
  id: number;
  title: string;
  body: string;
  tipoEvento: TipoEvento;
  fechaHora: string;
  image: string;
  createdAt: string;
}
export interface PostDataResponseDto {
  data: PostResponseDto[];
}
