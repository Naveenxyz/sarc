import Vue from 'vue'
import App from './App.vue'
import router from './router'

import * as firebase from 'firebase'

import vueResource from 'vue-resource'
Vue.use(vueResource)

Vue.config.productionTip = false


var firebaseConfig = {
  apiKey: 'AIzaSyAgOBKgBKyiRXy7NdGwBnZoNVWn-vHpAd4',
  authDomain: 'sarc-bits.firebaseapp.com',
  databaseURL: 'https://sarc-bits.firebaseio.com',
  projectId: 'sarc-bits',
  storageBucket: 'sarc-bits.appspot.com',
  messagingSenderId: '77879276515',
  appId: '1:77879276515:web:ad3a6c6cda95ae3f'
}

firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
