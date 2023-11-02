<template>
  <div id="aiedgebox">
    <el-carousel height="450px" style="z-index: -1">
      <el-carousel-item v-for="item in img" :key="item.id">
        <img
          :src="item.src"
          style="width: 100%; height: 100%"
        />
      </el-carousel-item>
    </el-carousel>
    <div>
      <el-row>
        <el-col :span="2"><div>&nbsp;</div></el-col>
        <el-col :span="20"
          ><div class="main">
            <div class="productintroduction">
              <h2>产品介绍</h2>
              <div class="productintroduction_main">
                <div class="productintroduction_mainText">
                  <h3>22种算法任选5种算法内置</h3>
                  <div class="data">
                    提供<span class="optimize">Celeron/i3/i5/i7</span
                    >处理器，视频流接入<span class="optimize">2-10</span
                    >路，支持<span class="optimize">4-24</span>路智能分析
                  </div>
                  <p>
                    人脸识别 | 抽烟识别 | 打手机识别 | 口罩识别 | 厨师工作帽识别
                    | 厨房夜间老鼠识别 | 安全帽识别 | 烟雾识别 | 火焰识别 |
                    反光衣识别 | 离岗识别 | 越界识别 | 车辆特征与车牌识别 |
                    人流密度识别 | 客流统计 | 明火与烟雾检测 | 聚众识别 |
                    道路积水识别 | 裸露土堆识别 | 写字楼消防门堵塞识别 |
                    灭火器缺失识别 | 人员闯入识别 | 油罐车检测 |
                    卸油作业安全设施识别 | 非卸油车辆入侵检测 | 卸油管连接检测 |
                    静电释放检测
                  </p>
                  <div class="b">
                    <span class="textThree">申请试用</span>
                  </div>
                </div>
                <div class="productintroduction_mainImg">
                  <img src="../assets/img/1.png" alt="产品样式图" />
                </div>
              </div>
            </div>
            <div class="productadvantages">
              <h2>产品优势</h2>
              <div class="productadvantages_main">
                <div
                  class="productadvantages_main_div"
                  v-for="item in productadvantages"
                  :key="item.id"
                >
                  <div class="productadvantages_mainTextOne">
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.textOne }}</p>
                    <p>{{ item.textTwo }}</p>
                    <p>{{ item.textThree }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="PlatformHighlights">
              <div class="PlatformHighlights_icon">
                <h2>平台亮点</h2>
                <div class="PlatformHighlights_iconFont">
                  <div
                    class="PlatformHighlights_iconMain"
                    v-for="item in PlatformHighlights"
                    @mouseenter="productMouseMove"
                    @mouseleave="item.Icon = false"
                    :key="item.id"
                    :id="item.id"
                  >
                    <img
                      :src="item.Icon ? item.imgIcon1 : item.imgIcon"
                      class="PlatformHighlights_Icon"
                    />
                    <div class="PlatformHighlights_iconMain_p">
                      {{ item.title }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="PlatformHighlights_img">
                <img :src="applyObj.img" alt="" />
              </div>
            </div>
            <div class="ApplicationScenario">
              <h2>应用场景</h2>
              <div class="ApplicationScenario_Main">
                <div
                  class="ApplicationScenario_MainOne"
                  v-for="item in ApplicationScenario"
                  :key="item.id"
                >
                  <img :src="item.img" alt="" />
                  <p>{{ item.text }}</p>
                </div>
              </div>
            </div>
            <div class="technicalspecifications">
              <h2>技术规格</h2>
              <div class="technicalspecifications_main">
                <div
                  class="technicalspecifications_Text"
                  v-for="item in technicalspecifications"
                  :key="item.id"
                >
                  <p class="technicalspecifications_p1">{{ item.name }}</p>
                  <p class="technicalspecifications_p2">{{ item.text }}</p>
                </div>
              </div>
            </div>
          </div></el-col
        >
        <el-col :span="2"><div>&nbsp;</div></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "aiedgebox",
  data() {
    return {
      img: [
        {
          id: 1,
          src: require("@/assets/img/背景.jpg"),
        },
        {
          id: 2,
          src: require("@/assets/img/背景2.jpg"),
        },
      ],
      productadvantages: [
        {
          id: 1,
          title: "超灵活",
          textOne: "轻盈小巧功耗低，通电即用",
          textTwo: "算法DIY组合，应用场景广泛",
          textThree: "个性化策略配置，多算法报警结果融合",
        },
        {
          id: 2,
          title: "超省事",
          textOne: "内置算法及应用，无需搭建运行环境",
          textTwo: "开箱即用，无需改变原有组网方式",
          textThree: "支持市场主流网络IPC标准协议接入",
        },
        {
          id: 3,
          title: "超智能",
          textOne: "算法自定义组合，应用场景广泛",
          textTwo: "高抓拍率、高准确率、低误报率智能算法",
          textThree: "自定义分析结果上传至第三方系统",
        },
        {
          id: 4,
          title: "超安全",
          textOne: "硬件加密，算法管控，双重保障",
          textTwo: "数据存储期限你来定，过期自动删",
          textThree: "HTTPS 模式下，数据一样安全推送",
        },
      ],
      PlatformHighlights: [
        {
          id: 1,
          imgIcon:
            "https://ow.extremevision.com.cn/uploadfile/file/20230421/1682058497496774.png",
          imgIcon1:
            "https://ow.extremevision.com.cn/uploadfile/file/20230421/1682058502242489.png",
          title: "报警提醒",
          img:require("@/assets/img/1报警提醒.png"),
          details: "详细内容1",
          Icon: false,
        },
        {
          id: 2,
          imgIcon:
            "https://ow.extremevision.com.cn/uploadfile/file/20230421/1682058754688457.png",
          imgIcon1:
            "https://ow.extremevision.com.cn/uploadfile/file/20230421/1682058759360344.png",
          title: "违章分类查询",
          img:require("@/assets/img/2违章分类.png"),
          details: "详细内容2",
          Icon: false,
        },
        {
          id: 3,
          imgIcon:
            "https://ow.extremevision.com.cn/uploadfile/file/20230421/1682058821831928.png",
          imgIcon1:
            "https://ow.extremevision.com.cn/uploadfile/file/20230421/1682058826422030.png",
          title:"二次识别处理",
          img:require("@/assets/img/3二次识别处理.png"),
          details: "详细内容3",
          Icon: false,
        },
        {
          id: 4,
          imgIcon:
            "https://ow.extremevision.com.cn/uploadfile/file/20230421/1682058694747326.png",
          imgIcon1:
            "https://ow.extremevision.com.cn/uploadfile/file/20230421/1682058699698230.png",
          title:"推送通知",
          img:require("@/assets/img/4推送通知.png"),
          details: "详细内容4",
          Icon: false,
        },
        {
          id: 5,
          imgIcon:
            "https://ow.extremevision.com.cn/uploadfile/file/20230421/1682058229797863.png",
          imgIcon1:
            "https://ow.extremevision.com.cn/uploadfile/file/20230421/1682058234469996.png",
          title:"管理摄像头",
          img:require("@/assets/img/5管理摄像头.png"),
          details: "详细内容5",
          Icon: false,
        },
        {
          id: 6,
          imgIcon:
            "https://ow.extremevision.com.cn/uploadfile/file/20230630/1688095939552630.png",
          imgIcon1:
            "https://ow.extremevision.com.cn/uploadfile/file/20230630/1688095945760615.png",
          title:"数据管理",
          img:require("@/assets/img/6数据管理.png"),
          details: "详细内容6",
          Icon: false,
        },
      ],
      ApplicationScenario: [
        {
          id: 1,
          img: "https://ow.extremevision.com.cn/uploadfile/file/20230421/1682059455732473.png",
          text: "智慧安监",
        },
        {
          id: 2,
          img: "https://ow.extremevision.com.cn/uploadfile/file/20230421/1682059434253351.png",
          text: "智慧工地",
        },
        {
          id: 3,
          img: "https://ow.extremevision.com.cn/uploadfile/file/20230421/1682059407327280.png",
          text: "明厨亮灶",
        },
        {
          id: 4,
          img: "https://ow.extremevision.com.cn/uploadfile/file/20230421/1682059368714414.png",
          text: "智慧油站/充电站",
        },
        {
          id: 5,
          img: "https://ow.extremevision.com.cn/uploadfile/file/20230421/1682059299402525.png",
          text: "DIY场景",
        },
      ],
      technicalspecifications: [
        {
          id: 1,
          name: "产品名称",
          text: "智能AI边缘盒子",
        },
        {
          id: 2,
          name: "核心",
          text: "英伟达NX核心",
        },
        {
          id: 3,
          name: "产品名称",
          text: "智能AI边缘盒子",
        },
        {
          id: 4,
          name: "核心",
          text: "英伟达NX核心",
        },
        {
          id: 5,
          name: "产品名称",
          text: "智能AI边缘盒子",
        },
        {
          id: 6,
          name: "核心",
          text: "英伟达NX核心",
        },
      ],
      applyObj: {},
    };
  },
  methods: {
    productMouseMove(event) {
      let obj = this.PlatformHighlights.filter((item) => {
        return item.id.toString() === event.target.id;
      });
      this.applyObj = obj[0];
      
      this.PlatformHighlights[event.target.id-1].Icon=true
    },
  },
  mounted() {
    this.applyObj = this.PlatformHighlights[0];
  },
};
</script>

<style scoped lang="less">
.aiedgebox {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.b {
  display: inline-block;
  position: relative;
  width: 120px;
  height: 35px;
  text-align: center;
  color: #fff;
  background: #2ddac2;
  cursor: pointer;
  transition: 2s;
}

.b:after,
.b:before {
  content: "";
  position: absolute;
  left: -1px;
  top: -1px;
  width: 0;
  height: 100%;
  background: #2ddac2;
  z-index: -2;
}

.b:hover {
  color: #ffffff;
  z-index: 1;
  background: transparent;
}

.b:before {
  color: #fff;
  transition: 1s;
  background: #28339d;
  z-index: -1;
}

.b:hover:after,
.b:hover:before {
  color: #fff;
  width: 100%;
}
.textThree {
  font-size: 20px;
  font-weight: 500;
  padding: 0 0 30px 0;
  border: none;
  margin-top: 3px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-content: center;
}
.main {
  width: 100%;
  height: 70%;
}
.productintroduction {
  width: 100%;
  height: 20%;
  margin-bottom: 1%;
  h2 {
    font-size: 35px;
    font-weight: 800;
    margin: 2% 0 1%;
  }
  .productintroduction_main {
    width: 100%;
    height: 80%;
    display: flex;
    .productintroduction_mainText {
      width: 55%;
      height: 100%;
      h3 {
        color: #181818;
        font-size: 18px;
        font-weight: 800;
        padding: 2% 0;
      }
      .data {
        padding: 1%;
        font-weight: 700;
        span {
          color: #2ddac2;
          font-size: 18px;
        }
      }
      p {
        color: #475669;
        font-size: 14px;
        padding: 1% 0 3%;
      }
    }
    .productintroduction_mainImg {
      width: 40%;
      height: 100%;
      padding: 2.5%;
      margin-top: -8%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.productadvantages {
  width: 100%;
  height: 10%;
  padding: 2% 10%;
  margin-left: -10%;
  margin-bottom: 2.5%;
  background-image: url("../assets/img/product_bg2.png");
  h2 {
    font-size: 35px;
    font-weight: 800;
    margin: 2% 0 1%;
    color: #ffffff;
  }
  .productadvantages_main {
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: space-between;
    .productadvantages_mainTextOne {
      width: 120%;
      padding: 10% 10%;
      background-color: #ffffff;
      h3 {
        color: #181818;
        font-size: 20px;
        font-weight: 800;
        padding: 2% 0;
      }
      p {
        color: #475669;
        font-size: 14px;
        padding: 1% 0 3%;
      }
    }
  }
}
.PlatformHighlights {
  width: 100%;
  height: 30%;
  padding: 7% 10% 2.5%;
  margin-left: -10%;
  background-color: #f6f6f6;
  display: flex;
  .PlatformHighlights_icon {
    width: 40%;
    height: 100%;
    h2 {
      font-size: 30px;
      color: #181818;
      padding: 5% 0 3%;
    }
    .PlatformHighlights_iconFont {
      width: 60%;
      height: 80%;
      display: flex;
      flex-wrap: wrap;
      margin: 5%;

      .PlatformHighlights_iconMain {
        width: 30%;
        height: 45%;
        margin: 0 3% 3% 0;
        padding: 5% 0;
        text-align: center;
        background-color: #f8f9fb;
        .PlatformHighlights_Icon {
          width: 40%;
          height: 40%;
          margin: auto;
        }
        .PlatformHighlights_iconMain_p {
          font-size: 17px;
          color: #333;
        }
      }
      .PlatformHighlights_iconMain:hover .PlatformHighlights_iconMain_p {
        color: #2ddac2;
      }
    }
  }
  .PlatformHighlights_img {
    width: 60%;
    height: 100%;
    overflow: hidden;
    img {
      width: 80%;
    }
  }
}
.ApplicationScenario {
  width: 100%;
  height: 10%;
  margin-bottom: 5%;
  display: block;
  h2 {
    font-size: 35px;
    font-weight: 800;
    margin: 2% 0 1%;
  }
  .ApplicationScenario_Main {
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    .ApplicationScenario_MainOne {
      width: 18%;
      height: 100%;
      margin-top: 2%;
      margin-right: 1%;
      overflow: hidden;
      img {
        width: 100%;
        height: 70%;
        transition: all 0.8s ease-in-out;
      }
      img:hover {
        transform: scale(1.05);
      }
      p {
        width: 100%;
        height: 30%;
        font-size: 14px;
        padding: 1% 0 3%;
        background: linear-gradient(
          90deg,
          rgba(45, 188, 194, 0.2) 0%,
          rgba(45, 188, 194, 0) 100%
        );
      }
    }
  }
}
.technicalspecifications {
  width: 100%;
  height: 30%;
  margin-bottom: 5%;
  h2 {
    font-size: 35px;
    font-weight: 800;
    margin: 2% 0 1%;
  }
  .technicalspecifications_main {
    width: 100%;
    height: 80%;
    display: flex;
    flex-wrap: wrap;
    .technicalspecifications_Text {
      width: 45%;
      height: 10%;
      padding: 2.5%;
      display: flex;
      border-bottom: 1px solid #f2f2f2;
      .technicalspecifications_p1 {
        width: 30%;
        height: 100%;
        padding-right: 5%;
      }
      .technicalspecifications_p2 {
        width: 65%;
        height: 100%;
        color: #666666;
      }
    }
  }
}
</style>
