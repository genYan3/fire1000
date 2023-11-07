<template>
<div id="CoreProducts">
    <el-card :body-style='{"padding":0}' style="background-color:#e6e6e6;box-shadow: inset 0 10px 7px #adadad">
        <el-row :gutter="30" type="flex" justify="center">
            <el-col :span="4" v-for=" item,index in CardData" :key="index">
                <p style="font-size:20px;margin-bottom:30px;margin-top:30px;">{{item.title}}</p>
                <template v-for="ele,index in item.data">
                    <a class="cardele" >
                        <el-image style="width: 50px; height:50px;margin-right:5px;margin-left:5px" :src="ele.icon"></el-image>
                        <div>
                            <p>{{ele.title}}</p>
                            <p>{{ele.describe}}</p>
                        </div>
                    </a>
                </template>
            </el-col>
        </el-row>
    </el-card>
</div>
</template>

<script>
export default {
    name: 'CoreProducts',

    data() {
        return {
            CardData: this.$store.state.CoreData.data
        };
    },

    mounted() {
    },

    methods: {

    },
};
</script>

<style lang="less" scoped>
.cardele {
    width: 90%;
    height: 70px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    background-color: transparent;
    .el-image {
        float: left;
    }

    p {
        margin-top: 5px;
    }

    p:nth-child(1) {
        font-size: 15px;
    }

    p:nth-last-child(1) {
        font-size: 13px;
    }
}

.cardele:hover {
    background-color:#ffffff;
}
</style>
