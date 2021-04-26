import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import hljs from 'highlight.js'
createApp(App).use(hljs.vuePlugin).mount('#app')
