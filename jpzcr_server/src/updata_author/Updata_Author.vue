<template>
  <div id="updata_author">
    <ul>
      <li>
        <label>作曲人：&nbsp;&nbsp;</label>
        <input type="text" name="title"/>
      </li>
      <li>
        <label>图像：&nbsp;&nbsp;</label>
        <input type="file" name="title"/>
      </li>
      <li>
        <label>作曲人描述：&nbsp;&nbsp;</label>
        <textarea name="describe" id="" cols="30" rows="10"></textarea>
      </li>
      <li>
        <input type="submit" value="上传" @click="updata()"/>
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    name: 'updata_author',
    data:function() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods:{
      updata:function(){
        this.$router.go(-1)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #updata_author ul{
    margin-top: 50px;
    border: 1px solid #d6d6d6;
    padding: 20px 0;
  }
  #updata_author ul>li{
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }

  #updata_author ul>li>label{
    font-size: 14px;
    color: #666666;
    width: 130px;
    display: inline-block;
    text-align: right;
    line-height: 30px;
  }
  #updata_author ul>li>input,#updata_author ul>li>select{
    width: 300px;
    height: 30px;
    margin-top: 20px;
  }
  #updata_author ul>li>textarea{
    width: 300px;
    margin-top: 20px;
  }
</style>
