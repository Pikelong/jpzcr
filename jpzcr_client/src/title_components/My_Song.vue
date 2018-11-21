<template>
  <div id="my_song">
    <table>
      <thead>
      <tr>
        <th></th>
        <th>歌曲</th>
        <th>作词人</th>
        <th>时长</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>1</td>
        <td @mouseenter="enter()">
          <div class="my_song-info">
            <router-link to="/song_detail">
              <img src="../../static/images/login_bg.jpg" alt=""/>
              该死的温柔
            </router-link>
          </div>
          <div class="my_song-i" :class="{ 'my_song-block':isshow }">
            <router-link to="/song_detail">
              <a class="my_song-setting" href="javascript:void(0)"><i class="el-icon-caret-right"></i></a>
            </router-link>
              <a class="my_song-setting" @click="collection"  href="javascript:void(0)"><i class="el-icon-star-on" :class="{'isCollection':isCollection}"></i></a>
            <el-dropdown>
              <a class="my_song-setting"  href="javascript:void(0)"><i class="el-icon-share "></i></a>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>qq空间</el-dropdown-item>
                <el-dropdown-item>微博</el-dropdown-item>
                <el-dropdown-item @click.native="wx_share">微信</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
              <a @click="dialogVisible = true" class="my_song-setting"  href="javascript:void(0)"><i class="el-icon-download"></i></a>
              <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
                <span>该网站所有信息免费，如果作用于商业，必将追究法律责任！！！</span>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                  </span>
              </el-dialog>
          </div>

        </td>
        <td>王嘉尔</td>
        <td>2:30</td>
      </tr>
      <tr>
        <td>2</td>
        <td @mouseenter="enter()">
          <div class="my_song-info">
            <router-link to="/song_detail">
              <img src="../../static/images/login_bg.jpg" alt=""/>
              该死的温柔
            </router-link>
          </div>

          <div class="my_song-i" :class="{ 'my_song-block':isshow }">
              <a href="javascript:void(0)"><i class="el-icon-caret-right"></i></a>
              <a href="javascript:void(0)"><i class="el-icon-star-on"></i></a>
              <a href="javascript:void(0)"><i class="el-icon-share"></i></a>
              <a href="javascript:void(0)"><i class="el-icon-download"></i></a>
          </div>

        </td>
        <td>王嘉尔</td>
        <td>2:30</td>
      </tr>
      <tr>
        <td>3</td>
        <td @mouseenter="enter()">
          <div class="my_song-info">
            <router-link to="/song_detail">
              <img src="../../static/images/login_bg.jpg" alt=""/>
              该死的温柔
            </router-link>
          </div>

          <div class="my_song-i" :class="{ 'my_song-block':isshow }">
            <a href="javascript:void(0)"><i class="el-icon-caret-right"></i></a>
            <a href="javascript:void(0)"><i class="el-icon-star-on"></i></a>
            <a href="javascript:void(0)"><i class="el-icon-share"></i></a>
            <a href="javascript:void(0)"><i class="el-icon-download"></i></a>
          </div>

        </td>
        <td>王嘉尔</td>
        <td>2:30</td>
      </tr>
      <tr>
        <td>4</td>
        <td @mouseenter="enter()">
          <div class="my_song-info">
            <router-link to="/song_detail">
              <img src="../../static/images/login_bg.jpg" alt=""/>
              该死的温柔
            </router-link>
          </div>

          <div class="my_song-i" :class="{ 'my_song-block':isshow }">
            <a href="javascript:void(0)"><i class="el-icon-caret-right"></i></a>
            <a href="javascript:void(0)"><i class="el-icon-star-on"></i></a>
            <a href="javascript:void(0)"><i class="el-icon-share"></i></a>
            <a href="javascript:void(0)"><i class="el-icon-download"></i></a>
          </div>

        </td>
        <td>王嘉尔</td>
        <td>2:30</td>
      </tr>
      <tr>
        <td>5</td>
        <td @mouseenter="enter()">
          <div class="my_song-info">
            <router-link to="/song_detail">
              <img src="../../static/images/login_bg.jpg" alt=""/>
              该死的温柔
            </router-link>
          </div>

          <div class="my_song-i" :class="{ 'my_song-block':isshow }">
            <a href="javascript:void(0)"><i class="el-icon-caret-right"></i></a>
            <a href="javascript:void(0)"><i class="el-icon-star-on"></i></a>
            <a href="javascript:void(0)"><i class="el-icon-share"></i></a>
            <a href="javascript:void(0)"><i class="el-icon-download"></i></a>
          </div>

        </td>
        <td>王嘉尔</td>
        <td>2:30</td>
      </tr>
      <tr>
        <td>6</td>
        <td @mouseenter="enter()">
          <div class="my_song-info">
            <router-link to="/song_detail">
              <img src="../../static/images/login_bg.jpg" alt=""/>
              该死的温柔
            </router-link>
          </div>

          <div class="my_song-i" :class="{ 'my_song-block':isshow }">
            <a href="javascript:void(0)"><i class="el-icon-caret-right"></i></a>
            <a href="javascript:void(0)"><i class="el-icon-star-on"></i></a>
            <a href="javascript:void(0)"><i class="el-icon-share"></i></a>
            <a href="javascript:void(0)"><i class="el-icon-download"></i></a>
          </div>

        </td>
        <td>王嘉尔</td>
        <td>2:30</td>
      </tr>
      <tr>
        <td>7</td>
        <td @mouseenter="enter()">
          <div class="my_song-info">
            <router-link to="/song_detail">
              <img src="../../static/images/login_bg.jpg" alt=""/>
              该死的温柔
            </router-link>
          </div>

          <div class="my_song-i" :class="{ 'my_song-block':isshow }">
            <a href="javascript:void(0)"><i class="el-icon-caret-right"></i></a>
            <a href="javascript:void(0)"><i class="el-icon-star-on"></i></a>
            <a href="javascript:void(0)"><i class="el-icon-share"></i></a>
            <a href="javascript:void(0)"><i class="el-icon-download"></i></a>
          </div>

        </td>
        <td>王嘉尔</td>
        <td>2:30</td>
      </tr>
      <tr>
        <td>8</td>
        <td @mouseenter="enter()">
          <div class="my_song-info">
            <router-link to="/song_detail">
              <img src="../../static/images/login_bg.jpg" alt=""/>
              该死的温柔
            </router-link>
          </div>

          <div class="my_song-i" :class="{ 'my_song-block':isshow }">
            <a href="javascript:void(0)"><i class="el-icon-caret-right"></i></a>
            <a href="javascript:void(0)"><i class="el-icon-star-on"></i></a>
            <a href="javascript:void(0)"><i class="el-icon-share"></i></a>
            <a href="javascript:void(0)"><i class="el-icon-download"></i></a>
          </div>

        </td>
        <td>王嘉尔</td>
        <td>2:30</td>
      </tr>
      <tr>
        <td>9</td>
        <td @mouseenter="enter()">
          <div class="my_song-info">
            <router-link to="/song_detail">
              <img src="../../static/images/login_bg.jpg" alt=""/>
              该死的温柔
            </router-link>
          </div>

          <div class="my_song-i" :class="{ 'my_song-block':isshow }">
            <a href="javascript:void(0)"><i class="el-icon-caret-right"></i></a>
            <a href="javascript:void(0)"><i class="el-icon-star-on"></i></a>
            <a href="javascript:void(0)"><i class="el-icon-share"></i></a>
            <a href="javascript:void(0)"><i class="el-icon-download"></i></a>
          </div>

        </td>
        <td>王嘉尔</td>
        <td>2:30</td>
      </tr>
      <tr>
        <td>10</td>
        <td @mouseenter="enter()">
          <div class="my_song-info">
            <router-link to="/song_detail">
              <img src="../../static/images/login_bg.jpg" alt=""/>
              该死的温柔
            </router-link>
          </div>

          <div class="my_song-i" :class="{ 'my_song-block':isshow }">
            <a href="javascript:void(0)"><i class="el-icon-caret-right"></i></a>
            <a href="javascript:void(0)"><i class="el-icon-star-on"></i></a>
            <a href="javascript:void(0)"><i class="el-icon-share"></i></a>
            <a href="javascript:void(0)"><i class="el-icon-download"></i></a>
          </div>

        </td>
        <td>王嘉尔</td>
        <td>2:30</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>

  var wx = require('weixin-js-sdk'); //引入sdk

  export default {
    name:"my_song",
    data:function(){
      return {
        isshow:false,
        dialogVisible: false,
        isCollection:false
      }
    },
    methods: {
      enter: function () {
        this.isshow = true
      },
      collection: function (event) {
        this.isCollection=!this.isCollection
      },
      wx_share:function(){
        wx.config({
          debug:true,  //开启debug
          appId: '', //微信appid
          timestamp: '',  //时间戳
          nonceStr: '',
          signature: '', //签名
          jsApiList: ['onMenuShareAppMessage','onMenuShareTimeline','showOptionMenu','showAllNonBaseMenuItem'] //使用的api
        });
        wx.showOptionMenu();
        wx.ready(function () {
          wx.showAllNonBaseMenuItem();
          wx.onMenuShareTimeline({
            title: '', // 分享标题
            link: '', // 分享链接
            desc: '', // 分享描述
            imgUrl: '', // 分享图标
            success: function () {
              alert('分享成功啦！');
            },
            cancel: function(){
              alert('分享失败');
            }
          });
        });
        wx.onMenuShareAppMessage({
          title: '', // 分享标题
          link: '', // 分享链接
          desc: '', // 分享描述
          imgUrl: '', // 分享图标
          type: '', // 分享类型,music、video或link，不填默认为link
          dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
          success: function () {
            alert('分享成功啦');
          },
          cancel: function () {
            alert('分享失败');
          }
        });

      }
    }
  }
</script>

<style scoped>
  table{
    margin-top: 20px;
    width: 100%;
  }
  thead tr th{
    width: 20%;
    color: #666666;
    font-size: 14px;
  }
  thead tr:nth-child(2) th{
    width: 40%;
  }
  tbody tr td:not(:first-child){
    padding-top: 20px;
    width: 25%;
    color: #000;
    font-size: 14px;
  }
  tbody tr td:first-child{
    display: inline-block;
    width: 40px;
    height: 40px;
    background: #006600;
    border-radius: 20px;
    color: #FFFFFF;
    margin-top: 40px;
    line-height: 40px;
  }
  tbody tr td img{
    width: 80px;
    height:80px;
  }
  .my_song-info,.my_song-i{
    float: left;
  }
  #my_song > table > tbody > tr > td:nth-child(2):hover .my_song-block{
    display: inline-block;
  }
  .my_song-i{
    margin-left: 10px;
    display: none;
  }
  .my_song-i .my_song-setting{
    margin-top: 20px;
    display: inline-block;
    width: 25px;
    height: 25px;
    border-radius: 13px;
    line-height: 25px;
    border: 1px solid #666666;
  }

  .share_song li{
    padding-top: 10px;
  }
  .share_song li>a{
    color: #FFFFFF;
    font-size: 14px;
  }

  @keyframes scaleDraw {  /*定义关键帧、scaleDrew是需要绑定到选择器的关键帧名称*/
    0%{
      transform: scale(1);  /*开始为原始大小*/
    }
    25%{
      transform: scale(1.5); /*放大1.1倍*/
    }
    50%{
      transform: scale(2);
    }
    75%{
      transform: scale(5);
    }
  }
  .isCollection
  {
    color: red;
    animation:scaleDraw 2s linear;
    -webkit-animation:scaleDraw 2s linear; /* Safari 和 Chrome */

    animation-iteration-count:1;
    -webkit-animation-iteration-count:1; /* Safari 和 Chrome */
  }

</style>
