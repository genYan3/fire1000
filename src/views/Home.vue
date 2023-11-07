<template>
<div id="Home">
    <el-row class="rowPos">
        <el-col :span="24" class="colPos">
            <el-carousel height="450px" :interval=5000 style="z-index: -1;">
            <el-carousel-item v-for="(item, index) in imgs" :key="index">
                <img :src="imgPath() + item.path" style="width: 100%;height: 100%;">
            </el-carousel-item>
        </el-carousel>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="3">&nbsp;</el-col>
        <el-col :span="18">
            <div class="main">
                <div class="CoreProducts">
                    <h2>核心产品</h2>
                    <div class="CoreProducts_main">
                        <div class="CoreProducts_mainOne" v-for="item in CoreProducts" :key="item.id">
                            <div class="CoreProducts_Img">
                                <img :src="item.img" alt="" style="width: 100%;">
                            </div>
                            <h3>
                                {{  item.title }}
                            </h3>
                            <p>
                                {{ item.text }}
                            </p>
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
                        <img :src="imgPath()+applyObj.path" alt="随小标题变动而变动" style="width: 100%;">
                    </div>
                </div>
            </div>
        </el-col>
        <el-col :span="3">&nbsp;</el-col>
    </el-row>
    <el-row style="height: 350px; margin: 2% 0;" class="background">
        <el-col :span="24"></el-col>
    </el-row>
    <el-row>
        <el-col :span="3">&nbsp;</el-col>
        <el-col :span="18">
            <div>
                <div class="HomepageBoxOne">
                    <h2>
                        公司概况
                    </h2>
                    <div class="HomepageBoxOne_main">
                        <div class="HomepageBoxOne_Img">
                            <img src="../assets/img/4-6.png" alt="" style="width: 100%; ">
                        </div>
                        <div class="HomepageBoxOne_Text">
                            <p>
                                苏州千火信息科技有限公司成立于江苏省苏州市苏高新软件园，是一家专注于软硬件科研的高新技术企业。<br><br>公司专注于视频处理、AI视觉分析产品的研发与应用，致力于为各行业提供专业的解决方案，提升视频监控在各领域的应用价值。<br><br>公司提供专业的视频处理及分析产品，包括视频监控系统、视频智能分析平台、IoT物联网平台，在智慧工地、智慧园区、智慧社区、智慧门店、智慧工厂、智慧电力、智慧农业等方向具有成熟的解决方案。
                            </p>
                        </div>
                    </div>   
                </div>
                <div class="HomepageBoxTow">
                    <div class="HomepageBoxTow_text">
                        <p>我们信仰专业的力量，用优秀的设计帮助客户降低企业运营成本，创造超越竞争对手的品牌竞争力，以深度拓展设计的商业价值，用品牌的力量使客户实现商业目标，用品牌的力量驱动企业的持续发展。<br><br>我们秉承“以人为本，诚信创新”的经营理念 ，达成与客户长久而稳定的合作关系；凭借完善的管理制度和质量保障体系来服务客户，追求作品卓越完美，服务有口皆碑，受到了客户良好的赞誉。</p>
                    </div>
                    <div class="HomepageBoxTow_img">
                        <img src="../assets/img/5-7.png" alt="" style="width: 100%;">
                    </div>
                </div>
            </div>
            
        </el-col>
        <el-col :span="3">&nbsp;</el-col>
    </el-row>
</div>
</template>

<script>
import axios from 'axios';

export default {
    name: "HomeIndex",
    data() {
        return {
            imageUrl: '',
            img:[{
                    id:1,
                    src:require("@/assets/img/背景.jpg"),
                },{
                    id:2,
                    src:require("@/assets/img/背景2.jpg"),
                }],
            CoreProducts:[{
                id:1,
                img:require("@/assets/img/功能.png"),
                title:'视频监控平台',
                text:'视频监控平台支持海量监控摄像头接入，通过云端统一调阅、控制、分发。将不同品牌摄像头集成在统一的平台，通过流媒体服务器实现多用户分发，功能包含实时视频、历史视频、云台控制、电子地图、告警通知、远程设置及监控状态查询等，可广泛应用于工业、企业园区、住宅小区、工地、工厂、学校、养老院等场景',
            },{
                id:2,
                img:require("@/assets/img/监测.png"),
                title:'视频智能分析平台',
                text:'视频智能分析平台是具备视频智能分析、 自动检测和实时预警功能的一款智能视频产品。平台集成国内外先进算法，综合利用图像处理、目标检测、行为分析等技术手段，对动态环境下的人、事、物、景进行快速采集和识别，提供智能分析结果， 帮助行业客户提升安全作业水平，提升生产效率 ， 为客户生产管理保驾护航。',
            },{
                id:3,
                img:require("@/assets/img/IoT物联网平台.png"),
                title:'IoT物联网平台',
                text:'IoT物联网平台是一个集成了丰富的通信能力、数据采集能力、设备控制能力、实时交互能力和数据分析能力的一体化平台。平台支持海量设备连接 ，具备数据采集、设备管理、消息通信、监控运维和数据分析能力 ，对外通过API等提供能力开放服务，满足工业、园区、农业、水务等行业需求',
            }],
            boxFive:[{
            id:1,
            img:require("@/assets/img/Home应用场景1.png"),
            title:"视频监控平台",
            Icon:false,
            imgIcon:require("@/assets/img/施工监管.png"),
            imgIcon1:require("@/assets/img/施工监管1.png"),
        },{
            id:2,
            img:require("@/assets/img/Home应用场景2.png"),
            title:"视频智能分析平台",
            Icon:false,
            imgIcon:require("@/assets/img/安全应急.png"),
            imgIcon1:require("@/assets/img/安全应急1.png")
        },{
            id:3,
            img:require("@/assets/img/Home应用场景3.png"),
            title:"IoT物联网平台",
            Icon:false,
            imgIcon:require("@/assets/img/环境监管.png"),
            imgIcon1:require("@/assets/img/环境监管1.png")
        }],
            acctivateName: "small",
            aiTitleSmallList: [],
            activeIndex: 0,
            carouselItems1:"",
            carouselItems2: "",
            applyObj: {},
            currentPage: 1,
            pageSize: 2,
            type: 10,
            imgs: [],
            homepageSceneList:[],
            background:[],

        }
    },
    props: {},
    methods: {
        imgPath() {
            return 'http://hjjai.com:6789/commonImg/'
        },
        handleClick() {

        },
        productMouseMove(even) {
            let obj = this.productList.filter((item) => {
                return item.id.toString() === even.target.id
            })
            this.applyObj = obj[0]
        },
        steCarou(nub){
            this.carouselItems1 = this.carouselItems[nub].title;
            this.carouselItems2 = this.carouselItems[nub].content;
            console.log(this.carouselItems[nub].content);
            console.log(this.carouselItems[nub].title);
            
        },
        changeIn(val){
            // console.log(val);
            this.steCarou(val)
        },
        boxFiveDemo(event) {
            let obj = this.homepageSceneList[event.target.id-1]
                        this.applyObj = obj;
            this.boxFive[event.target.id-1].Icon=true
            },
        changeIn(val){
            // console.log(val);
            this.steCarou(val)
        }
    },
    async mounted() {
        this.applyObj = this.boxFive[0];
        // window.addEventListener("load", () => {
        //     this.$store.commit("setIndex", "1")
        // })
        const result = await axios.get('http://hjjai.com:6789/img/getImgByType', {
            params: {
                currentPage: this.currentPage,
                pageSize: this.pageSize,
                type: this.type
            }
        })
        this.imgs = result.data.data.data
        // console.log(this.imgs)
        // 获取首页场景
        let homepageScene = await axios.get("http://hjjai.com:6789/img/getImgByType",{
            params:{
                currentPage: 1,
                pageSize: 3,
                type: 14
            }
        })
        this.homepageSceneList = homepageScene.data.data.data
        let background = await axios.get("http://hjjai.com:6789/img/getImgByType",{
            params:{
                currentPage: 1,
                pageSize: 1,
                type: 12
            }
        })
        this.backgroundList = background.data.data.data
        console.log(this.homepageSceneList);
    },
    components: {
    },
    computed: {
        currentContent(){
            return this.carouselItems[this.activeIndex].content;
        }
    }
}
</script>

<style lang="less">
.colPos .homeImgTest {
    position: absolute !important;
    top: 15%;
    left: 12%;
}
.background{
    background: url("../assets/img/背景3.jpg");
    background-size: cover;
}
h1 {
    font-size: 40px;
    color: #fff;
    margin-bottom: 30px;

    span {
        margin-right: 20px;
    }

}

h3 span::after {
    content: "、";
}

h3 span:last-child::after {
    content: "";
}

.contactUs {
    width: 120px;
    height: 35px;
    position: relative;
    background-color: #fff;
    margin-top: 30px;
    display: inline-block;
}

.contactUs::before {
    content: "";
    width: 0;
    height: 35px;
    margin: 0;
    padding: 0;
    position: absolute;
    background-color: red;
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
    color: black;
    z-index: 1;
    position: relative;
}
.Rotationchart{
    width: 100%;
    height: 30%;
    margin-top: 5%;
}
.aiTitle {
    width: 100%;
    height: 70px;
    text-align: center;
    line-height: 70px;
    font-family: "思源宋体 Medium";
    font-size: 40px;
    margin-top: 30px;
}

.aiConsult {
    width: 100%;
    margin-top: 45px;
    display: flex;
    // justify-content:left;

    .aiConsultLeft {
        width: 30%;
        padding-left: 10px;

        p a .aiConsultLeftImage {
            width: 400px;
            height: 300px;
        }

        p a {
            text-decoration: none;
            list-style: none;
            color: black;
        }

        p {
            width: 100px;
            height: auto;
            margin-bottom: 15px;
        }
    }

    .aiConsultRight {
        width: auto;

        div {
            display: flex;
            width: 100%;
            height: auto;
            margin-bottom: 15px;
            flex-direction: row;

            a .el-image {
                width: 150px;
                height: 100px;
            }

        }
    }
}

.title {
    font-size: 1.5rem;

}

.productApplyStyle {
    display: flex;

    .leftProduct {
        width: 350px;
        height: 240px;
        display: flex;
        flex-wrap: wrap;

        .productCard {
            width: 90px;
            height: 60px;
            margin: 10px 5px;
        }

        .productCard:hover {
            cursor: pointer;
        }
    }

    .rightApply {
        // width: 100%;
        margin-top: 15px;
        // text-align: right;
    }
}
.HomepageBoxOne{
    width: 100%;
    height: 20%;
    margin-bottom: 5%;
    h2{
        text-align: center;
        font-size: 35px;
        font-weight: 800;
        padding: 3% 0;
    }
    .HomepageBoxOne_main{
        display: flex;
        justify-content: center;
        .HomepageBoxOne_Img{
            width: 50%;
            height: 100%;
        }
        
        .HomepageBoxOne_Text{
            width: 45%;
            height: 100%;
            margin-left: 5%;
            margin-top: 7%;
            p{
                font-size: 20px;
                color: #666;
            }
        }
    }
    
}
.main{
    width: 100%;
    height: 30%;
    h2{
        font-size: 35px;
        font-weight: 800;
        padding: 2% 0;
    }
    .CoreProducts_main{
        width: 100%;
        height: 70%;
        display: flex;
        justify-content: space-between;
        .CoreProducts_mainOne{
            width: 30%;
            height: 100%;
            h3{
                color: #333333;
                font-size: 18px;
                font-weight: 800;
                margin-top: 5%;
            }
            p{
                color: #666666;
                font-size: 14px;
                padding: 13px 0;
            }
            .CoreProducts_Img{
                width: 418px;
                height: 235px;
                overflow: hidden;
                img{
                    
                    transition: all 1s ease-in-out;
                }
                img:hover{
                    transform: scale(1.2);
                }
            }
        }
    }
}
.ApplicationScenario{
    width: 100%;
    height: 30%;
    display: flex;
    .ApplicationScenario_Icon{
        width: 30%;
        height: 100%;
        margin: 0 2%;
        h2{
            font-size: 35px;
            font-weight: 800;
            padding: 3% 0;
            margin-top: 20%;
        }
        .ApplicationScenario_IconMain{
            width: 100%;
            height: 50%;
            margin: 5% 0;
            display: flex;
            justify-content: space-between;
            .ApplicationScenario_IconMain_box{
                width: 100%;
                height: 100%;
                .ApplicationScenario_IconMainOne{
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
    .ApplicationScenario_img{
        width: 65%;
        margin: 0 5%;
    }

}
.boxFive{
    width: 100%;
    height: 20%;
    display: flex;
    margin-top: 3%;
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
            height: 80px;
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
                el-image{
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
        width: 877px;
        height: 393px;
        margin: 0 2%;
    }
}
.HomepageBoxTow{
    width: 100%;
    height: 20%;
    display: flex;
    margin: 0 4%;
    .HomepageBoxTow_img{
        width: 50%;
        height: 100%;
        margin-left: 5%;
    }
    
    .HomepageBoxTow_text{
        width: 45%;
        height: 100%;
        margin-top: 7%;
        p{
            font-size: 20px;
            color: #666;
        }
    }
}
</style>
