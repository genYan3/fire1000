<template>
<div id="HomeView">
    <el-container>
        <el-header>
            <TopBar v-bind:logo="logo"></TopBar>
        </el-header>
        <el-main>
            <Keep-Alive>
                <router-view :key="$route.fullPath"></router-view>
            </Keep-Alive>
        </el-main>
        <el-footer>
            <BottomBar></BottomBar>
        </el-footer>
    </el-container>
</div>
</template>

<script>
import TopBar from '@/components/TopBar'
import BottomBar from '@/components/BottomBar'
export default {
    name: "HomeView",
    data() {
        return {
            logo: {
                first: "http://pro2defe77b.pic14.ysjianzhan.cn/upload/8z7q.png",
                second: "http://pro2defe77b.pic14.ysjianzhan.cn/upload/s8n9.png"
            }
        }
    },
    components: {
        TopBar,
        BottomBar
    },
    mounted() {

    }
}
</script>

<style lang="less">

</style>
