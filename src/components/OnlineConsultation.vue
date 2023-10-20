<template>
<div id="Fire1000OnlineConsultation">
    <el-card draggable="true" id="cradDrag">
        <div slot="header" class="headerStyle">
            <span>在线咨询</span>
            <span class="close" @click="onlineConsultationPositionClose">-</span>
        </div>
        <div class="messagBox" id="messageBox"></div>
        <div class="inputBox">
            <el-input v-model="inputMessage" placeholder="请输入要发送的消息" type="text" clearable>
                <el-button slot="append" type="primary" @click="OnlineConsultationClickSend">发送</el-button>
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
            inputMessage: ""
        };
    },

    mounted() {

    },

    methods: {
        OnlineConsultationClickSend() {
            let obj = document.getElementById("messageBox")
            let div = document.createElement("div")
            div.innerHTML = this.inputMessage
            obj.appendChild(div)
            // obj.scrollIntoView()
            obj.scrollTop = obj.scrollHeight
        },
        onlineConsultationPositionClose(){
            document.getElementById("OnlineConsultation").classList.add("isShow")
        }
    },
    mounted () {
        // document.getElementById("cradDrag").addEventListener("drag",(even)=>{
        //     let obj = document.getElementById("OnlineConsultation")
        //     // console.dir(even.offsetX+"ob",even.offsetY+"ob");
        //     even.dataTransfer.dropEffect = "move"
        // })
        // document.getElementById("OnlineConsultation").addEventListener("drag",(even)=>{
        //     console.log(even.screenX,even.screenY);
        // })
    },
};
</script>

<style lang="less" scoped>
.el-card {
    width: 280px;
    height: 330px;
    position: fixed;
    top: 480px;
    left: 40px;

}

.messagBox {
    width: 280px;
    height: 170px;
    margin-bottom: 30px;
    overflow: auto;
    scrollbar-width: 2px;
    overflow-anchor: none;

}
.headerStyle{
    display: flex;
    justify-content:space-between;
    .closeStyle{
        font-size: 30px;
        font-weight: 300;
    }
}
</style>
