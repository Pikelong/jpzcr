<template>
    <div class="hello">

        <div class="login">
            <el-form :model="ruleForm2"  ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                <el-form-item label="账号" prop="username">
                    <el-input type="username" v-model="ruleForm2.username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="ruleForm2.password" autocomplete="off"></el-input>
                </el-form-item>
              <el-form-item>
                <div id="user-rule" :class="{'active_login':isShow}">用户名或者密码不正确！</div>
              </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                </el-form-item>
            </el-form>
        </div>

    </div>
</template>

<script>
    export default {
        data:function() {
            return {
                ruleForm2: {
                    username: '',
                    password: '',
                },
              isShow:true
            };
        },
        methods: {
            submitForm:function(formName) {
                if(this.ruleForm2.username=="jpzcr"&&this.ruleForm2.password=="jpzcr654321"){
                  this.$router.push({path: '/main'});
                }else{
                  this.isShow=false
                  return false;
                }
//                this.$refs[formName].validate((valid) => {
//                    if (valid) {
//                        this.$router.push({path: '/main'});
//                    } else {
//                        console.log('error submit!!');
//                        return false;
//                    }
//                });
            },
            resetForm:function(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .hello{
        display: flex;
        flex: 1;
        justify-content: center;
    }
    .login{
        width: 400px;
        margin-top: 10%;
    }
  #user-rule{
    color: red;
  }
  .active_login{
    display: none;
  }
</style>
