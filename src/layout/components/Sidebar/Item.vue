<template>
  <div>
  <template v-if="icon">
    <i class="sub-el-icon" :class="icon" v-if="icon.includes('el-icon')"></i>
    <svg-icon :icon-class="icon" v-else></svg-icon>
  </template>
  <span slot="title" v-if="title">{{title}}</span>
  </div>
</template>
<script>
export default {
  name: 'MenuItem',
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
}
</script>

<style scoped>
.sub-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
}
</style>
