<template>
  <div class="rq">
    <div class="xuanxiang">
      <el-radio-group v-model="radio" @change="changedev">
        <el-radio :label="0">全部</el-radio>
        <el-radio :label="1">Android</el-radio>
        <el-radio :label="2">IOS</el-radio>
      </el-radio-group>
    </div>
    <div class="btn">
      <el-button type="primary" @click="add()"
        >添加设备</el-button
      >
    </div>
    <div class="table">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column
          prop="username"
          label="姓名"
          width="180"
        ></el-table-column>
        <el-table-column
          prop="devname"
          label="设备名"
          width="180"
        ></el-table-column>
        <el-table-column
          prop="dev_status"
          label="所属端"
          width="180"
        ></el-table-column>
        <el-table-column prop="version" label="系统" width="180"></el-table-column>
        <el-table-column
          prop="size"
          label="分辨率"
          width="180"
        ></el-table-column>
        <el-table-column
          prop="serial"
          label="序列号"
          width="180"
        ></el-table-column>
        <el-table-column
          prop="remark"
          label="备注"
          width="180"
        ></el-table-column>
        <el-table-column prop="dev" label="操作" width="180">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="edit(scope.row)">编辑</el-button>
            <el-button size="mini" type="error" @click="del(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog
      title="添加设备"
      :visible.sync="dialogFormVisible"
      class="dialog"
    >
      <el-form :model="form" label-width="250px" class="elform">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input
            v-model="form.username"
            autocomplete="off"
            class="input"
          ></el-input>
        </el-form-item>
        <el-form-item label="设备名称" :label-width="formLabelWidth">
          <el-input
            v-model="form.devname"
            autocomplete="off"
            class="input"
          ></el-input>
        </el-form-item>
        <el-form-item label="系统" :label-width="formLabelWidth">
          <el-input
            v-model="form.version"
            autocomplete="off"
            class="input"
          ></el-input>
        </el-form-item>
        <el-form-item label="分辨率" :label-width="formLabelWidth">
          <el-input
            v-model="form.size"
            autocomplete="off"
            class="input"
          ></el-input>
        </el-form-item>
        <el-form-item label="序列号" :label-width="formLabelWidth">
          <el-input v-model="form.serial" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="所属端" :label-width="formLabelWidth">
          <el-select v-model="form.dev_status" placeholder="请选择所属端">
            <el-option label="Android" value="Android"></el-option>
            <el-option label="IOS" value="IOS"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注" :label-width="formLabelWidth">
          <el-input v-model="form.remark" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click.native="DevDatas">确 定</el-button>
      </div>
    </el-dialog>
    <el-pagination class="fenye"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
</template>

<script>
import { devdata, getDevData, delDev } from "../api/apitools.js";
const devices=[
  {type:1,name:"Android"},
  {type:2,name:"IOS"}
]
  
export default {
  created() {
    this.getData();
  },
  activated() {
    //有新数据就自动刷新
    this.getData();
  },
  data() {
    return {
      radio: 0,
      dialogFormVisible: false,
      formLabelWidth: "150px",
      tableData: [],
      form: {
        username: "",
        dev_status: "",
        devname: "",
        version: "",
        size: "",
        serial: "",
        remark: "",
      },
    };
  },
  methods: {
    add(){
      this.dialogFormVisible=true
      this.form = {}
    },
    DevDatas() {
      if (
        this.form.username !== "" &&
        this.form.dev_status !== "" &&
        this.form.devname !== "" &&
        this.form.version !== "" &&
        this.form.size !== "" &&
        this.form.serial !== ""
      ) {
        devdata(
          this.form.username,
          this.form.dev_status,
          this.form.devname,
          this.form.version,
          this.form.size,
          this.form.serial,
          this.form.remark
        ).then((res) => {
          if (res.data.error_code === 0) {
            this.dialogFormVisible = false;
            this.$message({
              message: "添加成功",
              type: "success",
            });
            this.getData()
          }
        });
      } else {
        this.$message.error("请检查是否全部添加");
      }
    },
    // 单选框
    changedev(){
      getDevData(this.radio).then((res) => {
        console.log(res.data);
        this.tableData = res.data;
      });
    },
    // 获取列表数据
    getData() {
      getDevData(this.radio).then((res) => {
        console.log(res.data);
        this.tableData = res.data;
      });
    },
    // 编辑列表数据
    edit(res){
      this.dialogFormVisible = true
      this.form = res
      console.log(res)
    },
    //删除列表中的数据
    del(res){
      delDev(res).then(res=>{
        if(res.data.error_code==0){
          this.$message({
            message:"删除成功",
            type:'success'
          }),
          this.getData()
        }
      })
    }
  },
  filters:{ //过滤器
    devType(res){
      const d =  devices.find(obj=> obj.type == res)
      return d?d.name:null
    }
  }
};
</script>

<style spoced>
.btn {
  float: right;
  margin-top: 10px;
}
.table {
  margin-top: 70px;
}
.xuanxiang {
  text-align: center;
}
.elform input {
  width: 300px;
}
.button {
  font-size: small;
}
.fenye{
  margin-top: 10px;
}
</style>