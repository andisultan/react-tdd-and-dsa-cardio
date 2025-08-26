import { defineConfig, type UserConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // Adds jsdom for browser-like testing
    globals: true, // Enables global variables like describe, it, etc.
    setupFiles: './test-setup.ts', // Change to .ts for TypeScript setup file
    coverage: {
      provider: 'istanbul', // or 'v8',
      reporter: ['text', 'json', 'html'],
    },
  }
} as UserConfig)
