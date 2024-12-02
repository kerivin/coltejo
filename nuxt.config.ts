// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  ssr: true,
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@vueuse/motion/nuxt'
  ],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2024-12-02',

  i18n: {
    locales: [
      { code: 'en', language: 'en-US' },
      { code: 'ru', language: 'ru-RU' }
    ],
    defaultLocale: 'en',
  },

  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    configPath: 'tailwind.config.ts',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
  }
})
