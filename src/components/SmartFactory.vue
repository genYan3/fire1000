<template>
    <div class="successcases">
        <div class="container">
            <el-carousel height="450px" style="z-index: -1;">
            <el-carousel-item v-for="item in img" :key="item.id">
                <img :src="item.src" style="width: 100%;height: 100%;">
            </el-carousel-item>
        </el-carousel>
            <div>
                <el-row>
                    <el-col :span="2"><div class="grid-content bg-purple">&nbsp;</div></el-col>
                    <el-col :span="20"><div class="grid-content bg-purple-light">
                        <div class="boxOne_main">
                            <div class="boxOne_title">
                                <h2>
                                    行业背景
                                </h2>
                            </div>
                            <div class="boxOne_text">
                                <div class="boxOne_textOne" v-for="item in boxOne" :key="item.id">
                                    <h3>{{item.title}}</h3>
                                    <p>{{ item.textOne }}</p>
                                    <p>{{ item.textTow }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="boxTow">
                            <div class="boxTow_main">
                                <h2>智慧工厂AI算法方案</h2>
                                <p>畅发科技智慧工厂解决方案，运用人工智能、物联网等高新技术，对人员行为、设备运行状态、环境风险进全生产智能化管理水平。</p>
                                <span class="contactUs"><a href="">申请试用</a></span>
                            </div>
                            <div class="boxTow_img">
                                <img src="../assets/img/智慧工厂.png" alt="大标题2图片" style="width:105%;">
                            </div>
                        </div>
                        <div class="boxThree">
                            <h2>方案价值</h2>
                            <div class="boxThree_main">
                                <div class="boxThree_mainOne" v-for="item in boxThree" :key="item.id">
                                    <div>
                                        <h3>{{ item.title}}</h3>
                                        <p>{{ item.textOne}}</p>
                                        <p>{{ item.textTow}}</p>
                                    </div>
                                    <div class="boxThree_mainOneImg">
                                        <img :src="item.img" alt="大标题3图片" >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="boxFour">
                            <h2>方案亮点</h2>
                            <div class="boxFour_main">
                                <div class="boxFour_mainOne" v-for="item in boxFour" :key="item.id">
                                    <div class="boxFour_mainOne_img">
                                        <img :src="item.img" alt="大标题4图片" style="width: 90%;">
                                    </div>
                                    <div class="boxFour_mainOne_text">
                                        <h3>{{item.title}}</h3>
                                        <p>{{ item.textOne }}</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="boxFive">
                            <div class="boxFive_icon">
                                <h2>应用场景</h2>
                                <div class="boxFive_iconMain" >
                                    <div class="boxFive_iconMain_box" v-for="item in boxFive" @mouseenter="boxFiveDemo" @mouseleave="item.Icon = false" :key="item.id" :id="item.id">
                                        <div class="boxFive_iconMain_One">
                                            <el-image :src="item.Icon ? item.imgIcon1 : item.imgIcon" alt="图标1"></el-image>
                                            <p>{{ item.title }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="boxFive_img">
                                <img :src="applyObj.img" alt="随小标题变动而变动" style="width: 100%;">
                            </div>
                        </div>
                        <div class="boxSix">
                            <h2>方案优势</h2>
                            <div class="boxSix_main">
                                <div class="boxSix_mainOne" v-for="item in boxSix" :key="item.id">
                                    <div >
                                        <img :src="item.imgIcon" alt="大标题6图标">
                                        <h3>
                                            {{item.title}}
                                        </h3>
                                        <p>
                                            {{item.text}}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></el-col>
                    <el-col :span="2"><div class="grid-content bg-purple">&nbsp;</div></el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
  name: 'SuccessCasesCehsi',
  data() {
    return {
        img:[{
            id:1,
            src:require("@/assets/img/背景.jpg"),
        },{
            id:2,
            src:require("@/assets/img/背景2.jpg"),
        }]
        ,msg: this.msg,
        boxOne:[{
            id:1,
            title:"行业背景",
            textOne: "智慧社区解决方案人、融合社区场景下组织等多种数据资源",
            textTow:"劳动强度大，影响注意力集中，易忽视个人安全防护"
        },
        {
            id:2,
            title:"信息化水平低，工程质量难保障",
            textOne: "设备繁多、人员复杂，传统摄像头监管问题发现不及时",
            textTow:"缺乏科技监管手段，施工进度、质量难以提升，成本难控制"
        },
        {
            id:3,
            title:"政策加速推进智慧工地建设",
            textOne: "各省陆续出台智慧工地的建设及评价标准",
            textTow:"符合条件的智慧工地试点项目给予财政补助支持"
        }],
        boxThree:[{
            id:1,
            title:"事故率降低65%以上",
            textOne: "不安全状态、行为自动识别提醒，降低事故风险",
            textTow:"智能实时预警，事故响应更及时，有效排查安全隐患",
            img:"https://ow.extremevision.com.cn/uploadfile/file/20230421/1682062041299684.png"
        },
        {
            id:2,
            title:"监管效率提升45%以上",
            textOne: "AI赋能监控系统，算法报警与多系统对接联动",
            textTow:"构建智能监控和防范体系，全方位实时监控",
            img:"https://ow.extremevision.com.cn/uploadfile/file/20230421/1682062062252173.png"
        },
        ],
        boxFour:[{
            id:1,
            title:"厂区一张图",
            textOne: "二维、三维地图展示厂区情况，突出标记重点区域、重点设备，地图告警联动。",
            img:require("@/assets/img/厂区一张图.png")
        },{
            id:2,
            title:"监管可视化",
            textOne: "通过电子地图实时调阅厂区监控，视频图像智能分析，识别异常事件进行自动告警实现地图联动，第一时间将异常信息推送给管理人员。",
            img:require("@/assets/img/监管可视化.png")
        },{
            id:3,
            title:"巡检智能化",
            textOne: "支持监控、无人机、无人车智能巡检，实时上传视频，进行智能分析识别，实现异常自动预警。",
            img:require("@/assets/img/巡检智能化.png")
        },{
            id:4,
            title:"告警应急联动",
            textOne: "平台对接多业务系统，通过电子地图、站内消息、短信主动推送告警信息，统一操控，多端联动。",
            img:require("@/assets/img/告警应急联动.png")
        }],
        boxFive:[{
            id:1,
            img:"https://ow.extremevision.com.cn/uploadfile/file/20230817/1692269077288473.jpg",
            title:"施工监管",
            Icon:false,
            imgIcon:require("@/assets/img/施工监管.png"),
            imgIcon1:require("@/assets/img/施工监管1.png"),
        },{
            id:2,
            img:"https://ow.extremevision.com.cn/uploadfile/file/20230817/1692268235708482.jpg",
            title:"安全应急",
            Icon:false,
            imgIcon:require("@/assets/img/安全应急.png"),
            imgIcon1:require("@/assets/img/安全应急1.png")
        },{
            id:3,
            img:"https://ow.extremevision.com.cn/uploadfile/file/20230817/1692269871560222.jpg",
            title:"环境监管",
            Icon:false,
            imgIcon:require("@/assets/img/环境监管.png"),
            imgIcon1:require("@/assets/img/环境监管1.png")
        }],
        boxSix:[{
            id:1,
            title:"安全作业",
            text:"真实模拟商城楼层和门店位置，实时标记用户当前位置，可输入门店名称快速导航至目的地。",
            imgIcon:require("@/assets/img/安全作业.png")
        },
        {
            id:2,
            title:"智能巡检",
            text:"通过实时监控、无人机、无人车智能巡检，减少人员巡检工作量，提高巡检质量和效率。",
            imgIcon:require("@/assets/img/智能巡检.png")
        },{
            id:3,
            title:"视频监控",
            text:"电子地图实现厂区运行状态可视化，可实时调阅监控画面，并远程操控摄像头，可进行远程互动。",
            imgIcon:require("@/assets/img/视频监控.png")
        },{
            id:4,
            title:"室内导航",
            text:"真实模拟商城楼层和门店位置，实时标记用户当前位置，可输入门店名称快速导航至目的地。",
            imgIcon:require("@/assets/img/室内导航.png")
        },{
            id:5,
            title:"环境监测",
            text:"通过监控和传感器，对湿度、温度、噪音等环境因素进行监测预警。",
            imgIcon:require("@/assets/img/环境监测.png")
        }]
        ,applyObj:{}
    }
  },
   created() {
   },
    methods: {
        imgPath() {
            return 'http://hjjai.com:6789/commonImg/'
        },
        boxFiveDemo(event) {
            let obj = this.boxFive.filter((item) => {
                return item.id.toString() === event.target.id;
            });
            this.applyObj = obj[0];
            this.boxFive[event.target.id-1].Icon=true
            },
        changeIn(val){
            // console.log(val);
            this.steCarou(val)
        }
    },
    
    computed: {
        
    },mounted() {
    this.applyObj = this.boxFive[0];

  },
}
</script>
  
<style scoped lang="less">
@import url("//unpkg.com/element-ui@2.15.14/lib/theme-chalk/index.css");
  .successcases {
        width: 100%;
        height: 100%;
        
        margin: 0;
        padding: 0;
    }
.container {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}

  .header {
    width: 100%;
    height: 450px;
    background-color: #2ddac2;
    background: url(../assets/img/背景.jpg);
    background-size: cover;
    position: relative;
  }
  
    .el-header {
    padding: 0 ;
    box-sizing: border-box;
    flex-shrink: 0;
}
    .el-card__body, .el-main {
    padding: 0px;
}
.grid-content bg-purple-light{
    width: 100%;
    height: 70%;
}
.boxOne_main{
    width: 100%;
    height: 10%;
    margin-top: 3%;
    margin-bottom:5% ;
}
.boxOne_title{
    padding-bottom: 2%;
    font-size: 26px;
}
.boxOne_text{
    width: 100%;
    height: 10%;
    display: flex;
}
.boxOne_textOne{
    background: #f5f9ff;
    width: 31%;
    height: 7%;
    margin: 0.75%;
    padding: 0.75%;
    h3{
        color: #333333;
        font-size: 18px;
        font-weight: 800;
    }
    p{
        color: #666666;
        font-size: 14px;
        padding: 3px 0;
    }
}

.boxTow{
    width: 100%;
    height: 30%;
    margin-bottom: 5%;
    display: flex;
    .boxTow_main{
        width: 30%;
        height: 100%;
        h2{
            font-size: 35px;
            font-weight: 800;
            margin-top: 5%;
        }
        p{
            color: #666666;
            font-size: 14px;
            padding: 5% 0;
            margin-top: 10%;
        }
    }
    .boxTow_img{
        width: 65%;
        margin: 0 5%;
        
    }

}
element.style {
    width: 105%;
}
.contactUs {
    width: 120px;
    height: 35px;
    position: relative;
    background: #28339d;
    margin-top: 10%;
    display: inline-block;
}

.contactUs::before {
    content: "";
    width: 0;
    height: 35px;
    margin: 0;
    padding: 0;
    position: absolute;
    background-color: #2ddac2;
    transition-property: width;
    transition-duration: 1s;
    // display: inline-block;
}

.contactUs:hover::before {
    width: 100%;
}

.contactUs a {
    display: inline-block;
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 35px;
    list-style: none;
    text-decoration: none;
    color: #fff;
    z-index: 1;
    position: relative;
}
.boxThree{
    width: 100%;
    height: 10%;
    margin-bottom: 5%;
    .boxThree_main{
        display: flex;
        justify-content: space-between;
        padding: 2%;
        .boxThree_mainOne{
            width: 45%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            background: #f5f9ff;
            padding: 2% 2%;
            h3{
                font-size: 22px;
                color: #333;
                margin-bottom: 5%;
            }
            p{
                font-size: 14px;
                color: #333;
                padding: 1% 0 1% 3%;
            }
        }
        .boxThree_mainOneImg{
            margin-left: 2%;
        }
    }
    h2{
        font-size: 35px;
        font-weight: 800;
    }

    
}
.boxFour{
    width: 100%;
    height: 30%;
    margin-bottom: 5%;
    h2{
        font-size: 35px;
        font-weight: 800;
        padding: 2% 0;
    }
    .boxFour_main{
        width: 100%;
        height: 70%;
        display: flex;
        justify-content: space-between;
    }
    .boxFour_mainOne{
        width: 30%;
        height: 100%;
        
        .boxFour_mainOne_text{
            padding: 2%;
            h3{
                color: #333333;
                font-size: 18px;
                font-weight: 800;
            }
            p{
                color: #666666;
                font-size: 14px;
                padding: 13px 0;
            }
        }
        .boxFour_mainOne_img{
            width: 100%;
            height: 50%;
            overflow: hidden;
            img{
                
                transition: all 1s ease-in-out;
            }
            img:hover{
                transform: scale(1.2);
            }
        }
    }
    .boxFour_mainTow{
        width: 30%;
        height: 100%;
        padding: 1.5%;
        border: 1px solid rgb(246,246,246);
        h3{
            color: #333333;
            font-size: 18px;
            font-weight: 800;
        }
        p{
            color: #666666;
            font-size: 14px;
            padding: 13px 0;
        } 
        .boxFour_mainOne_img{
        width: 100%;
        height: 50%;
    }
    }
    .boxFour_mainThree{
        width: 30%;
        height: 100%;
        padding: 1.5%;
        border: 1px solid rgb(246,246,246);
        h3{
            color: #333333;
            font-size: 18px;
            font-weight: 800;
        }
        p{
            color: #666666;
            font-size: 14px;
            padding: 13px 0;
        }
        .boxFour_mainOne_img{
        width: 100%;
        height: 50%;
    }
    }
}
.boxFive{
    width: 100%;
    height: 20%;
    display: flex;
    margin-bottom: 2%;
    .boxFive_icon{
        width: 30%;
        height: 100%;
        margin: 0 2%;
        h2{
        font-size: 35px;
        font-weight: 800;
        padding: 3% 0;
        margin-top: 20%;
        }
        
        .boxFive_iconMain{
            width: 100%;
            height: 50%;
            margin: 5% 0;
            display: flex;
            justify-content: space-between;
            .boxFive_iconMain_box{
                width: 100%;
                height: 100%;
                
                .boxFive_iconMain_One{
                width: 70%;
                height: 100%;
                text-align: center;
                margin: auto;
                border: 1px solid rgb(246,246,246);
                img{
                    width: 40%;
                    height: 40%;
                    margin: auto;
                }
                p{
                    font-size: 17px;
                    padding: 1% 0;
                }
            }
            }    
        }
    }
    .boxFive_img{
        width: 65%;
        height: 100%;
        margin: 0 2%;
    }
}
.boxSix{
    width: 100%;
    height: 20%;
    margin: 5% 0;    
    h2{
        font-size: 35px;
        font-weight: 800;
        padding: 3% 0;
    }
    .boxSix_main{
        width: 100%;
        height: 70%;
        display: flex;
        justify-content: center;
        .boxSix_mainOne{
            width: 15%;
            height: 250px;
            margin: auto;
            text-align: center;
            border: 1px solid rgb(246,246,246);
            img{
                width: 40%;
                height: 40%;
            }
            h3{
                color: #333333;
                font-size: 18px;
                font-weight: 800;
                margin-top: 10px;
            }
            p{
                color: #666666;
                font-size: 14px;
                padding: 1%px 0;
                margin-top: 10px;
            }
        }
    }
}
</style>
  