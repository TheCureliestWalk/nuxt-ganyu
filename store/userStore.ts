import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    userLoggedIn: false,
    userData: {},
  }),
});
