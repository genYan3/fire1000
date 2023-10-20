<!-- eslint-disable vue/valid-v-for -->
<template>
<div class="Navmenu">
    <el-menu :default-active="active" mode="horizontal">
        <template v-for="menu in menuList">
            <el-menu-item :index="menu.index" :name="menu.index" :path="menu.path" @click="parentClick($event)" :id="menu.id">{{ menu.title }}</el-menu-item>
        </template>
    </el-menu>
</div>
</template>

<script>
export default {
    name: "NavMenu",
    data() {
        return {
            active: this.activeValue
        };
    },
    props: {
        menuList: Array,
        activeValue: String
    },
    created() {},
    mounted() {
    },
    methods: {
        parentClick(event) {
            // console.log(event);
            if(event.index != "2" && event.index != "3") this.$emit('topClick', event)
            
        }
    },
};
</script>

<style lang="less" scoped>
.el-menu {
    border: none !important;
}

.Navmenu .el-menu-item:not(.is-disabled):hover {
    border-bottom: 2px solid #409eff !important;
}

.el-menu-item {
    width: 110px !important;
    text-align: center !important;
}
</style>
