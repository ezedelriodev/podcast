# <span style="color: yellow;">Guía para ejecutar la aplicación en modo Desarrollo y Producción</span>

Esta guía proporciona instrucciones paso a paso para ejecutar la aplicación en dos modos diferentes: Desarrollo y Producción. Sigue las instrucciones correspondientes según tus necesidades.

## <span style="color: yellow;">Modo Desarrollo</span>

El modo Desarrollo se utiliza durante el proceso de desarrollo de la aplicación. En este modo, se habilitan herramientas como recarga automática de código y depuración.

### Requisitos previos

- Node.js instalado en tu sistema. Puedes descargarlo desde [nodejs.org](https://nodejs.org).
- Gestor de paquetes npm, incluido con Node.js.

### Pasos para ejecutar en modo Desarrollo

1. Clona el repositorio de Git en tu máquina local: https://github.com/ezedelriodev/podcast
2. Navega al directorio de la aplicación: `/podcast`
3. Instala las dependencias del proyecto: `npm install`
4. Inicia la aplicación en modo Desarrollo: `npm start`
5. Abre tu navegador web y navega a `http://localhost:3000` para ver la aplicación en funcionamiento.

## <span style="color: yellow;">Modo Producción</span>

El modo Producción se utiliza cuando la aplicación está lista para ser desplegada en un entorno de producción. En este modo, se optimiza el rendimiento y se deshabilitan las herramientas de desarrollo.

### Pasos para ejecutar en modo Producción

1. Sigue los pasos 1-3 del modo Desarrollo.
2. Compila la aplicación para producción: `npm run dev`

Se creará el directorio build con una compilación de producción de la aplicación.
Configure su servidor HTTP para que se atiendan las solicitudes a rutas estáticas. Una manera puede ser:

- Instalar serve: `npm install -g serve`
- y ejecutar con el comando: `serve -s build`

4. Abre tu navegador web y navega a URL que se muestra en la terminal para ver la aplicación en funcionamiento en modo de producción.
