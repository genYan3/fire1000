<template>
    <div id="applicationtest">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="姓名">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="联系电话">
                <el-input v-model="form.phone"></el-input>
            </el-form-item>
            <el-form-item label="公司名称">
                <el-input v-model="form.corporate"></el-input>
            </el-form-item>
            <el-form-item label="职位">
                <el-select v-model="form.duties" placeholder="请选择职务">
                <el-option label="项目" value="shanghai"></el-option>
                <el-option label="技术" value="beijing"></el-option>
                <el-option label="产品" value="beijing"></el-option>
                <el-option label="采购" value="beijing"></el-option>
                <el-option label="高管" value="beijing"></el-option>
                <el-option label="其他" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="项目启动时间">
                <el-select v-model="form.date" placeholder="请选择项目启动时间">
                <el-option label="三个月内" value="shanghai"></el-option>
                <el-option label="六个月内" value="beijing"></el-option>
                <el-option label="一年内" value="beijing"></el-option>
                <el-option label="待定" value="beijing"></el-option>
                <el-option label="暂无，了解一下" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="需求描述">
                <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-checkbox-group v-model="ruleForm.type">
                    <el-checkbox label="我也同意并阅读《隐私政策申明》" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default{
        name: "Applicationtest",
        data(){
            return{
                form:{
                    
                }
            }
        }
    }
</script>
<style scoped lang="less">

</style>