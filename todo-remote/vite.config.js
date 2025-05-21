import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';
import { resolve } from "path";

export default {
    build: {
        target: 'esnext',
        assetsDir: 'assets'
    },
    plugins: [
        vue(),
        federation({
            name: 'todo-remote',
            filename: 'remoteEntry.js',
            exposes: {
                './TodoList': './src/components/TodoList.vue'
            },
            shared: ['vue', 'pinia', 'axios']
        })
    ],
    server: { port: 5001 },
    resolve: {
        alias: {
            "shared/todo-store": resolve(__dirname, "../shared/todo-store"),
            axios: resolve(__dirname, 'node_modules/axios/dist/axios.min.js'),
        }
    }
};