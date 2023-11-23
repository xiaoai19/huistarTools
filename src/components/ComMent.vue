<template>
  <div class="comment-section">
    <!-- 左侧部分 -->
    <div class="shurucontent">
      <div class="commentInput">
        <input
          type="text"
          class="comment-input"
          v-model="newComment"
          @keyup.enter="addComment"
          placeholder="请输入评论内容"
        />
      </div>

      <div class="tjBox">
        <div class="zishuxianzhi">
          <span>
            还能输入
            <em>1000</em>
            个字符
          </span>
        </div>
        <button class="tjpl" @click="addComment">提交评论</button>
      </div>
    </div>

    <!-- 评论内容 -->
    <div class="comentb" >
      <div class="h3_t">
        <p>全部评论</p>
      </div>
      <div class="comment-listcontent" >
        <ul class="coment-list" >
        <li
          class="coment-list-item"
          v-for="(comment, index) in comments"
          :key="index"
        >
          {{ comment }}
        </li>
        
      </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { getAllComments } from '../api/index'
export default {
  data() {
    return {
      newComment: "",
      comments: [],
    };
  },

  mounted(){
    // axios.get().then(res =>{
    //   console.log('发起了请求！！');
    // })
    getAllComments().then((res) =>{
      this.comments = res.data
    })
  },  

  methods: {
    addComment() {
      if (this.newComment.trim()) {
        this.comments.push(this.newComment);
        this.newComment = "";
        this.$message({
          message: "评论成功！！",
          type: "success",
        });
      } else {
        this.$message({
          message: "没有输入评论哦",
          type: "warning",
        });
      }
    },
  },
};
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.comment-section {
  width: 100%;
  height: 298px;
  display: flex;
  background: rgba(245, 246, 247, 0.8);
  border-radius: 8px;
  padding: 14px 0;
}
.shurucontent {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 2px dashed #e2e2e2;
  padding-right: 5px;
}
.comment-input {
  display: block;
  width: 100%;
  background: rgba(248, 249, 251, 0.8);
  outline: none;
  border: none;
  padding: 0 16px;
  border-radius: 4px;
  resize: none;
  height: 88px;
  font-size: 14px;
  line-height: 22px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-family: "SF Pro Display", Roboto, Noto, Arial, "PingFang SC",
    "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.comentb {
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
}
.comentb .h3_t{
  width: 100%;
  height: 19%;
  font-weight: 800;
  font-size: 20px;
  line-height: 30px;
  z-index: 999;
}
.comment-listcontent{
  overflow: auto;
  height: 160%;
  margin-bottom: 10px;
}
.coment-list{
  list-style: none;
  margin-top: -80px;
  text-align: left;
  padding-left: 15px;
}
.coment-list-item{
  width: 100%;
  height: 30px;
}
.tjBox {
  height: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 8px 16px 0 16px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  -webkit-transition: display 0.3s ease-in-out;
  transition: display 0.3s ease-in-out;
  margin-top: 91px;
}
.tjBox .tjpl {
  display: block;
  width: 80px;
  height: 30px;
  background: #fc5531;
  color: #fff;
  border-radius: 16px;
  font-size: 14px;
  text-align: center;
  line-height: 24px;
  border: none;
  margin-top: 84px;
}
.tjBox .zishuxianzhi {
  font-size: 12px;
  color: #999aaa;
}

</style>
