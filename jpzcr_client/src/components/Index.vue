<template>



    <div class="index">
        <div class="content">
          <el-row>
            <el-col :span="24">
                <header class="clearfix">
                  <div class="header">
                    <ul class="logo">
                      <li><router-link to="/home"><img src="../../static/images/favicon.png" alt=""/></router-link></li>
                    </ul>
                    <ul class="song_title">
                      <li class="active"><router-link to="/home">音乐馆</router-link></li>
                      <li><router-link to="/my_song">我的音乐</router-link></li>
                      <li><router-link to="/client">客户端</router-link></li>
                      <li><router-link to="/my_upload">我的上传</router-link></li>
                    </ul>
                    <ul class="login">
                      <li>
                        <div class="div_search">
                          <input type="text" placeholder="关键词搜索"/>
                          <button type="button"  @click="goToSearch"></button>
                        </div>

                      </li>
                      <li><router-link to="/login">登录</router-link></li>
                    </ul>
                  </div>
                </header>
            </el-col>
          </el-row>
            <section>
                <router-view></router-view>
            </section>
            <footer>
                <p>该网站由金牌作词人提供</p>
            </footer>
        </div>

    </div>
</template>

<script>
    export default {
        name:"Index",
        data : function(){
//            return {
//                msg:"sass",
//            }
        },
        methods: {
            goToSearch: function () {
                this.$router.push({path: '/search'});
            }
        }
    }
</script>

<style scoped>
  @import url("//unpkg.com/element-ui@2.4.9/lib/theme-chalk/index.css");
  .index{
        justify-content: center;
        width: 100%;
        display: flex;
        flex: auto;
    }
    .content{
        width: 1148px;
        margin: 0 auto;
        text-align: center;

    }
  /*@media (max-width: 1080px ) {*/
    /*.content{*/
      /*width: 1024px;*/
      /*margin: 0 auto;*/
      /*text-align: center;*/

    /*}*/
  /*}*/
  /*@media (max-width: 768px ) {*/
    /*.content{*/
      /*width: 768px;*/
      /*margin: 0 auto;*/
      /*text-align: center;*/

    /*}*/
  /*}*/
    .header{
        height: 60px;
        border-bottom: 1px solid #d6d6d6;
    }

    .song_title{
        margin-left: 100px;
    }
    .logo{
        float: left;
    }
    .login{
        float: right;
    }
    .header>ul li{
        float: left;
    }
    .header>ul li a{
        line-height: 60px;
        font-size: 22px;
        color:#000;
        display: inline-block;
        width: 120px;
        text-decoration: none;
    }
    .header .song_title li a.active{
        background: #006600;
        color: #ffffff;
    }
    .div_search{
        position: relative;
        margin-top: 12px;
        border: 2px solid #d6d6d6;
        width: 210px;
        height: 36px;
    }
    .div_search>input{
        border: none;
        width: 180px;
        height: 36px;
        padding-left: 5px;
        margin-right: 45px;
    }
    .div_search>button{
        position: absolute;
        top: 10px;
        right: 5px;
        float: left;
        text-align: right;
        background: url("../../static/images/search.png");
        width: 16px;
        height: 16px;
    }
    .div_search>button:hover{
        background: url("../../static/images/search_green.png");
    }
    .logo img{
      width: 100px;
      height: 50px;
    }
    footer{
      width: 100%;
      height: 300px;
    }
    footer p{
        line-height: 300px;
    }
</style>
