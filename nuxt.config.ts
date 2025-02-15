// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/eslint',
    '@vueuse/nuxt',
  ],

  plugins: [
    '~/plugins/cursor.ts',
  ],

  ssr: false,

  devtools: { enabled: true },

  css: [
    '~/assets/css/main.css',
  ],

  colorMode: {
    classSuffix: '',
    preference: 'system',
  },

  compatibilityDate: '2025-02-15',

  eslint: {
    checker: true,
    config: {
      stylistic: true,
    },
  },
})
