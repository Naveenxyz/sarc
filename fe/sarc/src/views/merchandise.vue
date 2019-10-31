
<template>
  <div class="page_body">
    <navbar />
    <p style="font-family: 'Ultra', serif; font-size: 30px; font-weight: 900; color: #757575;">Order your merchandise from here.</p>
    <div class="new1">
      <input class="long" type="text" placeholder="Enter quantity you want">
      <button class="btn"><p style="font-size: 15px;">SUBMIT</p></button>

    </div>
    <div class="new2">
      <input class="long" type="text" placeholder="Enter quantity you want">
      <button class="btn"><p style="font-size: 15px;">SUBMIT</p></button>

    </div>
    <div class="new3">
      <input class="long" type="text" placeholder="Enter quantity you want">
      <button class="btn"><p style="font-size: 15px;">SUBMIT</p></button>
    </div>
    <div class="new4">
      <input class="long" type="text" placeholder="Enter quantity you want">
      <button class="btn"><p style="font-size: 15px;">SUBMIT</p></button>

    </div>
  </div>
</template>

<style scoped>
  .new1 {
    width: 400px;
    height: 320px;
    border: 2px dashed #000066;
    border-radius: 15px;
    margin-left: 100px;
    background-image: url('../assets/tshirt2.png');
     background-repeat: no-repeat;
    margin-top: 15px;
    float: left;

  }
  .new2{
    width: 400px;
    height: 320px;
    border: 2px dashed #000066;
    border-radius: 15px;
    margin-left: 100px;
    background-image: url('../assets/mug1.png');
     background-repeat: no-repeat;
    margin-top: 15px;
    float:left;
  }
  .new3 {
    width: 400px;
    height: 320px;
    border: 2px dashed #000066;
    border-radius: 15px;
    margin-left: 100px;
    background-image: url('../assets/crystal1.png');
     background-repeat: no-repeat;
     margin-top: 15px;
     float:left;
  }
  .new4{
    width: 400px;
    height: 320px;
    border: 2px dashed #000066;
    border-radius: 15px;
    margin-left: 100px;
    background-image: url('../assets/USB1.png');
     background-repeat: no-repeat;
     margin-top: 15px;
     float:left;
  }

  .btn {
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 30px;
    background-color: #0000ff;
    margin-top: -40px;
    margin-left: 250px;
    text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: monospace;
  color: white;
  }

  .long {
    margin-top: 270px;
    margin-left: 50px;
    padding: 10px;
  }
</style>

<script>

  import navbar from '../components/navbar.vue'

  /*import 'bootstrap';*/
  /*import '../node_modules(2)/bootstrap/dist/css/bootstrap.min.css';*/
  export default {
    name: 'merchandise',
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
