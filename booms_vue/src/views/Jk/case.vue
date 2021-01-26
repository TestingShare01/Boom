<template>
  <div>
    <!-- -----------------------------------------导航筛选信息栏------------------------------------------------------- -->
    <div>
      <el-button type="primary" @click="addcase">添加用例</el-button>
      <el-input class="inputss" placeholder="标签查询">
        <el-button
          slot="append"
          icon="el-icon-search"
          @click="checktag"
        ></el-button>
      </el-input>
    </div>

    <!-- -----------------------------------------添加数据栏------------------------------------------------------- -->
    <el-dialog title="添加接口" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="用例名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="URL" :label-width="formLabelWidth">
          <el-input v-model="form.url" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="请求头" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="传递参数" :label-width="formLabelWidth">
          <el-input v-model="form.data" autocomplete="off"></el-input>
          <li><el-input v-model="form.dss" autocomplete="off"></el-input><el-input v-model="form.dss" autocomplete="off"></el-input></li>
        </el-form-item>
        <el-form-item label="方法" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请求方法">
            <el-option label="POST" value="POST"></el-option>
            <el-option label="GET" value="GET"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="updata">确 定</el-button>
      </div>
    </el-dialog>

    <!-- -----------------------------------------列表数据------------------------------------------------------- -->

    <div>列表数据</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: "120px",
      form: {
        url:""
      },
    };
  },
  methods: {
    checktag() {
      alert("checktag");
    },
    addcase() {
      this.$router.push("/jk/upcase")
    },
    updata() {
      console.log(this.form.name);
      var str = this.form.name.split(" ");
      console.log(str);
      var head = {};
      for (var i in str) {
        // console.log(str[i])
        if (str[i] == "-H") {
          console.log(str[parseInt(i) + 1]);
          let values = "";
          console.log(str[parseInt(i) + 2]);
          for (var j = 0; j < 10000; j++) {
            if (
              str[parseInt(i) + 2 + j] != "-H" &&
              str[parseInt(i) + 2 + j] != "--data" &&
              str[parseInt(i) + 2 + j] != "--compressed"
            ) {
              values = values + str[parseInt(i) + 2 + j];
            } else {
              break;
            }
          }
          head[str[parseInt(i) + 1].replace(":", "")] = values;
        }else{
          if(str[i] == "--compressed"){
            this.form.url = str[parseInt(i)+1].replace("'","").replace("'","")
          }else{
            if(str[i] == "--data"){
              this.form.data = str[parseInt(i)+1].replace("'","").replace("'","")
            }
          }
          
        }
        
      }
      console.log(head);
    },
  },
};
</script>

<style scoped>
.inputss {
  width: 200px;
  margin-left: 20px;
}
</style>