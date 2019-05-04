<template>
  <div class="home">
    <div class="imgCont">
      <img class="clipSvg" src="../assets/a.png" style="" alt="">
    </div>
    <div class="headerImg">
      <img class="logo" src="../assets/logo.png" style=";position: absolute;top: 30px;left: 30px;" alt="">
    </div>
    <div class="mainCont"> 
      <p class="website" style="font-weight: 600;font-family: 'Product Sans'; padding-top: 0px;padding-bottom: 0px;margin: 0px;color: #32217C;" >Website</p> <br>
      <p class="comming" style="font-weight: 900;font-family: 'Product Sans';padding-top: 0px;padding-bottom: 0px;margin: 0px;">Comming</p> <br>
      <p class="soon" style="font-weight: 900;font-family: 'Product Sans';padding-top: 0px;padding-bottom: 0px;margin: 0px;">Soon</p> <br>
      <p class="entryText" style="height: auto;font-weight: 600;">Place holder text intro about the site Place holder text intro about the site Place holder text intro about the site Place holder text intro about the site Place holder text intro about the site Place holder text intro about the site Place holder text intro about the site Place holder text intro about the site Place holder text intro about.</p>
    </div>
    <div class="footerLeft">
      <img src="../assets/bottom.png" style="width: 50vw; height: auto;position: absolute; left: 0px; bottom: 0px;" alt="">
    </div>
    <div class="footerRight">
      <img class="icon" src="../assets/facebook.svg" style="" alt="">
      <img class="icon" src="../assets/instagram.svg" style="" alt="">
      <img class="icon" src="../assets/twitter.svg" style="" alt="">
      <img class="icon" src="../assets/whatsapp.svg" style="" alt="">
      <img class="hiddenicon" src="../assets/menu.svg" style="" alt="">
    </div>
  </div>
</template>

<style scoped>
.home {
  overflow: hidden;
}
.logo {
  width: auto; 
  height: 70px;
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
.entryText {
  width: 40vw;
}
.icon {
  width: 25px; 
  height: 25px;
  margin-left:50px;
  cursor: pointer
}
.hiddenicon{
  width: 22px; 
  height: 22px;
  margin-left:50px;
  cursor: pointer;
  display: none;
}
.website {
  -webkit-animation: fadeAnimation 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: fadeAnimation 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  animation-delay: 1s;
  font-size: 50px;
}
.comming {
    -webkit-animation: fadeAnimation 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: fadeAnimation 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  font-size: 80px;
  line-height: 40px;
}
.soon{
    -webkit-animation: fadeAnimation 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: fadeAnimation 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    animation-delay: 0s;
  font-size: 80px;
  margin-top: -20px;
}
.entryText {
    -webkit-animation: fadeAnimation 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: fadeAnimation 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    animation-delay: 1.5s;
}
.footerRight {
  position: absolute;
  top: calc(100vh - 50px);
  right: 60px;
  width: auto;
  height: 200px;
  display: flex;
  flex-direction: row;
  -webkit-animation: fadeAnimation 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
      animation: fadeAnimation 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  animation-delay: 1.5s;
}

/* Animation */

@-webkit-keyframes fadeAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/*  media queries  */

@media only screen and (max-width: 968px) {
  .entryText {
    width: 55vw;
  }
  .icon{
    width: 22px;
    height: 22px;
  }
}

@media only screen and (max-width: 820px) {
  .icon{
    display: none;
  }
  .hiddenicon{
    display: block;
  }
}

@media only screen and (max-width: 685px) {
  /* remove bottom img display */
  .footerLeft{
    display: none;
  }
  .website{
    font-size: 35px;
  }
  .comming{
    font-size: 50px;
    line-height: 30px;
  }
  .soon{
    font-size: 50px;
  }
  /* reduce logo size */
  .logo{
    height: 50px;
  }
  .clipSvg{
    width: 65vw;
  }
}

@media only screen and (max-width: 568px) {
  /* remove side image display */
  .clipSvg{
    display: none;
  }
  .website{
    font-size: 25px;
  }
  .comming{
    font-size: 40px;
    line-height: 15px;
  }
  .soon{
    font-size: 40px;
    line-height: 15px;
  }
  /* reduce logo size */
  .logo{
    height: 40px;
  }.entryText{
    width: 80vw;
  }
  .hiddenicon{
    width: 30px;
    height: 30px;
    margin-right: -30px;
  }
}

</style>

<script>

export default {
  name: 'home',
  components: {
  }
}
</script>
