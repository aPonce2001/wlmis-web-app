import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import { WLMIS_PRESENT } from './present'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: WLMIS_PRESENT,
    options: {
      darkModeSelector: ''
    }
  }
})

app.mount('#app')
