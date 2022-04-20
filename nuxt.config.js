export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'EMSHOP',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'EMSHOP Homeshopping',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/icon_app.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  render: {
    gzip: false,
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  publicRuntimeConfig: {
    axios: {
      baseURL: '',
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/firebase',
    '@nuxtjs/dotenv',
    '@dansmaculotte/nuxt-security',
    [
      '@dansmaculotte/nuxt-security',
      {
        /* module options */
        hsts: {
          maxAge: 15552000,
          includeSubDomains: true,
          preload: true,
        },
      },
    ],
  ],

  axios: {
    proxy: true,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
    },
    proxyHeaders: false,
    credentials: true,
  },

  proxy: {
    '/api/': {
      target: 'http:/172.29.32.233/',
      pathRewrite: { '^/api/': '' },
      changeOrigin: true,
    },
  },

  firebase: {
    config: {
      apiKey: 'AIzaSyAWrubSv4BDnEXxFtYyMePfhbbW_LdacSc',
      authDomain: 'emshop-f9674.firebaseapp.com',
      projectId: 'emshop-f9674',
      storageBucket: 'emshop-f9674.appspot.com',
      messagingSenderId: '529804743553',
      appId: '1:529804743553:web:3a1c8686a068cfa0b4ce80',
      measurementId: 'G-Q1MQZ5JGJY',
    },
    services: {
      storage: true,
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      title: 'EMSHOP',
      author: 'EMSHOP',
    },
    manifest: {
      name: 'EMSHOP',
      short_name: 'EMSHOP',
      lang: 'en',
      display: 'standalone',
      useWebmanifestExtension: false,
      icons: [
        {
          source: '/icon-144x144.png',
          fileName: 'icon-144x144.png',
          size: '144x144',
        },
        {
          source: '/icon-192x192.png',
          fileName: 'icon-192x192.png',
          size: '192x192',
        },
      ],
      theme_color: '#3374DD',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
