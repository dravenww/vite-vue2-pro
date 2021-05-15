import Vue from 'vue'
import SvgIcon from 'src/components/SvgIcon/index.vue'// svg component

// register globally
Vue.component('svg-icon', SvgIcon)

const svgs = import.meta.glob('./svg/*.svg');

const requireAll = () => Object.keys(svgs).forEach((item) => {
  const fn = svgs[item];
  if (typeof fn === 'function') {
    fn.call(null).then(res => {
      console.log(res.default)
      import(res.default + '?url');
    });
  }
})
requireAll()
