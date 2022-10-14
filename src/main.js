import { createApp } from 'vue'
import ViewUIPlus from 'view-ui-plus'
import App from './App.vue'
import router from './router'
import store from './store'
import 'view-ui-plus/dist/styles/viewuiplus.css'
import '@/permission'
import './main.css'

createApp(App).use(store).use(router).use(ViewUIPlus).mount('#app')
// createApp(App).use(store).use(router).mount('#app')
