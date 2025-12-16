import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { PostService } from '../../../../service/post/post.service';
import { PostResponseDto } from '../../../../model/post';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-list-view',
  imports: [TableModule, CardModule, ButtonModule, DialogModule],
  templateUrl: './list-view.html',
  styleUrl: './list-view.css',
})
export class ListView implements OnInit {
  public listPost: PostResponseDto[] = [];

  public visible: boolean = false;

  constructor(private postService: PostService) {}

  showDialog() {
    this.visible = true;
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.postService.getPosts().subscribe((response) => {
      this.listPost = response.data;
    });
  }
}
