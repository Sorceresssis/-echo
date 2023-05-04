import { createApp } from 'vue'
import App from './App.vue'
import '../assets/css/reset.css'
import '../assets/css/global.css'
import '../assets/font/iconfont.css'
import i18n from '../locales/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 右键菜单
import '@imengyu/vue3-context-menu/lib/vue3-context-menu.css'
import ContextMenu from '@imengyu/vue3-context-menu'
import { ipcMain } from 'electron/main'


const app = createApp(App)
app.use(i18n)
app.use(ElementPlus)
app.use(ContextMenu)
app.mount('#app')
