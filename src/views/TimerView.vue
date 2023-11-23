<template>
  <div>
    <!-- <input type="number" v-model="hours"  placeholder="请输入小时数" />
    <input type="number" v-model="minutes" placeholder="请输入分钟数"/>
    <input type="number" v-model="seconds"  placeholder="请输入秒数" /> -->

    <div class="headerTitle">
      <div class="header_txt">
        <div class="title_y">计时器</div>

        <ShareLink />
      </div>
      <div class="title_small_y">可以自行设置时长，即刻开始</div>
    </div>

    <div class="selectTime" v-show="isShow">
      <el-select v-model="timeValue.hoursValue" filterable placeholder="请选择">
        <el-option v-for="item in ehours" :key="item.id" :value="item.value">
        </el-option>
      </el-select>

      <el-select
        v-model="timeValue.mintuesValue"
        filterable
        placeholder="请选择"
      >
        <el-option v-for="item in eminutes" :key="item.id" :value="item.value">
        </el-option>
      </el-select>

      <el-select
        v-model="timeValue.secondsValue"
        filterable
        placeholder="请选择"
      >
        <el-option v-for="item in eseconds" :key="item.id" :value="item.value">
        </el-option>
      </el-select>
    </div>

    <!-- <button @click="toggleTimer">{{ `${this.isRunning?"暂停计时":"开始计时"}`}}</button> -->

   <div class="btnAll">
    <el-button class="btn" @click="startTimer" size="medium"
      >开始计时</el-button
    >
    <el-button class="btn" @click="pauseTimer" size="medium"
      >重置计时</el-button
    >
   </div>

    <div v-show="!isShow" class="textContent">
      <p class="timeText">
        {{ this.hours | supertime }}:{{ this.minutes | supertime }}:{{
          this.seconds | supertime
        }}
      </p>
    </div>
  </div>
</template>  
  
<script>

export default {
  data() {
    return {
      ehours: "",
      eminutes: "",
      eseconds: "",
      timer: null,
      formattedTime: "",
      timeValue: {
        hoursValue: "",
        mintuesValue: "",
        secondsValue: "",
      },
      isShow: true,
      isFullscreen: false 
    };
  },
  mounted() {
    this.init();
  },
  filters: {
    supertime(value) {
      if (value == "") {
        return "00";
      }
      return value < 10 ? "0" + value : value;
    },
  },
  computed: {
    // jiankong() {
    //   if (this.hours > 23 || this.minutes > 60 || this.seconds > 60) {
    //     alert("请正确设置时间哦");
    //     clearInterval(this.timer);
    //     this.timer = null;
    //   }
    // },

    seconds: {
      get() {
        return this.timeValue.secondsValue;
      },
      set(newValue) {
        this.timeValue.secondsValue = newValue;
      },
    },

    minutes: {
      get() {
        return this.timeValue.mintuesValue;
      },
      set(newValue) {
        this.timeValue.mintuesValue = newValue;
      },
    },

    hours: {
      get() {
        return this.timeValue.hoursValue;
      },
      set(newValue) {
        this.timeValue.hoursValue = newValue;
      },
    },
  },

  methods: {
    init() {
      //小时
      var hoursTimeList = [];

      for (var i = 0; i <= 24; i++) {
        var item = {
          value: i,
        };
        hoursTimeList.push(item);
      }
      this.ehours = hoursTimeList;

      // 分钟
      var minutesList = [];
      for (var i = 0; i <= 60; i++) {
        var item = {
          value: i,
        };
        minutesList.push(item);
      }
      this.eminutes = minutesList;

      // 秒钟
      var secondsList = [];
      for (var i = 0; i <= 60; i++) {
        var item = {
          value: i,
        };
        secondsList.push(item);
      }
      this.eseconds = secondsList;
    },

    startTimer() {
      if (this.seconds != "" || this.minutes != "" || this.hours != "") {
        if (this.isShow) {
          this.isShow = !this.isShow;
          this.timer = setInterval(() => {
            this.seconds--;
            console.log(this.seconds);
            if (this.seconds < 0) {
              this.seconds = 59;
              this.minutes--;
              if (this.minutes < 0) {
                this.minutes = 59;
                this.hours--;
                if (this.hours < 0) {
                  this.hours = 23;
                }
              }
            }
            this.formattedTime = this.formatTime();
          }, 1000);
        }
      } else {
        this.$message({
          message: "设置时长再点击开始吧！",
          type: "warning",
        });
      }
      
     

      
      // this.jiankong;
    },
    pauseTimer() {
      if (this.isShow == false) {
        this.isShow = !this.isShow;
        clearInterval(this.timer);
        this.timeValue = {
          hoursValue: "",
          mintuesValue: "",
          secondsValue: "",
        };
      } else {
        this.$message({
          message: "计时器已经是初始状态了哦！！",
          type: "warning",
        });
      }
    },

    formatTime() {
      // const hoursStr = this.hours < 10 ? "0" + this.hours : this.hours;
      // const minutesStr = this.minutes < 10 ? "0" + this.minutes : this.minutes;
      // const secondsStr = this.seconds < 10 ? "0" + this.seconds : this.seconds;
      // hoursStr = hoursStr == 0 ? "0" + hoursStr : hoursStr;
      // minutesStr = minutesStr == 0 ? "0" + minutesStr : minutesStr;
      // secondsStr =   secondsStr == 0 ? "0" + secondsStr : secondsStr;
      if (this.hours == 0 && this.minutes == 0 && this.seconds == 0) {
        this.$notify.info({
          title: "消息",
          message: "您设定的时间到了！！",
          position: "bottom-right",
          
        });
        var utterance = new SpeechSynthesisUtterance();
        utterance.text = "您设定的时间到了"
        utterance.lang = 'zh-CN'
        utterance.rate = 1
        window.speechSynthesis.speak(utterance)


        clearInterval(this.timer);

        (this.timeValue = {
          hoursValue: "",
          mintuesValue: "",
          secondsValue: "",
        }),
          (this.isShow = !this.isShow);
      }
      // return `${hoursStr}:${minutesStr}:${secondsStr}`;
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
.selectTime {
  width: 60%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  /* justify-content: center; */
}
.btnAll{
  width: 60%;
  height: 50px;
  display: flex;
  justify-content: center;
  margin: 20px auto;
}
.btn{
  height: 45px;
}

.textContent {
  width: 100%;
  height: 350px;
  text-align: center;
  cursor: pointer;
  margin-top: 20px;
  border: 2px dashed #e2e2e2;
  border-radius: 24px;
}
.timeText {
  margin-left: 58px;
  font-size: 200px;
  margin-top: 27px;
}
</style>