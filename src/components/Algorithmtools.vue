<template>
    <div id="algorithmtools">
        <el-carousel height="450px" style="z-index: -1;">
            <el-carousel-item v-for="item in img" :key="item.id">
                <img :src="item.src" style="width: 100%;height: 100%;">
            </el-carousel-item>
        </el-carousel>
        <div>
            <el-row>
                <el-col :span="2"><div class="grid-content bg-purple">&nbsp;</div></el-col>
                <el-col :span="20"><div class="main">
                    <div class="boxOne">
                        <div class="boxOne_main" >
                            <div class="boxOne_text "  v-for="item in boxOne" :key="item.id">
                                <h3>{{ item.title }}</h3>
                                <p>{{ item.tetx }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="boxTow">
                        <div class="boxTow_main">
                            <h2>智能数据标注管理平台</h2>
                            <p>智能数据标注管理平台是面向政企、科研院等内部标注团队，提供数据标注、标注审核、绩效统计等数据标注相关功能的系统。平台内置点、线、矩形、多边形、关键点等多种标注工具，集成Segment Anything, YOLOv7等智能标注模型，能够满足目标检测、OCR、语义分割、姿态识别、人脸识别等各类视觉算法的数据标注需求。平台支持多用户协作标注，支持对标注结果进行抽检审核，帮助数据团队提高标注效率与质量，完善数据及人员管理流程。</p>
                            <div class="a">
                                <span class="textThree">申请试用</span>
                            </div> 
                        </div>
                        <div class="boxTow_img">
                            <img src="https://ow.extremevision.com.cn/uploadfile/file/20230906/1693967139136558.png" alt="演示图片">
                        </div>
                    </div>
                    <div class="boxThree">
                        <h2>产品价值</h2>
                        <div class="boxThree_main">
                            <div class="boxTree_con" v-for="item in boxThree" :key="item.id">
                                <div class="boxThree_text">
                                    <h3>{{ item.title }}</h3>
                                    <p>{{ item.text }}</p>
                                </div>
                                <img :src="item.img" alt="图标">
                            </div>
                        </div>
                    </div>
                    <div class="boxFour">
                        <h2>产品优势</h2>
                        <div class="boxFour_cont">
                            <div class="boxFour_main" v-for="item in boxFour" :key="item.id">
                                <div class="boxFour_mainImg">
                                    <img :src="item.img" alt="图片">
                                </div>
                                
                                <div class="boxFour_mainText">
                                    <h3>{{ item.title }}</h3>
                                    <p>{{ item.tetx }}</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div class="boxFive">
                        <div class="boxFive_icon">
                            <h2>功能亮点</h2>
                            <div class="boxFive_iconFont">
                                <div class="boxFive_iconMain" v-for="item in boxFive" @mouseenter="boxFiveDome" :key="item.id" :id="item.id">
                                    <img :src="item.icon" alt="图标">
                                    <div class="boxFive_iconMain_p">{{ item.title }}</div>
                                </div>
                            </div>   
                        </div>
                        <div class="boxFive_Img">
                            <img :src="applyObj.img" alt="演示图片" style="width: 100%;">
                        </div>
                        
                    </div>
                </div></el-col>
                <el-col :span="2"><div class="grid-content bg-purple">&nbsp;</div></el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
    export default{
        name: "Algorithmtools",
        data(){
            return {
                img:[{
                    id:1,
                    src:require("@/assets/img/背景.jpg"),
                },{
                    id:2,
                    src:require("@/assets/img/背景2.jpg"),
                }]
                ,boxOne: [{
                    id:1,
                    title:"数据交付效率提升60%",
                    tetx:"可视化任务管理看板，标注进度、审核进度一目了然，团队协同高效透明，任务灵活自动分配，成员KPI可量化追踪，有效确保标注任务高效高质交付"
                },{
                    id:2,
                    title:"标注效率提升80%",
                    tetx:"丰富的标注工具与标注模式，内置SAM等智能图像分割模型，AI辅助标注，自动将图像中的不同物体或区域进行标注和分割"
                },{
                    id:3,
                    title:"标注质量误差降低50%",
                    tetx:"未标注任务、审核任务自动分配，多种工具辅助标注，减少错标、漏标，保证标注质量"
                }
            ],boxThree:[{
                id:1,
                title:"提高标注效率和准确性",
                text:"提供丰富的标注工具和功能，帮助用户快速准确地进行数据标注。自动化的标注流程、任务分配和审核机制、标注模板、智能辅助工具、预标注工具和快捷操作等功能，大大提高标注效率和标注结果的准确性，节省人力和时间成本",
                img:"https://ow.extremevision.com.cn/uploadfile/file/20230421/1682062062252173.png"
            },{
                id:2,
                title:"满足多样化标注需求",
                text:"标注平台适用于各种CV任务，包括图像分类、目标检测、语义分割等。无论是学术研究、工程开发还是商业应用，平台都提供了灵活的工具和算法支持，满足不同任务的标注需求，帮助用户实现多样化的 CV 应用",
                img:"https://ow.extremevision.com.cn/uploadfile/file/20230421/1682062041299684.png"
            }],
            boxFour:[{
                id:1,
                img:require("@/assets/img/高效易用.jpg"),
                title:"高效易用",
                tetx:"一站式全流程，实现从数据导入到数据集产出全流程闭环，提高协作效率，降低沟通成本。支持数据自动标注，平台提供预置标注模型，支持对几十种常见标签的自动标注；支持 SAM 大模型辅助标注，能够根据用户 Prompts 自动预测标注结果。大大减少了人工标注成本，全面提高数据标注效率"
            },{
                id:2,
                img:require("@/assets/img/灵活开放.jpg"),
                title:"灵活开放",
                tetx:"平台采用模块化设计，业务层与平台层分离，可根据不同任务和需求，灵活添加或移除特定模块，集成和扩展各种标注工具和功能。支持外部系统对接与自主拓展。平台具备灵活的算法支持，满足不同数据类型和复杂度的标注要求。支持多种数据源导入，COCO Keypoints、LabelMe 等常见格式的数据集导出"
            },{
                id:3,
                img:require("@/assets/img/安全.jpg"),
                title:"安全可靠",
                tetx:"支持私有化部署， 支持多样的数据权限配置，管理员可根据数据安全等级，授权用户能够访问和处理敏感数据。通过使用安全的通信协议和加密算法，平台保障数据在传输过程中的完整性和机密性。平台制定安全地容灾机制、实施定期的数据备份策略，确保数据的可靠性和可恢复性"
            }],
            boxFive:[{
                id:1,
                icon:"https://ow.extremevision.com.cn/uploadfile/file/20230519/1684482194588922.png",
                img:require("@/assets/img/1报警提醒.png"),
                title:"报警提醒",
            },
            {
                id:2,
                icon:"https://ow.extremevision.com.cn/uploadfile/file/20230519/1684482241640295.png",
                img:require("@/assets/img/2违章分类.png"),
                title:"违章分类查询",
            },
            {
                id:3,
                icon:"https://ow.extremevision.com.cn/uploadfile/file/20230519/1684481892430815.png",
                img:require("@/assets/img/3二次识别处理.png"),
                title:"二次识别处理",
            },
            {
                id:4,
                icon:"https://ow.extremevision.com.cn/uploadfile/file/20230519/1684482329235241.png",
                img:require("@/assets/img/4推送通知.png"),
                title:"推送通知",
            },
            {
                id:5,
                icon:"https://ow.extremevision.com.cn/uploadfile/file/20230519/1684482483652944.png",
                img:require("@/assets/img/5管理摄像头.png"),
                title:"管理摄像头",
            },
            {
                id:6,
                icon:"https://ow.extremevision.com.cn/uploadfile/file/20230519/1684482509353285.png",
                img:require("@/assets/img/6数据管理.png"),
                title:"数据管理",
            }],applyObj:{},
                
            };
        },
        methods: {
            boxFiveDome(event){
                let obj =this.boxFive.filter((item)=> {
                    return item.id.toString() === event.target.id;
                });
                this.applyObj=obj[0];
            }
        },
        mounted(){
            this.applyObj = this.boxFive[0];
        },
    }
</script>
<style scoped lang="less">
#algorithmtools{
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
  .header_boxOne{
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
        color: #fff;
        background: #28339d;
        cursor: pointer;
        transition: 1s;
    }
    
    .a:after,
    .a:before {
        content: '';
        position: absolute;
        left: -1px;
        top: -1px;
        width: 0;
        height: 100%;
        background: #28339d;
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
        background: #2ddac2;
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
    .boxOne{
        width: 100%;
        height: 10%;
        margin-top: 3%;
        padding-top: 2.5%;
    }
    .boxOne_main{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        .boxOne_text{
            width: 30%;
            height: 100%;
            padding: 1%;
            background-color: #f4f8ff;
            h3{
                font-size: 22px;
                margin-top: 2%;
                margin-bottom: 5%;
                color: #333;
            }
            p{
                color: rgba(102, 102, 102, 1);
                font-size: 14px;
                padding-bottom: 2%;
            }
        }
    }
    .boxTow{
        width: 100%;
        height: 20%;
        display: flex;
        padding: 2.5% 10%;
        margin-left: -10%;
        margin-top: 5%;
        margin-bottom: 2.5%;
        background-color: #fafcfe;
        .boxTow_main{
            width: 30%;
            height: 100%;
            h2{
                font-size: 32px;
                font-weight: 500;
                color: #181818;
                padding-top: 2%;
                margin-top: 7%;

            }
            p{
                padding: 4% 7% 4% 0;
                font-size: 16px;
                color: #666666;
                margin-top: 5%;
            }
        }
        .boxTow_img{
            width: 67.5%;
            height: 100%;
            margin-left: 2.5%;
            img{
                width: 100%;
            }
        }
    }
    .boxThree{
        width: 100%;
        height: 10%;
        margin-bottom: 5%;
        h2{
            font-size: 32px;
            color: #181818;
            padding: 2.5% 0;
            font-weight: 500;
        }
        .boxThree_main{
            width: 100%;
            height: 80%;
            display: flex;
            .boxTree_con{
                width: 45%;
                height: 100%;
                padding: 1.5% 2%;
                margin: 0 2% 0 0;
                display: flex;
                background-color: #f5f9ff;
                justify-content: space-between;
                border: 1px solid #EEEEEE;
                img{
                    width: 30%;
                    height: 60%;
                }
                .boxThree_text{
                    width: 65%;
                    height: 100%;
                    margin-bottom: 2%;
                    h3{
                        font-weight: bold;
                        font-size: 22px;
                        color: #333;
                    }
                    p{
                        font-size: 14px;
                        padding-top: 5%;
                        color: #333;
                    }
                }
            }
        }
    }
    .boxFour{
        width: 100%;
        height: 20%;
        margin-bottom: 2.5%;
        h2{
            font-size: 32px;
            font-weight: 500;
            color: #181818;
        }
        .boxFour_cont{
            width: 100%;
            height: 80%;
            display: flex;

        }
        .boxFour_main{
            width: 30%;
            height: 80%;
            margin-top: 1.5%;
            margin-right: 3%;
            
            .boxFour_mainImg{
                width: 464px;
                height: 242.5px;
                overflow: hidden;
            }
            img{
                width: 100%;
                transition: all 0.8s ease-in-out;
            }
            img:hover{
                transform: scale(1.05);
            }
            .boxFour_mainText{
                height: 200px;
                background-color: #f6f6f6;
                padding: 4% 3%;
                h3{
                    color: rgba(24, 24, 24, 1);
                    font-size: 22px;
                }
                p{
                    margin-top: 2%;
                    color: #666;
                    font-size: 16px;
                }
            }
            
        }
    }
    .boxFive{
        width: 100%;
        height: 20%;
        margin-top: 2.5%;
        margin-right: 2.5%;
        margin-bottom: 2%;
        padding: 2.5% 10%;
        margin-left: -10%;
        background-color: #fafcfd;
        display: flex;
        .boxFive_Img{
            width: 944px;
            height: 531px;
        }
        .boxFive_icon{
            width: 30%;
            height: 100%;
            margin-top: 3%;
            h2{
                margin-top: 3%;
                font-weight: 500;
                font-size: 32px;
                color: #181818;
            }
            .boxFive_iconFont{
                width: 100%;
                height: 60%;
                display: flex;
                margin-top: 10%;
                flex-wrap: wrap;
                justify-content: space-between;
                
                .boxFive_iconMain{
                    width: 30%;
                    height: 100%;
                    margin-bottom: 5%;
                    background-color: #fff;
                    text-align: center;
                    display: block;
                    margin: auto;
                    margin-bottom: 2%;
                    img{
                        width: 40%;
                        height: 40%;
                    }
                    .boxFive_iconMain_p{
                        font-size: 18px;
                        color: #333;
                    }
                }
            }
            
        }
        img{
            width: 65%;
            height: 100%;
            margin-left: 5%;
        }
    }
</style>