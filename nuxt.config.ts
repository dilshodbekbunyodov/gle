import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-04-22',
  ssr: true, // SSR works fine with Netlify too
  nitro: {
    preset: 'netlify' // Important for proper serverless build
  },
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],
  fonts: {
    defaults: {
      weights: [300, 400, 500, 600],
      styles: ["normal"],
    },
    families: [{ name: "Inter", provider: "google" }],
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  ui: {
    colorMode: false,

    theme: {
      colors: ['primary', 'error']
    }
  },

  app: {
    head: {
      meta: [
        { name: "msapplication-TileColor", content: "#2b5797" },
        { name: "theme-color", content: "#ffffff" },
        {
          name: 'google-site-verification',
          content: 'CCaUlE5jHuiPY3Em-ux4nYAzJTyZhJxxXD83l2xqo3s',
        },
      ],

      link: [
        { rel: "stylesheet", href: "https://unpkg.com/vue-tel-input/dist/vue-tel-input.css" }
      ],
      script: [
        { src: "https://unpkg.com/vue-tel-input" },
        {
          children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-53GDJ5CG');`,
          type: "text/javascript"
        }
      ],
    },
  },

  modules: ['@nuxt/eslint', 'nuxt-swiper', "@vee-validate/nuxt"],

  components: {
    dirs: [
      {path: '~/components/base'},
      {path: '~/components/desktop', prefix: 'desktop'},
      {path: '~/components/mobile', prefix: 'mobile'},
      // home components
      {path: '~/modules/home/components/base', prefix: 'home'},
      {path: '~/modules/home/components/desktop', prefix: 'home-desktop'},
      {path: '~/modules/home/components/mobile', prefix: 'home-mobile'},
      // home sections
      {path: '~/modules/home/sections', prefix: 'home-section'},
      // post components
      {path: '~/modules/post/components/base', prefix: 'post'},
      {path: '~/modules/post/components/desktop', prefix: 'post-desktop'},
      {path: '~/modules/post/components/mobile', prefix: 'post-mobile'},
      // post sections
      {path: '~/modules/post/sections', prefix: 'post-section'},
    ]
  }
})