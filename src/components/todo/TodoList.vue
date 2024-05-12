<template>
  list id is {{ listId }}
  <div class="q-px-md todo-list-container">
    <q-list padding draggable class="todo-list-transition-container">
      <TodoListItem v-for="(value, index) of items" :key="index"/>
    </q-list>
    <div v-if="canEdit" class="todo-list-new-container">
      <new-todo-item></new-todo-item>
    </div>
    <q-expansion-item class="bg-info rounded-borders todo-list-transition-container"
      :label="doneAmount"
      v-model="expandableOpen" :disable="expandableDisabled">
      <q-list padding>
        <q-item class="todo-list-item" tag="label"
          v-for="(value, index) of doneItems" :key="index">
          <q-item-section side top>
            <q-checkbox v-model="doneItems[index].done" name="optionOne"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ value.summary }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-expansion-item>
  </div>
</template>
<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue';
import { TodoItem } from '../models';
import { useI18n } from 'vue-i18n';
import NewTodoItem from './NewTodoItem.vue';
import TodoListItem from './TodoListItem.vue';

const { t } = useI18n();
defineProps({
  listId: Number,
});

const items = reactive<TodoItem[]>([
  {
    id: 1,
    summary: 'Option 1',
    done: false,
    position: 1,
    description: 'Description for Option 1'
  },
  {
    id: 2,
    summary: 'Option 2',
    done: false,
    position: 2,
    description: 'Description for Option 2'
  },
  {
    id: 3,
    summary: 'Option 3',
    done: false,
    position: 3,
    description: 'Description for Option 3'
  },
  {
    id: 4,
    summary: 'Option 4',
    done: false,
    position: 4,
    description: 'Description for Option 4'
  },
  {
    id: 5,
    summary: 'Option 5',
    done: false,
    position: 5,
    description: 'Description for Option 5'
  }
]);
const todoItems = computed(() => items
  .filter(item => !item.done)
  .sort((a, b) => a.position - b.position));
const doneItems = computed(() => items
  .filter(item => item.done)
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
    if (todoItems.value.length === 0 || oldValue.length === 0) {
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
