# e-commerce-ssd

Proyecto de tienda en línea desarrollado con Next.js.

[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/Angel-Raa/nextjs-Ecommerce)

## Tabla de Contenidos

- [Descripción](#descripción)
- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Estructura-del-Proyecto](#estructura-del-proyecto)
- [Comandos-Útiles](#comandos-útiles)
- [Contribuir](#contribuir)
- [Licencia](#licencia)

## Descripción

e-commerce-ssd es una aplicación web para la venta de productos, con funcionalidades de catálogo, carrito de compras y gestión de usuarios.

## Tecnologías

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Node.js](https://nodejs.org/) o [Bun](https://bun.sh/)
- [Tailwind CSS](https://tailwindcss.com/)

## Instalación

1. Clona el repositorio:

    ```bash
    git clone https://github.com/Angel-Raa/nextjs-Ecommerce.git
    cd e-commerce-ssd
    ```

2. Instala dependencias:

    ```bash
    bun install
    ```

3. Configura variables de entorno en `.env.local` (puedes usar el archivo `.env.template` como referencia).

4. **Levanta la base de datos (PostgreSQL) con Docker:**

    ```bash
    docker run --name ecommerce-ssd-db -e POSTGRES_USER=tu_usuario -e POSTGRES_PASSWORD=tu_password -e POSTGRES_DB=tu_db -p 5432:5432 -d postgres:15
    ```

    > Cambia `tu_usuario`, `tu_password` y `tu_db` por los valores que usarás en tu `.env.local`.

5. Inicia el servidor de desarrollo:

    ```bash
    bun run dev
    ```

## Estructura del Proyecto

```
/(public)         # Rutas y vistas principales
/components    # Componentes reutilizables
/lib         # Utilidades y helpers
/public        # Archivos estáticos
```

## Comandos Útiles

- `bun run dev`: Inicia el servidor de desarrollo.
- `bun run build`: Compila la aplicación para producción.
- `bun run start`: Inicia la aplicación en modo producción.
- `bunx prisma migrate dev`: Correr las migraciones de Prisma.
- `bunx prisma db seed`: Ejecuta el script de seed para poblar la base de datos con datos iniciales.

### Ejecutar Seed

Para poblar la base de datos con datos iniciales, ejecuta:

```bash
bunx prisma db seed
```

Asegúrate de que la base de datos esté corriendo y la configuración en `.env.local` sea correcta antes de ejecutar este comando.

## Contribuir

1. Haz un fork del repositorio.
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit.
4. Envía un pull request.

## Licencia

Este proyecto está bajo la licencia MIT.
