<template>
    <div class="index">
        <div class="content">
            <section class="clearfix">
                <div class="div_recommend clearfix">
                    <p>歌单推荐</p>
                    <ul>
                        <li>
                            <div class="recommend">
                                <router-link to="/song_detail">
                                  <img src="../../static/images/login_bg.jpg" alt=""/>
                                  <p>歌曲名称</p>
                                  <p>播放量：999万</p>
                                </router-link>
                            </div>
                        </li>
                        <li>
                            <div class="recommend">
                                <img src="../../static/images/login_bg.jpg" alt=""/>
                                <p>歌曲名称</p>
                                <p>播放量：999万</p>
                            </div>
                        </li>
                        <li>
                            <div class="recommend">
                                <img src="../../static/images/login_bg.jpg" alt=""/>
                                <p>歌曲名称</p>
                                <p>播放量：999万</p>
                            </div>
                        </li>
                        <li>
                            <div class="recommend">
                                <img src="../../static/images/login_bg.jpg" alt=""/>
                                <p>歌曲名称</p>
                                <p>播放量：999万</p>
                            </div>
                        </li>
                        <li>
                            <div class="recommend">
                                <img src="../../static/images/login_bg.jpg" alt=""/>
                                <p>歌曲名称</p>
                                <p>播放量：999万</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="div_new_song clearfix">
                    <p>最新歌单</p>
                    <ul>
                        <li>
                            <div class="new_song">
                                <img src="../../static/images/login_bg.jpg" alt=""/>
                                <p>歌曲名称</p>
                                <p>播放量：999万</p>
                            </div>
                        </li>
                        <li>
                            <div class="new_song">
                                <img src="../../static/images/login_bg.jpg" alt=""/>
                                <p>歌曲名称</p>
                                <p>播放量：999万</p>
                            </div>
                        </li>
                        <li>
                            <div class="new_song">
                                <img src="../../static/images/login_bg.jpg" alt=""/>
                                <p>歌曲名称</p>
                                <p>播放量：999万</p>
                            </div>
                        </li>
                        <li>
                            <div class="new_song">
                                <img src="../../static/images/login_bg.jpg" alt=""/>
                                <p>歌曲名称</p>
                                <p>播放量：999万</p>
                            </div>

                        </li>
                        <li>
                            <div class="new_song">
                                <img src="../../static/images/login_bg.jpg" alt=""/>
                                <p>歌曲名称</p>
                                <p>播放量：999万</p>
                            </div>

                        </li>
                    </ul>
                </div>

            </section>

        </div>

    </div>
</template>

<script>
    export default {
        name:"Index",
        data : {
            return: {

            }
        }
    }
</script>

<style scoped>
    .index{
        justify-content: center;
        width: 100%;
        display: flex;
        flex: auto;
    }
    .content{
        width: 1480px;
        margin: 0 auto;
        text-align: center;
    }
    header{
        width: 100%;
        height: 100px;
        background: #ffffff;
        text-align: center;
    }

    .index{
        justify-content: center;
        width: 100%;
        display: flex;
        flex: auto;
    }
    .content{
        width: 1480px;
        margin: 0 auto;
        text-align: center;
    }
    header{
        width: 100%;
        height: 100px;
        background: #ffffff;
        text-align: center;
    }


    .category>ul li{
        float: left;
    }


    .category>ul li a{
        line-height: 40px;
        color: #000000;
        font-size: 14px;
        display: inline-block;
        width: 100px;
        text-decoration: none;
    }
    .category>ul li.active a{
        color: #006600;
    }
    section ul li{
        float: left;
    }
    .div_recommend p,.div_new_song p{
        text-align: center;
        font-size: 24px;
        font-weight: 700;
    }
    .div_new_song p{
        padding-top: 40px;
    }
    section ul>li>.recommend,section ul>li>.new_song{
        margin-top: 30px;
        width: 290px;
        height: 250px;
    }
    .recommend img,.new_song img{
        width: 200px;
        height: 200px;
    }
    .recommend p,.div_new_song .new_song p{
        font-size: 14px;
        color: #666666;
        margin-top: 10px;
        font-weight: normal;
        padding-top: 0px;
    }

</style>