<template>
  <div class="q-pa-md">
    <q-list padding draggable class="todo-list-transition-container">
      <q-item class="todo-list-item" tag="label" v-for="(value, index) of todoItems" :key="index">
        <q-item-section side top>
          <q-checkbox v-model="todoItems[index].value" name="optionOne"/>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ value.label }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
    <template v-if="canEdit">
      <q-item>
        <q-item-section class="todo-list-new-icon" avatar>
          <q-icon name="add"/>
        </q-item-section>
        <q-item-section>
          <q-input class="todo-list-new-input"
            v-model="newTodo.label" />
        </q-item-section>
      </q-item>
    </template>
    <q-expansion-item class="bg-info rounded-borders todo-list-transition-container"
      label="Done"
      v-model="expandableOpen" :disable="expandableDisabled">
      <q-list padding>
        <q-item class="todo-list-item" tag="label"
          v-for="(value, index) of doneItems" :key="index">
          <q-item-section side top>
            <q-checkbox v-model="doneItems[index].value" name="optionOne"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ value.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-expansion-item>
  </div>
</template>
<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue';

const items = reactive<{label: string, value: boolean, position: number}[]>([
  {
    label: 'Option 1',
    value: false,
    position: 1
  },
  {
    label: 'Option 2',
    value: false,
    position: 2
  },
  {
    label: 'Option 3',
    value: false,
    position: 3
  },
  {
    label: 'Option 4',
    value: false,
    position: 4
  },
  {
    label: 'Option 5',
    value: false,
    position: 5
  },
  {
    label: 'Option 6',
    value: false,
    position: 6
  }
]);
const todoItems = computed(() => items
  .filter(item => !item.value)
  .sort((a, b) => a.position - b.position));
const doneItems = computed(() => items
  .filter(item => item.value)
  .sort((a, b) => a.position - b.position));

const expandableOpen = ref(false);
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

const canEdit = ref(true);
const newTodo = reactive({
  label: ''
});

</script>
<style scoped lang="scss">
.todo-list {
  &-new {
    &-input {
      width: 100%;
    }

    &-icon {
      margin-left: 7.5px;
    }
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
