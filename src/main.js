import { createApp } from 'vue'
import App from './layouts'
import router from './router'
import store from './store'
import { Slider, Button, Upload, Dropdown, Menu, MenuItem } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import 'normalize.css/normalize.css'
import '@/assets/scss/all.scss'

const app = createApp(App)

app.use(store).use(router)

app.use(Slider).use(Button).use(Upload).use(Dropdown).use(Menu).use(MenuItem)

app.mount('#app')
