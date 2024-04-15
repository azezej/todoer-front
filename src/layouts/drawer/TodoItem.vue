<template>
  <q-card v-ripple class="drawer-todo-item">
    <q-card-section class="drawer-todo-item-box">
      <q-icon name="check" class="drawer-todo-item-icon" />
      {{ todoListId }}
    </q-card-section>
  </q-card>
  <div class="drawer-todo-item-nested" v-if="nestedTodoListIds.length" toggle>
    <TodoItem v-for="item in nestedTodoListIds" :key="item"
      :todoListId="item"  />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    todoListId: String,
    devNested: Boolean
  },
  data() {
    return {
      nestedTodoListIds: this.devNested ? ['id-01-n', 'id-02-n', 'id-03-n'] : []
    }
  }
})
</script>
<style lang="scss">
.drawer-todo-item {
  width: 100%;
  margin: 10px;
  &-box {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
  }
  &-nested {
    margin-left: 20px;
  }
}
</style>
