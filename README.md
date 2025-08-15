# CognialAI

A modern React + TypeScript application with Supabase integration, built with Vite and styled with TailwindCSS + shadcn/ui.

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS + shadcn/ui
- **Backend**: Supabase
- **Dev Environment**: VS Code with Dev Container

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Route components/views
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and helpers
└── integrations/
    └── supabase/       # Supabase client and type definitions

supabase/
├── config.toml         # Supabase local development config
├── functions/          # Edge Functions
└── migrations/         # Database migration files
```

## 🛠️ Setup & Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## 🔧 Configuration

### Supabase
- Project ID: `tzjvmhoyxejewhplyzpz`
- Local API: `http://localhost:54321`
- Auth: `http://localhost:9999`

### TailwindCSS
- Dark mode support with class-based toggling
- Custom CSS variables for theming
- shadcn/ui component library integration

## 📦 Key Dependencies

- `@supabase/supabase-js` - Supabase JavaScript client
- `tailwindcss` - Utility-first CSS framework  
- `tailwindcss-animate` - Animation utilities
- `class-variance-authority` - Component variants
- `clsx` & `tailwind-merge` - Conditional styling

## 🎯 Next Steps

The base project is now ready for CognialAI chat features implementation:

- [ ] Authentication system
- [ ] Chat interface components
- [ ] AI integration
- [ ] Real-time messaging
- [ ] User management
- [ ] Chat history

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
