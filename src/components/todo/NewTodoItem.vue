<template>
  <div v-show="inputEnabled">
    <q-field>
      <q-input
        class="todo-list-new-summary text-h5"
        v-model="newTodo.summary"
        tabindex="1"
        @keydown.escape="toggleInput"
        @keydown.enter="submit"
        ref="newInputRef" />
      <template v-slot:append>
        <new-todo-item-details-dialog :tabIndex="3"></new-todo-item-details-dialog>
        <q-btn
          class="todo-list-new-icon" icon="add"
          tabindex="4"
          color="positive" round />
        <q-btn
          class="todo-list-new-icon" icon="close"
          tabindex="5"
          color="negative" round
          @click="toggleInput" />
      </template>
    </q-field>
    <q-input
        class="todo-list-new-description text-subtitle"
        type="textarea" autogrow
        tabindex="2"
        v-model="newTodo.description"
        :label="$t('list.new_item.description')"
        @keydown.escape="$emit('close')"
        @keydown.enter="$emit('submit')"/>
  </div>
  <div v-show="!inputEnabled">
    <q-btn
      class="todo-list-new-button" icon="add"
      color="positive" flat
      @click="toggleInput" />
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, nextTick } from 'vue';
import NewTodoItemDetailsDialog from './NewTodoItemDetailsDialog.vue';
import { TodoItem } from '../models';

const newInputRef = ref<HTMLInputElement>();
const inputEnabled = ref(false);
const clearTodo = {
  label: '',
  description: '',
  position: 0,
};
const newTodo = reactive<Pick<TodoItem, 'summary' | 'description'>>({
  summary: '',
  description: ''
});

function toggleInput() {
  inputEnabled.value = !inputEnabled.value;
  if (inputEnabled.value) {
    nextTick(() => newInputRef.value?.focus())
  } else {
    Object.assign(newTodo, clearTodo);
  }
}

function submit() {
  if (newTodo.summary.trim() === '') {
    return;
  }
  toggleInput();

}
</script>
<style lang="scss">
.todo-list-new {
  &-container {
    margin-bottom: 5px;
  }

  &-summary {
    width: 100%;
  }

  &-icon {
    margin-left: 5px;
  }

  &-button {
    width: 100%;
    height: 44px;
  }

  &-description {
    textarea.q-field__native {
      height: 2lh;
    }
  }
}
</style>
