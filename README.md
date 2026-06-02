# CMS Application

## Prerequisites:

- [Node.js](https://nodejs.org/) >=18
- [Strapi](http://localhost:1337) running locally for API

## Architecture:

- Nuxt 4 with Vue 3 Composition API
- Feature-based component structure
- TypeScript throughout
- Strapi CMS backend integration

## Environment Variables

Create `.env` file in project root:

```env
# Strapi API URL (required)
NUXT_PUBLIC_STRAPI_URL=http://localhost:1337

# Nuxt dev server port (optional)
PORT=3000

# Production build configuration
NODE_ENV=production
```

## Setup and Development Flow:

1. Install dependencies: `npm install`
2. Start Strapi CMS server on `http://localhost:1337`
3. Create `.env` file with your Strapi API URL
4. Start development server: `npm run dev`
5. Build for production: `npm run build`
6. Preview production build: `npm run preview`

## Technical Stack:

- [Nuxt 4](https://nuxt.com/) with Vue 3
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) v4
- [@nuxt/ui](https://ui.nuxt.com/) component library
- [@tanstack/vue-query](https://tanstack.com/query/v5) for data fetching
- [Strapi CMS](https://strapi.io/) backend

## Package Managers:

- npm (primary)
- pnpm, yarn, bun also supported

## Project Structure:

```
app/
├── components/          # Reusable Vue components
├── composables/         # Vue 3 composables (data fetching hooks)
├── constants/           # Application constants
├── pages/              # Nuxt pages/routes
├── types/              # TypeScript type definitions
├── assets/             # Static assets (images, fonts, styles)
├── layouts/            # Layout components
├── plugins/            # Vue plugins
└── app.vue             # Root application component
```

## Data Fetching Strategy:

- Each API endpoint has its own composable in `app/composables/`
- Uses `@tanstack/vue-query` for caching and state management
- Type-safe Strapi API integration
- Automatic data mapping and transformation

## Code Quality:

- [ESLint](https://eslint.org/) with Nuxt configuration
- [Prettier](https://prettier.io/) for code formatting
- [Vitest](https://vitest.dev/) for unit testing
- [@vue/test-utils](https://test-utils.vuejs.org/) for component testing
- TypeScript strict mode enabled

## Development Commands

| Command                 | Description                                         |
| ----------------------- | --------------------------------------------------- |
| `npm install`           | Install dependencies                                |
| `npm run dev`           | Start development server on `http://localhost:3000` |
| `npm run build`         | Build for production                                |
| `npm run preview`       | Preview production build locally                    |
| `npm run generate`      | Generate static site                                |
| `npm run format`        | Format code with Prettier                           |
| `npm run test`          | Run unit tests with Vitest                          |
| `npm run test:ui`       | Run Vitest with UI interface                        |
| `npm run test:coverage` | Run tests with coverage reporting                   |

## Testing:

- Unit tests: `tests/unit/` directory
- Component tests with Vue Test Utils
- Composables testing with Vitest

## Strapi Integration:

- API endpoints configured in `app/constants/api.ts`
- Dynamic content types supported
- Image optimization with Strapi media library
- Rich text content with Strapi components

## Key Features:

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance**: Automatic code splitting, image optimization
- **SEO**: Server-side rendering with Nuxt
- **Type Safety**: Full TypeScript coverage
- **Developer Experience**: Hot module replacement, TypeScript support
- **CMS Integration**: Flexible content management with Strapi

## Browser Support:

- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11 not supported
- Mobile Safari and Chrome
