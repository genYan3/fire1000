<template>
    <div id="aboutus">
        <div class="header">
            <div class="boxOne">
                <h1 class="textOne">诚信 专业 合作 共赢</h1>
                <div class="textTow">专业化、科学化、人性化</div>
                <a href="">
                    <div class="a">
                        <span class="textThree">联系我们</span>
                    </div> 
                </a>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "AboutUS",
    data() {
        return {
        
        }
    }
}
</script>

<style scoped lang="less">
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
</style>