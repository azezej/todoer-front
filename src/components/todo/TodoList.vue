<template>
  <div class="q-pa-md">
    <q-list padding>
      <q-item class="todo-list-item" tag="label" v-for="(value, index) of options" :key="index">
        <q-item-section side top>
          <q-checkbox v-model="options[index].value" name="optionOne"/>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ value.label }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';

const options = reactive<{label: string, value: boolean}[]>([
  {
    label: 'Option 1',
    value: false
  },
  {
    label: 'Option 2',
    value: false
  },
  {
    label: 'Option 3',
    value: false
  },
  {
    label: 'Option 4',
    value: false
  },
  {
    label: 'Option 5',
    value: false
  },
  {
    label: 'Option 6',
    value: false
  }
]);
</script>
false, true, false, true
