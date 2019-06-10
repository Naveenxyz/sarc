<template>
    <div class="main">
        <navBar/>
        <div class="navBar2">
            <div class="spacer2">

            </div>
            <div class="homeRouteIcon routeIcon" @click="homeFunc()"> 
                <h3>Home</h3>
            </div>
            <div class="newsRouteIcon routeIcon" @click="newsFunc()">
                <h3>News</h3>
            </div>
            <div class="ideaHubRouteIcon routeIcon" @click="ideaFunc()">
                <h3>IdeaHub</h3>
            </div>
             <div class="myBucketRouteIcon routeIcon" @click="myBucketFunc()">
                 <h3>My Bucket</h3>
            </div>
            <div class="contactRouteIcon routeIcon" @click="contactFunc()">
                <h3>Contact Us</h3>
            </div>
            <div class="spacer3">

            </div>
            <div class="sortBtn">
                <img class="sortBtnImg" src="../assets/sort.svg" alt=""> <p class="sortBtnText">Sort</p>
            </div>
            <div class="vl">

            </div>
            <div class="filterBtn">
                <img  class="filterBtnImg" src="../assets/filter.svg" alt=""> <p>Filter</p>
            </div>
        </div>
        <div v-if="this.home">
            <homeBody/>
        </div>
        <div v-if="this.news">
            <news/>
        </div>
        <div v-if="this.ideaHub">
            <ideaHub/>
        </div>
        <div v-if="this.myBucket">
            <myBucket/>
        </div>
        <div v-if="this.contactUs">
            <contactUs/>
        </div>
       
        

    </div>    
</template>
<script>
import navBar from './navBar'
import homeBody from './homeBody'
import news from './news'
import ideaHub from './ideaHub'
import myBucket from './myBucket'
import contactUs from './contactUs'
export default {
    name: 'Home',
    components:{
        navBar,
        homeBody,
        news,
        ideaHub,
        myBucket,
        contactUs
    },
    data(){
        return{
            home: true,
            news: false,
            ideaHub: false,
            myBucket: false,
            contactUs: false

        }
    },
    methods: {
        
        homeFunc(){
            this.home= true,
            this.news= false,
            this.ideaHub= false,
            this.myBucket= false,
            this.contactUs= false
        },
        newsFunc(){
            this.home= false,
            this.news= true,
            this.ideaHub= false,
            this.myBucket= false,
            this.contactUs= false
        },
        ideaFunc(){
            this.home= false,
            this.news= false,
            this.ideaHub= true,
            this.myBucket= false,
            this.contactUs= false
        },
        myBucketFunc(){
            this.home= false,
            this.news= false,
            this.ideaHub= false,
            this.myBucket= true,
            this.contactUs= false
        },
        contactFunc(){
            this.home= false,
            this.news= false,
            this.ideaHub= false,
            this.myBucket= false,
            this.contactUs= true
        }
    }
    
}
</script>

<style scoped>
    .main{
        z-index: -1;
    }

    .navBar2{
        display: flex;
        height: 7vh;
        background: #F1F1F1;
        box-shadow: inset 0 8px 6px -6px grey;
        top: 10vh;
        position: fixed;
        width: 100vw;
    }
    .spacer2{
        flex: 0.4;
        background: ;
    }
    .routeIcon{
        flex: 1;
        text-align: center;
        color: #868686;
    }
    .homeRouteIcon{
        background: white;
        color: black;
        z-index: 
        
    }
    .routeIcon:hover{
        cursor: pointer;
    }
    .spacer3{
        flex: 3;
        background: ;
    }
    .sortBtn{
        flex: 1;
        display: flex;
        transform: translateX(3vw)
        
    }
    .sortBtnImg{
       transform: scale(0.7)
    }
    .sortBtnText{
       

    }
    .vl {
    background:  #B7B7B7;
    height: 80%;
    display: inline-block;
    justify-content: center;
    align-self: center;
    flex: 0.03;
    border-radius: 5px;
    
    }
    .filterBtn{
        flex:1;
        display: flex;
        padding-left: 15px;
    }
    .filterBtnImg{
        transform: scale(0.7)
    }
</style>
