// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './store'
import NaiveUI from 'naive-ui'

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(NaiveUI)

app.mount('#app')

