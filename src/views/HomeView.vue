<template>
  <div class="home">
    <ul class="list_item">
      <!-- <li class="item" v-for="item in filteredData" :key="item.id">
        <router-link class="item_box" to="link" >
          <div class="pic" :style="ImgStyle" ></div>
          <div class="txt">
            <div class="title">{{ item.title }}</div>
            <div class="desc">{{ item.desc }}</div>
          </div>
        </router-link>
      </li> -->
      <el-badge value="hot"  class="item">
        <router-link class="item_box" to="/diskcontent">
          <div
            class="pic"
            style="
              background-image: url(https://m4.publicimg.browser.qq.com/imgUpload/qbtool.t_tool_info/20230217_ceu6pqwk1tk.png);
            "
          ></div>
          <div class="txt">
            <div class="title">云盘</div>
            <div class="desc">随时上传下载你想要的各种文件</div>
          </div>
        </router-link>
      </el-badge>

      <li class="item">
        <router-link class="item_box" to="/candvcontent">
          <div
            class="pic"
            style="
              background-image: url(https://m4.publicimg.browser.qq.com/imgUpload/qbtool.t_tool_type/20230406_je2677qg5fb.png);
            "
          ></div>
          <div class="txt">
            <div class="title">字符串中转</div>
            <div class="desc">方便你更快的复制粘贴方便你更快的复制粘贴</div>
          </div>
        </router-link>
      </li>

      <li class="item">
        <router-link class="item_box" to="/TodoListContent">
          <div
            class="pic"
            style="
              background-image: url(https://m4.publicimg.browser.qq.com/imgUpload/qbtool.t_tool_type/20230406_je2677qg5fb.png);
            "
          ></div>
          <div class="txt">
            <div class="title">ToDoList</div>
            <div class="desc">每一件事都值得规划</div>
          </div>
        </router-link>
      </li>

      <li class="item">
        <router-link class="item_box" to="/">
          <div
            class="pic"
            style="
              background-image: url(https://m4.publicimg.browser.qq.com/imgUpload/qbtool.t_tool_type/20230406_je2677qg5fb.png);
            "
          ></div>
          <div class="txt">
            <div class="title">密码验证格式</div>
            <div class="desc">测试密码可用性</div>
          </div>
        </router-link>
      </li>

      <el-badge value="hot"  class="item">
        <router-link class="item_box" to="/RandomText">
          <div
            class="pic"
            style="
              background-image: url(https://m4.publicimg.browser.qq.com/imgUpload/qbtool.t_tool_type/20230406_je2677qg5fb.png);
            "
          ></div>
          <div class="txt">
            <div class="title">随机文案</div>
            <div class="desc">随机生成一句励志文案</div>
          </div>
        </router-link>
      </el-badge>

      <li class="item">
        <router-link class="item_box" to="/pdftranword">
          <div
            class="pic"
            style="
              background-image: url(https://m4.publicimg.browser.qq.com/imgUpload/qbtool.t_tool_type/20230406_1644201mmws.png);
            "
          ></div>
          <div class="txt">
            <div class="title">PDF转Word</div>
            <div class="desc">将PDF文件转换为word文件</div>
          </div>
        </router-link>
      </li>

      <el-badge value="hot" class="item">
        <router-link class="item_box" to="/Timerview">
          <div
            class="pic"
            style="
              background-image: url(https://m4.publicimg.browser.qq.com/imgUpload/qbtool.t_tool_type/20230406_1644201mmws.png);
            "
          ></div>
          <div class="txt">
            <div class="title">全屏计时器</div>
            <div class="desc">铺满整个屏幕的定时器是不是更有格调</div>
          </div>
        </router-link>
      </el-badge>

      <el-badge value="new" type="success" offset="[-20, 10]" class="item">
        <router-link class="item_box" to="/RandomName">
          <div
            class="pic"
            style="
              background-image: url(https://m4.publicimg.browser.qq.com/imgUpload/qbtool.t_tool_type/20230406_1644201mmws.png);
            "
          ></div>
          <div class="txt">
            <div class="title">生成一个随机网名</div>
            <div class="desc">专治取网名困难户</div>
          </div>
        </router-link>
      </el-badge>

    </ul>

    <DiskContent v-show="$route.name == '/diskcontent'" />
    <CandVContentVue v-show="$route.name == '/candvcontent'" />
    <PdfTranWord v-show="$route.name == '/pdftranword'" />
    <TimerView v-show="$route.name == '/Timerview'" />
    <RandomText v-show="$route.name == '/RandomText'" />
    <TodoListContent v-show="$route.name == '/TodoListContent'" />
    <RandomName v-show="$route.name == '/RandomName'" />
  </div>
</template>

<script>
import DiskContent from "./DiskContent.vue";
import CandVContentVue from "./CandVContent.vue";
import PdfTranWord from "./PdfTranWord.vue";
import TimerView from "./TimerView.vue";
import RandomText from "./RandomText.vue";
import TodoListContent from "./TodoListContent.vue";
import RandomName from "./RandomName.vue";
export default {
  name: "HomeView",
  components: {
    DiskContent,
    CandVContentVue,
    PdfTranWord,
    TimerView,
    RandomText,
    TodoListContent,
    RandomName
  },
  data() {
    return {};
  },
};
</script>

<style lang="css" >
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
  border-bottom: 0.2px dashed #666;
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
