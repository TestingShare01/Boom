<template>
  <div class="rq">
      <el-form ref="form" :model="form" label-width="80px" class="biao" >
        <h2 class="title">测试平台</h2>
        <el-form-item label="用户名">
          <el-input v-model="form.username" placeholder="用户名"></el-input>
        </el-form-item>

        <el-form-item label="用户密码">
          <el-input v-model="form.pwd" placeholder="密码" ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit" class="btn_login">登录</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
import {Login} from "@/api/login"
export default {
  data() {
    return {
      form: {
          username:"",
          pwd:''
      },
    };
  },
  methods: {
    onSubmit(){
        if(this.form.username.length>0 && this.form.pwd.length>0){
            Login(this.form.username,this.form.pwd).then(res=>{
                if(res.data.error_code==0){
                    localStorage.setItem("user",res.data.user)
                    localStorage.setItem("token",res.data.token)
                    this.$router.push("/home")
                }else{
                    this.$message.error(res.data.msg);
                }
            })
        }else{
            this.$message.error(res.data.msg);

        }
    },
  },
};
</script>

<style scoped>
.biao{
    width: 350px;
    margin:200px auto;
    background-color: #F5F5F5;
    padding: 25px;
    padding-top: 5px;
    padding-left: 10px;
    padding-bottom: 20px;
    border-radius: 10px;
}
.btn_login{
    width: 270px;
}
.rq{
  position:absolute;
  height: 100%;
  width: 100%;
  background-image: url("../../../public/log.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%; 
}
.title{
  text-align: center;
}
</style>