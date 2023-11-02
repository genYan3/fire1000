<template>
    <div id="aboutus">
        <el-carousel height="450px" style="z-index: -1;">
            <el-carousel-item v-for="item in img" :key="item.id">
                <img :src="item.src" style="width: 100%;height: 100%;">
            </el-carousel-item>
        </el-carousel>
        <div class="main">
            <div class="title">
                <p class="p1">联系我们</p>
                <p class="p2">contact information</p>
                <p class="yangshixian"></p>
            </div>
            <div class="icon">
                <el-row>
                    <el-col :span="4"><div class="grid-content bg-purple">&nbsp;</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple-light">
                        <div class="yuan">
                            <img src="../assets/img/地图-地标.png" alt="" width="50%" style="margin: 25%;">
                        </div>
                        <p>地点</p>
                        <p>江苏省苏州市高新区科技城科灵路78号3号楼</p>
                    </div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple">
                        <div class="yuan">
                            <img src="../assets/img/电话.png" alt="" width="50%" style="margin: 25%;">
                        </div>
                        <p>手机</p>
                        <p>138 1652 9685</p>
                    </div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple-light">
                        <div class="yuan">
                            <img src="../assets/img/公众号.png" alt="" width="50%" style="margin: 25%;">
                        </div>
                        <p>公众号</p>
                        <p>千火科技</p>
                    </div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple">
                        <div class="yuan">
                            <img src="../assets/img/邮箱.png" alt="" width="50%" style="margin: 25%;">
                        </div>
                        <p>邮箱</p>
                        <p>fire1000jxy@163.com</p>
                    </div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple-light">&nbsp;</div></el-col>
                </el-row>
            </div>
            
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "aboutus",
    data() {
        return {
            img:[{
                    id:1,
                    src:require("@/assets/img/背景.jpg"),
                },{
                    id:2,
                    src:require("@/assets/img/背景2.jpg"),
                }],
        }
    }
}
</script>

<style scoped lang="less">
#aboutus{
    width: 100%;
    height:100%;
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
  }
.main{
    width: 100%;
    height: 70%;
}
.title{
    width: 100%;
    height: 10%;
    text-align: center;
    margin: 4% 0 4% 0;
}
.p1{
    font-size: 22px;
    font-weight: 800;
    font-family: SimSun;
}
.p2{
    font-size: 18px;
    font-family: SimSun;
    color: #999999;
    margin-top: 0.5%;
}
.icon{
    width: 100%;
    height: 20%;
    text-align: center;
    margin-bottom: 5%;
    text-align: center;
    p{
        margin: 5% 0 0 0;
        color: #555555;
    }
}
.grid-content bg-purple-light{
    display: inline;
}
.yuan{
    width: 70px;
    height: 70px;
    border: 1px solid #ebebeb;
    border-radius: 50%;
    margin: auto;
}
.yangshixian{
    width: 40px;
    height: 0px;
    border:1px solid #556ede;
    margin: auto;
    margin-top: 0.8%;
}
</style>