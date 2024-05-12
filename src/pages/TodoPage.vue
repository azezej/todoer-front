<template>
<TodoList :list="list" />
</template>
<script setup>
import { useListState } from 'src/stores/list';
import TodoList from '../components/todo/TodoList.vue';
import { defineProps } from 'vue';
const props = defineProps({
  listId: String
});

const listState = useListState();
const list = listState.setList(props.listId);
</script>
