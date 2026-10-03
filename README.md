# ITX Front-End Test

SPA desarrollada con React + Vite para la prueba Front-End de ITX.

## Requisitos de la prueba cubiertos

- SPA con React y React Router.
- Listado de productos (PLP).
- Búsqueda en tiempo real por marca y modelo.
- Grid responsive con un máximo de 4 elementos por fila.
- Detalle de producto (PDP) en dos columnas.
- Selectores de almacenamiento y color.
- Añadir producto al carrito mediante `POST /api/cart`.
- Contador del carrito persistido en `localStorage`.
- Caché de datos del API durante 1 hora.
- Revalidación automática cuando la caché expira.
- Estados de carga y error.
- Tests con Vitest.
- Lint con ESLint.

Los endpoints indicados en el documento son:

- `GET /api/product`
- `GET /api/product/:id`
- `POST /api/cart`

El dominio configurado por la prueba es `https://itx-frontend-test.onrender.com`.

## Instalación

```bash
npm install
```

Opcionalmente, copia `.env.example` a `.env` para cambiar el dominio:

```bash
cp .env.example .env
```

## Desarrollo

```bash
npm run start
```

## Producción

```bash
npm run build
npm run preview
```

## Tests

```bash
npm test
```

## Lint

```bash
npm run lint
```
