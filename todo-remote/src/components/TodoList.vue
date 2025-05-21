<template>
    <div>
      <h2>Todos</h2>
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          <label>
            <input type="checkbox" v-model="todo.completed" @change="update(todo)" />
            {{ todo.text }}
          </label>
        </li>
      </ul>
      <input v-model="newText" @keyup.enter="add" placeholder="Add todo" />
      <pre>{{ todos }}</pre>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useTodoStore } from 'shared/todo-store';
  import { storeToRefs } from 'pinia';
  
  const store = useTodoStore();
  const { todos } = storeToRefs(store);
  const newText = ref('');
  
  onMounted(() => {
    store.fetchTodos();
  });
  
  function add() {
    if (!newText.value) return;
    store.addTodo({ text: newText.value, completed: false });
    newText.value = '';
  }
  
  function update(todo) {
    store.updateTodo(todo);
  }
  </script>