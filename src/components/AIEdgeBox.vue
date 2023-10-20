<template>
    <div id="aiedgebox">
        <div class="header">
            <div class="boxOne">
                <h1 class="textOne">全局标题</h1>
                <div class="textTow">全局标题介绍</div>
                <a href="/aboutus">
                    <div class="a">
                        <span class="textThree">申请试用</span>
                    </div> 
                </a>
            </div>
        </div>
        <div>
            <el-row>
                <el-col :span="2" ><div>&nbsp;</div></el-col>
                <el-col :span="20"><div class="main">
                    <div class="productintroduction">
                        <h2>产品介绍</h2>
                        <div class="productintroduction_main">
                            <div class="productintroduction_mainText">
                                <h3>
                                    22种算法任选5种算法内置
                                </h3>
                                <div class="data">
                                    提供<span class="optimize">Celeron/i3/i5/i7</span>处理器，视频流接入<span class="optimize">2-10</span>路，支持<span class="optimize">4-24</span>路智能分析
                                </div>
                                <p>
                                    人脸识别 | 抽烟识别 | 打手机识别 | 口罩识别 | 厨师工作帽识别 | 厨房夜间老鼠识别 | 安全帽识别 | 烟雾识别 | 火焰识别 | 反光衣识别 | 离岗识别 | 越界识别 | 车辆特征与车牌识别 | 人流密度识别 | 客流统计 | 明火与烟雾检测 | 聚众识别 | 道路积水识别 | 裸露土堆识别 | 写字楼消防门堵塞识别 | 灭火器缺失识别 | 人员闯入识别 | 油罐车检测 | 卸油作业安全设施识别 | 非卸油车辆入侵检测 | 卸油管连接检测 | 静电释放检测
                                </p>
                                <div class="a">
                                    <span class="textThree">申请试用</span>
                                </div> 
                            </div>
                            <div class="productintroduction_mainImg">
                                <img src="" alt="产品样式图">
                            </div>
                        </div>
                    </div>
                    <div class="productadvantages">
                        <h2>产品优势</h2>
                        <div class="productadvantages_main" >
                            <div class="productadvantages_main_div" v-for="item in productadvantages" :key="item.id">
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
                                <div class="PlatformHighlights_iconMain" v-for="item in PlatformHighlights "  @mouseenter="productMouseMove" :key="item.id" :id="item.id">
                                    <el-image :src="item.imgIcon" class="PlatformHighlights_Icon"></el-image>
                                    <div class="PlatformHighlights_iconMain_p">{{ item.title }}</div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="PlatformHighlights_img">
                            <img :src="applyObj.img" alt="">
                        </div>
                    </div>
                    <div class="ApplicationScenario">
                        <h2>
                            应用场景
                        </h2>
                        <div class="ApplicationScenario_Main" >
                            <div class="ApplicationScenario_MainOne" v-for="item in ApplicationScenario" :key="item.id">
                                <img :src="item.img" alt="">
                                <p>{{ item.text }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="technicalspecifications">
                        <h2>
                            技术规格
                        </h2>
                        <div class="technicalspecifications_main" >
                            <div class="technicalspecifications_Text" v-for="item in technicalspecifications" :key="item.id">
                                <p class="technicalspecifications_p1">{{ item.name }}</p>
                                <p class="technicalspecifications_p2">{{ item.text }}</p>
                            </div>
                        </div>
                    </div>
                </div></el-col>
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
        productadvantages:[{
            id:1,
            title: "超灵活",
            textOne: "轻盈小巧功耗低，通电即用",
            textTwo: "算法DIY组合，应用场景广泛",
            textThree: "个性化策略配置，多算法报警结果融合",
        },
        {
            id:2,
            title: "超省事",
            textOne: "内置算法及应用，无需搭建运行环境",
            textTwo: "开箱即用，无需改变原有组网方式",
            textThree: "支持市场主流网络IPC标准协议接入",
        },
        {
            id:3,
            title: "超智能",
            textOne: "算法自定义组合，应用场景广泛",
            textTwo: "高抓拍率、高准确率、低误报率智能算法",
            textThree: "自定义分析结果上传至第三方系统",
        },
        {
            id:4,
            title: "超安全",
            textOne: "硬件加密，算法管控，双重保障",
            textTwo: "数据存储期限你来定，过期自动删",
            textThree: "HTTPS 模式下，数据一样安全推送",
        },],
      PlatformHighlights: [
        {
          id: 1,
          imgIcon: "",
          title: "标题一",
          img: "",
          details: "详细内容1",
        },
        {
          id: 2,
          imgIcon: "",
          title: "标题二",
          img: "",
          details: "详细内容2",
        },
        {
          id: 3,
          imgIcon: "",
          title: "标题三",
          img: "",
          details: "详细内容3",
        },
        {
          id: 4,
          imgIcon: "",
          title: "标题四",
          img: "",
          details: "详细内容4",
        },
        {
          id: 5,
          imgIcon: "",
          title: "标题五",
          img: "",
          details: "详细内容5",
        },
        {
          id: 6,
          imgIcon: "",
          title: "标题六",
          img: "",
          details: "详细内容6",
        },
      ],
      ApplicationScenario:[{
        id:1,
        img: "",
        text: "智慧安监",
      },{
        id:2,
        img: "",
        text: "智慧工地",
      },
      {
        id:3,
        img: "",
        text: "明厨亮灶",
      },
      {
        id:4,
        img: "",
        text: "智慧油站/充电站",
      },
      {
        id:5,
        img: "",
        text: "DIY场景",
      }],
      technicalspecifications:[{
        id:1,
        name:"产品名称",
        text:"智能AI边缘盒子",
      },{
        id:2,
        name:"核心",
        text:"英伟达NX核心",
      },],
      applyObj: {},
    };
  },
  methods: {
    productMouseMove(event) {
      let obj = this.PlatformHighlights.filter((item) => {
        return item.id.toString() === event.target.id;
      });
      this.applyObj = obj[0];
    },
  },
  mounted() {
    this.applyObj = this.PlatformHighlights[0];
  },
};
</script>

<style scoped lang="less">
.aiedgebox{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}
.header {
    width: 100%;
    height: 450px;
    background-color: #2ddac2;
    position: relative;
  }
  .boxOne{
    position: absolute;
    top: 15%;
    left: 12%;
    width: 500px;
    height: 300px;
    padding: 20px;

    h1{
        font-size: 40px;
        color: #fff;

    }
    .textTow{
        padding: 0 0 30px 0;
        font-weight: 400;
        font-size: 20px;
        color: #fff;
    }
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color:#d3dce9 ;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .cheshi{
    background: #000;
    width: 100%;
    height: 400px;
    text-align: center;
    color: #fff;
    margin-top: 2%;
  }
  .a {
        display: inline-block;
        position: relative;
        width: 120px;
        height: 35px;
        text-align: center;
        color: #d65617;
        background: #FFFFFF;
        cursor: pointer;
        transition: 2s;
    }
    
    .a:after,
    .a:before {
        content: '';
        position: absolute;
        left: -1px;
        top: -1px;
        width: 0;
        height: 100%;
        background: #FFFFFF;
        z-index: -2;
    }

    .a:hover {
        color: #FFFFFF;
        z-index: 1;
        background: transparent;
    }

    .a:before {
        color: #fff;
        transition: 1s;
        background: #d65617;
        z-index: -1;
    }

    .a:hover:after,
    .a:hover:before {
        color: #fff;
        width: 100%;
    }
    .textThree{
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
    .main{
        width: 100%;
        height: 70%;
    }
    .productintroduction{
        width: 100%;
        height: 20%;
        margin-bottom: 2.5%;
        h2{
            font-size: 35px;
            font-weight: 800;
            margin: 2% 0 1%; 
        }
        .productintroduction_main{
            width: 100%;
            height: 80%;
            display: flex;
            .productintroduction_mainText{
                width: 55%;
                height: 100%;
                h3{
                    color: #181818;
                    font-size: 18px;
                    font-weight: 800;
                    padding: 2% 0;
                }
                .data{
                    padding: 1%;
                    font-weight: 700;
                    span{
                        color: #2ddac2;
                        font-size: 18px;
                    }
                }
                p{
                    color: #475669;
                    font-size: 14px;
                    padding: 1% 0 3%;
                }
            }
            .productintroduction_mainImg{
                width: 40%;
                height: 100%;
                padding: 2.5%;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
.productadvantages{
    width: 100%;
    height: 10%;
    padding: 2.5% ;
    h2{
        font-size: 35px;
        font-weight: 800;
        margin: 2% 0 1%; 
    }
    .productadvantages_main{
        width: 100%;
        height: 80%;
        display: flex;
       justify-content: space-between;
        .productadvantages_mainTextOne{
            padding: 2% 1%;
            border: 1xp;
            h3{
            color: #181818;
            font-size: 20px;
            font-weight: 800;
            padding: 2% 0;
            }
            p{
                color: #475669;
                font-size: 14px;
                padding: 1% 0 3%;
            }
        }
        
    }
}
.PlatformHighlights{
    width: 100%;
    height: 20%;
    margin-bottom: 5%;
    display: flex;
    .PlatformHighlights_icon{
        width: 42%;
        height: 100%;
        padding: 1.5%;
        h2{
            font-size: 35px;
            font-weight: 800;
            padding: 2% 0 1%;
        }
        .PlatformHighlights_iconFont{
            width: 40%;
            height: 30%;
            display: flex;
            flex-wrap: wrap;
            padding: 2% 0 0 0;
            .PlatformHighlights_iconMain{
            margin: auto;
            text-align: center;
            padding: 3%;
            .PlatformHighlights_iconMain_p{
                color: #475669;
                font-size: 14px;
                padding: 1% 0 3%;
            }
        }
        }
        
    }
    .PlatformHighlights_img{
        width: 55%;
        height: 100%;
        img{
            width: 100%;
            z-index: -1;
        }
    }
}
.ApplicationScenario{
    width: 100%;
    height: 10%;
    margin-bottom: 5%;
    h2{
        font-size: 35px;
        font-weight: 800;
        margin: 2% 0 1%;
    }
    .ApplicationScenario_Main{
        width: 100%;
        height: 80%;
        display: flex;
        justify-content: space-between;
        .ApplicationScenario_MainOne{
            width: 20%;
            height: 100%;
            margin: 1.5%;
            img{
                width: 100%;
                height: 70%;
            }
            p{
                width: 100%;
                height: 30%;
                font-size: 14px;
                padding: 1% 0 3%;
            }
       }
    }
}
.technicalspecifications{
    width: 100%;
    height: 30%;
    margin-bottom: 5%;
    h2{
        font-size: 35px;
        font-weight: 800;
        margin: 2% 0 1%;
    }
    .technicalspecifications_main{
        width: 100%;
        height: 80%;
        display: flex;
        flex-wrap: wrap;
       .technicalspecifications_Text{
        width: 45%;
        height: 10%;
        padding: 2.5%;
        display: flex;
        border-bottom: 1px solid #f2f2f2;
        .technicalspecifications_p1{
            width: 30%;
            height: 100%;
            padding-right: 5%;
        }
        .technicalspecifications_p2{
            width: 65%;
            height: 100%;
            color: #666666;
        }
       }
    }

}
</style>