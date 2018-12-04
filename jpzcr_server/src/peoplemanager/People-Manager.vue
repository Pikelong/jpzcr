<template>
    <div class="people-info">

      <template>
        <el-table :data="tableData" stripe style="width: 50%" class="people-table">
          <el-table-column prop="id" label="编号" width="180">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="email" label="邮箱" width="180">
          </el-table-column>
          <el-table-column  label="操作">
            <template slot-scope="scope">
              <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">
                移除
              </el-button>
              <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">
                禁用
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
      <el-pagination background layout="prev, pager, next" :total="1000" class="people-info-page">
      </el-pagination>
    </div>
</template>

<script>
    export default {
        name: 'people-info',
        data:function() {
            return {
              tableData: [{
                id:"1",
                name: '该死的温柔',
                email: '1@qq.com',
                "img":"../../static/images/login_bg.jpg"
              }, {
                id:"2",
                name: '该死的温柔',
                email: '1@qq.com',
                "img":"../../static/images/login_bg.jpg"
              }, {
                id:"3",
                name: '该死的温柔',
                email: '1@qq.com',
                "img":"../../static/images/login_bg.jpg"
              }, {
                id:"4",
                name: '该死的温柔',
                email: '1@qq.com',
                "img":"../../static/images/login_bg.jpg"
              }]
            }
        },

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .people-table{
    margin-top: 20px;
    margin-left: 25%;
  }
  .people-info-page{
    margin-top: 20px;
  }
</style>
