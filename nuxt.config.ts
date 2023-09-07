// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path'
import fs from 'fs'

export default defineNuxtConfig({
  ssr: true,
  devtools: {enabled: true},
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    'nuxt-icon',
    '@nuxt/image',
    '@nuxtjs/supabase',
    'nuxt-lodash'
  ],
  supabase: {
    redirect: false
  },
  experimental: {
    payloadExtraction: false
  },
  app: {
    head: {
      title: 'Ganyu App'
    }
  },
  // Setup for HTTPS
  // server: {
  //   host: 'localhost',
  //   port: 3000,
  //   https: {
  //     key: fs.readFileSync(path.resolve(__dirname, 'private_2.key')),
  //     cert: fs.readFileSync(path.resolve(__dirname, 'cert_2.crt')),
  //     passphrase: process.env.SECRETS
  //   }
  // }
})
