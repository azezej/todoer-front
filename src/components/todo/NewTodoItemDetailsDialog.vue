<template>
  <q-btn class="todo-list-new-icon" icon="more" round
    :tabindex="tabIndex"
    @click="showDialog = true">
    <q-badge floating>+</q-badge>
  </q-btn>
  <q-dialog
    v-model="showDialog">
    <q-card class="q-pa-xl todo-list-new-details-dialog">

    <q-select class="q-my-sm"
      v-model="details.assignee"
      :label="$t('list.new_item.assignee')"
      @keydown.escape="$emit('close')"
      @keydown.enter="$emit('submit')"/>
    <q-input class="q-my-sm"
      type="date"
      v-model="details.dueDate"
      :label="$t('list.new_item.due_date')"
      @keydown.escape="$emit('close')"
      @keydown.enter="$emit('submit')"/>
    </q-card>
  </q-dialog>
</template>
<script setup>
import { ref, reactive, defineProps } from 'vue';

defineProps({
  tabIndex: Number
});
const details = reactive({
  assignee: [],
  dueDate: null,
})
const showDialog = ref(false);
</script>
<style lang="scss">
.todo-list-new-details-dialog {
  width: 400px;
}
</style>
