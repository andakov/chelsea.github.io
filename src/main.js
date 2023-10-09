import './assets/main.scss'
import { createApp } from 'vue'
import App from './App.vue'
import en from "@/language/en";
import kz from "@/language/kz";
import {createI18n} from "vue-i18n";

const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem("locale") ?? "kz",
    fallbackLocale: "kz",
    messages: {
        "kz": kz,
        "en": en,
    }
});
createApp(App).use(i18n).mount('#app')
