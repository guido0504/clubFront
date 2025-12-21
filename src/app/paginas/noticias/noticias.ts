import { Component, OnInit } from '@angular/core';
import { PostService } from '../../service/post/post.service';
import { PostResponseDto } from '../../model/post';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-noticias',
  imports: [ButtonModule, TableModule, CardModule, DialogModule, DatePipe],
  templateUrl: './noticias.html',
  styleUrl: './noticias.css',
})
export class Noticias implements OnInit {
  listPost: PostResponseDto[] = [];
  visible = false;
  selectedPost?: PostResponseDto;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.postService.getPosts().subscribe((response) => {
      this.listPost = response.data.filter((n: any) => n.tipoEvento?.id === 3);
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
