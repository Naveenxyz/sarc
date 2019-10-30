
<template>
  <div class="page_body">
    <navbar />
    <div class="box">
      <div class="card">
        <img class="img" src="../assets/sonakshi2.jpg" alt="Card image" style="width: 100%;">
       </div>
      <div class="demo">
        <p style="font-size: 28px;">SARC Student Coordinator</p>
        <p style="font-size: 26px;">Sonakshi Gupta</p>
        <p>7568159959</p>
        <p>f20171173@hyderbad.bits-pilani.ac.in</p>
      </div>
    </div>
    <div class="box">
      <div class="card">

      </div>
      <div class="demo">
        <p style="font-size: 28px;">Website content head</p>
        <p style="font-size: 26px;">Satyaki Mandal</p>
        <p>9082548133</p>
        <p>f20171305@hyderabad.bits-pilani.ac.in</p>
      </div>
    </div>
    <br />
    <p style="font-size: 30px; font-family: 'Luckiest Guy', cursive;">WEB DEVELOPMENT TEAM</p>
    <div class="box">
      <div class="card">

      </div>
      <div class="demo">
        <p style="font-size: 26px;">Suraj Thotakura</p>
        <p>9550578389</p>
        <p>f20160365@hyderabad.bits-pilani.ac.in</p>
      </div>
    </div>
    <div class="box">
      <div class="card">

      </div>
      <div class="demo">
        <p style="font-size: 26px;">Amitesh Singh</p>
        <p>7746905291</p>
        <p>f20180066@hyderabad.bits-pilani.ac.in</p>
      </div>
    </div>
    <br />
    <p style="font-size: 30px; font-family: 'Luckiest Guy', cursive;">SARC TEAM</p>
    <div class="box">
      <div class="card">

      </div>
      <div class="demo">
        <p style="font-size: 28px;">Offline Content Head</p>
        <p style="font-size: 26px;">Nivedan vishwanath</p>
        <p>7021569128</p>
        <p>f20181005@hyderbad.bits-pilani.ac.in</p>
      </div>
    </div>
    <div class="box">
      <div class="card">

      </div>
      <div class="demo">
        <p style="font-size: 28px;">Publicity content head</p>
        <p style="font-size: 26px;">Rushabh Musthyala</p>
        <p>9000065663</p>
        <p>f20180433@hyderbad.bits-pilani.ac.in</p>
      </div>
    </div>
    <div class="box">
      <div class="card">

      </div>
      <div class="demo">
        <p style="font-size: 28px;">Logistics Head</p>
        <p style="font-size: 26px;">Aman Prakash</p>
        <p>8529926750</p>
        <p>f20180085@hyderbad.bits-pilani.ac.in</p>
      </div>
    </div>
    <div class="box">
      <div class="card">

      </div>
      <div class="demo">
        <p style="font-size: 28px;">Design Head</p>
        <p style="font-size: 26px;">Vishal Prabhu</p>
        <p>9866150211</p>
        <p>f2071034@hyderbad.bits-pilani.ac.in</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .img{
    margin-top: 20px;
  }
  .box{
    width: 900px;
    height: 200px;
    background-color: #eaeae1;
    border-radius: 10px;
    margin-left: 30px;
    margin-top: 50px;
    padding: 10px;
  }
  .card{
    margin-left: 10px;
    margin-top: -25px;
    width:200px;
    display: inline-block;
    margin-bottom: 10px;
  }
  .demo{
    margin-left: 50px;
    font-family: 'Fredoka One', cursive;
    display: inline-block;
    margin-top: -25px;
    margin-bottom: 50px;
    line-height: 16px;
  }
</style>

<script>

  import navbar from '../components/navbar.vue'


  export default {
    name: 'contact',
    data() {
      return {

      }
    },
    mounted: function () {
    },
    components: {
      navbar
    },
    methods: {
    },

  }
</script>
