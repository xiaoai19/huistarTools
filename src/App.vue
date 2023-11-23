<template>
  <div id="app">

    <PublicHeader />
    <footer-view />
    
  </div>
</template>

<script>
import FooterView from "./components/FooterView.vue";
import ShareLink from "./components/ShareLink.vue";

export default {
  components: { FooterView, ShareLink },
  data() {
    return {
      visible: false,
    };
  },
};
</script>

<style lang="less">
body {
  font-family: "字体圈欣意吉祥宋";
}
#app {
  width: 1143px;
  height: 800px;
  margin: 0 auto;
}
.th {
  width: 1143px;
  height: 800px;
  margin: 0 auto;
}

.Nav {
  .Header_left {
    display: flex;
    line-height: 41px;
    .Header_Logo {
      flex: 2;
      display: inline-block;
      flex-shrink: 0;
      width: 41px;
      height: 41px;
      line-height: 41px;
      background: url(@/assets/logo2.png)
      no-repeat 50%;
      background-position-y: 40%;
      background-position-x: center;
      background-size: contain;
      border-radius: 50%;
      cursor: pointer;
    } 
    .Logo_title {
      font-size: 20px;
      margin-left: 10px;
    }
  }
  display: flex;
  justify-content: space-between;
  padding: 30px;

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
.header_txtA {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-left: 25px;
}
.title_A {
  font-size: 40px;
  font-weight: 600;
  word-spacing: 100px;
}
.share {
  margin-right: 30px;
  width: 136px;
  line-height: 44px;
  background: #1f7efb;
  opacity: 0.6;
  border-radius: 8px;
  font-size: 16px;
  color: #fff;
  text-align: center;
  border: none;
}
.desc1 {
  font-size: 20px;
  margin-left: 25px;
  margin-top: 10px;
}
.search {
  width: 97%;
  display: flex;
  height: 50px;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin: 50px auto;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}
.searchsession {
  width: 18px;
  height: 18px;
  overflow-clip-margin: content-box;
  overflow: clip;
  line-height: 50px;
  margin: 0 auto;
}
.searchspantxt {
  width: 50px;
  margin: 0 auto;
}
.search_input {
  width: 970.66px;
  margin: 0 auto;
  height: 30px;
  border: none;
  outline: none;
  padding-left: 50px;
}
</style>
