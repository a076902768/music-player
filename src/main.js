import { createApp } from 'vue'
import App from './layouts'
import router from './router'
import store from './store'
import { Slider, Button } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import 'normalize.css/normalize.css'
import '@/assets/scss/all.scss'

const app = createApp(App)

app.use(store).use(router)

app.use(Slider).use(Button)

app.mount('#app')
