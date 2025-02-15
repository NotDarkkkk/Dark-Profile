// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/eslint',
    '@vueuse/nuxt',
  ],

  ssr: false,

  devtools: { enabled: true },

  colorMode: {
    classSuffix: '',
    preference: 'system',
  },

  compatibilityDate: '2025-02-15',

  plugins: [
    '~/plugins/cursor.ts'
  ],

  css: [
    '~/assets/css/main.css'
  ],

  eslint: {
    checker: true,
    config: {
      stylistic: true,
    },
  },
})
