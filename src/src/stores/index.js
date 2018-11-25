import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {
    getNews (context) {
      return axios({
        method: 'GET',
        url: `https://www.toutiao.com/api/pc/focus/`
      })
    },
    getList (context) {
      return axios({
        method: 'GET',
        url: `https://www.toutiao.com/api/pc/feed/?min_behot_time=0&category=__all__&utm_source=toutiao&widen=1&tadrequire=true&as=A1256BBE21DCE62&cp=5BE13CCED622EE1&_signature=XTRXFxAUBtY3FBGg0tM.I100Vw`
      })
    }
  }
});