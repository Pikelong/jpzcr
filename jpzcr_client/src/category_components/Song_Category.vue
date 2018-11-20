<template>
    <div id="song_category">
        <div class="category">
            <div class="language">
                <p>来源</p>
                <ul>
                    <li><a href="javascript:void(0);">电视剧</a></li>
                    <li><a href="javascript:void(0);">电影</a></li>
                    <li><a href="javascript:void(0);">动画片</a></li>
                </ul>
            </div>
            <div class="mood">
                <p>心情</p>
                <ul class="mood_tags">

                    <li><a href="javascript:void(0);">伤感</a></li>

                    <li><a href="javascript:void(0);" >安静</a></li>

                    <li><a href="javascript:void(0);" >快乐</a></li>

                    <li><a href="javascript:void(0);" >治愈</a></li>

                    <li><a href="javascript:void(0);" >励志</a></li>

                    <li><a href="javascript:void(0);" >甜蜜</a></li>

                    <li><a href="javascript:void(0);" >寂寞</a></li>

                    <li><a href="javascript:void(0);">宣泄</a></li>

                    <li><a href="javascript:void(0);">思念</a></li>

                </ul>
            </div>
        </div>
        <div class="all_song clearfix">
            <p>全部歌单</p>
            <ul>
                <li>
                    <div class="recommend">
                        <marquee>《神雕侠侣》片尾曲--作者：南瓜阿南瓜</marquee>
                        <img src="../../static/images/login_bg.jpg" alt=""/>
                        <p>歌曲名称</p>
                        <p>播放量：999万</p>
                    </div>

                </li>
                <li>
                    <div class="recommend">
                        <marquee>《天空之城》插曲</marquee>
                        <img src="../../static/images/login_bg.jpg" alt=""/>
                        <p>歌曲名称</p>
                        <p>播放量：999万</p>
                    </div>
                </li>
                <li>
                    <div class="recommend">
                        <marquee>《幽灵公主》插曲--作者：南瓜阿南瓜</marquee>
                        <img src="../../static/images/login_bg.jpg" alt=""/>
                        <p>歌曲名称</p>
                        <p>播放量：999万</p>
                    </div>
                </li>
                <li>
                    <div class="recommend">
                        <marquee>《龙猫》插曲--作者：南瓜阿南瓜</marquee>
                        <img src="../../static/images/login_bg.jpg" alt=""/>
                        <p>歌曲名称</p>
                        <p>播放量：999万</p>
                    </div>
                </li>
                <li>
                    <div class="recommend">
                        <marquee>《哈尔的移动城堡》插曲--作者：南瓜阿南瓜</marquee>
                        <img src="../../static/images/login_bg.jpg" alt=""/>
                        <p>歌曲名称</p>
                        <p>播放量：999万</p>
                    </div>
                </li>
                <li>
                    <div class="recommend">
                        <marquee>《夏日友人帐》插曲--作者：南瓜阿南瓜</marquee>
                        <img src="../../static/images/login_bg.jpg" alt=""/>
                        <p>歌曲名称</p>
                        <p>播放量：999万</p>
                    </div>
                </li>
                <li>
                    <div class="recommend">
                        <marquee>《假如爱自有天意》插曲--作者：南瓜阿南瓜</marquee>
                        <img src="../../static/images/login_bg.jpg" alt=""/>
                        <p>歌曲名称</p>
                        <p>播放量：999万</p>
                    </div>
                </li>
                <li>
                    <div class="recommend">
                        <marquee>《千与千寻》插曲--作者：南瓜阿南瓜</marquee>
                        <img src="../../static/images/login_bg.jpg" alt=""/>
                        <p>歌曲名称</p>
                        <p>播放量：999万</p>
                    </div>
                </li>
                <li>
                    <div class="recommend">
                        <marquee>《种下星星的日子》插曲--作者：南瓜阿南瓜</marquee>
                        <img src="../../static/images/login_bg.jpg" alt=""/>
                        <p>歌曲名称</p>
                        <p>播放量：999万</p>
                    </div>
                </li>
            </ul>

        </div>
        <div class="page clearfix">
            <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000">
            </el-pagination>
        </div>
    </div>
</template>
<script>
    export default {
        name:"song_category"
    }
</script>

<style scoped>
@import url("//unpkg.com/element-ui@2.4.9/lib/theme-chalk/index.css");
p{
    margin-left: 15px;
    text-align: left;
    font-size: 14px;
    color: #666666;
}
.category{
    width: 100%;
}
.category .language{
    float: left;
   width: 40%;
}
.category .mood{
    float: left;
    width: 60%;
}
 ul li{
    margin-top: 10px;
    float: left;
}
ul li a{
    padding: 15px;
    color: #000000;
    font-size: 14px;
}
.all_song{
   padding-top: 30px;
}
.all_song p{
    font-size: 20px;
    color: #000000;
}
.all_song ul>li>.recommend{
    margin-top: 30px;
    width: 220px;
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
    margin-left: 50px;
}
.page{
   padding-top: 50px;
}
</style>