<template>
  <div id="addcategory">
    <ul>
      <li>
        <label>分类来源：&nbsp;&nbsp;</label>
        <input type="text" name="title"/>
      </li>
      <li>
        <label>分类名称：&nbsp;&nbsp;</label>
        <input type="text" name="title"/>
      </li>
      <li>
        <input type="submit" value="上传" @click="updata()"/>
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    name: 'addcategory',
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
  #addcategory ul{
    margin-top: 50px;
    border: 1px solid #d6d6d6;
    padding: 20px 0;
  }
  #addcategory ul>li{
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }

  #addcategory ul>li>label{
    font-size: 14px;
    color: #666666;
    width: 130px;
    display: inline-block;
    text-align: right;
    line-height: 30px;
  }
  #addcategory ul>li>input,#addcategory ul>li>select{
    width: 300px;
    height: 30px;
    margin-top: 20px;
  }
  #addcategory ul>li>textarea{
    width: 300px;
    margin-top: 20px;
  }
</style>
