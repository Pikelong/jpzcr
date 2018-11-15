<template>
    <div class="index">
        <div class="content">
            <header class="clearfix">
                <div class="category">
                    <ul>
                        <li class="active"><router-link to="/home/main">首页</router-link></li>
                        <li><router-link to="/home/ranking_list">排行榜</router-link></li>
                        <li><router-link to="/home/songer">作曲人</router-link></li>
                        <li><router-link to="/home/song_category">曲目种类</router-link></li>
                    </ul>
                </div>
            </header>
            <router-view></router-view>

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

    .category{
        width: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
    }
    .category>ul li{
        float: left;
    }

    .category{
        height: 40px;
    }
    .category>ul li a{
        line-height: 40px;
        color: #000000;
        font-size: 14px;
        display: inline-block;
        width: 100px;
        text-decoration: none;
    }
    .category>ul li a.active{
        color: #006600;
    }



</style>
