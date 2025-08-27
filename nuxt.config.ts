export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  devServer: {
    port: 4000
  },
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
    },
  },
  css: [
    '~/assets/css/main.css'
  ],
  modules: [
    '@nuxt/icon',
  ],
  
})
