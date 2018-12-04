import Vue from 'vue'
import App from './App.vue'
import Restaurant from './components/Restaurant.vue'


Vue.component("app-restaurant", Restaurant);

new Vue({
  el: '#app',
  render: h => h(App)
})
