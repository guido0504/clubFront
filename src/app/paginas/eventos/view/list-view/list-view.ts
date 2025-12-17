import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
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
  // Referencias a los elementos del Modal (usando ViewChild para IDs únicos)
  @ViewChild('modalOverlay') modalOverlayRef!: ElementRef<HTMLElement>;
  @ViewChild('cerrarModal') cerrarModalRef!: ElementRef<HTMLElement>;
  @ViewChild('modalTitulo') modalTituloRef!: ElementRef<HTMLElement>;
  @ViewChild('modalImagen') modalImagenRef!: ElementRef<HTMLImageElement>;
  @ViewChild('modalParrafo') modalParrafoRef!: ElementRef<HTMLElement>;

  // Referencia a todos los botones "Leer Más" (usando ViewChildren)
  @ViewChildren('leerMasButton', { read: ElementRef })
  botonesLeerMas!: QueryList<ElementRef<HTMLButtonElement>>;

  public listPost: PostResponseDto[] = [];

  public visible: boolean = false;

  constructor(private postService: PostService) {}

  showDialog() {
    this.visible = true;
  }

  ngOnInit() {
    //this.getAll();
  }

  getAll() {
    this.postService.getPosts().subscribe((response) => {
      this.listPost = response.data;
    });
  }

  // Se ejecuta después de que Angular inicializa la vista del componente y sus hijos.
  ngAfterViewInit(): void {
    // 1. Configurar eventos de los botones "Leer Más"
    this.configurarBotonesLeerMas();

    // 2. Configurar eventos de cierre del modal
    this.configurarCierreModal();
  }

  private configurarBotonesLeerMas(): void {
    this.botonesLeerMas.forEach((buttonRef: ElementRef<HTMLButtonElement>) => {
      buttonRef.nativeElement.addEventListener('click', (event: Event) => {
        event.preventDefault();
        this.mostrarModal(event.currentTarget as HTMLElement);
      });
    });
  }

  private configurarCierreModal(): void {
    const modalOverlay = this.modalOverlayRef.nativeElement;

    // Evento para el botón de cerrar
    this.cerrarModalRef.nativeElement.addEventListener('click', () => {
      this.cerrarModal();
    });

    // Evento para clic fuera del contenido del modal
    modalOverlay.addEventListener('click', (event: Event) => {
      if (event.target === modalOverlay) {
        this.cerrarModal();
      }
    });
  }

  private mostrarModal(buttonClicked: HTMLElement): void {
    // Buscar el <article> más cercano
    const article = buttonClicked.closest('p-card');

    if (!article) return; // Salir si no se encuentra el article

    // Obtener los datos usando querySelector dentro del article
    const titulo = article.querySelector('p-card-title')?.textContent || '';
    const imagenSrc = article.querySelector('img')?.src || '';
    const parrafo = article.querySelector('p')?.textContent || '';

    // Rellenar y mostrar el modal
    this.modalTituloRef.nativeElement.textContent = titulo;
    this.modalImagenRef.nativeElement.src = imagenSrc;
    this.modalParrafoRef.nativeElement.textContent = parrafo;
    this.modalOverlayRef.nativeElement.style.display = 'flex';
  }

  private cerrarModal(): void {
    this.modalOverlayRef.nativeElement.style.display = 'none';
  }
}
