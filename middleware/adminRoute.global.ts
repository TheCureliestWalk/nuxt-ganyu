export default defineNuxtRouteMiddleware((to, from) => {
    const user = useSupabaseUser()
    if (to.name === 'xxx') {
            return navigateTo('/login')
    }
})