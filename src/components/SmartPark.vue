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
                                <h2>智慧园区AI算法方案</h2>
                                <p>传统的园区管理模式存在巡查范围广、人工管理成本高、巡检受时间、空间限制大、特殊事件感知慢、应急响应效率低等问题，且业务系统多，各端数据孤立，协同管理能力低。千火科技智慧园区解决方案，  对园区内车辆停放、人员出入、设备安全进行全方面监控，搭建运行状态智能监管、异常事件动态感知、突发事件联动应急的一体化园区管理系统，提升园区智慧化综合管理能力。</p>
                                <span class="contactUs"><a href="">申请试用</a></span>
                            </div>
                            <div class="boxTow_img">
                                <img src="../assets/img/智慧园区.png" alt="大标题2图片" style="width:105%;">
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
                                        <img :src="item.img" alt="大标题4图片" style="width: 100%;">
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
            title:"降低园区运营管理成本",
            textOne: "针对园区出入人员、环境，通过监控摄像头实时监控、视频图像智能分析识别，减少巡查人员投入，降低园区运营管理成本。",
            img:require("@/assets/img/智慧园区方案亮点.png")
        },{
            id:2,
            title:"提升园区综合管理水平",
            textOne: "通过系统自动告警、多方联动应急，实现突发事件的快速响应处理，做到提前感知、处理过程闭环、事后可园区综合管理水平。",
            img:require("@/assets/img/智慧园区方案亮点2.png")
        },{
            id:3,
            title:"提升园区科技形象",
            textOne: "利用GIS、可视化、大数据等信息技术，搭建园区运行可视化大屏，提升园区科技形象。",
            img:require("@/assets/img/智慧园区方案亮点3.png")
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
            title:"可视化的运行状态",
            text:"通过电子地图实现监控画面实时可查、历史监控随时调阅，异常事件自动上报，监控后台智能调度。",
            imgIcon:require("@/assets/img/可视化的运行状态.png")
        },
        {
            id:2,
            title:"多维度的统计图表",
            text:"从监控运行时长、捕捉异常行为数、系统告警数、每次应急处理时长数等多维度进行数据统计分析，反映园区智能化管理成效。",
            imgIcon:require("@/assets/img/多维度的统计图表.png")
        },{
            id:3,
            title:"智能化的场景分析",
            text:"视频图像分析技术自动监测入侵、睡岗、离岗、抽烟、摔倒等人员行为，及烟露、火焰等环境因素，提供智能管理手段。",
            imgIcon:require("@/assets/img/智能化的场景分析.png")
        },{
            id:4,
            title:"自动化的告警手段",
            text:"系统一且捕捉到人员入侵、摔倒、车辆违停等画面，监控后台立马定位事发地点，并告警提示，事件感知更敏感。",
            imgIcon:require("@/assets/img/自动化的告警手段.png")
        },{
            id:5,
            title:"联动的应急方案",
            text:"支持接入多业务系统，如门禁系统、监控系统，一旦启动应急，可通过中控系统操控其余系统，实现多方应急联动。",
            imgIcon:require("@/assets/img/联动的应急方案.png")
        },{
            id:6,
            title:"严格的权限管理",
            text:"根据人员部门与职位，灵活配置管理人员可视、可操控权限。",
            imgIcon:require("@/assets/img/严格的权限管理.png")
        },
    ]
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
  