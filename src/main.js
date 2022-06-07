import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import './index.css'
import router from './routes'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import BaseCard from './components/BaseCard.vue'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Vue3Autocounter from 'vue3-autocounter'
import Vue3ApexCharts from 'vue3-apexcharts'
import 'flowbite';
import axios from 'axios'

// Animate Animate Onscroll Setup.
import AOS from "aos";
import "aos/dist/aos.css";

library.add(fas, fab, far)

const options = {}

const app = createApp(App)

app.AOS = new AOS.init();

axios.defaults.baseURL = 'https://montize-api.vercel.app/api'

app.component('BaseCard', BaseCard)
    .component('FontAwesomeIcon', FontAwesomeIcon)
    .component('AutoCounter', Vue3Autocounter)
    .use(Vue3ApexCharts)
    .use(createPinia())
    .use(router)
    .use(Toast, options)
    .mount('#app')