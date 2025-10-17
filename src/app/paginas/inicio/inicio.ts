import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio implements AfterViewInit, OnDestroy {

  // Variables para controlar el carrusel
  private indiceActual: number = 0;
  private totalImagenes: number = 0;
  private intervaloCarrusel: any; // Para manejar el auto-play

  // ElementRef nos da acceso al DOM del componente
  constructor(private el: ElementRef) {}

  // Este método se ejecuta una vez que la vista (HTML) ha sido renderizada
  ngAfterViewInit(): void {
    // Usamos nativeElement para acceder al DOM
    const carruselImagenes = this.el.nativeElement.querySelector('.carrusel-imagenes');
    const controles = this.el.nativeElement.querySelectorAll('.carrusel-control');

    if (carruselImagenes && controles.length > 0) {
        const imagenes = this.el.nativeElement.querySelectorAll('.carrusel-imagenes img');
        this.totalImagenes = imagenes.length;

        this.configurarControles(controles, carruselImagenes);
        this.iniciarAutoPlay(carruselImagenes);
    }
  }
  
  // Limpiamos el intervalo cuando el componente se destruye para evitar fugas de memoria
  ngOnDestroy(): void {
    if (this.intervaloCarrusel) {
      clearInterval(this.intervaloCarrusel);
    }
  }

  // Lógica para mover el carrusel
  private moverCarrusel(carruselImagenes: HTMLElement): void {
      const desplazamiento = -this.indiceActual * 100;
      carruselImagenes.style.transform = `translateX(${desplazamiento}%)`;
  }

  // Configuración de los botones de control
  private configurarControles(controles: NodeListOf<HTMLElement>, carruselImagenes: HTMLElement): void {
    controles.forEach(control => {
        control.addEventListener('click', () => {
            if (control.classList.contains('siguiente')) {
                this.indiceActual = (this.indiceActual + 1) % this.totalImagenes;
            } else if (control.classList.contains('anterior')) {
                // El + this.totalImagenes asegura que el resultado sea siempre positivo
                this.indiceActual = (this.indiceActual - 1 + this.totalImagenes) % this.totalImagenes;
            }
            this.moverCarrusel(carruselImagenes);
        });
    });
  }

  // Inicialización del auto-play
  private iniciarAutoPlay(carruselImagenes: HTMLElement): void {
    this.intervaloCarrusel = setInterval(() => {
        this.indiceActual = (this.indiceActual + 1) % this.totalImagenes;
        this.moverCarrusel(carruselImagenes);
    }, 4000);
  }
}
