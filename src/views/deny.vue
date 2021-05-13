<template>
  <div class="page-deny">
    尚无权限，请向管理员：draven申请权限
     <el-button  @click="handleClick()">111</el-button>
  </div>

</template>

<script>
export default {
  methods: {
    handleClick: function() {
        window.alert('权限')
    }
  }
};
</script>
<style lang="less" scoped>
.page-deny {
  position: absolute;
  top: 0;
  z-index: 1000;
  width: 100%;
  background-color: white;
  height: 100%;
  font-size: 30px;
  text-align: center;
  padding-top: 100px;
}
</style>
