<template>
    <div class="category">

      <el-button type="primary" class="category-add" @click="addCategory()">添加分类</el-button>
      <template>
        <el-table :data="tableData" stripe style="width: 50%" class="category-table">
          <el-table-column prop="id" label="编号" width="180">
          </el-table-column>
          <el-table-column prop="source" label="来源" width="180">
          </el-table-column>
          <el-table-column prop="category_name" label="分类名称" width="180">
          </el-table-column>
          <el-table-column prop="operation" label="操作">
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
        name: 'category',
        data:function() {
            return {
              tableData: [{
                id:"1",
                source:"动漫",
                category_name: '可爱',

              }, {
                id:"2",
                source:"动漫",
                category_name: '可爱',

              }, {
                id:"3",
                source:"动漫",
                category_name: '可爱',

              }, {
                id:"4",
                source:"动漫",
                category_name: '可爱',

              }]
            }
        },
      methods: {
        deleteRow:function(index, rows) {
          rows.splice(index, 1);
        },
        addCategory:function(){
          this.$router.push({"path":"/addcategory"})
        }
      },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .category{
    text-align: center;
  }
  .category-add{
    margin-top: 20px;
  }
  .category-table{
    margin-top: 20px;
    margin-left: 25%;
  }
</style>
