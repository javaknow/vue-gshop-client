// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {Button} from 'mint-ui'

import App from './App'
import router from './router'
import store from './store'

//未export的直接引用,类似import css
import './mock/mockServer'


Vue.config.productionTip = false


Vue.store = store;

Vue.component(Button.name, Button);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
})
