import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import CSS global
import './assets/css/global.css'

createApp(App).use(router).mount('#app')
