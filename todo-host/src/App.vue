<template>
    <h1>Module Federation TODO App</h1>
    <div>
      <!-- remote UI -->
      <RemoteTodoList />
      <!-- remote stats -->
      <RemoteTodoStats />
    </div>
  </template>
  
  <script setup>
  import { defineAsyncComponent } from 'vue';
  
  const RemoteTodoList = defineAsyncComponent(() =>
    import('todo-remote/TodoList')
  );
  const RemoteTodoStats = defineAsyncComponent(() =>
    import('todo-stat/TodoStats')
  );
  </script>