<template>
    <div class="author">

        <el-button type="primary" class="author-add" @click="updata_author()">上传</el-button>
        <template>
          <el-table :data="tableData" stripe style="width: 50%" class="author-table">
            <el-table-column prop="id" label="编号" width="180">
            </el-table-column>
            <el-table-column prop="author_name" label="作者" width="180">
            </el-table-column>
            <el-table-column label="头像" width="180">
              <!-- 图片的显示 -->
              <template   slot-scope="scope">
                <img :src="scope.row.author_img"  min-width="70" height="70" />
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">
                  移除
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
    </div>
</template>

<script>
    export default {
        name: 'author',
        data:function() {
            return {
              tableData: [{
                id:"1",
                author_name: '王嘉尔',
                author_img: '../../static/images/login_bg.jpg',
              }, {
                id:"2",
                author_name: '王嘉尔',
                author_img: '../../static/images/login_bg.jpg',
              }, {
                id:"3",
                author_name: '王嘉尔',
                author_img: '../../static/images/login_bg.jpg',
              }, {
                id:"4",
                author_name: '王嘉尔',
                author_img: '../../static/images/login_bg.jpg',
              }]
            }
        },
      methods: {
          deleteRow:function(index, rows) {
            rows.splice(index, 1);
          },
          updata_author:function(){
            this.$router.push({path: '/updata_author'});
          }
    },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .author{
    text-align: center;
  }
  .author-add{
    margin-top: 20px;
  }
  .author-table{
    margin-top: 20px;
    margin-left: 25%;
  }
</style>
