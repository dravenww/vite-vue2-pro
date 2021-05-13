import Vue from 'vue';
import Element from 'element-ui';
import router from './router';
import store from './store';
import App from './App.vue';

Vue.use(Element);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
