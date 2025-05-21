<template>
  <div class="box">
    <h2 class="title is-4 has-text-centered mb-4">Stats</h2>
    
    <div class="tile is-ancestor">
      <div class="tile is-parent py-2">
        <article class="tile is-child notification is-primary">
          <p class="title has-text-centered">{{ total }}</p>
          <p class="subtitle has-text-centered">Total Tasks</p>
        </article>
      </div>
    </div>
    
    <div class="tile is-ancestor">
      <div class="tile is-parent py-2">
        <article class="tile is-child notification is-success">
          <p class="title has-text-centered">{{ completed }}</p>
          <p class="subtitle has-text-centered">Completed</p>
        </article>
      </div>
      <div class="tile is-parent py-2">
        <article class="tile is-child notification is-warning">
          <p class="title has-text-centered">{{ pending }}</p>
          <p class="subtitle has-text-centered">Pending</p>
        </article>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { computed, onMounted } from 'vue';
import { useTodoStore } from 'shared/todo-store';
  
const store = useTodoStore();
  
onMounted(() => {
  if (!store.todos || store.todos.length === 0) {
    store.fetchTodos();
  }
});
  
const total = computed(() => store.todos?.length || 0);
const completed = computed(() => store.todos?.filter(t => t.completed).length || 0);
const pending = computed(() => total.value - completed.value);
</script>

<style scoped>
.notification {
  transition: all 0.3s ease;
}
.notification:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}
</style>