<template>
  <div v-show="inputEnabled">
    <q-field>
      <q-input
        class="todo-list-new-input"
        v-model="newTodo.label"
        @keydown.escape="toggleInput"
        ref="newInputRef" />
      <template v-slot:append>
        <q-btn class="todo-list-new-icon" icon="more" round>
          <q-badge floating>+</q-badge>
        </q-btn>
        <q-btn 
          class="todo-list-new-icon" icon="add" 
          color="positive" round />
        <q-btn
          class="todo-list-new-icon" icon="close"
          color="negative" round 
          @click="toggleInput" />
      </template>
    </q-field>
  </div>
  <div v-show="!inputEnabled">
    <q-btn
      class="todo-list-new-button" icon="add" 
      color="positive" flat 
      @click="toggleInput" />
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, nextTick, onMounted } from 'vue';

const newInputRef = ref<HTMLInputElement>();
const inputEnabled = ref(false);
const clearTodo = {
  label: '',
  description: '',
  position: 0,
};
const newTodo = reactive({
  label: '',
});

function toggleInput() {
  inputEnabled.value = !inputEnabled.value;
  if (inputEnabled.value) {
    nextTick(() => newInputRef.value?.focus())
  } else {
    Object.assign(newTodo, clearTodo);
  }
}
</script>
<style lang="scss">
.todo-list-new {
  &-container {
    margin-bottom: 5px;
  }

  &-input {
    width: 100%;
  }

  &-icon {
    margin-left: 5px;
  }

  &-button {
    width: 100%;
    height: 44px;
  }
}
</style>
