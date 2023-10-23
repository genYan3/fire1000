<template>
    <div id="AlgorithmPlatform">
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
                <el-col :span="2"><div class="grid-content bg-purple">&nbsp;</div></el-col>
                <el-col :span="20"><div class="main">
                    <div class="titleone">
                        <div class="onetitle">
                            <p>标题一</p>
                            <div class="boxone"></div>
                        </div>
                        <div class="titleone_main">
                            <div class="titleone_mainbox" v-for="item in titleone_main " :key="item.id">
                                <img :src="item.img" alt="图标">
                                <div class="titleone_maintext">
                                    <p class="titleone_maintext_p1">{{ item.title }}</p>
                                    <p class="titleone_maintext_p2">{{ item.text }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="titletow">
                        <img src="" alt="模型图片">
                        <div class="titletow_main">
                            <div class="titletow_mainTitle">
                                <p >标题二</p>
                                <div></div>
                            </div>
                            <div class="titletow_mainText">
                                <p>标题二内容</p>
                            </div>
                            <div class="titletow_mainVideo">
                                <img src="" alt="视频图片">
                                <div class="titletow_mainVideo_button">
                                    <img src="" alt="播放按钮">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="titlethree">
                        <div class="titlethree_title">
                            <h2>大标题三</h2>
                            <div></div>
                            <p>大标题三内容说明</p>
                        </div>
                        <div class="titlethree_text">
                            <div class="titlethree_textOne">
                                <p class="titlethree_textOne_p1">小标题一</p>
                                <p class="titlethree_textOne_p2">小标题一内容</p>
                            </div>
                            <div class="titlethree_textTow">
                                <p class="titlethree_textTow_p1">小标题二</p>
                                <p class="titlethree_textTow_p2">小标题二内容</p>
                            </div>
                        </div>
                    </div>
                    <div class="titlefour">
                        <div class="titlefour_title">
                            <p>大标题四</p>
                            <div></div>
                        </div>
                        <div class="titlefour_Icon">
                            <div class="titlefour_IconMain" v-for="item in titlefour" @mouseenter="titlefourDome" :key="item.id"  :id="item.id">
                                <div>
                                    <div>
                                        <img :src="item.icon" alt="图标">
                                    </div>
                                </div>
                                <p>{{item.title}}</p>
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
                            <p>标题五</p>
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
                titleone_main:[{
                    id:1,
                    img: "",
                    title:"小标题1",
                    text:"小标题1内容"
                },{
                    id:2,
                    img: "",
                    title:"小标题2",
                    text:"小标题2内容"
                },{
                    id:3,
                    img: "",
                    title:"小标题3",
                    text:"小标题3内容"
                },],
                titlefour:[{
                    id:1,
                    icon: "",
                    img: "",
                    title:"标签功能1",
                    text:"标签功能内容1"
                },{
                    id:2,
                    icon: "",
                    img: "",
                    title:"标签功能2",
                    text:"标签功能内容2"
                },
                {
                    id:3,
                    icon: "",
                    img: "",
                    title:"标签功能3",
                    text:"标签功能内容3"
                },
                {
                    id:4,
                    icon: "",
                    img: "",
                    title:"标签功能4",
                    text:"标签功能内容4"
                },
                {
                    id:5,
                    icon: "",
                    img: "",
                    title:"标签功能5",
                    text:"标签功能内容5"
                },
                {
                    id:6,
                    icon: "",
                    img: "",
                    title:"标签功能6",
                    text:"标签功能内容6"
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
.AlgorithmPlatform{
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
            display: flex;
            justify-content: space-between;
            .titleone_mainbox{
                width: 30%;
                height: 100%;
                display: flex;
                padding: 3%;
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
                margin-top: 10px;
                margin: auto;
            }
        }
        .titletow_mainText{
            width: 100%;
            height: 40%;
            margin: 2.5% 0;
            p{
                font-size: 14px;
                font-weight: 400;
                color: #69778A;
                margin-top: 14px;
            }
        }
        .titletow_mainVideo{
            width: 100%;
            height: 40%;
            margin: 2.5% 0;
            .titletow_mainVideo_button{
                width: 10%;
                height: 10%;
                margin: auto;
                text-align: center;
                border-radius: 50%;
                img{
                    width: 50%;
                    margin: auto;
                    text-align: center;
                }
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
        width: 50%;
        height: 100%;
        margin-top: 10%;
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
        }
        p{
            margin-top: 10%;
            font-size: 14px;
            font-weight: 400;
            color: #69778A;
            margin-top: 14px;
        }
    }
    .titlethree_text{
        width: 45%;
        height: 100%;
        position: relative;
        .titlethree_textOne{
            width: 90%;
            height: 40%;
            padding: 2.5%;
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
            height: 50%;
            padding: 2.5%;
            border-radius: 3px;
            background: #14192A;
            text-align: center;
            position: absolute;
            top: 50%;
            left: 10%;
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
                background-color: #fff;
                div{
                    width: 95%;
                    height: 95%;
                    margin: auto;
                    background: #e2e9f6;
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
        display: flex;
        .titlefour_mainText{
            width: 50%;
            height: 100%;
            .titlefour_mainTextOne{
                font-size: 26px;
                font-weight: 500;
            }
            .titlefour_mainTextTow{
                font-size: 14px;
                font-weight: 400;
                margin-top: 5%;
            }
        }
        .titlefour_mainImg{
            width: 50%;
            height: 100%;
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
        margin-top: 10%;
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
        margin-top: 10%;
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