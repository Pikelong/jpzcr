<template>
    <div id="login">

        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">

            <el-form-item label="用户名" prop="username">
                <el-input v-model.number="ruleForm2.username"></el-input>
            </el-form-item>
            <el-form-item prop="email" label="邮箱" :rules="[
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ]">
                <el-input v-model="dynamicValidateForm.email"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">注册</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        name:"login",
        data:function() {
        var checkUsername = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('用户名'));
            }

        };
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.ruleForm2.checkPass !== '') {
                    this.$refs.ruleForm2.validateField('checkPass');
                }
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm2.pass) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return {
            ruleForm2: {
                pass: '',
                checkPass: '',
                username: ''
                },
            dynamicValidateForm: {
                domains: [{
                    value: ''
                }],
                email: ''
            },
            rules2: {
                pass: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                checkPass: [
                    { validator: validatePass2, trigger: 'blur' }
                ],
                username: [
                    { validator: checkUsername, trigger: 'blur' }
                ]
            }
        };
    },
        medthod:{
            register:function(){
                this.$router.push({path: '/register'});
            }
        }
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