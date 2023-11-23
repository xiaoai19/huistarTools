<template>
  <div>
    <ul class="list_item">
      <li class="item">
        <router-link class="item_box" to="/candvcontent">
          <div
            class="pic"
            style="
              background-image: url(https://m4.publicimg.browser.qq.com/imgUpload/qbtool.t_tool_info/20220331_ki9cr030cbr.png);
            "
          ></div>
          <div class="txt">
            <div class="title">字符串中转</div>
            <div class="desc">方便你更快的复制粘贴方便你更快的复制粘贴</div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
    name:'CandV',
}
</script>

<style lang="css" scoped>
  .list_item {
  list-style-type: none;
  display: flex;
  padding-inline-start: 0;
  flex-wrap: wrap;
  color: #242424;
  margin-top: 0.12rem;
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
}
</style>