import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => {
    return {
      sideMenu: false,
      notificationOpen: false
    };
  },
  actions: {
    openSideMenu() {
      this.sideMenu = !this.sideMenu
    },
    openNotification() {
      this.notificationOpen = !this.notificationOpen
    }
  },
});
