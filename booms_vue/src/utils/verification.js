// 1、引入router，通过router实例实现页面验证token
import Router from "../router/index.js"
Router.beforeEach((to,from,next)=>{
    const token = localStorage.getItem("token")
    if(token){
        next()
    }else{
        if(to.path !=="/"){
            next({path:"/"})
        }else{
            next()
        }
    }

})