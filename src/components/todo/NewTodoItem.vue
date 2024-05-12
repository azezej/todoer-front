<template>
  <div v-show="inputEnabled">
    <q-field>
      <q-input
        class="todo-list-new-summary text-h5"
        :placeholder="$t('list.new_item.summary')"
        v-model="newTodo.summary"
        tabindex="1"
        @keydown.escape="toggleInput"
        @keydown.enter="submitItem"
        @keydown.shift.enter="submitList"
        ref="newInputRef" />
      <template v-slot:append>
        <!-- <new-todo-item-details-dialog :tabIndex="3"></new-todo-item-details-dialog> -->
        <q-btn
          class="todo-list-new-icon" icon="add"
          tabindex="4"
          color="positive" round
          @click="submitItem">
          <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]" :delay="600">
            {{ $t('list.new_item.add_item') }}
          </q-tooltip>
        </q-btn>
        <q-btn
          class="todo-list-new-icon" icon="playlist_add"
          tabindex="4"
          color="secondary" round
          @click="submitList">
          <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]" :delay="600">
            {{ $t('list.new_item.add_sublist') }}
          </q-tooltip>
        </q-btn>
        <q-btn
          class="todo-list-new-icon" icon="close"
          tabindex="5"
          color="negative" round
          @click="toggleInput">
          <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]" :delay="600">
            {{ $t('cancel')}}
          </q-tooltip>
        </q-btn>
      </template>
    </q-field>
    <q-input
        class="todo-list-new-description text-subtitle"
        type="textarea" autogrow
        tabindex="2"
        v-model="newTodo.description"
        :label="$t('list.new_item.description')" />
  </div>
  <div v-show="!inputEnabled">
    <q-btn
      class="todo-list-new-button" icon="add"
      color="positive" flat
      @click="toggleInput" />
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue';
import { TodoItem } from '../../shared/models';

const newInputRef = ref<HTMLInputElement>();
const inputEnabled = ref(false);
const clearTodo: Pick<TodoItem, 'summary' | 'description'> = {
  summary: '',
  description: ''
};
const newTodo = reactive<Pick<TodoItem, 'summary' | 'description'>>({
  summary: '',
  description: ''
});

function toggleInput() {
  if (inputEnabled.value) {
    Object.assign(newTodo, clearTodo);
    console.log(newTodo);

  } else {
    setTimeout(() => newInputRef.value?.focus(), 0);
  }
  inputEnabled.value = !inputEnabled.value;
}

function submitItem() {
  if (newTodo.summary.trim() === '') {
    return;
  }
  toggleInput();
}

function submitList() {
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
