// src/main.server.ts

// 1. Asegúrate de tener las importaciones corregidas de la respuesta anterior:
import { ApplicationRef } from '@angular/core'; 
// Ajusta el tipo de contexto según lo que te funcione (BootstrapContext o similar)
import type { BootstrapContext } from '@angular/platform-browser'; // O el tipo que usaste previamente sin errores

import { bootstrapApplication } from '@angular/platform-browser'; 
import { App } from './app/app'; // Tu componente principal
import { config } from './app/app.config.server'; // Tu configuración de servidor

/**
 * Función de bootstrapping para el renderizado del lado del servidor (SSR).
 */
// Asegúrate de que el tipo de 'context' sea el correcto (BootstrapContext, etc.)
function bootstrap(context: BootstrapContext): Promise<ApplicationRef> { 
  // CORRECCIÓN CLAVE: Pasa el objeto 'context' como tercer argumento
  return bootstrapApplication(App, config, context); // <--- ¡AQUÍ ESTÁ EL CAMBIO!
}
export default bootstrap;