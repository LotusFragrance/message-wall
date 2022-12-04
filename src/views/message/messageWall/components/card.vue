<template>
  <ul
    class="card"
    v-infinite-scroll="load"
    :infinite-scroll-disabled="disabled"
  >
    <li class="item" v-for="i in num" :key="i">
      <div class="header">
        <span>2022.08.23</span>
        <span>留言</span>
      </div>
      <div class="main">
    这是一段暖心的话，它或许不长，但是它是我现在最想说的。放在这里就留一个纪念吧。
      </div>
      <div class="footer">
        <div class="left">
          <div class="like">
            <span
              class="iconfont icon-xihuan"
              :style="{ color: isLike }"
            ></span>
            <span>3</span>
          </div>
          <div class="cmp">
            <span class="iconfont icon-comment"></span>
            <span>4</span>
          </div>
        </div>
        <div class="right">Lotus_fragrance</div>
      </div>
    </li>
  </ul>
  <loading v-if="loading" />
  <p v-if="noMore">没有更多了~~</p>
</template>

<script>
import { ref, computed } from 'vue'
import loading from './loading.vue'
export default {
  components: {
    loading
  },
  setup () {
    const loading = ref(false)
    const num = ref(13)
    const isLike = ref('#F67770')
    const load = () => {
      loading.value = true
      setTimeout(() => {
        num.value += 10
        loading.value = false
      }, 2000)
    }
    const noMore = computed(() => num.value >= 53)
    const disabled = computed(() => loading.value || noMore.value)
    return { num, load, noMore, disabled, loading, isLike }
  }
}
</script>

<style lang="less" scoped>
.card {
  display: flex;
  flex-wrap: wrap;
  .item {
    padding: 6px 15px 0;
    margin-bottom: 10px;
    margin-right: 9px;
    width: 216px;
    height: 180px;
    background-color: #ecd5d1;
    transition: all .5s;
    z-index: 1000;
    &:hover {
        transform: translateY(-5px);
    }
    &:nth-child(5n) {
      margin-right: 0;
    }
    .header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      font-size: 9px;
      color: #949494;
    }
    .main {
      margin-bottom: 13px;
      height: 105px;
      font-size: 14px;
      color: #202020;
      font-family: KaiTi;
      line-height: 18px;
      font-weight: 400;
      cursor: pointer;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 6;
      overflow: hidden;
    }
    .footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 9px;
      .left {
        display: flex;
        .like,
        .cmp {
          margin-right: 8px;
          .iconfont {
            font-size: 9px;
            margin-right: 3px;
          }
        }
      }
    }
  }
}

p {
  text-align: center;
  font-size: 18px;
  color: @gray-2;
}
</style>
