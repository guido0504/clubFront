import { Component, OnInit } from '@angular/core';
import { TipoActividadService } from '../../service/tipo-actividad/tipo-actividad.service';
import { PostResponseDto } from '../../model/post';
import { PostService } from '../../service/post/post.service';
import { DatePipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-salud',
  imports: [ButtonModule, TableModule, CardModule, DialogModule, DatePipe],
  templateUrl: './salud.html',
  styleUrl: './salud.css',
})
export class Salud implements OnInit {
  listPost: PostResponseDto[] = [];
  visible = false;
  selectedPost?: PostResponseDto;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.postService.getPosts().subscribe((response) => {
      this.listPost = response.data.filter((n: any) => n.tipoEvento?.id === 2);
    });
  }

  open(post: PostResponseDto) {
    this.selectedPost = post;
    this.visible = true;
  }

  close() {
    this.visible = false;
  }
}
