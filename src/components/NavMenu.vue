<template>
    <div class="Navmenu">
        <el-menu :default-active="active" mode="horizontal">
            <template v-for="menu in menuList">
                <el-menu-item :index="menu.id" :name="menu.id" :path="menu.path" @click="$emit('topClick',$event)">{{ menu.title }}</el-menu-item>
            </template>
        </el-menu>
    </div>
</template>
<script>
export default {
    name: "NavMenu",
    data() {
        return {
            active: "1"
        }
    },
    props: {
        menuList: Array
    },
    created () {
     
    },
    
}
</script>

<style lang="less">
.el-menu {
    border: none !important;
}

.Navmenu .el-menu-item:not(.is-disabled):hover {
    border-bottom: 2px solid #409EFF !important;
}

.el-menu-item {
    width: 110px !important;
    text-align: center !important;
}
</style>