<template>
    <div id="algorithmtools">
        <div class="header">
            <div class="header_boxOne">
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
                            <h2>大标题</h2>
                            <p>大标题4内容2</p>
                            <div class="a">
                                <span class="textThree">申请试用</span>
                            </div> 
                        </div>
                        <div class="boxTow_img">
                            <img src="" alt="演示图片">
                        </div>
                    </div>
                    <div class="boxThree">
                        <h2>大标题</h2>
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
                        <h2>大标题</h2>
                        <div class="boxFour_cont">
                            <div class="boxFour_main" v-for="item in boxFour" :key="item.id">
                                <img :src="item.img" alt="图片">
                                <h3>{{ item.title }}</h3>
                                <p>{{ item.tetx }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="boxFive">
                        <div class="boxFive_icon">
                            <h2>大标题</h2>
                            <div class="boxFive_iconFont">
                                <div class="boxFive_iconMain" v-for="item in boxFive" @mouseenter="boxFiveDome" :key="item.id" :id="item.id">
                                    <img :src="item.img" alt="图标">
                                    <div class="boxFive_iconMain_p">{{ item.title }}</div>
                                </div>
                            </div>   
                        </div>
                        <img :src="applyObj.icon" alt="演示图片">
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
                boxOne: [{
                    id:1,
                    title:"小标题1",
                    tetx:"小标题1内容"
                },{
                    id:2,
                    title:"小标题2",
                    tetx:"小标题2内容"
                },{
                    id:3,
                    title:"小标题3",
                    tetx:"小标题3内容"
                }
            ],boxThree:[{
                id:1,
                title:"小标题1",
                text:"内容1",
                img:""
            },{
                id:2,
                title:"小标题2",
                text:"内容2",
                img:""
            }],
            boxFour:[{
                id:1,
                img:"",
                title:"小标题1",
                tetx:"内容1"
            },{
                id:2,
                img:"",
                title:"小标题2",
                tetx:"内容2"
            },{
                id:3,
                img:"",
                title:"小标题3",
                tetx:"内容3"
            }],
            boxFive:[{
                id:1,
                icon:"",
                img:"",
                title:"标题1",
            },
            {
                id:2,
                icon:"",
                img:"",
                title:"标题2",
            },
            {
                id:3,
                icon:"",
                img:"",
                title:"标题3",
            },
            {
                id:4,
                icon:"",
                img:"",
                title:"标题4",
            },
            {
                id:5,
                icon:"",
                img:"",
                title:"标题5",
            },
            {
                id:6,
                icon:"",
                img:"",
                title:"标题6",
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
    .boxOne{
        width: 100%;
        height: 10%;
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
            padding: 2%;
            h3{
                font-size: 22px;
                margin-bottom: 5%;
                color: #333;
            }
            p{
                color: rgba(102, 102, 102, 1);
                font-size: 14px;
            }
        }
    }
    .boxTow{
        width: 100%;
        height: 20%;
        display: flex;
        padding: 2.5% 0;
        margin-bottom: 2.5%;
        .boxTow_main{
            width: 40%;
            height: 100%;
            h2{
                font-size: 32px;
                font-weight: 500;
                color: #181818;
                padding-top: 2%;

            }
            p{
                padding: 4% 0;
                font-size: 14px;
                color: #666666;
            }
        }
        .boxTow_img{
            width: 55%;
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
                padding: 1.5% 0;
                margin: 0 2% 0 0;
                display: flex;
                justify-content: center;
                border: 1px solid #EEEEEE;
                img{
                    width: 30%;
                    height: 60%;
                }
                .boxThree_text{
                    width: 45%;
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
            img{
                width: 100%;
            }
            h3{
                color: rgba(24, 24, 24, 1);
                font-size: 22px;
                margin: 1.5% 0;
            }
            p{
                color: #666;
                font-size: 14px;
            }
        }
    }
    .boxFive{
        width: 100%;
        height: 20%;
        margin-right: 2.5%;
        margin-bottom: 2%;
        display: flex;
        .boxFive_icon{
            width: 40%;
            height: 100%;
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
                margin-top: 5%;
                flex-wrap: wrap;
                .boxFive_iconMain{
                    width: 30%;
                    height: 100%;
                    margin-bottom: 5%;
                    text-align: center;
                    img{
                        width: 50%;
                        height: 50%;
                        margin: auto;
                    }
                    .boxFive_iconMain_p{
                        font-size: 18px;
                        color: #333;
                    }
                }
            }
            
        }
        img{
            width: 55%;
            height: 100%;
            margin-left: 2.5%;
        }
    }
</style>