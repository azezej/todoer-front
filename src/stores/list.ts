import { defineStore } from 'pinia';
import { List, TodoItem } from 'src/shared/models';
import { reactive, ref } from 'vue';

export const useListStore = defineStore('counter', () => {
  const list = reactive<List>({} as List);
  const items = ref<TodoItem[]>([]);

  function fetchList(id: number): Promise<List> {
    // here futura API implementation
    id;
    Object.assign(list,  { id: id, items: [], name: 'My example list' });
    items.value = [
      {
        id: 1,
        summary: 'Option 1',
        done: 'undone',
        position: 1,
        description: 'Description for Option 1',
      },
      {
        id: 2,
        summary: 'Option 2',
        done: 'undone',
        position: 2,
        description: 'Description for Option 2',
      },
      {
        id: 3,
        summary: 'Option 3',
        done: 'undone',
        position: 3,
        description: 'Description for Option 3',
      },
      {
        id: 4,
        summary: 'Option 4',
        done: 'undone',
        position: 4,
        description: 'Description for Option 4',
      },
      {
        id: 5,
        summary: 'Option 5',
        done: 'undone',
        position: 5,
        description: 'Description for Option 5',
      },
    ];

    return Promise.resolve({ ...list });
  }

  function toggleItemDone(id: number): void {
    const item = items.value.find((item) => item.id === id);
    if (item) {
      if (item.done === 'partial') {
        throw new Error('Cannot toggle partial items');
      }

      item.done = item.done === 'done' ? 'undone' : 'done';
    }
  }

  return {
    list, items,
    fetchList, toggleItemDone,
  };
});
