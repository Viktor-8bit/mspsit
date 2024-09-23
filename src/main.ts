import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';



// import 'highlight.js/styles/stackoverflow-light.css'
import './styles/code-theme.css';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import hljsVuePlugin from "@highlightjs/vue-plugin";

hljs.registerLanguage('javascript', javascript);


const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
hljs.registerLanguage('javascript', javascript);

app.mount('#app')
