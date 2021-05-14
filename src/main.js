import Vue from 'vue';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import store from './store';
import App from './App.vue';

Vue.use(Element);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
