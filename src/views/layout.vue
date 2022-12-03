<template>
  <div class="page-container">
    <div class="nav-left" :style="{width: wpx}">
      <leftNav @change="changeNum" v-if="changeOne"/>
      <close @change="changeNum" v-else />
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import leftNav from '@/views/leftNav'
import close from '@/views/leftNav/close.vue'
import { ref } from 'vue'
export default {
  components: {
    leftNav,
    close
  },
  setup () {
    const wpx = ref('250px')
    const changeOne = ref(true)
    const changeNum = (obj) => {
      wpx.value = obj.str
      changeOne.value = obj.isOk
    }
    return { wpx, changeNum, changeOne }
  }
}
</script>

<style lang="less" scoped>
.page-container {
  display: flex;
  height: 100vh;
  .content {
    flex: 1;
    padding: 25px 35px;
    height: 100%;
    background-color: @gray-3;
  }
  .nav-left {
    position: relative;
    transition: all .5s;
    overflow: hidden;
  }
}

</style>
