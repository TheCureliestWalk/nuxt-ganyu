export function useUser() {
  const user = useState<any>('user', () => {});

  function setUser(newUser: Object) {
    user.value = newUser;
  }

  function clearUser() {
    user.value = {};
  }

  return {
    user,
    setUser,
    clearUser,
  };
}
