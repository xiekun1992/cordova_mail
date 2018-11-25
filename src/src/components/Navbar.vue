<template>
  <nav>
    <div class="container">
      <ul class="clearfix" :style="{width: width}" ref="ul">
        <li v-for="(n, index) in nav" :key="index" v-text="n.name"></li>
      </ul>  
    </div>
    <div class="more" ref="more" @click="showModal">
      <i></i>
      <i></i>
      <i></i>
    </div>
  </nav>
</template>
<script>
import EventBus from './EventBus.vue';

export default {
  name: 'Navbar',
  data () {
    return {
      nav: [
        {id: 0, name: '关注'}, {id: 1, name: '推荐'}, {id: 2, name: '深圳'}, {id: 3, name: '视频'}, {id: 4, name: '热点'}, {id: 5, name: '直播'}, {id: 6, name: '娱乐'}, {id: 7, name: '科技'}, {id: 8, name: '问答'},{id: 0, name: '懂车帝'}, {id: 1, name: '财经'}, {id: 2, name: '军事'}, {id: 3, name: '体育'}, {id: 4, name: '国际'}, {id: 5, name: '健康'}, {id: 6, name: '特卖'}, {id: 7, name: '房产'}, {id: 8, name: '小视频'}, {id: 7, name: '新时代'}, {id: 8, name: '国风'}
      ],
      width: '100%'
    }
  },
  mounted () {
    this.width = `${Math.ceil(Array.prototype.slice.call(this.$refs.ul.querySelectorAll('li'))
                  .map(li => li.getBoundingClientRect().width).reduce((a, b) => a + b)) + Math.ceil(this.$refs.more.getBoundingClientRect().width)}px`;
    console.log(this.width);
  },
  methods: {
    showModal () {
      EventBus.$emit('modal.show');
    }
  }
}
</script>
<style scoped>
nav {
  overflow: hidden;
  user-select: none;
  position: relative;
}
.container {
  display: block;
  background: #fff;
  overflow-x: auto;
  overflow-y: hidden;
}
.container > ul,
.container > ul > li {
  padding: 0;
  margin: 0;
  list-style: none;
}
.container > ul,
.more {
  border-bottom: 1px solid #eee;
}
.container > ul >li {
  float: left;
  padding: 8px 10px;
}
.more:active,
.container > ul > li:active {
  background: #eee;
}
.more {
  padding: 0 14px;
  padding-top: 8px;
  line-height: 2.2;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  background: #fff;
  box-shadow: 0 -1px 20px #ccc;
}
.more > i {
  width: 20px;
  display: block;
  height: 1px;
  margin-top: 5px;
  background: #ccc;
}
</style>