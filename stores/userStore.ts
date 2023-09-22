export const useUserStore = defineStore('user', {
  state: () => {
    return {
      token: '',
      username: '',
      name: '',
      email: '',
      avatar: '',
    };
  },

  actions: {
    updateUser(
      token: string,
      username: string,
      name: string,
      email: string,
      avatar: string
    ) {
      this.token = token;
      this.username = username;
      this.name = name;
      this.email = email;
      this.avatar = avatar;
    },
  },

  getters: {},
});
