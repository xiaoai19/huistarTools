<template>
  <div>
      <input v-model="scannedData" readonly type="text">
      <vue-qrcode-reader @decode="onDecode" ></vue-qrcode-reader>
  </div>
</template>
  
  <script>
import { VueQrcodeReader } from 'vue-qrcode-reader';
export default {
  name: "shareQrCode",
  components:{
    VueQrcodeReader
  },
  data() {
    return {
        scannedData:''
    };
  },
  methods: {
      onDecode(result){
        const parsedData = result;
        this.scannedData = parsedData;
      },

      // this.$message({
      //   message: "已复制链接至粘贴板",
      //   type: "success",
      // });
  },
};
</script>
  
  <style lang="less" scoped>
.share {
  margin-right: 30px;
  width: 136px;
  height: 40px;
  line-height: 20px;
  background-color: #136ce9;
  opacity: 0.6;
  border-radius: 8px;
  font-size: 16px;
  color: #fff;
  text-align: center;
  border: none;
}
</style>