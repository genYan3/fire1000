<template>
<div id="Home">
    <el-row class="rowPos">
        <el-col :span="24" class="colPos">
            <el-image :src="mainImg"></el-image>
            <div class="homeImgTest">
                <h1>
                    <span v-for="(item,index) in h1Test" :key="index">{{ item }}</span>
                </h1>
                <h3>
                    <span v-for="(item,index) in h2Test" :key="index">{{ item }}</span>
                </h3>
                <span class="contactUs"><a href="">联系我们</a></span>
            </div>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="3">&nbsp;</el-col>
        <el-col :span="18">
            <div style="margin-top: 3rem;">
                <p class="title">产品与应用</p>
                <div class="productApplyStyle">
                    <div class="leftProduct">
                        <div v-for="item in productList" :key="item.id" class="productCard" @mouseenter="productMouseMove" :id="item.id">
                            <el-image :src="item.imgIcon"></el-image>
                            <p>{{ item.name }}</p>
                        </div>
                    </div>
                    <div class="rightApply">
                        <!-- 获取产品名称 -->
                        <p style="margin-bottom: 15px;color:burlywood;">{{ applyObj.name }}</p>
                        <p>产品技术</p>
                        <p style="text-indent: 30px;margin: 15px 0;">
                            <span v-for=" test,index in applyObj.productTechology" :key="index" style="margin-right: 10px;">
                                {{ test }}</span>
                        </p>
                        <p style="margin: 25px 0;">成功案例</p>
                        <p style="text-indent: 30px;"><span style="margin-right: 10px;" v-for="Case,index in applyObj.case" :key="index">{{
                                Case }}{{ applyObj.id }}</span></p>
                    </div>
                </div>
            </div>
        </el-col>
        <el-col :span="3">&nbsp;</el-col>
    </el-row>
    <el-row style="background-color: aqua;height: 400px; margin: 70px 0;">
        <el-col :span="24"></el-col>
    </el-row>
    <el-row>
        <el-col :span="3">&nbsp;</el-col>
        <el-col :span="18">
            <div class="aiTitle">最新资讯</div>
            <div class="aiConsult">
                <div class="aiConsultLeft">
                    <div>
                        <p><a href="">
                                <el-image class="aiConsultLeftImage">图片1</el-image>
                            </a></p>
                        <p><a href="">新闻1</a></p>
                        <p><a href="">新闻2</a></p>
                        <p><a href="">新闻3</a></p>
                        <p><a href="">新闻4</a></p>
                    </div>
                    <div></div>
                </div>
                <div class="aiConsultRight">
                    <div>
                        <a href="">
                            <el-image></el-image>
                        </a>
                        <p>新闻5</p>
                    </div>
                    <div>
                        <a href="">
                            <el-image></el-image>
                        </a>
                        <p>新闻6</p>
                    </div>
                    <div>
                        <a href="">
                            <el-image></el-image>
                        </a>
                        <p>新闻7</p>
                    </div>
                    <div>
                        <a href="">
                            <el-image></el-image>
                        </a>
                        <p>新闻8</p>
                    </div>
                </div>
            </div>
        </el-col>
        <el-col :span="3">&nbsp;</el-col>
    </el-row>
    <OnlineConsultation id="OnlineConsultation" class="isShow"></OnlineConsultation>
</div>
</template>

<script>
import OnlineConsultation from '@/components/OnlineConsultation'
export default {
    name: "HomeIndex",
    data() {
        return {
            mainImg: "https://www.extremevision.com.cn/uploadfile/file/20230428/1682653146711119.jpg",
            h1Test: ["诚信", "专业", "合作", "共赢"],
            h2Test: ["专业化", "科学化", "人性化"],
            tabsList: [{
                    id: 1,
                    label: "最新资讯",
                    name: "small"
                },
                {
                    id: 2,
                    label: "最新动态",
                    name: "trends"
                },
                {
                    id: 3,
                    label: "案例详情",
                    name: "details"
                }
            ],
            acctivateName: "small",
            aiTitleSmallList: [],
            productList: [{
                id: 1,
                imgIcon: "",
                name: "产品1",
                productTechology: ["ai算法", "图像识别", "安全帽识别", "未安全佩戴识别"],
                case: ["合作伙伴1", "合作伙伴2", "或作伙伴3"]
            }, {
                id: 2,
                imgIcon: "",
                name: "产品2",
                productTechology: ["ai算法", "图像识别", "安全帽识别", "未安全佩戴识别"],
                case: ["合作伙伴1", "合作伙伴2", "或作伙伴3"]
            }, {
                id: 3,
                imgIcon: "",
                name: "产品3",
                productTechology: ["ai算法", "图像识别", "安全帽识别", "未安全佩戴识别"],
                case: ["合作伙伴1", "合作伙伴2", "或作伙伴3"]
            }, {
                id: 4,
                imgIcon: "",
                name: "产品4",
                productTechology: ["ai算法", "图像识别", "安全帽识别", "未安全佩戴识别"],
                case: ["合作伙伴1", "合作伙伴2", "或作伙伴3"]
            }, {
                id: 5,
                imgIcon: "",
                name: "产品5",
                productTechology: ["ai算法", "图像识别", "安全帽识别", "未安全佩戴识别"],
                case: ["合作伙伴1", "合作伙伴2", "或作伙伴3"]
            }, {
                id: 6,
                imgIcon: "",
                name: "产品6",
                productTechology: ["ai算法", "图像识别", "安全帽识别", "未安全佩戴识别"],
                case: ["合作伙伴1", "合作伙伴2", "或作伙伴3"]
            }, {
                id: 7,
                imgIcon: "",
                name: "产品7",
                productTechology: ["ai算法", "图像识别", "安全帽识别", "未安全佩戴识别"],
                case: ["合作伙伴1", "合作伙伴2", "或作伙伴3"]
            }, {
                id: 8,
                imgIcon: "",
                name: "产品8",
                productTechology: ["ai算法", "图像识别", "安全帽识别", "未安全佩戴识别"],
                case: ["合作伙伴1", "合作伙伴2", "或作伙伴3"]
            }, {
                id: 9,
                imgIcon: "",
                name: "产品9",
                productTechology: ["ai算法", "图像识别", "安全帽识别", "未安全佩戴识别"],
                case: ["合作伙伴1", "合作伙伴2", "或作伙伴3"]
            }, ],
            applyObj: {}
        }
    },
    props: {},
    methods: {
        handleClick() {

        },
        productMouseMove(even) {
            let obj = this.productList.filter((item) => {
                return item.id.toString() === even.target.id
            })
            this.applyObj = obj[0]
        }
    },
    mounted() {
        this.applyObj = this.productList[0]
        // window.addEventListener("load", () => {
        //     this.$store.commit("setIndex", "1")
        // })
    },
    components: {
        OnlineConsultation,
    },
}
</script>

<style lang="less">
.colPos .homeImgTest {
    position: absolute !important;
    top: 15%;
    left: 12%;
}

h1 {
    font-size: 40px;
    color: #fff;
    margin-bottom: 30px;

    span {
        margin-right: 20px;
    }

}

h3 {
    color: #fff;

    span {
        margin-right: 10px;
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
.isShow{
    display: none;
}
</style>
