<template>
  <div class="drawer-todo-item">
    <q-card bordered flat>
      <RouterLink :to="`/${100}`">
        <q-card-section class="drawer-todo-item-box">
        <div class="drawer-todo-item-label">
          <q-icon name="check" class="drawer-todo-item-icon" />
          {{ todoListId }}
        </div>
      </q-card-section>
      </RouterLink>
      <q-card-section class="drawer-todo-item-drop">
        <q-btn class="drawer-todo-item-drop-icon" unelevated color="secondary"
          v-if="shouldBeExpandible" :icon="dropdownIcon" @click="toggleNested" />
      </q-card-section>
    </q-card>

    <q-expansion-item v-if="shouldBeExpandible" ref="expansion" v-model="expanded">
      <div class="drawer-todo-item-nested">
        <TodoItem v-for="item in nestedTodoListIds" :key="item"
          :todoListId="item" />
      </div>
    </q-expansion-item>
  </div>
</template>
<script setup lang="ts">
import { QExpansionItem } from 'quasar';
import { computed } from 'vue';
import { ref } from 'vue';

const props = defineProps({
  todoListId: String,
  devNested: Boolean
})

const expansion = ref<QExpansionItem>();
const expanded = ref(false);

const nestedTodoListIds = ref(props.devNested ? ['id-01-n', 'id-02-n', 'id-03-n'] : [])
const shouldBeExpandible = computed(() => !!nestedTodoListIds.value.length);

const dropdownIcon = computed(() => {
  if (expanded.value) {
    return 'arrow_drop_up';
  } else {
    return 'arrow_drop_down';
  }
});

const toggleNested = () => expansion.value?.toggle();
</script>
<style lang="scss">
.drawer-todo-item {
  width: 100%;
  margin-bottom: 5px;
  user-select: none;
  cursor: pointer;

  &-box {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: right;
  }

  &-label {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  &-drop {
    padding: 0;
    &-icon {
      width: 100%;
      margin: 0;
      border-start-start-radius: 0;
      border-start-end-radius: 0;
    }
  }

  &-nested {
    margin-left: 25px;
    margin-bottom: 10px;
    padding-top: 10px;
  }

  .q-expansion-item__container {
  .q-item {
    display: none;
  }
}
}
</style>
