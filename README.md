# Clean Architecture — Node.js + TypeScript

Proyecto de demostración/presentación que ilustra cómo aplicar los principios de **Clean Architecture** en una aplicación backend construida con **Node.js**, **Express** y **TypeScript**.

El repositorio incluye tanto el servidor con su estructura de capas como una presentación interactiva en el navegador que explica visualmente el flujo de datos entre las distintas capas de la arquitectura.

---

## ¿De qué trata el proyecto?

El objetivo principal es mostrar, de forma práctica y didáctica, cómo organizar el código de una aplicación en capas bien definidas y desacopladas entre sí. Cada capa tiene una única responsabilidad:

- **Routes** → define qué URL responde a qué controlador.
- **Controllers** → recibe la request HTTP, delega la lógica al servicio y devuelve la response.
- **Services** → contiene la lógica de negocio pura, sin ninguna dependencia de HTTP o Express.
- **Models** → define los tipos e interfaces del dominio.
- **Middlewares** → se ejecutan antes de llegar al controlador (p. ej., logging de cada request).
- **Utils** → herramientas reutilizables en toda la aplicación (p. ej., el logger con colores en consola).

El servidor expone dos endpoints:

| Método | Ruta           | Descripción                                      |
|--------|----------------|--------------------------------------------------|
| GET    | `/`            | Sirve la presentación interactiva (`index.html`) |
| GET    | `/api/message` | Devuelve un JSON con el mensaje de bienvenida    |

---

## Stack tecnológico

| Herramienta      | Versión     | Rol                                          |
|------------------|-------------|----------------------------------------------|
| Node.js          | ≥ 18        | Entorno de ejecución                         |
| TypeScript       | ^5.3.3      | Tipado estático y compilación                |
| Express          | ^4.18.2     | Framework HTTP                               |
| ts-node          | ^10.9.2     | Ejecución directa de TypeScript en desarrollo|

---

## Estructura del proyecto

```
miapp/
├── public/
│   └── index.html              # Presentación interactiva de la arquitectura
├── src/
│   ├── index.ts                # Entry point: ensambla el servidor
│   ├── routes/
│   │   └── welcome.routes.ts   # Define las rutas disponibles
│   ├── controllers/
│   │   └── welcome.controller.ts  # Maneja requests y responses
│   ├── services/
│   │   └── welcome.service.ts  # Lógica de negocio pura
│   ├── models/
│   │   └── welcome.model.ts    # Interfaces y tipos del dominio
│   ├── middlewares/
│   │   └── logger.middleware.ts  # Logging de cada request entrante
│   └── utils/
│       └── logger.ts           # Clase Logger con niveles: info, warn, error
├── tests/                      # Carpeta preparada para pruebas
├── package.json
└── tsconfig.json
```

---

## Flujo de una request

```
Request HTTP
    │
    ▼
[ Middleware ] — logger.middleware.ts — registra método y URL
    │
    ▼
[ Routes ] — welcome.routes.ts — enruta al controlador correspondiente
    │
    ▼
[ Controller ] — welcome.controller.ts — delega al servicio
    │
    ▼
[ Service ] — welcome.service.ts — ejecuta la lógica de negocio
    │
    ▼
[ Model ] — welcome.model.ts — estructura los datos de respuesta
    │
    ▼
Response HTTP (JSON o HTML)
```

---

## Instalación y uso

### Requisitos previos

- Node.js ≥ 18
- npm ≥ 9

### Pasos

```bash
# 1. Clonar el repositorio
git clone <url-del-repositorio>
cd miapp

# 2. Instalar dependencias
npm install

# 3. Ejecutar en modo desarrollo (con ts-node)
npm run dev

# 4. Abrir en el navegador
# http://localhost:3000           → Presentación interactiva
# http://localhost:3000/api/message → API JSON
```

### Scripts disponibles

| Script        | Descripción                                            |
|---------------|--------------------------------------------------------|
| `npm run dev` | Inicia el servidor en desarrollo usando `ts-node`      |
| `npm run build` | Compila TypeScript a JavaScript en la carpeta `dist/` |
| `npm start`   | Ejecuta el servidor compilado con Node.js              |

---

## Configuración TypeScript

El archivo `tsconfig.json` está configurado para compilar a **ES2020** con módulos CommonJS, modo estricto habilitado y soporte para interoperabilidad con módulos ES:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
```

---

## Principios aplicados

Este proyecto ilustra los siguientes principios de diseño de software:

- **Single Responsibility Principle (SRP):** cada archivo/clase tiene una única razón para cambiar.
- **Separation of Concerns:** la lógica HTTP (Express) está completamente separada de la lógica de negocio.
- **Dependency Inversion:** los servicios no dependen del framework, lo que facilita su testeo y reemplazo.
- **Clean Architecture:** las capas internas (Models, Services) no conocen las capas externas (Routes, Controllers, Express).

---

## Presentación interactiva

Al acceder a `http://localhost:3000`, el servidor sirve una presentación de diapositivas construida en HTML/CSS/JS puro. La presentación recorre visualmente cada capa de la arquitectura, muestra el flujo de datos y permite navegar con teclado (`←` / `→`) o con los botones en pantalla.

---

## Licencia

Proyecto de uso libre para fines educativos y de demostración.
