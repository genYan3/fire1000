<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Fire1000App',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
  created () {
    let index = localStorage.getItem("index")
    if(index){
      this.$store.commit("setIndex",JSON.parse(index))
    }
    window.addEventListener("beforeunload",()=>{
      localStorage.setItem("index",JSON.stringify(this.$store.state.index))
    })
  },
};
</script>
<style >
*{
  margin: 0;
  padding: 0;
}
.el-header{
  padding: 0 !important;
}
.el-main{
  padding: 0 !important;
}
.el-footer{
  padding: 0 !important;
}
@font-face {
  font-family: "思源宋体 Medium";
  src: url("./assets/fonts/Ej3ygPIjZk8i.woff2") format("woff2"),
  url("./assets/fonts/Ej3ygPIjZk8i.woff") format("woff");
}
</style>
