import { createApp } from 'vue'
import index from './index.vue'
import router from './router'

createApp(index)
    .use(router)
    .mount('#app')
