<template>
    <div class="navBarBody effect1">
        <div class="logoCont">
            <a href="/" class="logo"></a>
        </div>
        <div class="spacer">

        </div>
        <div class="search">
            <input type="text" class="searchTerm" placeholder=" Search">
        </div>
        <div class="signUpBtnCont">
        <div class="signUpBtn">
            <p class="signUpBtnText">SIGNUP</p>
        </div>
        </div>   
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

.navBarBody{
    height: 10vh;
    width: 100vw;
    display: flex;
    background: ;
    margin: 0px;
    background: white;
    z-index: 3;
    position: fixed;
    top: 0;
}
.logoCont{
    flex: 1;
}
.logo {
  display: block;
  text-indent: -9999px;
  width: 100px;
  height: 82px;
  background: url(../assets/SARC-logo.svg);
  background-size: 100px 82px;
  transform: scale(1.5) translateX(2vw)
}
.spacer{
    flex: 3
}
.search{
 right: 17vh;
 flex: 1;
    justify-content: center;
    align-self: center;
}
.searchTerm{
    width: 36vh;
    border: 3px solid #B7B7B7 ;
    height: 4.2vh;
    border-radius: 4.5vh;
    
}
.signUpBtnCont{
    flex: 1;
    background: ;
    justify-content: center;
    align-self: center;
    margin-left: 10px;
    
   
}
.signUpBtn{
    border: 2px solid #FE2B5C;
    height: 4vh;
    width: 9vh;
    border-radius: 4vh; 
    text-align: left;
    
}
.signUpBtn:hover{
    cursor: pointer;
}

.signUpBtnText{
    justify-content: center;
    align-self: center;
    text-align: center;
    transform: translateY(-50%)
    
}
</style>
