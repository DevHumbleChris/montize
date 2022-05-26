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

library.add(fas, fab, far)

const options = {}

createApp(App)
    .component('BaseCard', BaseCard)
    .component('FontAwesomeIcon', FontAwesomeIcon)
    .use(createPinia())
    .use(router)
    .use(Toast, options)
    .mount('#app')
