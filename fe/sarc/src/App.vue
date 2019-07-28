<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

import io from "socket.io-client"
import { EventBus } from "./eventBus.js"

export default {
  name: 'app',
  components: {
  },
  data () {
    return {
      token: localStorage.getItem('auth_token'),
      socket: io("https://sarc-bphc-backend.herokuapp.com/", {query: {token : localStorage.getItem('auth_token')}}),
    }
  },
  mounted: function () {
    this.getSocketData()
    this.listenToEventBus()
  },
  methods: {
    getSocketData () {
      var vm = this
      this.socket.emit('posts', 'userid')
      this.socket.on('posts_resp', data => {
        vm.setEventBus('getPost', data)
      })
      this.socket.emit('categories', 'userid')
      this.socket.on('categories_resp', rsp => {
        vm.setEventBus('get_categories', rsp.categories)
      })
    },
    setEventBus (a, e) {
      EventBus.$emit(a, e)
    },
    listenToEventBus () {
      var vm = this
      EventBus.$on('getPostData', resp => {
        vm.getSocketData()
      })
    }
  }
}
</script>

<style>

/* @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap'); */

#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: 'Quicksand', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
  padding: 0px;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}

/* Keyframes */

</style>
