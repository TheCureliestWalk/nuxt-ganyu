// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    // '@element-plus/nuxt',
    'nuxt-icon',
    // '@nuxt/image',
    '@nuxtjs/supabase',
    'nuxt-lodash',
    '@vite-pwa/nuxt',
    // 'nuxt-security',
    //'@nuxtjs/device',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@sidebase/nuxt-auth',
  ],
  auth: {
    enabled: true,
  },
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
