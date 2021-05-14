<template>
  <div class="components-page-header">
    <h1>element-ui-admin</h1>
    <slot />
    <div
      v-if="!isShowHelp"
      class="help-wrapper"
    >
      <el-button
        icon="el-icon-s-promotion"
        type="primary"
        plain
        @click="goCE"
      >
        反馈
      </el-button>
      <el-divider
        direction="vertical"
      />
      <el-button
        icon="el-icon-notebook-2"
        type="primary"
        plain
        @click="goWiki"
      >
        使用流程
      </el-button>
    </div>
    <div class="pull-pageMode">
      <userHeaderBar class="marginL30" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import userHeaderBar from './user-header-bar.vue';

export default {
  name: 'page-header',
  components: {
    userHeaderBar,
  },
  data() {
    return { isShowHelp: true };
  },
  computed: {
    ...mapState({
      userData: state => state.user.userData,
      token: state => state.user.token,
    }),
  },
  watch: {
    '$route'(to,) {
      this.$data.isShowHelp = to.fullPath.includes('editor');
    },
  },
  methods: {
    goCE() {
      window.alert('goCE');
    },
    goWiki() {
      window.alert('goWiki');
    },
  },
};
</script>

<style lang="less" scoped>
.components-page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  line-height: 80px;
  padding-left: 33px;
  padding-right: 33px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 3px 10px 0px rgba(204, 204, 204, 0.35);
}

.el-dropdown-link {
  color: white;
}
.user-header-image {
  display: inline-block;
  vertical-align: middle;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 4px;
  font-size: 32px;
  line-height: 32px;
  text-align: center;
  margin-top: -5px;
}
.help-wrapper {
  flex: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 30px;
}
</style>
<style lang="less">
.logo-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 127px;
  height: 60px;
}
</style>
