<template>
  <div class="msg-wall">
    <div class="title">
      <p>留言墙</p>
      <span>很多事情值得记录，当然也值得回味</span>
    </div>
    <div class="tab">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane
          :label="str"
          :name="index"
          v-for="(str, index) in tabArr"
          :key="index"
          class="content"
          >
            <card />
          </el-tab-pane
        >
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import card from './components/card.vue'
export default {
  components: {
    card
  },
  setup () {
    const activeName = ref(0)
    const tabArr = ref([
      '全部',
      '留言',
      '目标',
      '理想',
      '过去',
      '将来',
      '爱情',
      '亲情',
      '友情',
      '秘密',
      '信条'
    ])
    const handleClick = () => {
      console.log(activeName.value)
    }
    return { activeName, handleClick, tabArr }
  }
}
</script>

<style lang="less" scoped>
.msg-wall {
  padding: 30px 42px;
  .title {
    margin: 0 auto;
    margin-bottom: 30px;
    width: 800px;
    text-align: center;
    p {
      line-height: 59px;
      font-size: 42px;
      color: #202020;
      font-weight: 600;
    }
    span {
      margin-top: 6px;
      line-height: 15px;
      font-size: 10px;
      color: #5b5b5b;
      font-weight: 400;
    }
  }
  .tab {
    .content {
        margin-top: 5px;
    }
  }
}
</style>
