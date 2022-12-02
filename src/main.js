import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入公共样式
import '@/styles/common.less'
// 引入字体图标
import '@/assets/fonts/iconfont.css'
createApp(App).use(store).use(router).mount('#app')
