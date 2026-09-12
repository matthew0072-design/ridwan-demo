// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: {
    enabled: true
  },

  css: [
    '~/assets/css/main.css',
    '@fontsource/source-sans-pro/400.css',
    '@fontsource/source-sans-pro/600.css',
    '@fontsource/source-sans-pro/700.css',
  ],

  vite: {
    plugins: [
      tailwindcss()
    ]
  }
})
