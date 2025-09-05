import { Routes } from '@angular/router';
import { Inicio } from './paginas/inicio/inicio';
import { Institucional } from './paginas/institucional/institucional';
import { Socio } from './paginas/socio/socio';
import { Voley } from './paginas/voley/voley';
import { Boxeo } from './paginas/boxeo/boxeo';
import { Futbol } from './paginas/futbol/futbol';
import { Tango } from './paginas/tango/tango';
import { TallerDeLectura } from './paginas/taller-de-lectura/taller-de-lectura';
import { ArtesMarciales } from './paginas/artes-marciales/artes-marciales';
import { Patin } from './paginas/patin/patin';
import { Eventos } from './paginas/eventos/eventos';
import { Noticias } from './paginas/noticias/noticias';
import { Login } from './paginas/login/login';
import { Salud } from './paginas/salud/salud';

export const routes: Routes = [ 

        { path: '', component: Inicio }, 
        { path: 'institucional', component: Institucional }, 
        { path: 'socio', component: Socio }, 
        { path: 'voley', component: Voley }, 
        { path: 'boxeo', component: Boxeo }, 
        { path: 'futbol', component: Futbol }, 
        { path: 'tango', component: Tango }, 
        { path: 'taller-de-lectura', component: TallerDeLectura }, 
        { path: 'artes-marciales', component: ArtesMarciales }, 
        { path: 'patin', component: Patin }, 
        { path: 'salud', component: Salud }, 
        { path: 'eventos', component: Eventos }, 
        { path: 'noticias', component: Noticias }, 
        { path: 'login', component: Login }, 
        { path: '**', redirectTo: '' }, 

];
