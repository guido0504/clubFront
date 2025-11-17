// src/app/paginas/inicio/inicio.ts
import { AfterViewInit, Component, ElementRef, OnDestroy, Inject, PLATFORM_ID, ViewChildren, QueryList, Renderer2 } from '@angular/core';
import { isPlatformBrowser } from '@angular/common'; // Necesitas importar esto

@Component({
  selector: 'app-inicio',
  standalone: true, // Asumo que es un componente standalone
  imports: [],
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.css']
})
export class Inicio implements AfterViewInit, OnDestroy {

  // 1. Referencias al DOM de Angular
  // Obtenemos la lista de todas las imágenes con la referencia #imagenCarrusel
  @ViewChildren('imagenCarrusel') imagenesQuery!: QueryList<ElementRef<HTMLImageElement>>;
  
  // Obtenemos el elemento contenedor del carrusel para aplicar la traslación
  @ViewChildren('carruselContenedor') carruselContenedorQuery!: QueryList<ElementRef<HTMLElement>>;

  // Variables para controlar el carrusel
  private indiceActual: number = 0;
  private totalImagenes: number = 0;
  private intervaloCarrusel: any;

  // 2. INYECTAR SERVICIOS NECESARIOS
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2 // Inyectamos Renderer2 para manipulación segura del DOM
  ) {}

  ngAfterViewInit(): void {
    // 3. SOLO ejecutar lógica DOM si estamos en el navegador
    if (isPlatformBrowser(this.platformId)) { 
      // Al usar ViewChildren, se inicializan después de la vista.
      this.totalImagenes = this.imagenesQuery.length;

      if (this.totalImagenes > 0) {
        this.iniciarAutoPlay();
        // Aseguramos que la primera imagen esté visible al inicio
        this.actualizarCarrusel();
      }
    }
  }
  
  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
        if (this.intervaloCarrusel) {
          clearInterval(this.intervaloCarrusel);
        }
    }
  }

  /**
   * Navega a la imagen anterior o siguiente.
   * @param direccion - 1 para siguiente, -1 para anterior.
   */
  public navegar(direccion: number): void {
    if (this.totalImagenes === 0) return;

    // Detenemos el autoplay al interactuar
    this.detenerAutoPlay();

    this.indiceActual += direccion;

    // Lógica para loop (bucle)
    if (this.indiceActual >= this.totalImagenes) {
      this.indiceActual = 0;
    } else if (this.indiceActual < 0) {
      this.indiceActual = this.totalImagenes - 1;
    }

    this.actualizarCarrusel();
    
    // Reiniciamos el autoplay después de un breve retraso (opcional)
    this.iniciarAutoPlay();
  }
  
  /**
   * Actualiza el estilo del contenedor del carrusel para mostrar la imagen correcta.
   */
  private actualizarCarrusel(): void {
    // Calculamos el desplazamiento, -100% por cada imagen
    const offset = this.indiceActual * -100;
    
    // Obtenemos el primer (y único) contenedor de carrusel
    const carrusel = this.carruselContenedorQuery.first?.nativeElement;

    if (carrusel) {
      // Usamos Renderer2 para aplicar la transformación CSS de forma segura
      this.renderer.setStyle(
        carrusel, 
        'transform', 
        `translateX(${offset}%)`
      );
    }
  }

  /**
   * Inicia la rotación automática de las imágenes.
   */
  private iniciarAutoPlay(): void {
    // Si ya está activo, no hacemos nada
    if (this.intervaloCarrusel) return; 

    // Solo se ejecuta en el navegador
    if (isPlatformBrowser(this.platformId)) {
      this.intervaloCarrusel = setInterval(() => {
        this.navegar(1); // Mover a la siguiente imagen
      }, 5000); // Cambia cada 5 segundos
    }
  }

  /**
   * Detiene la rotación automática.
   */
  private detenerAutoPlay(): void {
    if (this.intervaloCarrusel) {
      clearInterval(this.intervaloCarrusel);
      this.intervaloCarrusel = null;
    }
  }
}