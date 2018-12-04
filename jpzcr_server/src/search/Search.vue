<template>
  <div class="new-songs">

   <el-autocomplete class="inline-input" v-model="state1" :fetch-suggestions="querySearch" placeholder="请输入想要的歌曲" @select="handleSelect"></el-autocomplete>
<el-button type="primary">搜索</el-button>
    <template>
      <el-table :data="tableData" border style="width: 80%;text-align: center;margin-top: 20px" class="search-table">
        <el-table-column prop="song_name" label="歌曲名称" width="180">
        </el-table-column>
        <el-table-column prop="song_name" label="歌曲名称" width="180">
        </el-table-column>
        <el-table-column prop="author" label="作曲人" width="180">
        </el-table-column>
        <el-table-column prop="song_time" label="时长">
        </el-table-column>
        <el-table-column  label="操作">
          <template slot-scope="scope">
            <el-button @click.native.prevent="addRow(scope.$index, tableData4)" type="text" size="small">
              添加
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
    name: 'new-songs',
    data:function() {
      return {
        tableData: [{
          id:"1",
          song_name: '该死的温柔',
          author:"王嘉尔",
          song_time:"02-12"

        }, {
          id:"2",
          song_name: '该死的温柔',
          author:"王嘉尔",
          song_time:"02-12"
        }, {
          id:"3",
          song_name: '该死的温柔',
          author:"王嘉尔",
          song_time:"02-12"
        }, {
          id:"4",
          song_name: '该死的温柔',
          author:"王嘉尔",
          song_time:"02-12"
        }],
        restaurants:[]
      }
    },
    methods: {
      addRow:function(index, rows) {
//        rows.splice(index, 1);
        this.$router.go(-1)
      },
      querySearch:function(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter:function(queryString) {
        return (restaurant) => {
//          return (restaurant.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
          return (restaurant.name);
        };
  },
  loadAll:function() {
    return [
      { "value": "1", "name": "该死的温柔1" },
      { "value": "2", "name": "该死的温柔2" },
      { "value": "3", "name": "该死的温柔3" },
      { "value": "4", "name": "该死的温柔4" },
      { "value": "5", "name": "该死的温柔5" },
      { "value": "6", "name": "该死的温柔6" },
      { "value": "7", "name": "该死的温柔7" },
      { "value": "8", "name": "该死的温柔8" },
      { "value": "9", "name": "该死的温柔9" },
      { "value": "10", "name": "该死的温柔10" },
      { "value": "11", "name": "该死的温柔11" },
      { "value": "12", "name": "该死的温柔12" },
      { "value": "13", "name": "该死的温柔13" },
      { "value": "14", "name": "该死的温柔14" },
      { "value": "15", "name": "该死的温柔15" },
      { "value": "16", "name": "该死的温柔16" },
      { "value": "17", "name": "该死的温柔17" },
      { "value": "18", "name": "该死的温柔18" },
      { "value": "19", "name": "该死的温柔19" },
      { "value": "20", "name": "该死的温柔20" },
    ];
  },
  handleSelect:function(item) {
    console.log(item);
  }
  },
  mounted:function() {
    this.restaurants = this.loadAll();
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .new-songs{
    text-align: center;
  }
 div.el-table__body-wrapper.is-scrolling-none > table > tbody > tr > td.el-table_1_column_4 > div{
   text-align: center;
  }
.inline-input{
  width: 30%;
  margin-top: 20px;
}
  .all-songs-page{
    margin-top: 20px;
  }
</style>
