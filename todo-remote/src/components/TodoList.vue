<template>
  <div class="box">
    <h2 class="title is-4">Todos</h2>
    
    <div class="field has-addons mb-4">
      <div class="control is-expanded">
        <input 
          class="input" 
          type="text" 
          v-model="newText" 
          @keyup.enter="add" 
          placeholder="What needs to be done?"
        >
      </div>
      <div class="control">
        <button 
          class="button is-primary" 
          @click="add" 
          :disabled="!newText.trim()"
        >
          Add Task
        </button>
      </div>
    </div>
    
    <div v-if="todos.length > 0">
      <div class="list has-hoverable-list-items">
        <div 
          v-for="todo in todos" 
          :key="todo.id" 
          class="list-item mb-2 p-3"
          :class="{ 'has-background-light': todo.completed }"
        >
          <div class="is-flex is-align-items-center is-justify-content-space-between">
            <div class="is-flex is-align-items-center">
              <label class="checkbox mr-3">
                <input 
                  type="checkbox" 
                  v-model="todo.completed" 
                  @change="update(todo)"
                >
              </label>
              <span 
                :class="{ 'has-text-grey is-italic line-through': todo.completed }"
              >
                {{ todo.text }}
              </span>
            </div>
            <button 
              class="delete" 
              @click="remove(todo.id)" 
              aria-label="delete"
            ></button>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="notification is-light has-text-centered p-5">
      <p class="mb-2">No tasks yet!</p>
      <p class="is-size-7">Add a task above to get started.</p>
    </div>
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
  if (!newText.value.trim()) return;
  store.addTodo({ text: newText.value.trim(), completed: false });
  newText.value = '';
}

function update(todo) {
  store.updateTodo(todo);
}

function remove(todoId) {
  store.removeTodo(todoId);
}
</script>

<style scoped>
.line-through {
  text-decoration: line-through;
}

.list-item {
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

.list-item:hover {
  background-color: #f5f5f5;
}

.checkbox {
  cursor: pointer;
}

/* Improve checkbox appearance */
input[type="checkbox"] {
  margin-right: 0.5rem;
  cursor: pointer;
}
</style>