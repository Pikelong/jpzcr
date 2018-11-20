<template>
  <div id="my_upload">
    <div class="upload">
      <button type="button" @click="upload_song">上传音乐</button>
    </div>
    <table>
      <thead>
      <tr>
        <th></th>
        <th>歌曲</th>
        <th>作词人</th>
        <th>时长</th>
        <th>上传时间</th>
        <th>是否删除</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>1</td>
        <td>
          <router-link to="/song_detail">
            <img src="../../static/images/login_bg.jpg" alt=""/>
            该死的温柔
          </router-link>
        </td>
        <td>王嘉尔</td>
        <td>2:30</td>
        <td>2018-10-15 08:05</td>
        <td><a href="javascript:void(0)">删除</a></td>
      </tr>
      <tr>
        <td>2</td>
        <td>
          <img src="../../static/images/login_bg.jpg" alt=""/>
          该死的温柔
          <div class="mySong_even">
            <a href="javascript:void(0)"><i class="list_menu__icon_play"></i></a>
          </div>
        </td>
        <td>王嘉尔</td>
        <td>2:30</td>
        <td>2018-10-15 08:05</td>
        <td><a href="javascript:void(0)">删除</a></td>
      </tr>
      <tr>
        <td>3</td>
        <td>
          <img src="../../static/images/login_bg.jpg" alt=""/>
          该死的温柔
        </td>
        <td>王嘉尔</td>
        <td>2:30</td>
        <td>2018-10-15 08:05</td>
        <td><a href="javascript:void(0)">删除</a></td>
      </tr>
      <tr>
        <td>4</td>
        <td>
          <img src="../../static/images/login_bg.jpg" alt=""/>
          该死的温柔
        </td>
        <td>王嘉尔</td>
        <td>2:30</td>
        <td>2018-10-15 08:05</td>
        <td><a href="javascript:void(0)">删除</a></td>
      </tr>
      <tr>
        <td>5</td>
        <td>
          <img src="../../static/images/login_bg.jpg" alt=""/>
          该死的温柔
        </td>
        <td>王嘉尔</td>
        <td>2:30</td>
        <td>2018-10-15 08:05</td>
        <td><a href="javascript:void(0)">删除</a></td>
      </tr>
      <tr>
        <td>6</td>
        <td>
          <img src="../../static/images/login_bg.jpg" alt=""/>
          该死的温柔
        </td>
        <td>王嘉尔</td>
        <td>2:30</td>
        <td>2018-10-15 08:05</td>
        <td><a href="javascript:void(0)">删除</a></td>
      </tr>
      <tr>
        <td>7</td>
        <td>
          <img src="../../static/images/login_bg.jpg" alt=""/>
          该死的温柔
        </td>
        <td>王嘉尔</td>
        <td>2:30</td>
        <td>2018-10-15 08:05</td>
        <td><a href="javascript:void(0)">删除</a></td>
      </tr>
      <tr>
        <td>8</td>
        <td>
          <img src="../../static/images/login_bg.jpg" alt=""/>
          该死的温柔
        </td>
        <td>王嘉尔</td>
        <td>2:30</td>
        <td>2018-10-15 08:05</td>
        <td><a href="javascript:void(0)">删除</a></td>
      </tr>
      <tr>
        <td>9</td>
        <td>
          <img src="../../static/images/login_bg.jpg" alt=""/>
          该死的温柔
        </td>
        <td>王嘉尔</td>
        <td>2:30</td>
        <td>2018-10-15 08:05</td>
        <td><a href="javascript:void(0)">删除</a></td>
      </tr>
      <tr>
        <td>10</td>
        <td>
          <img src="../../static/images/login_bg.jpg" alt=""/>
          该死的温柔
        </td>
        <td>王嘉尔</td>
        <td>2:30</td>
        <td>2018-10-15 08:05</td>
        <td><a href="javascript:void(0)">删除</a></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  export default {
    name:"my_upload",
    methods: {
      upload_song: function () {
        this.$router.push({path: '/upload'});
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
    width: 16%;
    color: #666666;
    font-size: 14px;
  }
  tbody tr td:not(:first-child){
    padding-top: 20px;
    width: 16%;
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
  .upload{
    margin-top: 20px;
    width: 100%;
    text-align: right;
    border-bottom: 1px solid #d6d6d6;
    padding-bottom: 5px;
  }
  .upload button{
    padding: 5px;
  }
</style>
