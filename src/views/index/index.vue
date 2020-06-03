<template>
  <div class="Index-content">
    <van-nav-bar>

      <template #left>
        <van-icon name="envelop-o"
                  size="26" />

      </template>
      <template #title>
        <van-image :src="require('@/assets/logo.png')"
                   height="26"
                   width="90" />
      </template>
      <template #right>
        <van-icon name="search"
                  size="26" />
      </template>
    </van-nav-bar>
    <van-tabs background="#f4f5f6"
              color="#466DE2">
      <van-tab v-for="(item,i) in content"
               v-bind:key='i'
               :title="item.name"
               to="/news">

        <router-view :path="item.path"></router-view>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      content: [
        { name: '头条', path: 'http://127.0.0.1:3001/top' },
        { name: '社会', path: 'http://127.0.0.1:3001/shehui' },
        { name: '国内', path: 'http://127.0.0.1:3001/guonei' },
        { name: '国际', path: 'http://127.0.0.1:3001/guoji' },
        { name: '娱乐', path: 'http://127.0.0.1:3001/yul' },
        { name: '体育', path: 'http://127.0.0.1:3001/tiyu' },
        { name: '科技', path: 'http://127.0.0.1:3001/keji' },
      ]
    }
  }
}
</script>
<style lang="less">
.van-nav-bar_left {
  padding: 10px;
}
.van-tabs--line {
  height: 46px;
}
</style>