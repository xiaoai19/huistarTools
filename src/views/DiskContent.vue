<template>
  <div id="app">
    <div class="header_txt">
      <div class="title_y">云盘</div>

      <ShareLink />
    </div>
    <!-- :action="`${baseUrl}/file/up`" -->

    <div class="title_small_y">上传、下载自己的文件</div>
    <!-- accept="application/zip, .zip, .jpg, .png, .txt" -->
    <!-- list-type="application/zip,.zip" -->
    <form action="" name="" class="file_upload_container">
      <div class="inner_wrap">
        <div class="uploadFiles">
          <el-upload
            class="upload-demo upl"
            drag
            name="newfile"
            :action="`${$GetUrl}/uploadFile`"
            :limit="3"
            multiple
            accept="application/zip, .zip, .jpg, .png, .txt,.xlsx,.docx"
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
              将文件拖到此处，或<em>点击上传</em>
            </div>
            <!-- <div class="el-upload__tip" slot="tip">
              只能上传jpg/png文件，且不超过500kb
            </div> -->
          </el-upload>
        </div>

        <!-- right -->

        <!-- v-infinite-scroll="load" -->
        <div class="infinite-list-wrapper filesList" style="overflow: auto">
          <div class="h3_t">
            <h3>已上传文件</h3>
          </div>
          <ul class="list" infinite-scroll-disabled="disabled">
            <li
              v-for="i in count"
              class="list-item list_d animate__bounceOutRight"
              :key="i.id"
            >
              {{ i }}

              <span class="caozuo">
                <span
                  ><el-button
                    type="success"
                    icon="el-icon-download k"
                    circle
                    download
                    @click="downFile(i)"
                  ></el-button
                ></span>
                <span
                  ><el-button
                    type="danger"
                    icon="el-icon-delete"
                    circle
                    @click="delfile(i)"
                  ></el-button
                ></span>
              </span>
            </li>
          </ul>
          <p
            v-if="loading"
            v-loading="loading"
            element-loading-text="拼命加载中"
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(0, 0, 0, 0.8)"
          ></p>
          <p v-if="noMore">
            <el-empty description="没有更多文件了！"></el-empty>
          </p>
        </div>
      </div>
    </form>
    <el-backtop></el-backtop>
  </div>
</template>

<script>
import axios from "axios";
import { getDiskContent } from "../api/index";
export default { 
  name: "fileupload",
  data() {
    return {
      visible: false,
      count: [],
      loading: false,
      displayedItems: [],
      // copyContent: window.location.href
    };
  },

  mounted() {
    getDiskContent().then((res) => {
      this.count = res.data;
    });
  },

  computed: {
    noMore() {
      const dqrouter = this.$route.path;
      const yprouter = "/diskcontent";
      if (dqrouter == yprouter) {
        if (this.displayedItems.length >= this.count.length) {
          this.$notify({
            title: "没有更多文件了！！！",
            message: "去上传文件",
            offset: 100,
          });
        }
      }

      return this.count.length >= this.count.length;
      // return this.count >= 20;
    },
    disabled() {
      return this.loading || this.noMore;
    },
  },
  methods: {
    // 上传
    upload(params) {
      const formData = new FormData();
      formData.append("newfile", params);

      axios.post(this.$GetUrl + "/uplodaFile", formData).then((res) => {
        console.log(res);
        // if (res.data != null) {
          setTimeout(() => {
            this.$message.success("上传成功!!");
            location.reload();
            this.getDiskContent();
          }, 1000);
        // }
      
      });
      
    },

    downFile(params) {
      console.log(params);
      var downlink = this.$GetUrl + "/static/" + params;
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = downlink;
      a.download = downlink;
      console.log(a.href);
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      // console.log(downlink);
      if (params.match(/\.(png|jpg|PNG|JPG|JPEG)/)){
        this.downloadIamge(downlink,params)
      }else{
        const a = document.createElement("a");
      a.style.display = "none";
      a.href = downlink;
      a.download = downlink;
      console.log(a.href);  
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      }
    },
    downloadIamge(imgsrc, name) {
      var image = new Image();
      image.setAttribute("crossOrigin", "anonymous");
      image.onload = function () {
        var canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        var context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, image.width, image.height);
        var url = canvas.toDataURL("image/png");
        var a = document.createElement("a");
        var event = new MouseEvent("click");
        a.download = name || "photo";
        a.href = url;
        a.dispatchEvent(event);
      };
      image.src = imgsrc;
    },

    delfile(params) {
      const obj = {
        filename: params,
      };
      console.log(obj);
      axios.post(this.$GetUrl + "/delfiles", obj).then((res) => {
        console.log(res);
        this.$message.success("删除成功！");
        setTimeout(() => {
          location.reload();
          // this.getDiskContent();
        }, 1000);
      });
    },  

   
  },
};
</script>


<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
}
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
  width: 136%;
  height: 230px;
  display: flex;
  justify-content: center;
  // margin: auto 80px;
  text-align: center;
  margin: -22px -199px;
}

.inner_wrap {
  width: 80%;
  height: 298%;
  top: -10px;
  left: -110px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border: 2px dashed #e2e2e2;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  border-radius: 24px;
  background-color: #fff;
}

.list {
  width: 100%;
  list-style: none;
}

.list_d {
  width: 96%;
  height: 50px;
  font-size: 16px;
  display: flex;
  line-height: 50px;
  justify-content: space-between;
  border-radius: 24px;
  margin-bottom: 25px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  padding-left: 10px;
}
.caozuo span:nth-child(1) {
  margin-right: 20px;
}
.uploadFiles {
  width: 50%;
  height: 90%;
}
.uploadFiles .upl {
  width: 95%;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
}

.filesList {
  width: 50%;
  height: 90%;
  border: 2px dashed #e2e2e2;
  padding: 10px;
  border-radius: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
}

.filesList .h3_t {
  width: 100%;
  height: 50px;
  text-align: center;
  margin-bottom: 25px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
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


