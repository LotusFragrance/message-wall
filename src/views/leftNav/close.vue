<template>
  <div class="nav-left">
    <img src="@/assets/images/logo.png" alt="" />
    <span class="iconfont icon-shouye"></span>
    <span class="iconfont icon-liuyanjianyi"></span>
    <span class="iconfont icon-zuqiu"></span>
    <span class="iconfont icon-fenxiang"></span>
  </div>
  <div class="isOpen">
    <span class="iconfont icon-zhankai" @click="clickFn"></span>
  </div>
</template>

<script>
export default {
  emits: ['change'],
  setup (props, { emit }) {
    const clickFn = () => {
      emit('change', { str: '250px', isOk: true })
    }
    return { clickFn }
  }
}
</script>

<style lang="less" scoped>
.nav-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-bottom: 30px;
    margin-top: 20px;
    width: 50px;
    height: 45px;
  }
  .iconfont {
    margin-bottom: 20px;
    font-size: 25px;
    cursor: pointer;
  }
}
.isOpen {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid @gray-2;
  text-align: center;
  line-height: 50px;
  span {
    font-size: 24px;
    cursor: pointer;
  }
}
</style>
