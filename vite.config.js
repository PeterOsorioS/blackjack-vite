import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy'; // 👈 Así es como se debe importar

export default defineConfig({
  base: '/blackjack-vite/',
  plugins: [
    viteStaticCopy({ // 👈 Aquí ya no se usa ".default"
      targets: [
        {
          src: 'src/assets/cartas/*', // 📂 Ruta de imágenes en tu proyecto
          dest: 'assets/cartas' // 📂 Carpeta de destino en dist
        }
      ]
    })
  ]
});
