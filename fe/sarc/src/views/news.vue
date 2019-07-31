<template>
    <div class="page_body">
        <div v-if="this.loading" style="position: absolute;z-index: 999;width: 80px;height: 80px;top: calc(55vh - 40px);left: calc(50vw - 40px);background: transparent;">
            <img src="../assets/loader_2.png" class="rotator" style="width: 80px; height: 80px;" alt="">
        </div>
        <div v-if="this.p_loading && !this.loading" style="position: absolute;z-index: 999;width: 80px;height: 80px;top: calc(55vh - 40px);left: calc(55vw - 40px);background: transparent;">
            <img src="../assets/loader_2.png" class="rotator" style="width: 80px; height: 80px;" alt="">
        </div>
        <!-- <img  v-if="!this.loading" class="bg_svg" style="position: fixed;top:0px; right: 5vw;height: 100vh;width: 25vw;z-index:8;object-fit: cover;opacity: 1;" src="../assets/background.png" /> -->
        <navbar ref="navbar" style="position: fixed;z-index: 99"/>
        <div ref="main" style="z-index: 9;" class="main">
            <div v-if="showSidebar && !this.loading" id="sidebar" class="sidebar" ref="sidebar" style="background: transparent;position: fixed;">
                <div style="display: flex;flex-direction: column;justify-content: flex-start;align-content: center;overflow: auto;margin-right: 2vw; margin-bottom: 8vh;">
                    <div @click="getAllPosts(), resetBg()" ref="first_cat" class="bg_grey" style="display: flex; flex-direction: row; padding: 10px;border-radius: 10000px; margin-top: 20px;cursor:pointer;">
                        <div class="bg_yellow" style="width: 10px; height: 10px; border-radius: 50%;align-self: center;margin-left: 30px;"></div>
                        <p style="paddin: 0px;margin: 0px;color: black;font-size: 17px;padding-left: 20px;padding-right: 40px;">All Posts</p>
                    </div>
                    <div v-for="(sc,i) in this.categories" :key="i" @click="setBg(i), getPosts(sc)"  :ref="'sidebar_category' + i"  style="display: flex; flex-direction: row; padding: 10px;border-radius: 10000px; margin-top: 20px;cursor:pointer;">
                        <div :class="{'bg_red': i%3 == 1, 'bg_yellow': i%3 == 2, 'bg_blue': i%3 == 0}" style="width: 10px; height: 10px; border-radius: 50%;align-self: center;margin-left: 30px;"></div>
                        <p style="paddin: 0px;margin: 0px;color: black;font-size: 17px;padding-left: 20px;padding-right: 40px;">{{ sc }}</p>
                    </div>
                </div>
            </div>
            <!-- p_loading -->
            <p v-if="!this.posts.length && !this.loading && !this.p_loading && !this.search_result_stat" style="color: black; font-size: 24px; font-weight: 900;text-align: center;margin-top: 30vh;z-index: 999;padding-left: 20vw;">
                No Posts In This Category 
            </p>

            <p v-if="!this.posts.length && !this.loading && !this.p_loading && this.search_result_stat" style="color: black; font-size: 24px; font-weight: 900;text-align: center;margin-top: 30vh;z-index: 999;padding-left: 20vw;">
                No Posts According Your Search Input 
            </p>

            <div v-if="!this.loading && !this.p_loading" ref="posts_main" :class="{'no_overflow': !this.posts.length}" style="background: transparent;margin-left: auto;margin-right: 12vw;">
                <div v-for="(sp, i) in this.posts" :ref="'post_' + i" :key="i" class="card_cont" style="background: transparent; margin-left: 5vw; margin-top: 50px;height: 60vh;width: 60vw;">
                    <img @click="$router.push('/post/' + sp.id)" class="card_img" :src="sp.image" style="width: 60vw; height: 60vh;object-fit: cover;z-index: 3;border-radius: 15px;cursor: pointer;" alt="">
                    <div class="card_text_cont" style="background: #eeeeee;height: auto;min-height: 20%; width: 100%;z-index: 9;transform: translateY(-18vh);display: flex; flex-direction: row;">
                        <div style="width: 40px;" :class="{'bg_red': i%3 == 1, 'bg_yellow': i%3 == 2, 'bg_blue': i%3 == 0}" ></div>
                        <div style="display: flex; flex-direction: column;justify-content: center;">
                            <p style="font-weight: 900;font-size: 28px;color: black;padding: 0px;margin: 0px;text-align: left;padding-left: 40px;">{{ sp.title }}</p>
                            <p style="font-weight: 600; font-size: 18px; color: #9E9E9E;padding: 0px;margin: 0px;text-align: left;padding-top: 5px;padding-left: 40px;">{{ sp.description }}</p>
                        </div>
                        <img v-if="!sp.stars.includes(userid)" @click="sendStar(sp.id, i)" src="../assets/star.svg" style="width: 20px; height: 20px;align-self: flex-end;margin-bottom: 20px;margin-left: auto;margin-right: 30px;cursor: pointer;" alt="">
                        <img v-if="sp.stars.includes(userid)" @click="removeStar(sp.id, i)" src="../assets/star_alt.svg" style="width: 25px; height: 25px;align-self: flex-end;margin-bottom: 20px;margin-left: auto;margin-right: 30px;cursor: pointer;" alt="">
                        <img v-if="!sp.bucket.includes(userid)" @click="sendBucket(sp.id, i)" src="../assets/bucket.svg" style="width: 20px; height: 20px;align-self: flex-end;margin-bottom: 20px;margin-right: 30px;cursor: pointer;" alt="">
                        <img v-if="sp.bucket.includes(userid)" @click="removeBucket(sp.id, i)" src="../assets/bucket_alt.svg" style="width: 20px; height: 20px;align-self: flex-end;margin-bottom: 20px;margin-right: 30px;cursor: pointer;" alt="">
                        <img src="../assets/pointer.svg" @click="$router.push('/post/' + sp.id)" style="width: 20px; height: 20px;align-self: flex-end;margin-bottom: 20px;margin-right: 30px;cursor: pointer;" alt="">
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
        margin-top: 50px;
        height: 80vh;
        overflow: auto;
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
        width: 100vw;
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
        -webkit-animation: fadeAnim 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: fadeAnim 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    }
    .card_img{
        -webkit-animation: shadow-drop-lr 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: shadow-drop-lr 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
    .bg_blue{
        background: #2BCEFE;
    }
    .bg_yellow{
        background: #FECD2B;
    }
    .bg_red{
        background: #E34848;
    }
    .bg_grey {
        background: #F1F1F1;
    }
    .no_overflow {
        overflow: hidden;
    }
    .rotator {
        -webkit-animation: rotator 1s ease-in-out infinite;
	        animation: rotator 1s ease-in-out infinite;
    }

/* Keyframes */

    @-webkit-keyframes shadow-drop-lr {
        0% {
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0);
        }
        100% {
            box-shadow: -12px 0 20px -12px rgba(0, 0, 0, 0.25), 12px 0 20px -12px rgba(0, 0, 0, 0.25);
        }
    }
    @keyframes shadow-drop-lr {
        0% {
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0);
        }
        100% {
            box-shadow: -12px 0 20px -12px rgba(0, 0, 0, 0.25), 12px 0 20px -12px rgba(0, 0, 0, 0.25);
        }
    }

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

    @-webkit-keyframes rotator {
        0% {
            transform: rotate(0deg) scale(0.8)
        }
        50% {
            transform: rotate(180deg) scale(1)
        }
        100% {
            transform: rotate(360deg) scale(0.8)
        }
    }
    @keyframes rotator {
        0% {
            transform: rotate(0deg) scale(0.8)
        }
        50% {
            transform: rotate(180deg) scale(1)
        }
        100% {
            transform: rotate(360deg) scale(0.8)
        }
    }

</style>

<script>

import navbar from '../components/navbar.vue'
import { EventBus } from '../eventBus.js'
import { constants, truncate, truncateSync, stat } from 'fs';
import { setTimeout } from 'timers';

export default {
    name: 'News',
    data () {
        return {
            showSidebar: true,
            search_result_stat: false,
            loading: true,
            search_input: '',
            modified_posts: [],
            p_loading: true,
            posts: [],
            userid: '',
            categories: [],
            colors: [
                '#E34848',
                '#FECD2B',
                '#2BCEFE',
            ],
        }
    },
    mounted: function () {
        this.getData()
        this.getUserId()
        this.setBg(0)
        this.modified_posts = this.posts
        this.listenToEventBus()
        EventBus.$emit('getPostData', true)
    },
    components: {
        navbar
    },
    computed: {
    },
    methods: {
        getData () {
            var vm = this
            EventBus.$on('get_categories', resp => {
                vm.categories = resp
            })
            EventBus.$on('getPost', resp => {
                vm.posts = resp
                vm.loading = false
                vm.p_loading = false
                vm.search_result_stat = false
            })
        },
        setStar (e) {
            var vm = this

        },
        getUserId () {
            var vm = this
            this.$http.get('https://sarc-bphc-backend.herokuapp.com/api/auth').then( resp => {
                if (resp.body.authdata.user.username.length) {
                    vm.userid = resp.body.authdata.user.username
                }
            })
        },
        setBg (n) {
            var x = this.categories.length
            for (let index = 0; index < x; index++) {
                var y = 'sidebar_category' + index
                if ( n == index ){
                    this.$refs[y][0].style.backgroundColor = '#f1f1f1'
                    this.$refs.first_cat.style.backgroundColor = 'transparent'
                } else {
                    this.$refs[y][0].style.backgroundColor = 'transparent'
                }
            }
        },
        resetBg() {
            var x = this.categories.length
            for (let index = 0; index < x; index++) {
                var y = 'sidebar_category' + index
                this.$refs[y][0].style.backgroundColor = 'transparent'
            }
            this.$refs.first_cat.style.backgroundColor = '#f1f1f1'
        },
        listenToEventBus () {
            var vm = this
            EventBus.$on('search_results', resp =>  {
                console.log(resp.body)
                vm.posts = resp.body
                vm.search_result_stat = true
            })
        },
        getPosts (e) {
            var vm = this
            vm.p_loading = true
            this.$http.get('https://sarc-bphc-backend.herokuapp.com/api/home/categories/' + e).then( resp => {
                console.log(resp.body)
                this.posts = resp.body
                vm.p_loading = false
                vm.search_result_stat = false
            })
        },
        getAllPosts () {
            var vm = this
            vm.p_loading = true
            this.$http.get('https://sarc-bphc-backend.herokuapp.com/api/home/posts').then( resp => {
                console.log(resp.body)
                this.posts = resp.body
                vm.p_loading = false
                vm.search_result_stat = false
            })
        },
        sendStar(e, i) {
            EventBus.$emit('sendStar', e)
            this.posts[i].stars.push(this.userid)
        },
        sendBucket (e, i) {
            EventBus.$emit('sendBucket', e)
            this.posts[i].bucket.push(this.userid)
        },
        removeStar (e, i) {
            EventBus.$emit('sendStar', e)
            var vm = this
            this.posts[i].stars = this.posts[i].stars.filter(index => index !== vm.userid);
        },
        removeBucket (e, i) {
            EventBus.$emit('sendBucket', e)
            var vm = this
            this.posts[i].bucket = this.posts[i].bucket.filter(index => index !== vm.userid);
        }
    },

}
</script>
