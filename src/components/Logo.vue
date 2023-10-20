<template>
    <div class="logo">
        <el-image :src="logo.first"></el-image>
        <el-image :src="logo.second"></el-image>
    </div>
</template>

<script>
    export default {
        name:"LogoBar",
        data() {
            return {
            }
        },
        props: {
            logo:Object
        },
    }
</script>

<style lang="less" scoped>
.logo {
    margin-left: 70px;
}

.logo .el-image {
    width: auto;
    height: 37px;
}
</style>