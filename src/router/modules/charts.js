/** When your routing table is too long, you can split it into small modules**/

import Layout from 'src/layout/index.vue'

const chartsRouter = {
  path: '/charts',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Charts',
  meta: {
    title: '图表',
    icon: 'chart'
  },
  children: [
    {
      path: 'keyboard',
      component: () => import('src/views/charts/keyboard.vue'),
      name: 'KeyboardChart',
      meta: { title: '键盘图表', noCache: true }
    },
    {
      path: 'line',
      component: () => import('src/views/charts/line.vue'),
      name: 'LineChart',
      meta: { title: '折线图表', noCache: true }
    },
    {
      path: 'mix-chart',
      component: () => import('src/views/charts/mix-chart.vue'),
      name: 'MixChart',
      meta: { title: '混合图表', noCache: true }
    }
  ]
}

export default chartsRouter
