import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入字体图标
import '@/assets/fonts/iconfont.css'
// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
