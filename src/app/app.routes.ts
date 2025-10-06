import { Routes } from '@angular/router';
import { Inicio } from './paginas/inicio/inicio';
import { Institucional } from './paginas/institucional/institucional';
import { Socio } from './paginas/socio/socio';
import { Actividades } from './paginas/actividades/actividades';
import { Eventos } from './paginas/eventos/eventos';
import { Noticias } from './paginas/noticias/noticias';
import { Login } from './paginas/login/login';
import { Salud } from './paginas/salud/salud';

export const routes: Routes = [ 

        { path: '', component: Inicio }, 
        { path: 'institucional', component: Institucional }, 
        { path: 'socio', component: Socio }, 
        { path: 'actividades/:id', component: Actividades }, // Ruta dinámica
        { path: 'salud', component: Salud }, 
        { path: 'eventos', component: Eventos }, 
        { path: 'noticias', component: Noticias }, 
        { path: 'login', component: Login }, 
        { path: '**', redirectTo: '' }, 

];