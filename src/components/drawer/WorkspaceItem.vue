<template>
  <q-expansion-item
    label="Workspace 1"
    icon="receipt_long"
    class="drawer-workspace-expansion"
  >
    <div style="margin: 10px;">
      <TodoItem v-for="(item, index) in todoListIds" :key="item"
        :todoListId="item" :devNested="index === 0" />
    </div>
  </q-expansion-item>
</template>
<script setup lang="ts">
import TodoItem from './TodoItem.vue';

const todoListIds = ['id-01', 'id-02', 'id-03'];
</script>
