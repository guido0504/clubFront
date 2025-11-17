import { bootstrapApplication } from '@angular/platform-browser'; 

// Importa tu componente principal (Asegúrate de que el nombre sea el que usa tu proyecto: App o AppComponent)
import { App } from './app/app'; 
// Importa tu configuración específica para el servidor (necesaria para SSR)
import { config } from './app/app.config.server'; 

/**
 * Función de bootstrapping para el renderizado del lado del servidor (SSR).
 * * En Angular moderno, esta función simplemente se encarga de llamar a 
 * bootstrapApplication con el componente raíz y la configuración del servidor.
 * * La sintaxis moderna no requiere el argumento 'context' y, por lo tanto, no
 * genera los errores TS2554 ni TS2305 que estabas viendo.
 */
const bootstrap = () => bootstrapApplication(App, config);

// Exporta la función de bootstrap para que el proceso de SSR pueda usarla
export default bootstrap;