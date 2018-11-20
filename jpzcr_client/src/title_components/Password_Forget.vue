<template>
    <div id="login">

        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">

            <el-form-item prop="email" label="邮箱" :rules="[
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ]">
                <el-input v-model="dynamicValidateForm.email"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        name:"login",
        data:function() {
            return {
                dynamicValidateForm: {
                    domains: [{
                        value: ''
                    }],
                    email: ''
                },
            };
        },

    }
</script>

<style scoped>
    #login{
        width: 100%;
        display: flex;
        flex: 1;
        height: 2000px;
        margin: 0 auto;
        justify-content: center;
        background: url("../../static/images/login_bg.jpg") no-repeat;
    }
    .demo-ruleForm{
        width: 350px;
        padding-top: 15%;
    }


</style>