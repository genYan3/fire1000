<template>
<div id="TopBar">
    <el-row>
        <el-col :span="7">
            <logo v-bind:logo="logo"></logo>
        </el-col>
        <el-col :span="10" class="TopbarCol">
            <NavMenu v-bind:menuList="NavMenuList" @topClick="navMenuClick" :activeValue="this.$store.state.index"></NavMenu>
        </el-col>
        <el-col :span="7">
            <el-autocomplete v-model="AutoInput" placeholder="请输入搜索内容" :fetch-suggestions="querySeach"></el-autocomplete>
        </el-col>
    </el-row>
    <div class="isActive" id="isActive">
        <CoreProducts></CoreProducts>
    </div>
</div>
</template>

<script>
import NavMenu from './NavMenu.vue';
import Logo from './Logo.vue'
import CoreProducts from '@/components/CoreProducts'
export default {
    name: "TopBar",
    data() {
        return {
            NavMenuList: [{
                    id: "sy",
                    index: "1",
                    title: "首页",
                    path: "/",

                },
                {
                    id: "hxcp",
                    index: "2",
                    title: "核心产品",
                    path: "/ai"
                },
                {
                    id: "xdfa",
                    index: "3",
                    title: "行业方案",
                    path: "/successcases"
                },
                {
                    id: "cgal",
                    index: "4",
                    title: "成功案例",
                    path: "/industrysolutions"
                },
                {
                    id: "gywm",
                    index: "5",
                    title: "关于我们",
                    path: "/aboutus"
                }
            ],
            AutoInput: "",
            restaurants: [{
                    "value": "三全鲜食（北新泾店）",
                    "address": "长宁区新渔路144号"
                },
                {
                    "value": "Hot honey 首尔炸鸡（仙霞路）",
                    "address": "上海市长宁区淞虹路661号"
                },
                {
                    "value": "新旺角茶餐厅",
                    "address": "上海市普陀区真北路988号创邑金沙谷6号楼113"
                },
                {
                    "value": "泷千家(天山西路店)",
                    "address": "天山西路438号"
                },
            ],
            isRemove: this.$store.state.isRemove
        }
    },
    props: {
        logo: Object
    },
    components: {
        NavMenu,
        Logo,
        CoreProducts
    },
    methods: {
        querySeach(string, cb) {
            let restaurants = this.restaurants
            let results = string ? restaurants.filter(this.createFilter(string)) : restaurants
            return cb(results)
        },
        createFilter(queryString) {
            return (restaurants = this.restaurants) => {
                return (restaurants.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
            }
        },
        navMenuClick(even) {
            let indexValue = even.$el.attributes.name.value
            let index = this.$store.state.index
            // console.log("原本value"+indexValue,"store的值"+index);
            if (index === indexValue) return
            this.$store.commit("setIndex", indexValue)
            // console.log("store修改后的值"+this.$store.state.index);
            let ph = even.$el.attributes.path.value
            this.$router.push({
                path: ph
            })
        },
        addCls(eleCore) {
            eleCore.classList.remove("isActive")
            this.$store.commit("setIsRemover", false)
        },
        removeCls(eleCore) {
            if (this.isRemove) {
                eleCore.classList.add("isActive")
                this.$store.commit("setIsRemover", true)
            } else return
        }
    },
    mounted() {
        let ele = document.getElementById("hxcp")
        let eleCore = document.getElementById("isActive")
        ele.addEventListener("mouseenter", () => {
            this.addCls(eleCore)
        })
        ele.addEventListener("mouseleave", () => {
            setInterval(this.removeCls(eleCore), 1000)
        })
        eleCore.addEventListener("mouseenter", () => {
            this.addCls(eleCore)
        })
        eleCore.addEventListener("mouseleave", () => {
            this.removeCls(eleCore)
        })

    },
}
</script>

<style lang="less" scoped>
.el-row {
    display: flex;
    align-items: center;
}

.el-col {
    height: 100% !important;
}

#TopBar {
    width: 100%;
    position: fixed;
    z-index: 999;
    top: 0;
    background-color: rgb(255, 255, 255);
}

.isActive {
    display: none;
    opacity: 0;
    transition: opactiy 1.5s;
}
.el-menu-item:active{
    
}
</style>
