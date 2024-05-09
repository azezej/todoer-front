<template>
<TodoList :listId="+listId" />
</template>
<script setup>
import TodoList from '../components/todo/TodoList.vue';
import { defineProps } from 'vue';
defineProps({
  listId: String
});
</script>
