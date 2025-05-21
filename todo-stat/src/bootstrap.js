import { createApp } from 'vue';
import { createPinia } from 'pinia';
import TodoStats from './components/TodoStats.vue';

const app = createApp(TodoStats);
app.use(createPinia());
app.mount('#remote-stats');