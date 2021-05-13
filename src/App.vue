<template>
  <div
      id="app"
      :class="{hideHeader: $route.meta.hideHeader}"
  >
    <div
        v-show="!$route.meta.hideHeader"
        class="page-header-wrapper"
    >
      <page-header />
    </div>
    <router-view class="sub-page" />
  </div>
</template>
<script>
import PageHeader from 'src/components/page-header.vue';
import { mapState } from 'vuex';

export default {
  components: {
    [PageHeader.name]: PageHeader,
  },
  computed: {
    ...mapState({
      authority: state => state.user.authority,
    }),
  },
  async created() {

  },
  methods: {

  },
};
</script>
<style lang="less">
html,
body {
  position: relative;
  height: 100%;
}
#app {
  font-family: Helvetica Neue,Helvetica,Roboto,Segoe UI,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
  height: 100%;
  padding-top: 80px;
  box-sizing: border-box;
  .page-header-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
  }
  &.hideHeader {
    padding-top: 0;
  }
}
.sub-page {
  position: relative;
  height: 100%;
}
</style>
