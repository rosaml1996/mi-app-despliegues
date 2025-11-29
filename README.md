# Mi app de despliegues (Práctica 3.2)

Aplicación web sencilla desarrollada con Node.js y Express para la práctica 3.2 de la unidad de despliegue de aplicaciones.

## Tecnologías utilizadas

- Node.js
- Express
- Docker

## Funcionalidad

La aplicación expone dos rutas:

- `/` → Página HTML sencilla que muestra un mensaje de bienvenida y datos del host.
- `/health` → Endpoint de salud que devuelve un JSON con el estado de la aplicación.

## Ejecución en local (sin Docker)

```bash
npm install
npm start```

##La aplicación se expone en http://localhost:3000.

Ejecución con Docker

Construir la imagen:
```docker build -t mi-app-despliegues:local .```

Ejecutar el contenedor:
```docker run --rm -p 8082:3000 --name mi-app mi-app-despliegues:local```

La aplicación se expone en http://localhost:8082.


##Estructura del proyecto

app.js → Código principal de la aplicación Express.

package.json → Dependencias y scripts de npm.

Dockerfile → Definición de la imagen Docker.

README.md → Documentación técnica del proyecto.
