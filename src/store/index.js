import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => {
    return {
      count: 5,
    };
  },
  actions: {
    updateCount() {
      this.count++;
    },
  },
});
