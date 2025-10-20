import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterLink } from '@angular/router'; 
import { PostService } from '../../../service/post/post.service'; 
import { Post } from '../../../model/post';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule], 
  templateUrl: './list.html',
  styleUrls: ['./list.css']
})
export class List implements OnInit {
  posts: Post[] = [];
  secciones: string[] = [];
  filtroSeleccionado: string = 'todas';

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.loadPosts();
    this.postService.getSections().subscribe(data => this.secciones = ['todas', ...data]);
  }

  loadPosts(): void {
    this.postService.getPosts().subscribe({
      next: (data) => this.posts = data,
      error: (err) => console.error('Error al cargar publicaciones:', err)
    });
  }

  deletePost(id: number | undefined): void {
    if (!id || !confirm('¿Confirma la eliminación de la publicación?')) return;

    this.postService.deletePost(id).subscribe({
      next: () => {
        alert('Publicación eliminada correctamente.');
        this.loadPosts();
      },
      error: (err) => console.error('Fallo al eliminar:', err)
    });
  }

  // Lógica de filtrado
  get filteredPosts(): Post[] {
    if (this.filtroSeleccionado === 'todas') {
      return this.posts;
    }
    return this.posts.filter(p => p.section === this.filtroSeleccionado);
  }
}