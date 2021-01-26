<template>
  <div>
    <div>
      <el-input class="input" v-model="input" placeholder="添加标签"></el-input>
      <el-button type="primary" @click="addtag">添加</el-button>
      <el-input class="input2" placeholder="输入标签查询" v-model="input2">
        <el-button
          slot="append"
          icon="el-icon-search"
          @click="check"
        ></el-button>
      </el-input>
    </div>
    <div class="tab">
      <el-table :data="tableData" border style="width: 361px">
        <el-table-column prop="id" label="ID" width="180"> </el-table-column>
        <el-table-column prop="tagname" label="标签名" width="180">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { apitag, addtag } from "../../api/apijk.js";
export default {
  created() {
    this.getData();
  },
  data() {
    return {
      input: "",
      input2: "",
      tableData: [
        { id: 1, name: "zyh" },
        { id: 1, name: "zyh" },
        { id: 1, name: "zyh" },
      ],
    };
  },
  methods: {
    getData() {
      apitag().then((res) => {
        this.tableData = res.data.res;
      });
    },
    check() {
      apitag().then((res) => {
        console.log(res.data);
      });
    },
    addtag() {
      addtag(this.input).then((res) => {
        if (res.data.error_code == 0) {
          this.$message({
            message: "添加成功",
            type: "success",
          });
          this.getData()
        }else{
            this.$message.error(res.data.msg)
        }
      });
    },
  },
};
</script>

<style scoped>
.el-input {
  width: 150px;
}
.el-button {
  margin-left: 10px;
}
.input2 {
  margin-left: 20px;
  width: 200px;
}
.tab {
  margin-top: 20px;
}
</style>