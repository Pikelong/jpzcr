<template>
    <div id="song_detail">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="grid-content bg-purple">
              <el-row>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark">
                    <el-row>
                      <el-col :span="12">
                        <div class="grid-content bg-purple songInfo-detail-img">
                          <img src="../../static/images/login_bg.jpg" alt=""/>
                          <div class="songInfo-detail-content">
                            <p>该死的温柔</p>
                            <p><span>王嘉尔</span></p>
                            <p>这是一首好听的歌曲</p>
                            <p class="good_info">
                              <img src="../../static/images/good.png" alt=""/>
                              <img src="../../static/images/ungood.png" alt=""/>
                              <img src="../../static/images/collection.png" alt=""/>
                            </p>
                          </div>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                </el-col>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark">
                    <el-row>
                      <el-col :span="24">
                        <div class="grid-content bg-purple songInfo-Detail-audio">
                          <audio src="../../static/music/audio_test.mp3" controls="controls">
                            Your browser does not support the audio element.
                          </audio>
                          <div class="songInfo-Detail-content">
                            百度翻译是百度发布的在线翻译服务，依托互联网数据资源和自然语言处理技术优势，致力于帮助用户跨越语言鸿沟，方便快捷地获取信息和服务。百度翻译支持全球28种热门语言互译，包括中文（简体）、英语、日语、韩语、西班牙语、泰语、法语、...
                            百度翻译是百度发布的在线翻译服务，依托互联网数据资源和自然语言处理技术优势，致力于帮助用户跨越语言鸿沟，方便快捷地获取信息和服务。百度翻译支持全球28种热门语言互译，包括中文（简体）、英语、日语、韩语、西班牙语、泰语、法语、...
                            百度翻译是百度发布的在线翻译服务，依托互联网数据资源和自然语言处理技术优势，致力于帮助用户跨越语言鸿沟，方便快捷地获取信息和服务。百度翻译支持全球28种热门语言互译，包括中文（简体）、英语、日语、韩语、西班牙语、泰语、法语、...
                            百度翻译是百度发布的在线翻译服务，依托互联网数据资源和自然语言处理技术优势，致力于帮助用户跨越语言鸿沟，方便快捷地获取信息和服务。百度翻译支持全球28种热门语言互译，包括中文（简体）、英语、日语、韩语、西班牙语、泰语、法语、...
                          </div>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                </el-col>
              </el-row>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple songInfo-Detail-word">
              <button type="button" @click="dialogFormVisible_make_somg = true">为这首曲配上一篇好听的歌词</button>
            <el-dialog title="作词" :visible.sync="dialogFormVisible_make_somg" >
              <el-form :model="form" >
                <el-form-item label="作词内容" :label-width="formLabelWidth" class="dialog-body">
                  <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>

              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible_make_somg = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible_make_somg = false">确 定</el-button>
              </div>
            </el-dialog>
            <table>
              <thead>
              <tr>
                <th></th>
                <th>歌词名称</th>
                <th>作者</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>1</td>
                <td>
                 <p>该死的温柔</p>
                </td>
                <td>王嘉尔</td>
                <td>
                  <a class="good" href="javascript:void(0)"> <img src="../../static/images/good.png" alt=""/></a>
                  <a class="ungood" href="javascript:void(0)">  <img src="../../static/images/ungood.png" alt=""/></a>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <p>该死的温柔</p>
                </td>
                <td>王嘉尔</td>
                <td>
                  <a class="good" href="javascript:void(0)"> <img src="../../static/images/good.png" alt=""/></a>
                  <a class="ungood" href="javascript:void(0)">  <img src="../../static/images/ungood.png" alt=""/></a>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <p>该死的温柔</p>
                </td>
                <td>王嘉尔</td>
                <td>
                  <a class="good" href="javascript:void(0)"> <img src="../../static/images/good.png" alt=""/></a>
                  <a class="ungood" href="javascript:void(0)">  <img src="../../static/images/ungood.png" alt=""/></a>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  <p>该死的温柔</p>
                </td>
                <td>王嘉尔</td>
                <td>
                  <a class="good" href="javascript:void(0)"> <img src="../../static/images/good.png" alt=""/></a>
                  <a class="ungood" href="javascript:void(0)">  <img src="../../static/images/ungood.png" alt=""/></a>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </el-col>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark comment-info">
            <p>评论信息<span><a href="javascript:void(0)"  @click="dialogFormVisible = true">添加评论</a></span></p>
            <el-dialog title="添加评论" :visible.sync="dialogFormVisible" >
              <el-form :model="form" >
                <el-form-item label="评论信息" :label-width="formLabelWidth" class="dialog-body">
                  <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>

              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
              </div>
            </el-dialog>
            <ul>
              <li>
                <div class="comment-info-content">
                  <img src="../../static/images/login_bg.jpg" alt=""/>
                  <div class="comment-info-content-name">
                    <p><span>王嘉尔</span><i>2018-11-19:20:08:15</i> </p>
                    <p><span>点赞数量：215</span><i><img src="../../static/images/good.png" alt=""/></i></p>
                  </div>
                  <p>百度翻译是百度发布的在线翻译服务，依托互联网数据资源和自然语言处理技术优势，致力于帮助用户跨越语言鸿沟，方便快捷地获取信息和服务。百度翻译支持全球28种热门语言互译，包括中文（简体）、英语、日语、韩语、西班牙语、泰语、法语、...</p>
                </div>
              </li>
              <li>
                <div class="comment-info-content">
                  <img src="../../static/images/login_bg.jpg" alt=""/>
                  <div class="comment-info-content-name">
                    <p><span>王嘉尔</span><i>2018-11-19:20:08:15</i> </p>
                    <p><span>点赞数量：215</span><i><img src="../../static/images/good.png" alt=""/></i></p>
                  </div>
                  <p>百度翻译是百度发布的在线翻译服务，依托互联网数据资源和自然语言处理技术优势，致力于帮助用户跨越语言鸿沟，方便快捷地获取信息和服务。百度翻译支持全球28种热门语言互译，包括中文（简体）、英语、日语、韩语、西班牙语、泰语、法语、...</p>
                </div>
              </li>
              <li>
                <div class="comment-info-content">
                  <img src="../../static/images/login_bg.jpg" alt=""/>
                  <div class="comment-info-content-name">
                    <p><span>王嘉尔</span><i>2018-11-19:20:08:15</i> </p>
                    <p><span>点赞数量：215</span><i><img src="../../static/images/good.png" alt=""/></i></p>
                  </div>
                  <p>百度翻译是百度发布的在线翻译服务，依托互联网数据资源和自然语言处理技术优势，致力于帮助用户跨越语言鸿沟，方便快捷地获取信息和服务。百度翻译支持全球28种热门语言互译，包括中文（简体）、英语、日语、韩语、西班牙语、泰语、法语、...</p>
                </div>
              </li>
              <li>
                <div class="comment-info-content">
                  <img src="../../static/images/login_bg.jpg" alt=""/>
                  <div class="comment-info-content-name">
                    <p><span>王嘉尔</span><i>2018-11-19:20:08:15</i> </p>
                    <p><span>点赞数量：215</span><i><img src="../../static/images/good.png" alt=""/></i></p>
                  </div>
                  <p>百度翻译是百度发布的在线翻译服务，依托互联网数据资源和自然语言处理技术优势，致力于帮助用户跨越语言鸿沟，方便快捷地获取信息和服务。百度翻译支持全球28种热门语言互译，包括中文（简体）、英语、日语、韩语、西班牙语、泰语、法语、...</p>
                </div>
              </li>
              <li>
                <div class="comment-info-content">
                  <img src="../../static/images/login_bg.jpg" alt=""/>
                  <div class="comment-info-content-name">
                    <p><span>王嘉尔</span><i>2018-11-19:20:08:15</i> </p>
                    <p><span>点赞数量：215</span><i><img src="../../static/images/good.png" alt=""/></i></p>
                  </div>
                  <p>百度翻译是百度发布的在线翻译服务，依托互联网数据资源和自然语言处理技术优势，致力于帮助用户跨越语言鸿沟，方便快捷地获取信息和服务。百度翻译支持全球28种热门语言互译，包括中文（简体）、英语、日语、韩语、西班牙语、泰语、法语、...</p>
                </div>
              </li>
            </ul>

          </div>
        </el-col>
      </el-row>


    </div>
</template>
<script>
    export default {
        name:"song_detail",
        data:function() {
          return {
            dialogFormVisible: false,
            dialogFormVisible_make_somg: false,
            formLabelWidth: '120px',
            form: {
              name: '',
              region: '',
              date1: '',
              date2: '',
              delivery: false,
              type: [],
              resource: '',
              desc: ''
            },
          };
      },
        methods: {

      }
    }
</script>

<style scoped>
  @import url("//unpkg.com/element-ui@2.4.10/lib/theme-chalk/index.css");
  #song_detail{
    margin-top: 20px;
  }
  .songInfo-detail-img img{
    width: 100px;
    height: 100px;
    float: left;
  }
  .songInfo-Detail-audio{
    width: 100%;
    height: 20px;
  }
  .songInfo-Detail-audio audio{
    width: 100%;
    margin-top: 20px;
  }
  .songInfo-detail-img{
    text-align: center;
    justify-content: center;
  }
  .songInfo-detail-content{
    /*float: left;*/
  }
  .songInfo-detail-content p{
    font-size: 14px;
    color: #666666;
    margin-top: 5px;
    margin-left: 5px;
    text-align: left;
  }
  table{

    width: 100%;
  }
  thead tr th{
    width: 25%;
    color: #666666;
    font-size: 14px;
  }
  tbody tr td:not(:first-child){
    padding-top: 20px;
    width: 25%;
    color: #000;
    font-size: 14px;
  }
  tbody tr td:first-child{
    display: inline-block;
    width: 30px;
    height: 30px;
    background: #006600;
    border-radius: 15px;
    color: #FFFFFF;
    margin-top: 30px;
    line-height: 30px;
  }
  .comment-info{
    margin-top: 20px;
    padding-top: 20px;
    text-align: left;
    width: 100%;
    border-top: 2px solid #666666;
  }
  .comment-info img{
    width: 50px;
    height: 50px;
    border-radius: 25px;
  }

  .comment-info p{
    padding-top: 20px;
  }
  .comment-info ul li{
    padding-top: 20px;
  }
  .songInfo-Detail-word button{
    float: right;
    padding: 5px;
    margin-bottom: 10px;
  }
  .comment-info>p{
    font-size: 20px;
    font-weight: 400;
  }
  .comment-info>p>span{
    float: right;
  }
  .comment-info-content img{
    float: left;
    margin-top: 20px;
    margin-right: 10px;
  }
  .comment-info-content-name>p>i{
    float: right;
  }
  .comment-info-content-name p{
    padding-bottom: 5px;
  }
 .comment-info-content-name img{
   width: 16px;
   height: 16px;
 }
 .comment-info-content>p{
   clear: both;
 }
  .comment-info>p>span>a{
    font-size: 16px;
    color: #006600;
  }
  #song_detail > div > div:nth-child(2) > div > div > div > div.el-dialog__body > form > div > div > div > textarea{
    height: 300px;
    min-height: 300px;
  }
  .dialog-footer{
    height: 50px;
  }
  .dialog-footer button{
    margin-left: 20px;
    width:70px;
    height: 35px;
  }
  .good:hover img{
    background-image: url("../../static/images/good_red.png");
  }
  .ungood:hover img{
    background-image: url("../../static/images/ungood_red.png");
  }
  .good_info img{
    width: 16px;
    height: 16px;
    margin-left: 10px;
    margin-top: 5px;
  }
</style>
