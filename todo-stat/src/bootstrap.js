import { createApp } from 'vue';
import { createPinia } from 'pinia';
import TodoStats from './components/TodoStats.vue';
import 'bulma/css/bulma.min.css';

const app = createApp(TodoStats);
app.use(createPinia());
app.mount('#remote-stats');