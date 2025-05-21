<template>
  <div class="container py-5">
    <!-- Hero Header -->
    <section class="hero is-light has-text-black">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-2">Module Federation TODO App</h1>
          <p class="subtitle is-5">Manage your tasks with ease</p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="section">
      <div class="columns is-variable is-6">
        <!-- Todo List Card -->
        <div class="column is-8">
          <RemoteTodoList />
        </div>

        <!-- Stats Card -->
        <div class="column is-4">
          <RemoteTodoStats />
        </div>
      </div>
    </section>
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

<style>
/* Global tweaks */
html,
body {
  background-color: #f5f5f5;
  color: #000;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  min-height: 100vh;
}


/* Tweak hero to feel a bit more prominent */
.hero.is-light {
  background-color: #ffffff;
}
</style>
