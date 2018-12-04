<template>
    <div id="add-songs">

      <ul>
        <li>
          <label>歌曲名称：&nbsp;&nbsp;</label>
          <input type="text" name="title"/>
        </li>
        <li>
          <label>来源：&nbsp;&nbsp;</label>
          <select name="source" id="source">
            <option value="1">电影</option>
            <option value="2">电视剧</option>
            <option value="3">动漫</option>
          </select>
        </li>
        <li>
          <label>剧名：&nbsp;&nbsp;</label>
          <input type="text" name="playname"/>
        </li>
        <li>
          <label>上传歌曲：&nbsp;&nbsp;</label>
          <input type="file" name="title"/>
        </li>
        <li>
          <label>歌曲描述：&nbsp;&nbsp;</label>
          <textarea name="describe" id="" cols="30" rows="10"></textarea>
        </li>
        <li>
          <input type="submit" value="上传"/>
        </li>
      </ul>

    </div>
</template>

<script>
    export default {
        name: 'add-songs',
        data:function() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #add-songs ul{
    margin-top: 50px;
    border: 1px solid #d6d6d6;
    padding: 20px 0;
  }
  #add-songs ul>li{
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }

  #add-songs ul>li>label{
    font-size: 14px;
    color: #666666;
    width: 130px;
    display: inline-block;
    text-align: right;
    line-height: 30px;
  }
  #add-songs ul>li>input,#add-songs ul>li>select{
    width: 300px;
    height: 30px;
    margin-top: 20px;
  }
  #add-songs ul>li>textarea{
    width: 300px;
    margin-top: 20px;
  }
</style>
