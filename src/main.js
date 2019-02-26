import '../public/live2d/js/message'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入UI
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
// 引入加载进度条
import 'muse-ui-progress/dist/muse-ui-progress.css';
import NProgress from 'muse-ui-progress';
// 引入ajax
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios);
Vue.config.productionTip = false
Vue.use(MuseUI);
Vue.use(NProgress,{
  zIndex: 2000,          // progress z-index
  top: 0,                // position fixed top
  speed: 300,            // progress speed
  color: 'lightBlue500',      // color
  size: 2,               // progress size
  className: ''          // progress custom class
});

new Vue({
  created() {
    this.$progress.start();
    this.$progress.done();
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
