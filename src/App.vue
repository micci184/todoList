<script lang="ts" setup>
import AddTodos from "./views/AddTodos.vue";
</script>

<template>
  <v-app>
    <v-container class="d-flex flex-column align-center">
      <h1>Todos</h1>
      <AddTodos />
      <TodoItems />
    </v-container>
    <router-view />
  </v-app>
</template>
