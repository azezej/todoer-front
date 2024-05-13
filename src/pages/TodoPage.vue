<template>
<q-spinner v-if="loading"></q-spinner>
<TodoList v-else />
</template>
<script setup>
import { useListStore } from 'src/stores/list';
import TodoList from '../components/todo/TodoList.vue';
import { defineProps, onMounted, ref } from 'vue';
const props = defineProps({
  listId: String
});

const loading = ref(true);
const listState = useListStore();

onMounted(async () => {
  await listState.fetchList(props.listId);
  loading.value = false;
});
</script>
