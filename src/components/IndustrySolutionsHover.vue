<template>
<div>
    <el-card :body-style='{"padding":0}' class="CardStyle">
        <el-row :gutter="30">
            <el-col :span="7" v-for="item,index in ISHData" :key="index">{{item}}</el-col>
        </el-row>
    </el-card>
</div>
</template>

<script>
export default {
    name: 'Fire1000IndustrySolutionsHover',

    data() {
        return {
            ISHData: this.$store.state.ISHData.IndustrySolutionsHoverData
        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="less" scoped>
.CardStyle {
    width: 600px;
    height: 200px;
    padding: 15px 0 0 20px;
    .el-row{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: 200px;
        .el-col{
            // width: 140px;
            height: 35px;
            text-align: center;
            line-height: 35px;
        }
        // 滑动改变背景和字体颜色
        .el-col:hover{
            background-color: rgb(109, 187, 255);
            color: aqua;
        }
        
    }
}
</style>
