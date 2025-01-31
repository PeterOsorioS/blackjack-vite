import {defineConfig} from 'vite'

export default defineConfig({
    base: '/blackjack-vite/',
    plugins: [
        viteStaticCopy({
          targets: [
            {
              src: 'src/assets/cartas/*', // Ruta de imágenes en tu proyecto
              dest: 'img' // Carpeta de destino en dist
            }
          ]
        })
      ]
})