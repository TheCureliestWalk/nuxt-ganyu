export default defineNuxtRouteMiddleware((to, from) => {
    const user = useSupabaseUser()
    if (to.name === 'profile' && !user) {
            return navigateTo('/login')
    }
})