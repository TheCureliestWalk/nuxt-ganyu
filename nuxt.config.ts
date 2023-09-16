// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    '@element-plus/nuxt',
    'nuxt-icon',
    '@nuxt/image',
    '@nuxtjs/supabase',
    'nuxt-lodash',
    '@vite-pwa/nuxt',
    // 'nuxt-security',
    '@nuxtjs/device',
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],
  supabase: {
    redirect: false,
  },
  headlessui: {
    prefix: 'Hl',
  },
  experimental: {
    payloadExtraction: false,
  },
  app: {
    head: {
      title: 'Ganyu App',
    },
  },
});
