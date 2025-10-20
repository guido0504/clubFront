import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostService } from '../../../service/post/post.service';
import { Post } from '../../../model/post';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink], 
  templateUrl: './editor.html',
  styleUrls: ['./editor.css']
})
export class Editor implements OnInit {
  postForm: FormGroup;
  secciones: string[] = [];
  isEditMode: boolean = false;
  postId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // Inicialización del formulario con validaciones
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(100)]],
      body: ['', Validators.required],
      section: ['', Validators.required],
      imageUrl: [''], 
      videoUrl: ['']
    });
  }

  ngOnInit(): void {
    // 1. Cargar las secciones disponibles
    this.postService.getSections().subscribe(data => this.secciones = data);

    // 2. Determinar si es Edición o Creación y cargar datos
    this.route.paramMap.pipe(
      // Utilizamos switchMap para cambiar del observable de la ruta al observable del post
      switchMap(params => {
        const idParam = params.get('id');
        if (idParam) {
          this.isEditMode = true;
          this.postId = +idParam;
          // Si hay ID, devuelve el observable del post
          return this.postService.getPost(this.postId);
        }
        // Si no hay ID (modo 'new'), devuelve un observable vacío
        return of(null);
      })
    ).subscribe({
      next: (post: Post | null) => {
        if (post) {
          // 💡 LA CLAVE: Usamos patchValue para cargar el objeto Post en el formulario
          this.postForm.patchValue(post);
        }
      },
      error: (err) => {
        console.error('Error al cargar la publicación:', err);
        alert('Error: No se pudo cargar la publicación. Revisa la consola.');
        this.router.navigate(['/admin/posts']);
      }
    });
  }

  onSubmit(): void {
    if (this.postForm.invalid) {
      alert('¡Atención! Hay campos obligatorios sin completar.');
      this.postForm.markAllAsTouched(); 
      return;
    }

    const postData: Post = this.postForm.value;

    if (this.isEditMode && this.postId) {
      postData.id = this.postId;
      this.postService.updatePost(postData).subscribe(() => {
        alert('Publicación actualizada con éxito.');
        this.router.navigate(['/admin/posts']);
      });
    } else {
      this.postService.createPost(postData).subscribe(() => {
        alert('Publicación creada con éxito.');
        this.router.navigate(['/admin/posts']);
      });
    }
  }

  onFileChange(event: any, field: 'imageUrl' | 'videoUrl'): void {
    const file = event.target.files[0];
    if (file) {
      // Simulación: Genera una URL aleatoria para probar la previsualización
      const simulatedUrl = field === 'imageUrl' 
        ? `https://picsum.photos/300/200?rand=${Math.random()}` 
        : `https://www.youtube.com/embed/dQw4w9WgXcQ?rand=${Math.random()}`;
      
      this.postForm.get(field)?.setValue(simulatedUrl);
      alert(`Archivo ${file.name} simulado. Se ha asignado una URL temporal.`);
    }
  }
}