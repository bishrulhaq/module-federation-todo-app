import { createApp } from 'vue';
import { createPinia } from 'pinia';
import TodoList from './components/TodoList.vue';
import 'bulma/css/bulma.min.css';

const app = createApp(TodoList);
app.use(createPinia());
app.mount('#remote-todo');