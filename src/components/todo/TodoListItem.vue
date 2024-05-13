<template>
<q-item class="todo-list-item" tag="label">
    <q-item-section side top>
      <q-checkbox :model-value="props.item.done" :name="props.item.summary"
        :indeterminate-value="INDETERMINATE_VALUE"
        :true-value="DONE_VALUE"
        :false-value="UNDONE_VALUE"
        @update:model-value="toggleValue" />
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ item.summary }}</q-item-label>
    </q-item-section>
</q-item>
</template>
<script setup lang="ts">
import { useListStore } from 'src/stores/list';
import { DONE_VALUE, UNDONE_VALUE, INDETERMINATE_VALUE, TodoItem } from '../../shared/models';

const props = defineProps<{
  item: TodoItem;
}>();

const listStore = useListStore();

function toggleValue() {
  if (props.item.done === DONE_VALUE || props.item.done === UNDONE_VALUE) {
    listStore.toggleItemDone(props.item.id);
  }
}
</script>
