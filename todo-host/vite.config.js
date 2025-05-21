import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';

export default {
  build: {
    target: 'esnext',
    assetsDir: 'assets'
  },
  plugins: [
    vue(),
    federation({
      name: 'todo-host',
      remotes: {
        'todo-remote': 'http://localhost:5001/assets/remoteEntry.js',
        'todo-stat':   'http://localhost:5002/assets/remoteEntry.js'
      },
      shared: ['vue', 'pinia', 'axios']
    })
  ],
  server: { port: 5000 }
};