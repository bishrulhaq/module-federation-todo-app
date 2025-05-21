import { createApp } from 'vue';
import { createPinia } from 'pinia';
import TodoList from './components/TodoList.vue';

const app = createApp(TodoList);
app.use(createPinia());
app.mount('#remote-todo');