<template>
<q-item class="todo-list-item" tag="label">
    <q-item-section side top>
      <q-checkbox v-model="item.done" name="optionOne"/>
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ item.summary }}</q-item-label>
    </q-item-section>
</q-item>
</template>
<script setup lang="ts">
import { TodoItem } from '../models';
import { reactive } from 'vue';

const item = reactive<TodoItem>({
  description: 'Something inside',
  done: true,
  id: 123,
  summary: 'Stuff to do',
  position: 0
});
</script>