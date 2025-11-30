import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // 🔥 ISSO corrige os caminhos dos CSS/JS no deploy
  plugins: [react()],
});
