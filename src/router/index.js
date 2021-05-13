import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('src/views/home/index.vue'),
      children: [],
    },
    {
      path: '/deny',
      name: 'deny',
      component: () => import('src/views/deny.vue'),
    },
  ],
});
