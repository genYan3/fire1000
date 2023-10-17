<template>
<div id="TopBar">
    <el-row>
        <el-col :span="7">
            <logo v-bind:logo="logo"></logo>
        </el-col>
        <el-col :span="10">
            <NavMenu v-bind:menuList="NavMenuList" @topClick="navMenuClick" :activeValue="this.$store.state.index"></NavMenu>
        </el-col>
        <el-col :span="7">
            <el-autocomplete v-model="AutoInput" placeholder="请输入搜索内容" :fetch-suggestions="querySeach"></el-autocomplete>
        </el-col>
    </el-row>
</div>
</template>

<script>
import NavMenu from './NavMenu.vue';
import Logo from './Logo.vue'
export default {
    name: "TopBar",
    data() {
        return {
            NavMenuList: [{
                    id: "1",
                    title: "首页",
                    path: "/"
                },
                {
                    id: "2",
                    title: "核心产品",
                    path: "/ai"
                },
                {
                    id: "3",
                    title: "行业方案",
                    path: "/"
                },
                {
                    id: "4",
                    title: "成功案例",
                    path: "/"
                },
                {
                    id: "5",
                    title: "关于我们",
                    path: "/"
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
            ]
        }
    },
    props: {
        logo: Object
    },
    components: {
        NavMenu,
        Logo,
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
            if(index === indexValue) return
            this.$store.commit("setIndex",indexValue)
            // console.log("store修改后的值"+this.$store.state.index);
            let ph = even.$el.attributes.path.value
            this.$router.push({path:ph})
        }
    }
}
</script>

<style lang="less">
.el-row {
    display: flex;
    align-items: center;
}

.el-col {
    height: 100% !important;
}
</style>
