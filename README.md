# Andiva Landing Page

Landing page moderna construida con Next.js 16, React 19 y Tailwind CSS 4.

## 🚀 Tech Stack

- **Framework:** Next.js 16.0.10
- **React:** 19.2.0
- **Styling:** Tailwind CSS 4.1.9
- **UI Components:** Radix UI
- **Icons:** Lucide React
- **TypeScript:** 5.x
- **Analytics:** Vercel Analytics

## 📦 Instalación

```bash
# Instalar dependencias
pnpm install

# Modo desarrollo
pnpm dev

# Build para producción
pnpm build

# Iniciar servidor de producción
pnpm start
```

## 🌐 Deploy en Vercel

Este proyecto está optimizado para deployment en Vercel:

1. Push del código a GitHub
2. Importar el proyecto en Vercel
3. Vercel detectará automáticamente Next.js y configurará todo
4. Deploy automático en cada push

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/gonzacba17/andiva-landing)

## 📄 Estructura del Proyecto

```
andiva-landing/
├── app/              # App Router de Next.js
├── components/       # Componentes React reutilizables
├── hooks/            # Custom React hooks
├── lib/              # Utilidades y helpers
├── public/           # Assets estáticos
├── styles/           # Estilos globales
└── ...
```

## 🛠️ Variables de Entorno

Si tu proyecto requiere variables de entorno, crea un archivo `.env.local`:

```bash
# .env.local (ejemplo)
NEXT_PUBLIC_API_URL=tu_api_url
```

## 📝 Licencia

Privado - Todos los derechos reservados

## 👨‍💻 Desarrollo

Proyecto desarrollado con ❤️ por el equipo de Andiva
