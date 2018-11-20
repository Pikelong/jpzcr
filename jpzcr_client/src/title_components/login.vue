<template>
    <div id="login">
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="80px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="pass">
                <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <div>
                <p><span class="password_forget" @click="password_forget"><a href="javascript:void(0)">忘记密码？</a></span><span class="register" @click="register"><a href="javascript:void(0)"  >注册</a></span></p>
            </div>
            <el-form-item>
                <!--@click="submitForm('ruleForm2')"-->
                <el-button type="primary">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        name:"login",
        data:function() {

            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入用户名'));
                } else {
                    if (this.ruleForm2.checkPass !== '') {
                        this.$refs.ruleForm2.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm2: {
                    pass: '',
                    checkPass: '',
                },
                rules2: {
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ],
                }
            };
        },
        methods:{
            register:function(){
                this.$router.push({path: '/register'});
            },
            password_forget:function(){
                this.$router.push({path: '/password_forget'});
            }
        }
    }
</script>

<style scoped>
    #login{
        width: 1680px;
        height: 1000px;
        margin: 0 auto;
        text-align: center;
        background: url("../../static/images/login_bg.jpg") no-repeat;
    }
    .demo-ruleForm{
        width: 350px;
        padding-top: 15%;
        margin-left: 700px;
    }
    .password_forget{
        margin-left: -100px;
    }
    .register{
        float: right;
    }

</style>