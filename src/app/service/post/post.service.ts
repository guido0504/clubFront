import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post, PostDataResponseDto } from '../../model/post';
import { environment } from '../../../environments/environment';

// === ÚNICO LUGAR A CAMBIAR EN LA MIGRACIÓN ===
const API_BASE_URL = 'http://localhost:3000';
const POSTS_URL = `${API_BASE_URL}/posts`;
const SECTIONS_URL = `${API_BASE_URL}/sections`;
const apiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<PostDataResponseDto> {
    return this.http.get<PostDataResponseDto>(`${apiUrl}/post/findAll`);
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${POSTS_URL}/${id}`);
  }

  createPost(post: Omit<Post, 'id' | 'createdAt'>): Observable<Post> {
    // Agregamos la fecha antes de enviar (JSON Server requiere esto)
    const newPost: Post = {
      ...(post as Post),
      createdAt: new Date().toISOString(),
    };
    return this.http.post<Post>(POSTS_URL, newPost);
  }

  updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>(`${POSTS_URL}/${post.id}`, post);
  }

  deletePost(id: number): Observable<void> {
    return this.http.delete<void>(`${POSTS_URL}/${id}`);
  }

  getSections(): Observable<string[]> {
    return this.http.get<string[]>(SECTIONS_URL);
  }

  //Servicios reales
  getAll(): Observable<PostDataResponseDto> {
    return this.http.get<PostDataResponseDto>(apiUrl + '/post/findAll');
  }

  getById(id: number): Observable<PostDataResponseDto> {
    return this.http.get<PostDataResponseDto>(apiUrl + 'post/findById/' + id);
  }
}
