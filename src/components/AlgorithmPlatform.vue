<template>
    <div id="AlgorithmPlatform">
        <el-carousel height="450px" :interval=5000 style="z-index: -1;">
            <el-carousel-item v-for="item in img" :key="item.id">
                <img :src="item.src" style="width: 100%;height: 100%;">
            </el-carousel-item>
        </el-carousel>
        <div>
            <el-row>
                <el-col :span="2"><div class="grid-content bg-purple">&nbsp;</div></el-col>
                <el-col :span="20"><div class="main">
                    <div class="titleone">
                        <div class="onetitle">
                            <p>服务对象</p>
                            <div class="boxone"></div>
                        </div>
                        <div class="titleone_main">
                            <div class="titleone_mainbox" v-for="item in titleone_main " :key="item.id">
                                <div class="titleone_maintext">
                                    <p class="titleone_maintext_p1">{{ item.title }}</p>
                                    <p class="titleone_maintext_p2">{{ item.text }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="titletow">
                        <img src="../assets/img/千火平台产品介绍.png" alt="模型图片">
                        <div class="titletow_main">
                            <div class="titletow_mainTitle">
                                <p >产品简介</p>
                                <div></div>
                            </div>
                            <div class="titletow_mainText">
                                <p>系统针对工业行业复杂的环境采用移动检测，小目标检测，色彩甄别，特征点检测，多目标检测等目标检测算法，全面兼顾高性能算法、高效训练及完备的深度AI计算部署，全系列通用目标检测算法外，额外覆盖旋转框检测、实例分割、行为检测、身份检测、动作等垂类任务。<br><br>基于计算机视觉技术的工人不安全行为识别方法利用摄像头等相关设备采集施工现场工人行为的图像或视频数据，捕捉施工现场工人的行为，并通过目标检测、特征提取、特征理解等数据处理算法对施工现场不安全状态进行识别。<br><br>然后基于计算机深度学习，初期部署自学习模型，优化算法逻辑，项目正式部署使用后，针对真实使用环境，支持分各识别能力的训练数据集、测试数据集的创建管理，配合“云 ＋ 离 线”的方式同步深度学习达到更好的识别效果。</p>
                            </div>
                        </div>
                    </div>
                    <div class="titlethree">
                        <div class="titlethree_title">
                            <h2>技术特性</h2>
                            <div></div>
                            <p>强大的资源管理和容器化的部署方式，使极星平台不仅可以最大化利用计算资源，也让整个部署流程、协作以及拓展变得更加简单高效。</p>
                        </div>
                        <div class="titlethree_text">
                            <div class="titlethree_textOne">
                                <p class="titlethree_textOne_p1">强大的资源管理</p>
                                <p class="titlethree_textOne_p2">极星平台通过算法管理资源配额和设备、数据之间实现隔离，平台可灵活支持资源配额调整和推理专用资源方案<br>同时，通过削峰填谷、任务排队和失败重试机制，使计算资源达到最大化利用。</p>
                            </div>
                            <div class="titlethree_textTow">
                                <p class="titlethree_textTow_p1">基于 K8S 的容器化</p>
                                <p class="titlethree_textTow_p2">极星平台采用容器化部署方式，不仅可以完全封装算法代码及推理代码，还能封装整个依赖库及硬件库。容器底座采用具有 K8S容器原生特性，只需将镜像推送到平台的算法仓库中，就可以借助镜像仓库共享整个运行环境，在容器环境中运行推理服务</p>
                            </div>
                        </div>
                    </div>
                    <div class="titlefour">
                        <div class="titlefour_title">
                            <p>核心功能</p>
                            <div></div>
                        </div>
                        <div class="titlefour_Icon">
                            <div class="titlefour_IconMain" v-for="item in titlefour" @mouseenter="titlefourDome" :key="item.id"  :id="item.id">
                                <div>
                                    <div class="titlefour_IconMain_img">
                                        <img :src="item.icon" alt="图标">
                                    </div>
                                    <p>{{item.title}}</p>
                                </div>
                                
                            </div>
                        </div>
                        
                        <div class="titlefour_main">
                            <div class="titlefour_mainText">
                                <p class="titlefour_mainTextOne">{{applyObj.title}}</p>
                                <p class="titlefour_mainTextTow">{{applyObj.text}}</p>
                            </div>
                            <div class="titlefour_mainImg">
                                <img :src="applyObj.img" alt="演示图片">
                            </div>
                        </div>
                    </div>
                    <div class="titlefive_main">
                        <div class="titlefive_title">
                            <p>系统规格</p>
                            <div></div>
                        </div>
                        <div class="tableOne">
                            <div class="tableOne_title">
                                系统环境
                            </div>
                            <div class="tableOne_text" v-for="item in tableOne" :key="item.id">
                                <div class="tableOne_textOne">{{ item.attribute }}</div>
                                <div class="tableOne_textTow">{{ item.content }}</div>
                            </div>
                        </div>
                        <div class="tableTow">
                            <div class="tableTow_title">
                                系统规格
                            </div>
                            <div class="tableTow_text" v-for="item in tableTow" :key="item.id">
                                <div class="tableTow_textOne">{{ item.attribute }}</div>
                                <div class="tableTow_textTow">{{ item.content }}</div>
                            </div>
                        </div>
                    </div>
                </div></el-col>
                <el-col :span="2"><div class="grid-content bg-purple">&nbsp;</div></el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AlgorithmPlatform",
        data() {
            return {
                img:[{
                    id:1,
                    src:require("@/assets/img/背景.jpg"),
                },{
                    id:2,
                    src:require("@/assets/img/背景2.jpg"),
                }],
                titleone_main:[{
                    id:1,
                    img: "",
                    title:"终端企业",
                    text:"需要直接使用 AI 应用工具并进行展示的群体"
                },{
                    id:2,
                    img: "",
                    title:"集成商",
                    text:"需要在实际项目中使用 AI 能力并对外提供完整解决方案的群体"
                },{
                    id:3,
                    img: "",
                    title:"行业解决方案商",
                    text:"需要在自身软硬件方案中整合 AI 能力并对外销售的群体"
                },],
                titlefour:[{
                    id:1,
                    icon: "https://ow.extremevision.com.cn/uploadfile/file/20230421/1682041587917959.svg",
                    img:require("@/assets/img/功能.png"),
                    title:"数据看板",
                    text:" 基于不同维度的数据对系统进行栅格化管理，直观展示系统涵盖的统计信息及实况信息。支持页面动态刷新，对报警数据、设备数量、设备使用情况、资源使用情况、算法使用情况、高发点位、报警趋势等突出问题等核心指标进行综合监测，通过可视化分析全面展示 AI 管理现状，辅助管理者全面掌握运行态势，提升监管力度和行政效率"
                },{
                    id:2,
                    icon: "https://ow.extremevision.com.cn/uploadfile/file/20230421/1682041503922384.svg",
                    img: require("@/assets/img/2应用中心.png"),
                    title:"应用中心",
                    text:" 汇聚基于 AI 的智能应用，作为窗口向终端用户提供可直接使用的 AI 应用及AI 工具，同时也向应用开发者提供基于算法服务的 API 接口，开发者无需烦恼算法安装部署或数据接入管理等问题，只需专注业务侧的实现"
                },
                {
                    id:3,
                    icon: "https://ow.extremevision.com.cn/uploadfile/file/20230421/1682041413768834.svg",
                    img:require("@/assets/img/1报警提醒.png"),
                    title:"预警中心",
                    text:"使用计算机视觉分析技术，通过将场景中背景和目标分离进而分析并追踪在摄像机场景内出现的目标<br>用户可以根据的视频内容分析功能，通过在不同摄像机的场景中预设不同的报警规则，一旦目标在场景中出现了违反预定义规则的行为，系统会自动发出报警，并自动弹出报警信息及发出警示音，用户可以通过点击报警信息，实现报警的场景重组并采取相关措施。通过实时视频分析以及实时报警信息，利用 AI 智能发现手段，高效完成预警监控事件的处理闭环"
                },
                {
                    id:4,
                    icon: "https://ow.extremevision.com.cn/uploadfile/file/20230421/1682041205441810.svg",
                    img: require("@/assets/img/算法中心.png"),
                    title:"算法中心",
                    text:"极星平台连通极视角算法商城，提供大量成熟的计算机视觉算法供用户选用。其中，算法仓库提供长尾算法、定制化算法及第三方算法的离线方式安装部署，通过极星平台实现统一管理。平台使用方无需关注不同算法协议或实例运行资源等问题，通过平台完成算法信息创建、算法镜像导入、算法安装部署、运行资源分配等操作，降低算法管理门槛，提升使用算法效率"
                },
                {
                    id:5,
                    icon: "https://ow.extremevision.com.cn/uploadfile/file/20230421/1682041017646491.svg",
                    img: require("@/assets/img/接入中心.png"),
                    title:"接入中心",
                    text:"支持设备数据、业务数据以及其他平台数据的统一接入，为需求方提供所需数据及数据集的管理工作。同时将不同品牌、不同型号、不同类型的智能设备进行统一管理，将不同协议、不同编码的数据转换成统一格式输出和控制，支持接入国内主流品牌设备，既可以使用标准协议(RTSP、GB/T28181) 进行接入， 也可以使用设备的 SDK 和私有协议接入进行管理"
                },
                {
                    id:6,
                    icon: "https://ow.extremevision.com.cn/uploadfile/file/20230421/1682040504947704.svg",
                    img:require("@/assets/img/6管理数据.png"),
                    title:"管理中心",
                    text:"贯穿 AI 应用开发过程中涉及到各个环节的配置及负责对平台自身的管理，包括：算法、策略、集群、视图库、用户和权限的管理、日志管理、监控管 理等职能管理中心包括七个模块，算法配置、报警配置、视图库管理、集群管理、消息提醒、用户管理、系统设置"
                },],
                tableOne:[{
                    id:1,
                    attribute: "视频流编码",
                    content:"H.264编码/解码、H.265解码"
                }],
                tableTow:[{
                    id:1,
                    attribute: "服务端操作系统",
                    content:"CentOS Linux release 7.9.2009 (Core)、统信UOS操作系统V20(1002a)"
                }],
                applyObj:{},
                
            };
        },
        methods: {
            titlefourDome(event){
                let obj =this.titlefour.filter((item)=> {
                    return item.id.toString() === event.target.id;
                });
                this.applyObj=obj[0];
            }
        },
        mounted(){
            this.applyObj = this.titlefour[0];
        },
    }
    
</script>

<style scoped lang="less">
#AlgorithmPlatform{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}
.header {
    width: 100%;
    height: 450px;
    background-color: #2ddac2;
    background: url("../assets/img/背景.jpg");
    background-size: cover;
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
        color: #28339d;
        background: #fff;
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
    .titleone{
        width: 100%;
        height: 10%;
        margin: 5% 0;
        .onetitle{
            width: 100%;
            height: 50%;
            text-align: center;
           
            p{
                font-size: 42px;
                font-weight: 500;
                color: #071D3C;

            }
            .boxone{
                background-color: #2FCEFF;
                width: 60px;
                height: 5px;
                margin: auto;
                margin-top: 10px;
                border-radius: 2px;
            }
        }
        .titleone_main{
            width: 100%;
            height: 50%;
            margin-top: 4%;
            display: flex;
            justify-content: space-between;
            .titleone_mainbox{
                width: 30%;
                height: 100%;
                background: linear-gradient(354deg, #FFFFFF 0%, #FDFFFF 0%, #EDFBFF 100%, #EDFBFF 100%);
                display: flex;
                justify-content: space-between;
                padding: 2% 1% 1% 1%;
                text-align: center;
                img{
                    width: 30%;
                    height: 30%;
                }
                .titleone_maintext{
                    width: 100%;
                    height: 100%;
                    padding-top: 17px;
                    .titleone_maintext_p1{
                        font-size: 24px;
                        font-weight: 500;
                        color: #071D3C;
                    }
                    .titleone_maintext_p2{
                        font-size: 14px;
                        font-weight: 400;
                        color: #69778A;
                        margin-top: 14px;
                    }
                }
            }
        }
    }
.titletow{
    width: 100%;
    height: 20%;
    display: flex;
    margin-bottom: 5%;
    img{
        width: 50%;
    }
    .titletow_main{
        width: 45%;
        height: 100%;
        margin-left: 5%;
        .titletow_mainTitle{
            width: 100%;
            height: 10%;
            margin-top: 5%;
            p{
                text-align: center;
                font-size: 42px;
                font-weight: 500;
                color: #071D3C;
            }
            div{
                width: 60px;
                height: 5px;
                background: #267DFF;
                border-radius: 2px;
                margin-top: 20px;
                margin: auto;
            }
        }
        .titletow_mainText{
            width: 100%;
            height: 40%;
            margin: 5% 0;
            p{
                font-size: 16px;
                font-weight: 400;
                color: #69778A;
                margin-top: 14px;
            }
        }
    }
}
.titlethree{
    width: 100%;
    height: 20%;
    display: flex;
    margin-bottom: 5%;
    .titlethree_title{
        width: 40%;
        height: 100%;
        margin-top: 5%;
        h2{
            font-size: 42px;
            font-weight: 500;
            color: #071D3C;
        }
        div{
            width: 60px;
            height: 5px;
            background: #267DFF;
            border-radius: 2px;
            margin-top: 10px;
            margin-bottom: 12%;
        }
        p{
            margin-top: 20%;
            font-size: 14px;
            font-weight: 400;
            color: #69778A;
            margin-top: 14px;
        }
    }
    .titlethree_text{
        width: 55%;
        height: 100%;
        margin-left: 10%;
        position: relative;
        .titlethree_textOne{
            width: 90%;
            height: 50%;
            padding: 7% 5% 10% 5%;
            border-radius: 3px;
            background: #49D5FF;
            text-align: center;
            .titlethree_textOne_p1{
                font-size: 24px;
                font-weight: 600;
                color: #FFFFFF;
                margin-top: 2.5%;
            }
            .titlethree_textOne_p2{
                font-size: 14px;
                font-weight: 600;
                color: #FFFFFF;
                margin-top: 5%;
            }
            
        }
        .titlethree_textTow{
            width: 90%;
            height: 60%;
            padding: 7% 5% 10% 5%;
            border-radius: 3px;
            background: #14192A;
            text-align: center;
            position: absolute;
            top: 80%;
            left: 15%;
            z-index: -1;
            .titlethree_textTow_p1{
                font-size: 24px;
                font-weight: 600;
                color: #FFFFFF;
                margin-top: 2.5%;
            }
            .titlethree_textTow_p2{
                font-size: 14px;
                font-weight: 600;
                color: #FFFFFF;
                margin-top: 5%;
            }
        }
    }
}
.titlefour{
    width: 100%;
    height: 20%;
    margin-top: 20%;
    margin-bottom: 5%;
    .titlefour_title{
        width: 100%;
        height: 10%;
        margin-top: 5%;
        text-align: center;
        p{
            font-size: 42px;
            font-weight: 500;
            color: #071D3C;
        }
        div{
            width: 60px;
            height: 5px;
            background: #267DFF;
            border-radius: 2px;
            margin-top: 10px;
            margin: auto;
        }
    }
    .titlefour_Icon{
        width: 100%;
        height: 15%;
        margin-top: 5%;
        display: flex;
        justify-content: center;
        .titlefour_IconMain{
            width: 15%;
            height: 100%;
            div{
                width: 30%;
                height: 30%;
                text-align: center;
                background-color: #fff;
                div{
                    width: 95%;
                    height: 95%;
                    padding: 5%;
                    
                    margin: auto;
                    border-radius: 2%;
                    img{
                        width: 60%;
                        margin: auto;
                    }
                }
                
            }
            p{
                font-size: 14px;
                font-weight: 400;
                color: #69778a;
                margin-top: 15px;
            }
        }
    }
    .titlefour_main{
        width: 100%;
        height: 70%;
        margin-top: 5%;
        background: url("../assets/img/小背景.png");
        padding: 10% 10% 7% 10%; 
        margin-left: -10%;
        display: flex;
        .titlefour_mainText{
            width: 30%;
            height: 100%;
            margin-left: 10%;
            margin-top: 7%;
            .titlefour_mainTextOne{
                font-size: 26px;
                font-weight: 500;
                color:#fff;
            }
            .titlefour_mainTextTow{
                font-size: 14px;
                font-weight: 400;
                margin-top: 5%;
                color: #fff;
            }
        }
        .titlefour_mainImg{
            width: 55%;
            height: 100%;
            margin-left: 10%;
            transition: opacity .5s linear;
            img{
                width: 80%;
                
            }
        }
    }
}
.titlefive_main{
    width: 100%;
    height: 30%;
    margin-bottom: 2%;
    .titlefive_title{
        width: 100%;
        height: 10%;
        P{
            text-align: center;
            font-size: 42px;
            font-weight: 500;
            color: #071D3C;
        }
        div{
            width: 60px;
            height: 5px;
            background: #267DFF;
            border-radius: 2px;
            margin-top: 10px;
            margin: auto;
        }
    }
    .tableOne{
        width: 100%;
        height: 40%;
        margin-top: 5%;
        .tableOne_title{
            width: 95%;
            height: 10%;
            font-size: 20px;
            color: #FFFFFF;
            font-weight: normal;
            background: #212B42;
            border-radius: 8px 8px 0px 0px;
            padding-left: 5%;
            
        }
        .tableOne_text{
            width: 100%;
            height: 90%;
            display: flex;
            .tableOne_textOne{
                width: 50%;
                height: 10%;
                font-size: 16px;
                font-weight: 400;
                color: #071D3C;
                padding: 14px 0 14px 60px;
                border: 1px solid #EEEEEE;
            }
            .tableOne_textTow{
                width: 50%;
                height: 10%;
                font-size: 16px;
                font-weight: 400;
                color: #071D3C;
                padding: 14px 0 14px 60px;
                border: 1px solid #EEEEEE;
            }
        }
    }
    .tableTow{
        width: 100%;
        height: 40%;
        margin-top: 5%;
        .tableTow_title{
            width: 95%;
            height: 10%;
            font-size: 20px;
            color: #FFFFFF;
            font-weight: normal;
            background: #212B42;
            border-radius: 8px 8px 0px 0px;
            padding-left: 5%;
            
        }
        .tableTow_text{
            width: 100%;
            height: 90%;
            display: flex;
            .tableTow_textOne{
                width: 50%;
                height: 10%;
                font-size: 16px;
                font-weight: 400;
                color: #071D3C;
                padding: 14px 0 14px 60px;
                border: 1px solid #EEEEEE;
            }
            .tableTow_textTow{
                width: 50%;
                font-size: 14px;
                font-weight: 400;
                color: #071D3C;
                padding: 14px 0 14px 60px;
                border: 1px solid #EEEEEE;
            }
        }
    }
}
</style>