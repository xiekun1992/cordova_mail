<template>
  <div class="white h100 slide-in container">
    <header>
      <div class="bar">
        <div class="header">
          <router-link class="left btn" v-bind:to="{'name': 'home'}">
            <span class="icon-undo2"></span>
          </router-link>
          <a class="title" href="javascript:void(0)">{{bar}}</a>
          <span class="right btn" @click="send">
            <span class="icon-compass"></span>
          </span>
        </div>
      </div>
    </header>
    <main v-bind:style="{height: `${height}px`}">
      <section>
        <form>
          <div class="input-group">
            <label>From</label>
            <div>xkfront@outlook.com</div>
          </div>
          <div class="input-group">
            <label>To</label>
            <div>
              <span>840914927@qq.com</span>
            </div>
          </div>
          <div class="input-group">
            <label>CC</label>
            <div>
              <span>840914927@qq.com</span>
            </div>
          </div>
          <div class="input-group">
            <label>BCC</label>
            <div>
              <span>840914927@qq.com</span>
            </div>
          </div>
          <div class="input-group">
            <label>Subject</label>
            <div>
              <input type="" name="" @focus="setEditingElement($event)">
            </div>
          </div>
          <div class="input-group">
            <label>Content</label>
            <div>
              <div @focus="setEditingElement($event)" contenteditable="true"></div>
            </div>
          </div>
          <div class="input-group">
            <label>Attachment</label>
            <div>
              <div @focus="setEditingElement($event)" contenteditable="true"></div>
            </div>
          </div>
        </form>
      </section>
    </main>
  </div>
</template>
<script>
export default {
  name: 'About',
  data () {
    return {
      bar: 'write mail',
      height: window.screen.availHeight - 75,
      editElement: null
    }
  },
  methods: {
    send () {
      alert('send');
    },
    setEditingElement (event) {
      this.editElement = event.target.parentNode.parentNode;
    }
  },
  updated () {
    if (Keyboard.isVisible && this.editElement) {
      this.editElement.scrollIntoView();
    }
  },
  mounted () {
    window.addEventListener('keyboardWillShow', (e) => {
        // alert('keyboardWillShow: ' + e.keyboardHeight);
        this.height = window.screen.availHeight - 75 - e.keyboardHeight;

    });
    window.addEventListener('keyboardWillHide', (e) => {
        // alert('keyboardWillShow: ' + e.keyboardHeight);
        this.height = window.screen.availHeight - 75;
    });
    // window.StatusBar.backgroundColorByHexString('#fff')
    // window.StatusBar.styleDefault()
    window.xstatusBar && window.xstatusBar.setStyle(window.StatusBar.styleDefault)
  }
}
</script>
<style scoped>
.container {
  position: fixed;
  width: 100%;
}
header{
  top: 0;
  left: 0;
  width: 100%;
  position: absolute;
  /* background: #fff; */
  background: #4285f3;
}
.bar {
}
.header {
  margin-top: 25px;
  height: 50px;
  line-height: 50px;
  color: #fff;
  padding: 0 15px;
  text-align: center;
}
.header * {
  color: inherit;
  text-decoration: none;
}
.header .title {
  font-size: 22px;
}
.header .btn {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-size: 22px;
}
.header .left{
  float: left;
}
.header .right {
  float: right;
}
main {
  margin-top: 75px;
  height: calc(100% - 75px);
  overflow: scroll;
}
main > section {
  /*padding: 10px;*/
}
.input-group {
  font-size: 18px;
  padding: 10px;
  border-bottom: 1px solid #eee;
}
.input-group > label {
  color: #777;
  font-size: 16px;
}
.input-group > div {
  /*padding-left: 10px;*/
}
.input-group input {
  width: 100%;
  border: 0;
  padding: 0;
  font-size: 18px;
}
.slide-in {
  animation: slideIn 0.5s forwards;
}
@keyframes slideIn {
  from {
    left: 100%;
  }
  to {
    left: 0;
  }
}
</style>