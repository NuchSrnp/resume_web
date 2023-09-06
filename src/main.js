// import './assets/main.css'
// import './style.css'

// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

// import './assets/main.css'
import './style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.mount('#app')

