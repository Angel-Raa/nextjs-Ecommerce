# E-commerce SSD 🛒

Proyecto de tienda en línea desarrollado con Next.js.

[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/Angel-Raa/nextjs-Ecommerce)
[![Licencia MIT](https://img.shields.io/badge/Licencia-MIT-green.svg)](https://opensource.org/licenses/MIT)

## Tabla de Contenidos 📖

- [Características Principales](#características-principales-)
- [Demo en Vivo](#demo-en-vivo-)
- [Tecnologías](#tecnologías-)
- [Instalación](#instalación-)
- [Configuración](#configuración-)
- [Estructura del Proyecto](#estructura-del-proyecto-)
- [Comandos Útiles](#comandos-útiles-)
- [Contribuir](#contribuir-)
- [Licencia](#licencia-)

## Características Principales ✨

- Catálogo de productos con filtros y búsqueda
- Carrito de compras persistente
- Sistema de autenticación de usuarios
- Pasarela de pagos integrada
- Panel de administración
- Diseño responsive y mobile-first
- Optimizado para SEO

## Demo en Vivo 🌐

[Ver demo]() (No esta  disponible aun)

## Tecnologías 🛠️

- **Frontend**: Next.js 15+, React 18, TypeScript
- **Estilos**: Tailwind CSS 
- **Autenticación**: NextAuth.js
- **Pagos**: Stripe / PayPal API
- **Testing**: Jest
- **Deploy**: Vercel


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

6. Genera  Secret key

    ```bash
    openssl rand -base64 32
    ```

## Estructura del Proyecto

```
/src
│
├── /components         # Componentes reutilizables
├── /pages              # Rutas de la aplicación
├── /styles             # Estilos globales
├── /lib                # Utilidades y helpers
├── /context            # Contextos de React
├── /hooks              # Custom hooks
├── /services           # Lógica de API/services
├── /public             # Assets estáticos
└── /tests              # Pruebas unitarias
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
