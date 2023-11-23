<template>
  <div id="app">
    <div class="header_txt">
      <div class="title_y">字符串中转</div>

      <!-- <ShareLink /> -->
      <!-- <ShareQrCode  @click="generaQrCode" /> -->
      <!-- dialogVisible -->

      <el-button :plain="true" type="primary" @click="generaQrCode">点击或扫码复制到粘贴板</el-button>
      <img v-if="qrcodeUrl" :src="qrcodeUrl" width="116px" height="116px" alt="" />
    </div>

    <div class="title_small_y">方便快捷,告别通过微信QQ复制粘贴</div>
    <div class="file_upload_container">
      <textarea
        type="text"
        v-model="copy"
        class="inner_wrap"
        placeholder="粘贴你需要的文本或者链接"
      /> 
    </div>
    <el-backtop></el-backtop>
  </div>
</template>
  
  <script>
import qrcode from "qrcode";
// import ShareQrCode from './ShareQrCode.vue';
export default {
  name: "canv",
  components: {
    // ShareQrCode,
  },
  data() {
    return {
      visible: false,
      copy: "",
      qrcodeUrl: null,
      dialogVisible: false,
    };
  },
  methods: {
    async generaQrCode() {
      const qrCodeData = await qrcode.toDataURL(this.copy);
     
      if(this.copy.length > 0 ||  this.copy != ' ' && this.copy != null){
        this.qrcodeUrl = qrCodeData;
        // console.log(this.copy.length);
        // console.log(this.qrcodeUrl);

        navigator.clipboard
        .writeText(this.copy)
        .then((success) => {
          console.log("ok", success);
        })
        .catch((err) => {
          console.log("faile", err);
        });
      
        this.$notify({
            title: "已复制到粘贴板,亦可手机扫码复制！",
            message: "手机自带扫码",
            type:"success",
            offset: 50,
          });

      }else {
        this.$message({
          message:"请在文本框内输入正确内容后再点击生成！！",
          type:"error"
        })
      }
    },

    copyToClipboard() {
      navigator.clipboard
        .writeText(this.copy)
        .then((success) => {
          console.log("ok", success);
        })
        .catch((err) => {
          console.log("faile", err);
        });
    },

    // handleClose(done) {
    //   this.$confirm("确认关闭？")
    //     .then((_) => {
    //       done();
    //     })
    //     .catch((_) => {});
    // },
  },
};
</script>
 <style lang="less" scoped>
body {
  font-family: "字体圈欣意吉祥宋";
}
nav {
  .Header_left {
    display: flex;
    line-height: 41px;
    .Logo_title {
      font-size: 20px;
      margin-left: 10px;
    }
  }
  display: flex;
  justify-content: space-between;
  padding: 30px;
  .Header_Logo {
    flex: 2;
    display: inline-block;
    flex-shrink: 0;
    width: 41px;
    height: 41px;
    line-height: 41px;
    background: url(https://m4.publicimg.browser.qq.com/publicimg/nav/qbtool/logo.png)
      no-repeat 50%;
    background-position-y: 40%;
    background-position-x: center;
    background-size: contain;
    border-radius: 50%;
    cursor: pointer;
  }

  a {
    font-weight: bold;
    font-size: 18px;
    color: #2c3e50;
    text-decoration: none;

    .b:active {
      background-color: #2c3e50;
    }
  }
}
.header_txt {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-left: 120px;
}
.title_y {
  font-size: 30px;
  font-weight: 600;
  word-spacing: 100px;
  margin: 10px auto;
}

.title_small_y {
  width: 965px;
  height: 40px;
  margin: 10px 75px;
  padding: 10px;
  text-align: center;
}
.file_upload_container {
  width: 1014px;
  height: 700px;
  position: relative;
  margin: 0 auto;
}
.inner_wrap {
  position: absolute;
  width: 100%;
  height: 65%;
  display: flex;
  flex-direction: column;
  min-width: 100%;
  max-width: 100%;
  border: 2px dashed #e2e2e2;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  border-radius: 24px;
  background-color: #fff;
  font-size: 24px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 30px;
}
.upload_btn {
  padding: 8px 30px;
  text-align: center;
  background: #136ce9;
  border-radius: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #fafafa;
  cursor: pointer;
}

.desc1 {
  font-size: 20px;
  margin-left: 25px;
  margin-top: 10px;
}
</style>
  
  
  