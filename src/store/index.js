import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => {
    return {
      sideMenu: false
    };
  },
  actions: {
    openSideMenu() {
      this.sideMenu = !this.sideMenu
    },
  },
});
