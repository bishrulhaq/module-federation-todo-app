<template>
    <div>
      <h2>Stats</h2>
      <p>Total: {{ total }}</p>
      <p>Completed: {{ completed }}</p>
      <p>Pending: {{ pending }}</p>
    </div>
  </template>
  
  <script setup>
  import { computed, onMounted } from 'vue';
  import { useTodoStore } from 'shared/todo-store';
  
  const store = useTodoStore();
  
  onMounted(() => {
    if (!store.todos.length) store.fetchTodos();
  });
  
  const total = computed(() => store.todos.length);
  const completed = computed(() => store.todos.filter(t => t.completed).length);
  const pending = computed(() => total.value - completed.value);
  </script>