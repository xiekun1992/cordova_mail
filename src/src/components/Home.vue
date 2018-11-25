<template>
  <div class="white h100" @touchmove="slideOutAside" @touchstart="startSlide" @touchend="endSlide" @touchcancel="endSlide">
    <div>
      <header>
        <div class="bar">
          <div class="header">
            <a class="left btn" @touchstart.capture="record" @touchend.capture.prevent="showAside">
              <span class="icon-list"></span>
            </a>
            <a class="title" href="javascript:void(0)">{{bar}}</a>
            <router-link class="right btn" v-bind:to="{'name': 'about'}">
              <span class="icon-plus"></span>
            </router-link>
          </div>
        </div>
      </header>
      <main v-bind:style="{height: `${height}px`}">
        <section v-for="(d, index) in data" :key="index" class="clearfix">
          <div class="avatar" :style="{'background-color': d.avatarColor}">
            <i>{{d.avatar}}</i>
          </div>
          <div class="intro">
            <h1 class="clearfix">
              <span class="pull-left">{{d.from}}</span>
              <span class="time">{{d.time}}</span>
            </h1>
            <div class="one-line-text pull-left">
              {{d.subject}}
            </div>
            <footer class="one-line-text pull-left">
              {{d.text}}
            </footer>
          </div>
        </section>
      </main>
    </div>
    <div class="overlay" :class="{show: show}" :style="{'background-color': `rgba(0, 0, 0, ${(100 + left) / 100 * 0.6})`, 'z-index': left>-100?10: -1}" @touchstart.capture="record" @touchend.capture.prevent="hideAside"></div>
    <aside :class="{show: show, 'disable-transition': touching, 'shadow': left > -100}" :style="{transform: `translateX(${left}%)`}">
      <section class="left">
        <ul class="mail-list">
          <li>
            <a class="mail-item"></a>
          </li>
          <li>
            <a class="mail-item add"></a>
          </li>
        </ul>
      </section>
      <section class="right">
        <div class="mailbox">
          <div class="mailbox-name">Outlook</div>
          <div class="mailbox-address">xkfront@outlook.com</div>
        </div>
        <ul class="boxes">
          <li v-for="(box, index) in boxes" :key="index"><a :class="{active: box == activeBox}"><span class="icon-bubble"></span><span class="text">{{box}}</span></a></li>
        </ul>
      </section>
    </aside>
    <modal></modal>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
import Navbar from './Navbar.vue';
import Modal from './Modal.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Modal
  },
  data () {
    const boxes = ['Inbox', 'Outbox', 'Sent', 'Junk', 'Drafted', 'Deleted'];
    return {
      colors: ['#2cbf2c', '#48b3fb','#00CC00', '#9455f3', '#ef3838','#fb65d3', '#FFCC00', '#339966', '#666666', '#996633'],
      bar: 'Inbox',
      boxes,
      activeBox: boxes[0], 

      height: window.screen.availHeight - 75,
      data: [],
      list: [],
      slideAside: false,
      show: false,
      sliding: null,
      slideDirection: 0,
      left: -100,
      touching: false,
      tapTime: 0,
      startTime: 0
    }
  },
  methods: {
    ...mapActions([
      'getNews',
      'getList'
    ]),
    slideOutAside (e) {
      if (this.sliding) {
        let x = e.touches[0].pageX, y = e.touches[0].pageY;
        let dx = x - this.sliding.x, dy = y - this.sliding.y;

        if (dx > 0) {
          if (this.slideDirection == -1) {
            this.left = 0;
            return ;
          }
          if (this.slideDirection != 1) {
            this.slideDirection = 1;
            this.startTime = Date.now();
          }
          if (this.left < 0) {
            let tmp = dx / window.screen.width * 100;
            // console.log('dx > 0', tmp)
            this.left = -100 + tmp;
          } else {
            this.left = 0;
          }
        } else if (dx < 0) {
          if (this.slideDirection == 1) {
            this.left = -100;
            return ;
          }
          if (this.slideDirection != -1) {
            this.slideDirection = -1;
            this.startTime = Date.now();
          }
          if (this.left > -100) {
            let tmp = dx / window.screen.width * 100;
            // console.log('dx < 0', tmp)
            this.left = 0 + tmp;
          } else {
            this.left = -100;
          }
        }
      }
    },
    startSlide (e) {
      let x = e.touches[0].pageX, y = e.touches[0].pageY;
      if (this.left == -100 && x < 20 || this.left == 0 && x < window.screen.width) {
        this.sliding = {
          x,
          y 
        };
        this.slideDirection = 0;
        this.touching = true;
      }
    },
    endSlide (e) {
      console.log(Math.abs(this.left / (Date.now() - this.startTime)))
      if (0.2 <= Math.abs(this.left / (Date.now() - this.startTime))) {
        if (this.slideDirection > 0) {
          this.left = 0;
        } else if (this.slideDirection < 0) {
          this.left = -100;
        }
      } else {
        if (this.left < -50) {
          this.left = -100;
        } else {
          this.left = 0;
        }
      }
      this.slideDirection = 0;
      this.sliding = null;
      this.touching = false;
    },
    record () {
      this.tapTime = Date.now();
    },
    hideAside (e) {
      if (Date.now() - this.tapTime < 100) {
        this.left = -100;
      }
    },
    showAside (e) {
      if (Date.now() - this.tapTime < 100) {
        this.left = 0;
      }
    },
    textToColor (text) {

      return this.colors[text.split('').map(t => t.codePointAt(0)).reduce((a, b) => a + b) % this.colors.length];
    }
  },
  mounted () {
    // window.StatusBar.backgroundColorByHexString('#cb3837')
    window.xstatusBar && window.xstatusBar.setStyle(window.StatusBar.styleLightContent)
    // let response;
    // this.getNews().then(({data}) => {
    //   this.data = data.data.pc_feed_focus;
    // });
    this.data = [
      {
        from: 'JavaScript Weekly',
        subject: 'Going beyond console.log()',
        text: 'This week\'s JavaScript news #404 - September',
        time: 'Monday'
      },
      {
        from: 'InfoQ',
        subject: 'Going beyond console.log()',
        text: 'This week\'s JavaScript news #404 - September',
        time: 'Monday'
      },
      {
        from: 'CSS Weekly',
        subject: 'Going beyond console.log()',
        text: 'This week\'s JavaScript news #404 - September',
        time: 'Monday'
      },
      {
        from: 'Windows',
        subject: 'Going beyond console.log()',
        text: 'This week\'s JavaScript news #404 - September',
        time: 'Monday'
      },
      {
        from: 'Frontend Focus',
        subject: 'Going beyond console.log()',
        text: 'This week\'s JavaScript news #404 - September',
        time: 'Monday'
      },
      {
        from: 'Web Design Weekly',
        subject: 'Going beyond console.log()',
        text: 'This week\'s JavaScript news #404 - September',
        time: 'Monday'
      },
      {
        from: 'Mobile Dev Weekly',
        subject: 'Going beyond console.log()',
        text: 'This week\'s JavaScript news #404 - September',
        time: 'Monday'
      },
      {
        from: 'Node Weekly',
        subject: 'Going beyond console.log()',
        text: 'This week\'s JavaScript news #404 - September',
        time: 'Monday'
      },
      {
        from: 'Mozilla',
        subject: 'Going beyond console.log()',
        text: 'This week\'s JavaScript news #404 - September',
        time: 'Monday'
      },
      {
        from: '京东商城',
        subject: 'Going beyond console.log()',
        text: 'This week\'s JavaScript news #404 - September',
        time: 'Monday'
      },
    ];
    this.data.forEach(async (d, i) => {
      // this.$set(this.data[i], 'avatarColor', await this.textToColor(d.from));
      d.avatar = d.from.split(' ').map(l => l.charAt(0).toUpperCase()).slice(0, 2).join('');
      d.avatarColor = this.textToColor(d.avatar);
    });
  }
}
</script>
<style scoped>
header{
  top: 0;
  left: 0;
  width: 100%;
  position: fixed;
  /* background: #fff; */
  background: #4285f3;
}
aside {
  position: fixed;
  top: 0;
  left: 0;
  width: 80%;
  height: 100%;
  background-color: #fff;
  transition: transform 0.3s;
  z-index: 12;
}
aside.disable-transition {
  transition: none;
}
aside.shadow {
  box-shadow: 0 0 20px #333;
}
aside.show {
  /*left: 0 !important;*/
  transform: translateX(100%);
}
aside section {
  height: 100%;
  float: left;
  padding-top: 45px;  
}
aside section.left {
  width: 64px;
  text-align: center;
  background-color: #efefef;
}
aside section.right {
  width: calc(100% - 64px);
  /*padding-left: 20px;*/
}
.mail-list li {
  margin-bottom: 10px;
}
.mail-list .mail-item {
  width: 46px;
  height: 46px;
  display: inline-block;
  background-color: #4285f3;
  border-radius: 50%;
  box-shadow: 0 0 0 3px rgb(154, 188, 241);
}
.mail-list .mail-item.add {
  background-color: #ddd;
  box-shadow: none;
}
.mailbox {
  padding-left: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #efefef;
}
.mailbox .mailbox-name {
  font-size: 16px;
}
.mailbox .mailbox-address {
  font-size: 14px;
  color: #aaa;
}
.boxes {
  /*padding-left: 20px;*/
  padding-top: 10px;
}
.boxes>li>a {
  display: block;
  padding: 12px 0 12px 20px;
  color: #aaa;
}
.boxes>li>a [class^=icon-] {
  font-size: 18px;
  margin-right: 10px;
  display: inline-block;
  vertical-align: middle;
}
.boxes>li>a .text{
  display: inline-block;
  vertical-align: middle;
}
.boxes>li>a:active {
  background-color: #eee;
}
.boxes>li>a.active {
  color: #4285f3;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  /*transition: background-color 0.3s;*/
  z-index: -1;
}
.overlay.show {
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10;
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
  overflow: scroll;
  /*margin-top: calc(88px + 23px);*/
  margin-top: 75px;
}
main > section {
  padding: 10px;
  border-bottom: 1px solid #efefef;
}
main > section:active {
  background: #eee;
}
main > section > .avatar {
  color: #fff;
  font-size: 20px;
  width: 44px;
  height: 44px;
  background-color: rgb(89, 168, 84);
  border-radius: 50%;
  display: flex;
  float: left;
  align-items: center;
  justify-content: center;
}
main > section > .intro {
  margin-left: 10px;
  float: left;
  width: calc(100% - 54px);
  /*padding: 10px 0;*/
}
main > section > .intro > h1 {
  font-size: 18px;
  margin: 0;
}
main > section > .intro > h1 > .time {
  font-size: 14px;
  font-weight: normal;
  float: right;
  color: #999;
}
main > section > .intro > footer {
  font-size: 14px;
  color: #999;
}
img {
  width: 100%;
}
</style>
