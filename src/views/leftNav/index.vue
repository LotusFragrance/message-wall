<template>
  <div class="left-nav">
    <!-- logo区域 -->
    <div class="logo" style="padding-left: 20px">
      <h1>
        <img src="@/assets/images/logo.png" alt="" />
      </h1>
      <span class="text">Lotus_fragrance</span>
    </div>
    <!-- logo区域 -->

    <!-- 侧标导航区域 -->
    <div class="nav">
      <p>菜单</p>
      <el-menu
        class="el-menu-vertical-demo"
        router
        :default-active="activeIndex"
      >
        <el-menu-item index="/home" route="/home">
          <span class="iconfont icon-shouye"></span>
          <span class="nav-text">首页</span>
        </el-menu-item>
        <el-menu-item index="/message" route="/message">
          <span class="iconfont icon-liuyanjianyi"></span>
          <span class="nav-text">留言墙</span>
        </el-menu-item>
        <el-menu-item index="/football" route="/football">
          <span class="iconfont icon-zuqiu"></span>
          <span class="nav-text">足球往事</span>
        </el-menu-item>
        <el-menu-item index="/share" route="/share">
          <span class="iconfont icon-fenxiang"></span>
          <span class="nav-text">个人分享</span>
        </el-menu-item>
      </el-menu>
    </div>
    <!-- 侧标导航区域 -->

    <!-- 展开/收缩按钮 -->
    <div class="isOpen">
      <span class="iconfont icon-shousuo" @click="clickFn"></span>
    </div>
    <!-- 展开/收缩按钮 -->
  </div>
</template>

<script>
export default {
  setup (props, { emit }) {
    const clickFn = () => {
      emit('change', { str: '100px', isOk: false })
    }
    const activeIndex = '/home'
    return { clickFn, activeIndex }
  }
}
</script>

<style lang="less" scoped>
.left-nav {
  padding: 35px 0 0 30px;
}

.logo {
  display: flex;
  h1 {
    margin-right: 5px;
    width: 55px;
    height: 45px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .text {
    margin-top: 5px;
    font-size: 14px;
    font-weight: 600;
    color: @gray-0;
  }
}

.nav {
  margin-top: 50px;
  p {
    margin-left: 20px;
    font-size: 13px;
    color: @gray-2;
  }
  .el-menu {
    border-right: 0 !important;
    .iconfont {
      margin-right: 15px;
      font-weight: 600;
    }
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

.nav-text {
  font-weight: 600;
}
</style>
