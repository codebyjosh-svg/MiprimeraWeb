# TechCar Services

Sitio estático de presentación para un taller de diagnóstico y mantenimiento automotriz. Está construido con HTML, CSS y JavaScript, sin dependencias de instalación ni servicios externos obligatorios.

## Probar la página

1. Abre la carpeta del proyecto.
2. Haz doble clic en `index.html` para verlo en tu navegador.
3. Prueba la navegación, las tarjetas de servicios y el estimador. En una pantalla estrecha, el botón de menú abre la navegación adaptable.

El estimador funciona solo en el navegador: no envía datos ni agenda citas. Los precios que aparecen son ejemplos; actualízalos con las tarifas reales antes de publicar.

## Archivos

- `index.html`: contenido, metadatos y estructura semántica.
- `styles.css`: identidad visual y adaptación a escritorio, tableta y celular.
- `script.js`: menú móvil, selección de servicio y cálculo orientativo.

Las ilustraciones están integradas como SVG y las fuentes utilizan alternativas disponibles en el dispositivo. No se requieren imágenes, paquetes, API ni rutas de archivos locales.

## Publicar gratuitamente en GitHub Pages

1. Crea un repositorio en GitHub. Para que el sitio sea público y gratuito con GitHub Pages, usa un repositorio público, sujeto a las condiciones actuales de GitHub.
2. Añade `index.html`, `styles.css`, `script.js` y `README.md` en la raíz del repositorio.
3. En GitHub, abre **Settings → Pages**.
4. En **Build and deployment**, elige **Deploy from a branch**.
5. Selecciona la rama principal (`main`) y la carpeta **/(root)**; guarda los cambios.
6. Espera a que termine el despliegue. GitHub mostrará la dirección pública en la misma sección de Pages.
7. Abre esa dirección y revisa el sitio tanto en escritorio como en celular.

La publicación hace público el contenido del repositorio. Revisa los archivos y elimina cualquier información privada antes de subirlos. No compartas credenciales, tokens ni claves API.

## Antes de publicar

- Sustituye los precios de ejemplo en `script.js` por información aprobada por el taller, o elimina el estimador si no deseas mostrar precios.
- Actualiza los textos comerciales para que describan fielmente el negocio.
- Añade un medio de contacto real solo cuando exista y esté verificado. Esta versión no ofrece un formulario de envío ni una reserva simulada.
