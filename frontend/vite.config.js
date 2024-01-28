import { defineConfig } from 'vite';
import React from 'react';
import ViteReact from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ViteReact()],
});
