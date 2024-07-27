import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react';
import {viteStaticCopy} from 'vite-plugin-static-copy';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    viteStaticCopy({
      targets: [
        {
          src: '.htaccess', // source file
          dest: ''          // destination directory within 'dist'
        }
      ]
    })
  ],
  server: {
    host: true
  }
})
