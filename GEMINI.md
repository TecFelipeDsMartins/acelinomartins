# Project Overview: Acelino Martins - Personal Dancer

This project is a high-performance, responsive landing page for **Acelino Martins**, a professional Personal Dancer and Dance Escort specializing in Gaúcho traditions (Fandango) and ballroom dance in Porto Alegre and the surrounding region.

The application is built with **React 19**, **Vite 6**, and **TypeScript**, utilizing **Tailwind CSS 4** for styling and **Motion** for smooth animations. It features a data-driven architecture, interactive modals for booking simulations and image management, and localized persistence for content customization.

## Key Technologies
- **Frontend Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) (using `@tailwindcss/vite`)
- **Animations**: [Motion](https://motion.dev/) (formerly Framer Motion)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Type Safety**: [TypeScript](https://www.typescriptlang.org/)
- **AI Integration**: [@google/genai](https://www.npmjs.com/package/@google/genai) for Gemini API capabilities.

## Architecture and Structure
- `src/main.tsx`: Application entry point.
- `src/App.tsx`: Root component managing global layout, section orchestration, and state persistence (via `localStorage`).
- `src/components/`: Directory containing modular UI components (e.g., `Hero`, `ServicesSection`, `GallerySection`).
- `src/data/content.ts`: Central repository for all text content, statistics, and default image references.
- `src/types.ts`: Centralized TypeScript interfaces and types.
- `vite.config.ts`: Custom Vite configuration including `aistudioMediaPlugin` for optimized media serving.

## Building and Running

### Development
Start the development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
The server will be available at `http://localhost:3000`.

### Production
Build the project for production:
```bash
npm run build
```
Preview the production build locally:
```bash
npm run preview
```

### Maintenance
- **Lint/Type Check**: `npm run lint`
- **Clean Build Artifacts**: `npm run clean`

## Development Conventions

- **Component Organization**: New sections or complex UI elements should be added as functional components in `src/components/`.
- **Content Management**: All marketing copy and static data should be maintained in `src/data/content.ts` to ensure consistency and ease of translation/updates.
- **Styling**: Use Tailwind CSS utility classes. Custom CSS is kept minimal and located in `src/index.css`.
- **Images**: Default images are stored in `src/assets/images/`. The application supports dynamic image overrides persisted in `localStorage`.
- **Environment Awareness**: The project includes specific configurations for "AI Studio" environments (e.g., disabled HMR/Watch during agent edits via `DISABLE_HMR` environment variable).
- **Type Safety**: Maintain strict TypeScript definitions in `src/types.ts` for all shared data structures.

## AI and Metadata
The project is configured with `MAJOR_CAPABILITY_SERVER_SIDE_GEMINI_API` as per `metadata.json`, allowing for advanced AI-driven features such as content generation or image analysis within compatible environments.
