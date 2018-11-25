<template>
  <main class="white">
    <section class="left">
      
    </section>
    <section class="right">
      
    </section>
  </main>
</template>
<script>
export default {
  name: 'Login',
  mounted () {
    // window.StatusBar.backgroundColorByHexString('#fff')
    // window.StatusBar.styleDefault()
    window.xstatusBar && window.xstatusBar.setStyle(window.StatusBar.styleDefault)
  }
}
</script>
<style scoped>
main {

  box-shadow: 0 0 10px #000;
}
main, section {
  float: left;
  height: 100%;
}
.left {
  width: 60px;
  background-color: #ddd;
}
.right {
  width: 250px;
}
</style>