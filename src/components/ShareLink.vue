<template>
  <div>
   <el-button
      class="share"
      v-clipboard="copyContent"
      :plain="true"
      @click="open2"
      >分享支持下</el-button
    >
  </div>
</template>

<script>
export default {
  name: "share",
  data() {
    return {
      copyContent: window.location.href,
     
    };
  },
  methods: {
    open2() {
      this.$message({
        message: "已复制链接至粘贴板",
        type: "success",
      });
    },
  },
};
</script>

<style lang="less" scoped>
.share {
  margin-right: 30px;
  width: 136px;
  height: 40px;
  line-height: 20px;
  background-color: #136CE9;
  opacity: 0.6;
  border-radius: 8px;
  font-size: 16px;
  color: #fff;
  text-align: center;
  border: none;
}
</style>