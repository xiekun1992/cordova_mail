<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
* {
  box-sizing: border-box;
}
i {
  font-style: normal;
}
body {
  margin: 0;
  overflow: hidden;
}
ul, li {
  list-style: none;
  padding: 0;
  margin: 0;
}
.white {
  background: #fff;
}
.h100 {
  height: 100%;
}
.clearfix::after {
  content: '';
  width: 0;
  height: 0;
  overflow: hidden;
  clear: both;
  display: table;
}
.one-line-text {
  width: 100%;
  display: inline-block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.pull-left {
  float: left;
}
.pull-right {
  float: right;
}
#app {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
 #app {       
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
 } 
</style>
