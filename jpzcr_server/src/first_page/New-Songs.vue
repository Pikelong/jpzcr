<template>
    <div class="new-songs">

      <el-button type="primary" class="new-songs-add" @click="add()">添加</el-button>
      <template>
        <el-table :data="tableData" stripe style="width: 30%" class="new-songs-table">
          <el-table-column prop="id" label="编号" width="180">
          </el-table-column>
          <el-table-column prop="song_name" label="歌曲名称" width="180">
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
        name: 'new-songs',
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
        },
        add:function(){
          this.$router.push({path: '/search'});
        }
      },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .new-songs{
    text-align: center;
  }
  .new-songs-add{
    margin-top: 20px;
  }
  .new-songs-table{
    margin-top: 20px;
    margin-left: 25%;
  }
</style>
