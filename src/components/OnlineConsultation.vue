<template>
<div id="Fire1000OnlineConsultation">
    <el-card header="在线咨询">
        <div class="messagBox"></div>
        <div class="inputBox">
            <el-input v-model="inputMessage" placeholder="请输入要发送的消息" type="textarea"  clearable autosize="{minRows:2,maxRows:4}">
                <el-button slot="append" type="primary">发送</el-button>
            </el-input>
        </div>
    </el-card>

</div>
</template>

<script>
export default {
    name: 'Fire1000OnlineConsultation',

    data() {
        return {
            inputMessage:""
        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="less" scoped>
.messageBox{
    width: 320px;
    height: 170px;
    overflow: scroll;
}
.Fire1000OnlineConsultation{
    position:fixed;
    left: 40px;
    bottom: 70px;
}
</style>