// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            BASE_URL: process.env.BASE_URL
        }
    },
    app: {
        head: { 
            title: 'FoxBeCoding portfolio',
            meta: [
                { 
                    hid: 'description', 
                    property: 'description', 
                    content: "Fox portfolio site: Explore projects created by Fox."
                },
            ],
            htmlAttrs: {
                lang: 'en'
            }  
        }
    },
    css: [
        '@mdi/font/css/materialdesignicons.min.css',
        '@fortawesome/fontawesome-free/css/all.min.css',
        'assets/styles.scss'
    ],

    modules: ['@nuxtjs/tailwindcss'],
})
