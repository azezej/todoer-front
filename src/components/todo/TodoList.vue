<template>
  list id is {{ listId }}
  <div class="q-px-md todo-list-container">
    <q-list padding draggable class="todo-list-transition-container">
      <TodoListItem v-for="value of undoneItems" :key="value.id" :item="value" />
    </q-list>
    <div v-if="canEdit" class="todo-list-new-container">
      <new-todo-item></new-todo-item>
    </div>
    <q-expansion-item class="bg-info rounded-borders todo-list-transition-container"
      :label="doneAmount"
      v-model="expandableOpen" :disable="expandableDisabled">
      <q-list padding>
        <TodoListItem v-for="value of doneItems" :key="value.id" :item="value"/>
      </q-list>
    </q-expansion-item>
  </div>
</template>
<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import NewTodoItem from './NewTodoItem.vue';
import TodoListItem from './TodoListItem.vue';
import { useListStore } from 'src/stores/list';

const { t } = useI18n();
const listStore = useListStore();

const listId = listStore.$state.list.id;
const items = listStore.$state.items;
const undoneItems = computed(() => items
  .filter(item => !(item.done === 'done'))
  .sort((a, b) => a.position - b.position));
const doneItems = computed(() => items
  .filter(item => item.done === 'done')
  .sort((a, b) => a.position - b.position));
const doneAmount = computed(() => `${t('list.done_amount', { amount: doneItems.value.length })}`);

const expandableOpen = ref(false);
const canEdit = ref(true);
const expandableDisabled = ref(doneItems.value.length === 0);
watch(doneItems, (value, oldValue) => {
  if (value.length === 0) {
    expandableOpen.value = false;
    expandableDisabled.value = true;
  } else {
    expandableDisabled.value = false;
    if (undoneItems.value.length === 0 || oldValue.length === 0) {
      expandableOpen.value = true;
    }
  }
});
</script>
<style scoped lang="scss">
.todo-list {
  &-container {
    max-width: 1600px;
    margin-left: auto;
    margin-right: auto;
  }
}

.todo-enter-active,
.todo-leave-active,
.done-enter-active,
.done-leave-active {
  transition: transform 0.5s ease-in;
}

.todo-enter-from,
.todo-leave-to {
  transform: translateX(200%) translateY(200%);
}

.done-enter-from,
.done-leave-to {
  transform: translateX(-200%) translateY(200%);
}
</style>
