import { defineStore } from 'pinia';
import { List } from 'src/shared/models';

export interface ListState {
  list: List
}

export const useCounterStore = defineStore('counter', {
  state: (): ListState => ({} as ListState),

  getters: {
    
  },

  actions: {
    increment () {
    }
  }
});
