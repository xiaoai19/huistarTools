<template>
  <div class="footer">
      <div class="Home_footer">
        <div class="call">
          <a href="mailto:tianhui19@126.com">联系我们</a>
        </div>
        <div class="illustrate">
          <span> 内容仅供学习，侵权立删！！！Copyright©2023至今</span>
          <span class="beian"
            ><a href="https://beian.miit.gov.cn/"
              >渝ICP备2021008534号-1</a
            ></span
          >
        </div>
      </div>
    </div>

</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.footer {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // position: fixed;
  // top: 95%;
  // left: 50%;
  text-align: center;
  margin-top: 200px;

}

.Home_footer {
  align-items: center;
  width: 312px;
  height: 60px;
  text-align: center;
  font-size: 0.8rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: #7b7b7b;
  padding-top: 0.12rem;  
  padding-bottom: 20px;
}
.call a {
  text-decoration: none;
  color: #7b7b7b;
}
.illustrate {
  display: flex;
  flex-direction: column;
  color: #7b7b7b;
  margin-top: 5px;
 
}
.illustrate .beian a {
  color: #7b7b7b;
  margin-top: 5px;
  font-size: 20px;
  text-decoration: none;

}
</style>