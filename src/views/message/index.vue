<template>
  <div class="message-container">
    <!-- 头部 -->
    <div class="header">
      <img src="@/assets/images/logo.png" alt="Lotus_fragrance" />
      <span>Lotus_fragrance</span>
      <div class="tag">
        <el-tag
          round
          :class="{ megWall: true, current: isOk1 }"
          @click="clickFn1"
          >留言墙</el-tag
        >
        <el-tag
          round
          :class="{ megWall: true, current: isOk2 }"
          @click="clickFn2"
          >照片墙</el-tag
        >
      </div>
    </div>
    <div class="main">
      <router-view />
    </div>
    <div class="footer">333</div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
  setup () {
    const router = useRouter()
    const isOk1 = ref(true)
    const isOk2 = ref(false)
    const clickFn1 = () => {
      isOk1.value = true
      isOk2.value = false
      router.push({
        path: '/message'
      })
    }
    const clickFn2 = () => {
      isOk1.value = false
      isOk2.value = true
      router.push({
        path: '/message/photo'
      })
    }
    return { isOk1, isOk2, clickFn1, clickFn2 }
  }
}
</script>

<style lang="less" scoped>
.message-container {
  margin: 0 auto;
  width: 1200px;
  height: 100%;
  .header {
    display: flex;
    align-items: center;
    padding-left: 23px;
    height: 50px;
    background-color: #fff;
    img {
      width: 24px;
      height: 24px;
    }
    span {
      margin-left: 8px;
      font-size: 15px;
      color: #202020;
      font-weight: 600;
    }
    /deep/ .tag {
      margin-left: 353px;
      .megWall {
        width: 61px;
        cursor: pointer;
        font-size: 10px;
        font-weight: 600;
        border: 0;
        background-color: #fff;
      }
      .current {
        background-color: #3b73f0;
        color: #fff;
      }
    }
  }
}
</style>
