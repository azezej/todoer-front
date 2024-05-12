import { defineStore } from 'pinia';
import { List } from 'src/shared/models';
import { reactive } from 'vue';

export interface ListState {
  list: List
}

export const useListState = defineStore('counter', () => {
  const state = reactive<ListState>({
    list: {} as List
  });

  function setList (id: number): List {
      // here futura API implementation
      id;
      state.list = { id: id, items: [], name: 'My example list'};
      return {...state.list};
  }

  return {
    state,
    setList
  };
});
