import '../public/live2d/js/message'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入UI
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
// 引入ajax
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios);
Vue.config.productionTip = false
Vue.use(MuseUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
