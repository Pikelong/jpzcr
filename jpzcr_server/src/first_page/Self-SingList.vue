<template>
    <div class="self-singlist">

      <el-button type="primary" class="self-singlist-add">添加</el-button>
      <template>
        <el-table :data="tableData" stripe style="width: 30%" class="self-singlist-table">
          <el-table-column prop="id" label="编号" width="180">
          </el-table-column>
          <el-table-column prop="song_name" label="歌曲名称" width="180">
          </el-table-column>
          <el-table-column  label="操作">
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
        name: 'self-singlist',
        data:function() {
          return {
            tableData: [{
              id:"1",
              song_name: '该死的温柔',
            }, {
              id:"2",
              song_name: '该死的温柔',
            }, {
              id:"3",
              song_name: '该死的温柔',
            }, {
              id:"4",
              song_name: '该死的温柔',
            }]
          }
        },
      methods: {
        deleteRow:function(index, rows) {
          rows.splice(index, 1);
        }
      },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .self-singlist{
    text-align: center;
  }
  .self-singlist-add{
    margin-top: 20px;
  }
  .self-singlist-table{
    margin-top: 20px;
    margin-left: 25%;
  }
</style>
