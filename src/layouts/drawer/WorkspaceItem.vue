<template>
  <q-expansion-item
    label="Workspace 1"
    icon="receipt_long"
    default-opened
    class="drawer-workspace-expansion"
  >
  <TodoItem v-for="(item, index) in todoListIds" :key="item"
    :todoListId="item" :devNested="index === 0"  />
  </q-expansion-item>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import TodoItem from './TodoItem.vue';
export default defineComponent({
  components: { TodoItem },
  data() {
    return {
      todoListIds: ['id-01', 'id-02', 'id-03'],
    };
  },
});
</script>
