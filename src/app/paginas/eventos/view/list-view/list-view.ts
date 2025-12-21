import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { TableModule } from 'primeng/table';
import { PostService } from '../../../../service/post/post.service';
import { PostResponseDto } from '../../../../model/post';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-list-view',
  imports: [TableModule, CardModule, ButtonModule, DialogModule, DatePipe],
  templateUrl: './list-view.html',
  styleUrl: './list-view.css',
})
export class ListView implements OnInit {
  // Referencia a todos los botones "Leer Más" (usando ViewChildren)
  @ViewChildren('leerMasButton', { read: ElementRef })
  botonesLeerMas!: QueryList<ElementRef<HTMLButtonElement>>;

  public listPost: PostResponseDto[] = [];

  public visible: boolean = false;
  selectedPost?: PostResponseDto;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.postService.getPosts().subscribe((response) => {
      this.listPost = response.data.filter((n: any) => n.tipoEvento?.id === 1);
      console.log(this.listPost);
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
