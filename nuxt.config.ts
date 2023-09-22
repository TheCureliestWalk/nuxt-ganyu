// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    'nuxt-icon',
    // '@nuxt/image',
    '@nuxtjs/supabase',
    'nuxt-lodash',
    '@vite-pwa/nuxt',
    // 'nuxt-security',
    //'@nuxtjs/device',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    // 'nuxt-csurf',
  ],
  auth: {
    enabled: true,
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
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
  imports: {
    dirs: ['stores'],
  },
  csurf: {
    // optional
    https: false, // default true if in production
    cookieKey: '', // "__Host-csrf" if https is true otherwise just "csrf"
    cookie: {
      // CookieSerializeOptions from unjs/cookie-es
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
    },
    methodsToProtect: ['POST', 'PUT', 'PATCH'], // the request methods we want CSRF protection for
    excludedUrls: ['/nocsrf1', ['/nocsrf2/.*', 'i']], // any URLs we want to exclude from CSRF protection
  },
  app: {
    head: {
      title: 'Ganyu App',
    },
  },
});
