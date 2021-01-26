<template>
  <div>
    <!-- ------------------------------------------顶部按钮------------------------------------------------------------- -->
    <div>
      <el-button type="primary" @click="curladd">Curl导入</el-button>
    </div>

    <!-- -----------------------------------------模态框------------------------------------------------------------- -->

    <el-dialog title="Curl导入" :visible.sync="dialogFormVisible">
      <el-input
        type="textarea"
        :rows="10"
        placeholder="请输入内容"
        v-model="textarea"
      >
      </el-input>
      <el-button type="primary" @click="addcurl" class="addcurlbtn"
        >提交</el-button
      >
    </el-dialog>

    <!-- ------------------------------------------添加用例模块------------------------------------------------------------- -->
    <div class="case">
      <el-form :model="form">
        <el-form-item label="用例名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="URL" :label-width="formLabelWidth">
          <el-input v-model="form.url" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="请求头" :label-width="formLabelWidth">
          <div
            class="paramdatadiv"
            v-for="(item, i) in form.head"
            :key="item.id"
          >
            <el-input class="divinput" v-model="item.head_key"></el-input>
            <el-input class="divinputs" v-model="item.head_val"></el-input>
            <el-button
              class="btn2"
              type="danger"
              @click="del_head(item.head_key)"
              v-show="!(form.head.length == i + 1)"
              >删除</el-button
            >
            <el-button
              class="btn2"
              type="primary"
              @click="add_head"
              v-show="form.head.length == i + 1"
              >添加</el-button
            >
          </div>
        </el-form-item>

        <el-form-item label="方法" :label-width="formLabelWidth">
          <el-select v-model="form.method" placeholder="请求方法">
            <el-option label="POST" value="POST"></el-option>
            <el-option label="GET" value="GET"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="标签" :label-width="formLabelWidth">
          <el-select v-model="form.tag" filterable multiple placeholder="请选择">
            <el-option
              v-for="item in tableData"
              :key="item.id"
              :label="item.tagname"
              :value="item.tagname"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="参数" :label-width="formLabelWidth">
          <div
            class="paramdatadiv"
            v-for="(item, i) in form.data"
            :key="item.id"
          >
            <el-input class="divinput" v-model="item.keys"></el-input>
            <el-input class="divinputs" v-model="item.val"></el-input>
            <el-button
              class="btn2"
              type="danger"
              @click="add_div"
              v-show="!(form.data.length == i + 1)"
              >删除</el-button
            >
            <el-button
              class="btn2"
              type="primary"
              @click="add_div"
              v-show="form.data.length == i + 1"
              >添加</el-button
            >
          </div>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="updata">确 定</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { apitag, addtag, updataApi, jks } from "../../api/apijk.js";

export default {
    created(){
        this.gettag()
    }, 
  data() {
    return {
      param: [2],
      paramkey: "",
      paramvalues: "",
      form: {
        head: [{ head_key: "", head_val: "" }],
        data: [{ keys: "", val: "" }],
        tag:""
      },
      textarea: "",
      dialogFormVisible: false,
      formLabelWidth: "120px",
      tableData:[]
    };
  },
  methods: {
    curladd() {
      this.textarea = "";
      this.dialogFormVisible = true;
    },
    add_div() {
      this.form.data.push({ keys: "", val: "" });
    },
    updata(){
      var user = localStorage.getItem("user")
      console.log(user)
      jks(this.form,user).then(res=>{
          console.log(111)
      })
    },
    add_head() {
      this.form.head.push({ keys: "", val: "" });
    },

    //curl 获取内容到指定位置
    addcurl() {
      console.log(this.textarea);
      var str = this.textarea.split(" ");
      console.log(str);
      var head_curl = [];
      for (var i in str) {
        let h = {};
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
          //   head[str[parseInt(i) + 1].replace(":", "")] = values;
          h["head_key"] = str[parseInt(i) + 1]
            .replace(":", "")
            .replace("'", "");
          h["head_val"] = values.replace("'", "");
          head_curl.push(h);
        } else {
          if (str[i] == "--compressed") {
            this.form.url = str[parseInt(i) + 1]
              .replace("'", "")
              .replace("'", "");
          } else {
            if (str[i] == "--data") {
              var a = str[parseInt(i) + 1].replace('"', "").replace('"', "");
              var c = a.split("&");
              console.log(c);
              var curldata = [];
              for (var k in c) {
                let curld = {};
                var s = c[k].split("=");
                curld["keys"] = s[0];
                curld["val"] = s[1];
                curldata.push(curld);
              }
              this.form.data = curldata;
            }
          }
        }
      }
      this.form.head = head_curl;
      this.dialogFormVisible = false;
    },
    //获取标签 内容
    gettag() {
      apitag().then((res) => {
          console.log(res.data.res)
        this.tableData = res.data.res;
      });
    },
    del_head(res){
      console.log(res)
      for(var i in this.form.head){
        if(res==this.form.head[i]["head_key"]){
          console.log(this.form.head[i])
          console.log(i)
          this.form.head.splice(i,1)
        }
      }
    }
  },
};
</script>

<style scoped>
.case {
  margin-top: 20px;
}
.addcurlbtn {
  margin-top: 10px;
  right: 0;
}
.paramdatadiv {
  display: inline-block;
  margin-top: 5px;
}
.divinput {
  width: 350px;
}
.divinputs {
  margin-left: 10px;
  width: 350px;
}
.btn2 {
  margin-left: 10px;
}
.el-form-item__content {
  display: inline-block;
}
</style>