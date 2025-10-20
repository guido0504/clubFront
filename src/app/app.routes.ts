import { Routes } from '@angular/router';
import { List } from './paginas/admin-posts/list/list';
import { Editor } from './paginas/admin-posts/editor/editor';
import { Inicio } from './paginas/inicio/inicio';
import { Institucional } from './paginas/institucional/institucional';
import { Socio } from './paginas/socio/socio';
import { Actividades } from './paginas/actividades/actividades';
import { Noticias } from './paginas/noticias/noticias';
import { Login } from './paginas/login/login';
import { Salud } from './paginas/salud/salud';
import { ListView } from './paginas/eventos/view/list-view/list-view';

export const routes: Routes = [ 

        { path: '', component: Inicio }, 
        { path: 'institucional', component: Institucional }, 
        { path: 'socio', component: Socio }, 
        { path: 'actividades/:id', component: Actividades }, // Ruta dinámica
        { path: 'salud', component: Salud }, 
        { path: 'eventos', component: ListView }, 
        { path: 'noticias', component: Noticias }, 
        { path: 'login', component: Login }, 
        { path: 'admin/posts', component: List }, 
        { path: 'admin/posts/new', component: Editor }, 
        { path: 'admin/posts/edit/:id', component: Editor }, 
        { path: '**', redirectTo: '' }, 

];



