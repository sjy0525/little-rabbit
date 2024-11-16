
import { directivePlugin } from './directives'
import { componentPlugin } from './components'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(directivePlugin)
app.mount('#app')
app.use(componentPlugin)
const pinia = createPinia()
app.use(pinia)

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


pinia.use(piniaPluginPersistedstate)
