import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css'
import '@/assets/scss/all.scss'

createApp(App).use(store).use(router).mount('#app')
