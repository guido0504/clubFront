import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TipoEventoService } from '../../../../service/tipo-evento/tipo-evento.service';
import { TipoEvento } from '../../../../model/tipo-evento';
import { PostService } from '../../../../service/post/post.service';
import { Post, PostResponseDto } from '../../../../model/post';

@Component({
  selector: 'app-list-view',
  imports: [TableModule],
  templateUrl: './list-view.html',
  styleUrl: './list-view.css',
})
export class ListView implements OnInit {
  public listPost: PostResponseDto[] = [];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.postService.getPosts().subscribe((response) => {
      this.listPost = response.data;
    });
  }
}
