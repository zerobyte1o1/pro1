<template>
  <div class="newscontent">
    <span></span>
    <img src=""
         alt=""><img>
    <div class="smalltest"></div>
  </div>
</template>
<script>

export default {
  props: ['path'],
  data () {
    return {

    }
  },
  mounted () {
    this.getViewDAta()

  },
  methods: {
    async getViewDAta () {
      try {
        let res = await axios.get(this.path)
        console.log(res);      }
      catch (err) {
        console.log(err);

      }


    }
  }

}


</script>
<style lang="less">
.newscontent {
  width: 100%;
  height: 210px;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
  background: #333;
  border-bottom: 1px solid #f5f6f8;
  .smalltest {
    color: #bfbfbf;
  }
}
</style>