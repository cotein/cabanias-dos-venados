import { resolve } from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { defineNuxtConfig } from 'nuxt/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineNuxtConfig({
    ssr: false,
    alias: {
        "@": resolve(__dirname, "/")
    },
    app: {
        head: {
            meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
            title: "Cabañas Dos Venados",
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css'
                }
            ],
            script: []
        }
    },
    css: [
      "~/assets/css/vendors/bootstrap.min.css",
      "~/assets/css/vendors/flaticon.css",
      "~/assets/css/vendors/menu.css",
      "~/assets/css/vendors/fade-down.css",
      "~/assets/css/vendors/magnific-popup.css",
      "~/assets/css/vendors/animate.css",
      "~/assets/css/main.scss",
      "~/assets/css/responsive.scss",
      "~/assets/css/color-scheme/blue.scss",
      "~/assets/css/color-scheme/crocus.scss",
      "~/assets/css/color-scheme/green.scss",
      "~/assets/css/color-scheme/magenta.scss",
      "~/assets/css/color-scheme/pink.scss",
      "~/assets/css/color-scheme/skyblue.scss",
      "~/assets/css/color-scheme/violet.scss",
    ],
    modules: [[
        "@nuxtjs/google-fonts",
        {
            families: {
                Rubik: {
                    wght: [300, 400, 500, 600, 700]
                },
                "Plus+Jakarta+Sans": {
                    wght: [400, 500, 600, 700]
                },
                Inter: {
                    wght: [400, 500, 600, 700, 800]
                },
                download: true,
                inject: true
            }
        }
    ], "nuxt-swiper", ["@nuxtjs/leaflet", { markerCluster: true }]]
});
