<template>
    <div class="successcases">
        <div class="container">
            <div class="header">
                <div class="boxOne">
                    <h1 class="textOne">诚信 专业 合作 共赢</h1>
                    <div class="textTow">专业化、科学化、人性化</div>
                    <a href="/aboutus">
                       <div class="a">
                            <span class="textThree">联系我们</span>
                        </div> 
                    </a>
                </div>
            </div>
            <div class="main">
                <el-row>
                    <el-col :span="3"><div class="grid-content bg-purple">&nbsp;</div></el-col>
                    <el-col :span="18">
                        <div class="grid-content bg-purple-light">
                            <div class="title">
                                <div style="
                                    width: 150px;
                                    height: 1px;
                                    background-color: grey;
                                    margin-top: 26px;"></div>
                                <div style="font-family: SimSun; font-weight: 600;">
                                    行业方案
                                </div>
                                <div style="
                                    width: 150px;
                                    height: 1px;
                                    background-color: grey;
                                    margin-top: 26px;"></div>
                            </div>
                            <div class="lunbotu">
                                <el-carousel :interval="8000" type="card" height="400px" v-model="activeIndex"  @change="changeIn">
                                    <el-carousel-item v-for="(item, index) in carouselItems" :key="index" >
                                        <img :src="carouselItems[activeIndex].image" alt="">
                                    </el-carousel-item>
                                </el-carousel>
                                <div class="cheshi">
                                    <h2>{{  carouselItems1 }}</h2>
                                    <p>{{  carouselItems2 }}</p>
                                </div>
                            </div>
                            
                        </div>
                    </el-col>
                    <el-col :span="3"><div class="grid-content bg-purple"></div>&nbsp;</el-col> 
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
        msg: this.msg,
        activeIndex: 0,
        carouselItems: [
            { id:0,image: 'image1.jpg' ,title:'标题1', content: '内容1'},
            { id:1,image: 'image2.jpg' ,title:'标题2', content: '内容2'},
            { id:2,image: 'image3.jpg' ,title:'标题3', content: '内容3'},
            { id:4,image: 'image1.jpg' ,title:'标题4', content: '内容4'},
            { id:5,image: 'image2.jpg' ,title:'标题5', content: '内容5'},
            { id:6,image: 'image3.jpg' ,title:'标题6', content: '内容6'},
            { id:7,image: 'image1.jpg' ,title:'标题7', content: '内容7'},
            { id:8,image: 'image2.jpg' ,title:'标题8', content: '内容8'},
            { id:9,image: 'image3.jpg' ,title:'标题9', content: '内容9'},
            // 添加更多图片和内容
        ],
        carouselItems1:"",
        carouselItems2: "",
        
    }
  },
   created() {
//     this.fetchContent();
   },
    methods: {
        steCarou(nub){
            this.carouselItems1 = this.carouselItems[nub].title;
            this.carouselItems2 = this.carouselItems[nub].content;

            
        },
//     fetchContent() {
//       axios.get('服务器api')
//         .then(response => {
//           this.carouselItems = response.data;
//         })
//         .catch(error => {
//           console.error(error);
//         });
//     }
        
        changeIn(val){
            // console.log(val);
            this.steCarou(val)
        }
    },
    computed: {
        currentContent(){
            return this.carouselItems[this.activeIndex].content;
        }
    }
}
</script>
  
<style scoped lang="less" scoped>
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
    .el-header {
    padding: 0 ;
    box-sizing: border-box;
    flex-shrink: 0;
}
    .el-card__body, .el-main {
    padding: 0px;
}
.title{
    padding: 16px 0;
    text-align: center;
    font-size: 40px;
    display: flex;
    justify-content: center;
}
.lunbotu{
    margin-top: 2%;
}
.main_content{
    padding: 16px 0;
    text-align: center;
    width: 100%;
    height: 600px;
    background: #000;
}
</style>
  