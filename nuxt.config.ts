// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Waxpeer",
      link: [
        {
          rel: "icon",
          href: "/icon.svg",
        },
      ],
      meta: [
        {
          name: "theme-color",
          content: "#212121",
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
    },
  },
  css: ["~/assets/scss/main.scss"],
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", "@element-plus/nuxt"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [{ src: "~/plugins/aos", mode: "client", ssr: false }],
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: '404',
        path: '*',
        component: resolve(__dirname, 'layouts/error.vue')
      })
    }
  },
});