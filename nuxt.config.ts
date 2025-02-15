// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/eslint',
  ],

  devtools: { enabled: true },

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
