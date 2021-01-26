<template>
    <div class="head">
        <div class="head_zuo">
            <a href="">
                测试平台
            </a>
        </div>

        <div class="head_you">
            <el-dropdown>
                <span class="el-dropdown-link">
                    {{name}}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item @click.native="delete_user">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
export default {
    created(){
        this.get_name()
    },
    data(){
        return{
            name:""
        }
    },
    methods:{
        get_name(){
            this.name = localStorage.getItem("user")
        },
        delete_user(){
            localStorage.removeItem("user")
            localStorage.removeItem("token")
            this.$router.push("/")
        },

    }
}
</script>

<style scoped>
.head{
    line-height: 45px;
}
.head_zuo{
    float:left;
    margin-left: 20px;
    vertical-align: middle;
    
}
.head_zuo a{
    text-decoration: none;
}
.head_you{
    float: right;
    margin-right: 20px;
}
.logo{
    height: 35px;
    width: 35px;
}
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
}
.el-icon-arrow-down {
    font-size: 12px;
}
</style>