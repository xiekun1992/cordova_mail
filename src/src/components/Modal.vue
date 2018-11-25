<template>
  <section ref="section">
    <div>
      <header><a class="close" @click="hide"></a></header>
      <div>
        <div>
          我的频道
        </div>
        <div>
          频道推荐
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import EventBus from './EventBus.vue';

export default {
  name: 'Modal',
  data () {
    return {

    }
  },
  created () {
    EventBus.$on('modal.show', this.show);
    EventBus.$on('modal.hide', this.hide);
  },
  methods: {
    show () {
      this.$refs.section.classList.add('show');
    },
    hide () {
      this.$refs.section.classList.remove('show');
    }
  }
}
</script>
<style scoped>
section {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.35);
  transition: z-index .2s, opacity .2s;
}
section.show {
  z-index: 10;
  opacity: 1;
}
section.show > div{
  top: 24px;
}
section > div{
  padding: 10px;
  transition: top .2s;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #fff;
  height: calc(100% - 24px);
  border-radius: 6px 6px 0 0;
}
section > div header {
  padding: 0 5px;
}
section > div header .close {
  display: inline-block;
  height: 20px;
  width: 20px;
  position: relative;
}
section > div header .close:active::before,
section > div header .close:active::after {
  background-color: #ccc;
}
section > div header .close:before,
section > div header .close:after {
  content: '';
  width: 20px;
  height: 2px;
  display: inline-block;
  background-color: #555;
  position: absolute;
  top: 9px;
  left: 0;
}
section > div header .close:before {
  transform: rotateZ(45deg);
}
section > div header .close:after {
  transform: rotateZ(-45deg);
}
</style>