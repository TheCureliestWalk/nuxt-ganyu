export default defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser();
  if (to.name === 'profile' && !user.value) {
    return navigateTo('/login');
  }

  if (to.name === 'login' && user.value) {
    return navigateTo('/profile');
  }

  if (to.name === 'register' && user.value) {
    return navigateTo('/profile');
  }
});
