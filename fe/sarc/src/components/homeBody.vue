<template>
    <div class="homeBody">
        <div v-if="this.homeON" class="main"> 
            <div class="lSideBar">
                    <div class="lSBIcon all">
                        <span class="dot"></span><p class="iconText">All Updates</p>
                    </div>
                    <div class="lSBIcon">
                        <span class="dot" style="background-color: #E34848"></span><p class="iconText">Entrepreeurship</p>
                    </div>
                    <div class="lSBIcon">
                        <span class="dot" style="background-color: #E3DE48" ></span><p class="iconText">Robotics</p>
                    </div>
                    <div class="lSBIcon">
                        <span class="dot" style="background-color: "></span><p class="iconText">Electronics</p>
                    </div>
                    <div class="lSBIcon">
                        <span class="dot" style="background-color:#E34848 "></span><p class="iconText">Development</p>
                    </div>
                    <div class="lSBIcon">
                        <span class="dot" style="background-color: #E3DE48"></span><p class="iconText">AI and ML</p>
                    </div>
                    <div class="lSBIcon">
                        <span class="dot" style="background-color: "></span><p class="iconText">Mechanical</p>
                    </div>
                    <div class="lSBIcon">
                        <span class="dot" style="background-color: #E34848"></span><p class="iconText">Biology</p>
                    </div>
                    <div class="lSBIcon">
                        <span class="dot" style="background-color: #E3DE48"></span><p class="iconText">Pharma</p>
                    </div>                   
            </div>
            <div class="background">
                <img class="backgroundImg" src="../assets/background.svg" alt="">
            </div>
            <div class="feed">
                <div v-for="blog in blogs" class="blogCont" @click="postFunc()">
                <a href="/" class="blogImg"></a>
                    <div class="blogTextCont">
                        <h2 class="blogTitle">{{blog.blogTitle}}</h2>
                        <span class="blogSubCont"> 
                            <h3 class="blogDisc">{{blog.blogDisc}}</h3>  
                            <div class="spacer4"></div>
                            <div class="blogIconCont">
                                <img src="../assets/star.svg" alt="">
                                <img src="../assets/bucket.svg" alt="">
                                <img src="../assets/pointer.svg" alt="">
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="!this.homeON" class="postBody">
            <h1>POST PAGE</h1>

        </div>
    </div>
</template>
<style>
    .homeBody{
        display: flex;
        top: 17vh;
        position: absolute;
        z-index: -1;

    }
    .main{
        display: flex;
    }

 .lSideBar{
     width: 17vw;
     height: 80vh;
     float: left;
     background: ;
     margin-top: 4vw;
     background:;
     flex: 1;
     position: fixed;
 }


 .lSBIcon{
     display: flex;
     margin-left: 3vw;
     background: ;
     padding: 0;
     margin-bottom: 5px;
     border-radius: 15px;
     height: 30px;
     width: 13vw;
 }
 .all{
      background: #F1F1F1;
 }
 .dot{
  height: 0.5vw;
  width: 0.5vw;
  background-color: #48C5E3;
  border-radius: 50%;
  display: inline-block;
  justify-content: center;
    align-self: center;
  margin-left: 1.5vw;
}
 .iconText{
 padding-left: 5px; 
  justify-content: center;
    align-self: center;
 }
 .feed{
     flex: 6;
     left: 15vw;
     position: absolute;
 }
 .background{
     position: fixed;
     
     z-index: -1;
     right: 0px;
     transform: translateY(-30vh) scale(0.8);
 }
 .blogImg{
     
  height: 30vw;
  background: url(../assets/sample.jpg);
  width: 60vw;
  background-size: cover;
  background-position: center;
  display: block;
    
     
 }
 .blogCont{

     background-color:  ;
     width: 60vw;
     height: 30vw;
     margin-left: 10VW;
     margin-top: 5vw;
 }
 .blogTextCont{
     background: white;
     position:absolute;
     width: 58vw;
     height: 6vw;
     transform: translateY(-8vw);
     border-left: 2vw solid #E34848;
 }
 .blogTitle{
     text-align: left;
     padding-left: 5px;
     margin-top: 0px;
     margin-bottom: 0px;

 }
 .blogSubCont{
     display: flex;
     background: ;
 }
 .blogDisc{
     flex: 2;
     text-align: left;
     padding-left: 5px;
     justify-content: center;
     align-self: flex-start
 }
 .spacer4{
     background: red;
 }
 .blogIconCont{
     margin-top: 0px;
     align-self: center;
     background: ;
 }
 .postBody{
     
 }
</style>
<script>
import { METHODS } from 'http';
export default {
    data(){
        return {
            homeON: true,
            blogs: [
                {
                blogTitle: 'Tech',
                blogDisc:"A young entrepreneur's dream to fly",
                forumId: 'asdasd'
                },
                {
                blogTitle: 'Make it, Break it, Make it again',
                blogDisc: ' random text'
                },
                {
                blogTitle: '',
                blogDisc:''
                },
            
                
            ]
        }
    },
    methods: {
        postFunc(){
            this.homeON= false;

        }
        
    
    }   
}
</script>
