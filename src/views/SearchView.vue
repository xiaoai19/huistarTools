<template>
  <div
    class="search"
    v-if="this.$route.path === '/'"
  >
    <div class="search_icon">
      <img
        class="searchsession"
        src="https://m4.publicimg.browser.qq.com/publicimg/nav/qbtool/search-icon.png"
        alt=""
      />
      <span class="searchspantxt"></span>
      <input
        type="text"
        class="search_input"
        placeholder="搜索想要的工具"
        v-model="keyword"
      />
    </div>

  <div class="home" >
    <ul class="list_item" v-if="searchResults.length > 0 ">
      <li class="item" v-for="item in searchResults" :key="item.id">
        <router-link to="/">
          <div
            class="pic"
            :style="
              `ImgStyle`
            "
          ></div>
          <div class="txt">
            <div class="title">{{ item.title }}</div>
            <div class="desc">{{ item.desc }}</div>
          </div>
        </router-link>
      </li>
    </ul>
    <!-- <p v-else>介个功能暂时还没有实现噢</p> -->
  </div>
  </div>
</template>

<script>
import  Fuse from 'fuse.js';
export default {
  data() {
    return {
      keyword: '',
      ViewList: [
        {
          id: 1,
          title: "云盘",
          desc: "随时上传下载你想要的各种文件",
          link: "diskcontent",
          ImgStyle:
            "background-image: url(https://m4.publicimg.browser.qq.com/imgUpload/qbtool.t_tool_info/20230217_ceu6pqwk1tk.png);"
        },
        {
          id: 2,
          title: "字符串中转",
          desc: "方便你更快的复制粘贴方便你更快的复制粘贴",
          link: "CandVContent",
          ImgStyle:
            "background-image: url(https://m4.publicimg.browser.qq.com/imgUpload/qbtool.t_tool_info/20220331_ki9cr030cbr.png);",
        },
        {
          id: 4,
          title: "ToDoList",
          desc: "每一件事都值得规划",
          link: "/",
          ImgStyle:
            "background-image: url(https://m4.publicimg.browser.qq.com/imgUpload/qbtool.t_tool_info/20220331_ki9cr030cbr.png);",
        },
        {
          id: 5,
          title: "随机文案",
          desc: "随机生成一句励志文案",
          link: "/",
          ImgStyle:
            "backgroung-image:url(https://m4.publicimg.browser.qq.com/imgUpload/qbtool.t_tool_info/20220216_06qdpm94j1x2.png);",
        },
        {
          id: 6,
          title: "密码验证格式",
          desc: "测试密码可用性",
          link: "/",
          ImgStyle:
            "background-image:url(https://m4.publicimg.browser.qq.com/imgUpload/qbtool.t_tool_info/20220216_06qdpm94j1x2.png);",
        },
      ],
      searchResults:[],
    };
  },
  methods:{
    search(){
      const options = {
        keys:['title'],
      };
      const fuse = new Fuse(this.ViewList,options);
      this.searchResults = fuse.search(this.keyword);
      console.log(this.searchResults);
    },
 
  },
  watch:{
    keyword() {
      this.search();
    }
  }
};
</script>

<style scoped >
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
.list_item {
  list-style-type: none;
  display: flex;
  padding-inline-start: 0;
  flex-wrap: wrap;
  color: #242424;
  margin-top: 6.120000000000001rem;
  margin-bottom: 3.5rem;
}
.item {
  width: 23.61111111%;
  height: 4.84rem;
  justify-content: flex-start;
  font-size: 0.2rem;
  text-align: center;
  position: relative;
  box-sizing: border-box;
  background: #fff;
  border: 1px solid #f0f2f5;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin: 0 0.69444444% 0.16rem;
  margin-top: 20px;
}
.item_box {
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #242424;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.16rem;
  margin-left: 10px;
}
.item_box .pic {
  width: 26px;
  height: 26px;
  position: relative;
  display: block;
  background-size: 80%;
  border: 0.2px dashed #666;
  margin-right: 0.16rem;
  background-repeat: no-repeat;
  background-position: 50%;
  margin-bottom: 22px;
}
.item_box .txt {
  /* flex: 1; */
  width: 194px;
  height: 50px;
  text-align: left;
  line-height: 20px;
  margin-left: 10px;
}
.item_box .title {
  flex: 1;
  text-align: left;
  font-size: 16px;
  padding-bottom: 5px;
}
.item_box .txt .desc {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  font-family: "微软雅黑";
  font-size: 14px;
}
</style>