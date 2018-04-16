// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueECharts from 'Echarts'
import routes from '../src/router/router'
import axios from 'axios'
import Layout from './components/layout'
import Index from './pages/index'
import VehicleManagement from './pages/basicFunction/VehicleManagement'
import ElemenUI from  'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'echarts/map/js/china.js'
import './assets/icon/iconfont.css'

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(ElemenUI);
Vue.use(Vuex);
Vue.use(axios);

Vue.prototype.$echarts = VueECharts;

let router = new VueRouter({
	mode:'history',
	routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout/>'
})
