<template>
  <div class="main">
    <div class="headerTitle">
      <div class="header_txt">
        <div class="title_y">这是随机的一个句子</div>

        <ShareLink />
      </div>
      <div class="title_small_y">
        虽然有点无聊，但是平时可以摘抄一些，权当练字了
      </div>
    </div>

    <div class="titleContent">
      <h1 @click="changePassage">“ {{ passgetitle}}”</h1>
    </div>
    <ComMent />
  </div>
 
</template>

<script>
import axios from "axios";
export default {
  name: "RandomText",
  data() {
    return {
      passgetitle: "",
    };
  },
  mounted() {
    this.GetPassage();
  },

  methods: {
    GetPassage() {
      axios.get("https://v1.hitokoto.cn/?c=f&encode=text").then((res) => {
        // console.log(res.data);
        this.passgetitle = res.data;
      });
    },
    changePassage() {
      this.GetPassage();
    },
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 200px;
  line-height: 200px;
  text-align: center;
  cursor: pointer;
  margin-top: 300px;

}
.headerTitle {
  margin-top: 11px;
}
.header_txt {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -380px;
  margin-left: 120px;
}
.title_y {
  font-size: 28px;
  font-weight: 600;
  word-spacing: 100px;
  margin: 10px auto;
}

.title_small_y {
  width: 965px;
  height: 40px;
  margin-top: -175px;
  padding: 10px;
  text-align: center;
  margin-left: 57px;
}

.titleContent{
  margin-top: 105px;
  border: 2px dashed #e2e2e2;
  border-radius: 24px;
  margin-bottom: 20px;
}
.titleContent h1 {
  font-family: '楷体';
  font-size: 30px;
}

</style>