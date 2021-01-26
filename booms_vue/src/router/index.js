import Vue from "vue";
import VueRouter from "vue-router";
import login from "../views/Login";
import home from "../components/Layout.vue";
import homes from "../views/Home.vue";
import dev from "../views/Dev.vue";
import tag from "../views/Jk/tag.vue";
import cases from "../views/Jk/case.vue";
import upcase from "../views/Jk/addcase.vue";

Vue.use(VueRouter);

// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// };


export default new VueRouter({
  routes:[
    { path:"/",name:"/",component:login},
    { path:"/home",name:"home", component:homes},
    { path:"/tools",name:"tools",component:homes,children:[
      {path:"/tools/dev",name:"dev",component:dev}
    ]},
    { path:"/jk",name:"jk",component:homes,children:[
      {path:"/jk/tag",name:"tage",component:tag},
      {path:"/jk/case",name:"case",component:cases},
      {path:"/jk/upcase",name:"upcase",component:upcase}
    ]}
  ]
})