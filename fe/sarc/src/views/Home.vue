<template>
  <div class="home">
    <div class="imgCont">
      <img class="clipSvg" src="../assets/a.png" style="" alt="">
    </div>
    <div class="headerImg">
      <img src="../assets/bits-logo.png" style="width: 200px; height: auto;position: absolute;top: 30px;left: 30px;" alt="">
    </div>
    <div class="mainCont"> 
      <p style="font-size: 50px;font-weight: 600;font-family: 'Product Sans'; padding-top: 0px;padding-bottom: 0px;margin: 0px;color: #32217C;" >Website</p> <br>
      <p style="font-size: 80px;font-weight: 900;line-height: 40px;font-family: 'Product Sans';padding-top: 0px;padding-bottom: 0px;margin: 0px;">Comming</p> <br>
      <p style="font-size: 80px;font-weight: 900;font-family: 'Product Sans';padding-top: 0px;padding-bottom: 0px;margin: 0px;margin-top: -20px;">Soon</p> <br>
      <p style="width: 30vw;height: auto;font-weight: 600;">Place holder text intro about the site Place holder text intro about the site Place holder text intro about the site Place holder text intro about the site Place holder text intro about the site Place holder text intro about the site Place holder text intro about the site Place holder text intro about the site Place holder text intro about.</p>
    </div>
    <div class="footerLeft">
      <svg xmlns="http://www.w3.org/2000/svg" width="800" height="200" viewBox="0 0 800 200">
        <path id="Path_4" data-name="Path 4" d="M799.8,1124.587c2.1-.191-12.655-49.282-25.9-76.839s-33.776-50.518-56.981-61.437-32.14-16.405-64.993-20.584-42.3-.765-56.24,0c-32.737,1.8-67.894,13.118-88.343,20.584-28.882,10.545-61.372,22.211-124.527,56.987s-125.123,30.333-125.123,30.333-55.759-3-126.981-87.32S0,928.554,0,928.554v196.033Z" transform="translate(0 -900)" fill="#32217C" stroke="none" stroke-width="1"/>
      </svg>
    </div>
    <div class="footerRight">
      <img src="../assets/facebook.svg" style="width: 25px; height: 25px;margin-left:50px;cursor: pointer" alt="">
      <img src="../assets/instagram.svg" style="width: 25px; height: 25px;margin-left:50px;cursor: pointer" alt="">
      <img src="../assets/twitter.svg" style="width: 25px; height: 25px;margin-left:50px;cursor: pointer" alt="">
      <img src="../assets/whatsapp.svg" style="width: 28px; height: 28px;margin-left:50px;transform: translateY(-1.5px);cursor: pointer" alt="">
    </div>
  </div>
</template>

<style scoped>
.home {
  overflow: hidden;
}
.clipSvg {
  position: absolute;
  width: 50vw;
  height: auto;
  right: 0px;
  top: 0px;
} 
.footerLeft {
  transform: scale(0.8, 0.5);
  position: absolute;
  bottom: -50px;
  left: -80px;
  width: 800px;
  height: 200px;
}
.mainCont {
  position: absolute;
  left: 0px;
  top: 25vh;
  height: 50vh;
  width: 50vw;
  z-index: 999;
  text-align: left;
  padding-left: 50px;
}
.footerRight {
  position: absolute;
  top: calc(100vh - 70px);
  right: 40px;
  width: auto;
  height: 200px;
  display: flex;
  flex-direction: row;
}
</style>

<script>

export default {
  name: 'home',
  components: {
  }
}
</script>
