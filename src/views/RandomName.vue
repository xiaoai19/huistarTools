<template>
  <div>
    <div class="headerTitle">
      <div class="header_txt">
        <div class="title_y">随机网名</div>

        <ShareLink />
      </div>
      <div class="title_small_y">生成一个随机的网名，采用诗经</div>
    </div>

    <el-button @click="generateRandomName">生成随机名称</el-button>
   <span class="nameText"><p v-show="randomName">{{ randomName }}</p></span>
  </div>
</template>

<script>
export default {
  name: "RandomName",
  data() {
    return {
      randomName: null,
    };
  },
  methods: {
    generateRandomName() {
      const shijin = [
        "关关雎鸠，在河之洲。窈窕淑女，君子好逑。",
        "参差荇菜，左右流之。窈窕淑女，寤寐求之。",
        "求之不得，寤寐思服。悠哉悠哉，辗转反侧。",
        "参差荇菜，左右采之。窈窕淑女，琴瑟友之。",
        "参差荇菜，左右芼之。窈窕淑女，钟鼓乐之。",
        "桃之夭夭，灼灼其华。之子于归，宜其室家。",
        "桃之夭夭，有蕡其实。之子于归，宜其家室。",
        "桃之夭夭，其叶蓁蓁。之子于归，宜其家人。",
        "南有乔木，不可休息；汉有游女，不可求思。",
        "汉之广矣，不可泳思；江之永矣，不可方思。",
        "翘翘错薪，言刈其楚；之子于归，言秣其马。",
        "汉之广矣，不可泳思；江之永矣，不可方思。",
        "之子于归，言于牧之兮！伊人云莫还姿势是一笑样子可比",
      ];
      const firstChar =
        shijin[Math.floor(Math.random() * shijin.length)].charAt(0);
      const secondChar =
        shijin[Math.floor(Math.random() * shijin.length)].charAt(0);
      const thirdChar =
        shijin[Math.floor(Math.random() * shijin.length)].charAt(0);
      const fouthChar =
        shijin[Math.floor(Math.random() * shijin.length)].charAt(0);

      this.randomName = `${firstChar}${secondChar}${thirdChar}${fouthChar}`;
    },
  },
};
</script>

<style scoped>
.headerTitle {
  margin-top: 11px;
}
.header_txt {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -50px;
  margin-left: 120px;
}
.title_y {
  font-size: 28px;
  font-weight: 600;
  word-spacing: 100px;
  margin: 35px auto;
}

.title_small_y {
  width: 965px;
  height: 40px;
  margin-top: -34px;
  padding: 10px;
  text-align: center;
  margin-left: 65px;
}
.nameText{
  width: 100%;
  height: 300px;
  font-size: 60px;
  text-align: center;
  border: 2px dashed #e2e2e2;
  border-radius: 24px;
}
</style>