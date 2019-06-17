<template>
    <div class="page_body">
        <div v-if="this.loading" style="position: absolute;z-index: 999;width: 80px;height: 80px;top: calc(50vh - 40px);left: calc(50vw - 40px);background: grey;"></div>
        <navbar ref="navbar" style="position: fixed;"/>
        <div v-if="!this.loading" ref="main" class="main">
            <div v-if="showSidebar" id="sidebar" class="sidebar" ref="sidebar" style="overflow: auto;background: transparent;">
                <div style="display: flex;flex-direction: column;justify-content: flex-start;align-content: center;position: fixed;">
                    <div v-for="(sc,i) in this.categories" :key="i" @click="setBg(i), getPosts(sc)"  :ref="'sidebar_category' + i"  style="display: flex; flex-direction: row; padding: 10px;border-radius: 10000px; margin-top: 20px;cursor:pointer;">
                        <div style="background: orange;width: 10px; height: 10px; border-radius: 50%;align-self: center;margin-left: 30px;"></div>
                        <p style="paddin: 0px;margin: 0px;color: black;font-size: 17px;padding-left: 20px;padding-right: 40px;">{{ sc }}</p>
                    </div>
                </div>
            </div>
            <div ref="posts_main" style="background: transparent;">
                <div v-for="(sp, i) in this.posts" :ref="'post_' + i" :key="i" class="card_cont" style="background: transparent; margin-left: 5vw; margin-top: 50px;height: 60vh;width: 60vw;">
                    <img @click="$router.push('/post/' + sp.id)" class="card_img" :src="sp.image" style="width: 60vw; height: 60vh;object-fit: cover;z-index: 3;border-radius: 15px;cursor: pointer;" alt="">
                    <div class="card_text_cont" style="background: #eeeeee;height: auto;min-height: 20%; width: 100%;z-index: 9;transform: translateY(-18vh);display: flex; flex-direction: row;">
                        <div style="width: 40px;background: orange;"></div>
                        <div style="display: flex; flex-direction: column;justify-content: center;">
                            <p style="font-weight: 900;font-size: 28px;color: black;padding: 0px;margin: 0px;text-align: left;padding-left: 40px;">{{ sp.title }}</p>
                            <p style="font-weight: 600; font-size: 18px; color: #9E9E9E;padding: 0px;margin: 0px;text-align: left;padding-top: 5px;padding-left: 40px;">{{ sp.description }}</p>
                        </div>
                        <img v-if="!sp.star" src="../assets/star.svg" style="width: 20px; height: 20px;align-self: flex-end;margin-bottom: 20px;margin-left: auto;margin-right: 30px;cursor: pointer;" alt="">
                        <img v-if="sp.star" src="../assets/star_alt.svg" style="width: 25px; height: 25px;align-self: flex-end;margin-bottom: 20px;margin-left: auto;margin-right: 30px;cursor: pointer;" alt="">
                        <img v-if="!sp.bucket" src="../assets/bucket.svg" style="width: 20px; height: 20px;align-self: flex-end;margin-bottom: 20px;margin-right: 30px;cursor: pointer;" alt="">
                        <img v-if="sp.bucket" src="../assets/bucket_alt.svg" style="width: 20px; height: 20px;align-self: flex-end;margin-bottom: 20px;margin-right: 30px;cursor: pointer;" alt="">
                        <img src="../assets/pointer.svg" style="width: 20px; height: 20px;align-self: flex-end;margin-bottom: 20px;margin-right: 30px;cursor: pointer;" alt="">
                    </div> 
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

    ::-webkit-scrollbar-track
    {
        display: none;
    }

    ::-webkit-scrollbar
    {
        width: 8px;
        border-radius: 10000px;
        background-color: transparent;
    }

    ::-webkit-scrollbar-thumb
    {
        border-radius: 10px;
        background-color: #aaaaaa;
    }

    .sidebar {
        height: calc(100vh - 200px);
        margin-top: 50px;
        width: auto;
        min-width: 18vw;
        max-width: 40vw;
        margin-left: 2vw;
        -webkit-animation: fadeAnim 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: fadeAnim 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    }

    .main {
        display: flex;
        flex-direction: row;
        position: relative;
        width: calc(100vw);
        margin: 0px;
        padding: 0px;
        margin-top: 150px;
        margin-bottom: 10vh;
        height: auto;
        background: #fff;
    }
    .bg_focus {
        background: #F1F1F1;
    }
    .card_cont{
        /* -webkit-animation: card_anim 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: card_anim 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both; */
        -webkit-animation: fadeAnim 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: fadeAnim 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    }
    .card_img{
        -webkit-animation: shadow-drop-lr 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: shadow-drop-lr 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

/* Keyframes */

    @-webkit-keyframes shadow-drop-lr {
        0% {
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0);
        }
        100% {
            box-shadow: -12px 0 20px -12px rgba(0, 0, 0, 0.35), 12px 0 20px -12px rgba(0, 0, 0, 0.25);
        }
    }
    @keyframes shadow-drop-lr {
        0% {
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0);
        }
        100% {
            box-shadow: -12px 0 20px -12px rgba(0, 0, 0, 0.35), 12px 0 20px -12px rgba(0, 0, 0, 0.25);
        }
    }


    /* @-webkit-keyframes card_anim {
        0% {
            -webkit-transform: scale(0);
                    transform: scale(0);
            -webkit-transform-origin: 50% 100%;
                    transform-origin: 50% 100%;
            opacity: 1;
        }
        100% {
            -webkit-transform: scale(1);
                    transform: scale(1);
            -webkit-transform-origin: 50% 100%;
                    transform-origin: 50% 100%;
            opacity: 1;
        }
    }
    @keyframes card_anim {
        0% {
            -webkit-transform: scale(0);
                    transform: scale(0);
            -webkit-transform-origin: 50% 100%;
                    transform-origin: 50% 100%;
            opacity: 1;
        }
        100% {
            -webkit-transform: scale(1);
                    transform: scale(1);
            -webkit-transform-origin: 50% 100%;
                    transform-origin: 50% 100%;
            opacity: 1;
        }
    } */

    @-webkit-keyframes fadeAnim {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes fadeAnim {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

</style>

<script>

import navbar from '../components/navbar.vue'
import { EventBus } from '../eventBus.js'
import { constants } from 'fs';
import { setTimeout } from 'timers';

export default {
    name: 'Home',
    data () {
        return {
            showSidebar: true,
            loading: true,
            posts: [],
            categories: []
        }
    },
    mounted: function () {
        this.getData()
    },
    components: {
        navbar
    },
    methods: {
        getData () {
            var vm = this
            this.$http.get('http://192.168.0.118:8080/api/home/categories/').then( resp => {
                console.log(resp.body[0])
                vm.categories = resp.body[0].categories
            })
            this.$http.get('http://192.168.0.118:8080/api/home/posts/').then( resp => {
                vm.posts = resp.body
                console.log(resp.body)
                vm.loading = !vm.loading
                setTimeout(() => {
                    vm.setBg(0)
                }, 500);
            } )
        },
        setBg (n) {
            var x = this.categories.length
            for (let index = 0; index < x; index++) {
                var y = 'sidebar_category' + index
                if ( n == index ){
                    this.$refs[y][0].style.backgroundColor = '#f1f1f1'
                } else {
                    this.$refs[y][0].style.backgroundColor = 'transparent'
                }
            }
        },
        getPosts (e) {
            var vm = this
            this.$http.get('http://192.168.0.118:8080/api/home/categories/' + e).then( resp => {
                console.log(resp.body)
                this.posts = resp.body
            })
            vm.$refs.posts_1.scrollTo(0, 0)
            window.scrollTo(0,0)
        }
    },

}
</script>
