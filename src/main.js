import { createApp } from 'vue'
import './styles/index.scss'
import App from './App.vue'
import './app/index.js'
import router from './router/index.js'

createApp(App).use(router).mount('#app');