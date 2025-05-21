import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';

export const useTodoStore = defineStore('todo', () => {
  const todos = ref([]);

  async function fetchTodos() {
    const { data } = await axios.get('http://localhost:3000/api/todos');
    todos.value = data;
  }

  async function addTodo(todo) {
    const { data } = await axios.post('http://localhost:3000/api/todos', todo);
    todos.value.push(data);
  }

  async function updateTodo(todo) {
    await axios.put(`http://localhost:3000/api/todos/${todo.id}`, todo);
  }

  return { todos, fetchTodos, addTodo, updateTodo };
});