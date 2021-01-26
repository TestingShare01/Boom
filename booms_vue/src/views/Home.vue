<template>
  <div>
    <app-head></app-head>
    <app-zuo></app-zuo>
    <app-you></app-you>
  </div>

</template>

<script>
import AppHead from "../components/head.vue";
import AppZuo from "../components/zuo.vue";
import AppYou from "../components/you.vue";
export default {
  components:{
    AppHead,AppZuo,AppYou
  }
}
</script>

<style scoped>
.head{
  position:absolute;
  height: 45px;
  background-color: #545c64		;
  top: 0;
  right: 0;
  left: 0;
}
.zuo{
  position:absolute;
  width: 230px;
  background-color: #545c64	;
  top: 45px;
  bottom: 0;
}
.you{
  position:absolute;
  top: 45px;
  left: 230px;
  right: 0;
  bottom: 0;
  
}

</style>
