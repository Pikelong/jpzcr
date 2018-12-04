<template>
    <div class="all-songs">

      <template>
        <el-table :data="tableData" stripe style="width: 30%" class="all-songs-table">
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

      <el-pagination background layout="prev, pager, next" :total="1000" class="all-songs-page">
      </el-pagination>
    </div>
</template>

<script>
    export default {
        name: 'all-songs',
        data:function() {
            return {
              tableData: [{
                id:"1",
                song_name: '该死的温柔',
                operation: '删除',
              }, {
                id:"2",
                song_name: '该死的温柔',
                operation: '删除',
              }, {
                id:"3",
                song_name: '该死的温柔',
                operation: '删除',
              }, {
                id:"4",
                song_name: '该死的温柔',
                operation: '删除',
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
  .all-songs{
    text-align: center;
  }

  .all-songs-table{
    margin-top: 20px;
    margin-left: 25%;
  }
  .all-songs-page{
    margin-top: 20px;
  }
</style>
