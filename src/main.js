import { createApp } from 'vue'
import App from './App.vue'
import router from './route/index.js'
import store from './store/index.js'

import axios from 'axios'
import VueAxios from 'vue-axios'


router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

const app = createApp(App);
app.use(router)
app.mount('#app')