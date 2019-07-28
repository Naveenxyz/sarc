<template>
    <div class="navbar_root" ref="navbar_root">
        <div class="navbar_main">
            <img src="../assets/logo.svg" @click="$router.push('/home')" style="height: 6vh;width: auto;margin-left: 2vw;cursor: pointer;" alt="">
            <div style="margin-left: auto;margin-right: 2vw;align-self: center;">
                <img v-if="this.showNavItem" src="../assets/search.svg" style="width: 18px; height: 18px;transform: translate(2.5vw, 2px);" alt="">
                <input v-if="this.showNavItem" class="search_box" @keyup.enter="search()" style="text-align: left; padding-left: calc(1vw + 45px)" type="text" placeholder="Search" ref="search_bar" v-model="search_input">
                <button v-if="this.showNavItem" @click="search()" class="btn-outline">Search</button>
                <button @click="$router.push('/signup')" class="btn-outline">SignUp</button>
            </div>
        </div>
        <div ref="navbar_secondary" class="navbar_secondary">
            <div class="ns_p_cont">
                <div style="width: 2vw;"></div>
                <div v-for="(s, i) in this.navItems" :key="i" class="ns_i_cont">
                    <p class="" @click="$router.push('/' +  s.route)" :ref="s.ref">{{s.name}}</p>
                </div>
                <img src="../assets/sort.svg" style="width: 20px; height: 20px;align-self: center;margin-left: auto;margin-right: 0px;cursor: pointer;" alt="">
                <p style="padding-left: 10px;margin-left:0px;padding-right: 80px;">Sort</p>
                <!-- <img src="../assets/filter.svg" style="width: 20px; height: 20px;align-self: center;cursor: pointer;" alt="">
                <p style="padding-left: 10px;margin-left:0px;margin-right: 40px;">filter</p> -->
            </div>
        </div>
    </div>
</template>

<style scoped>
    .navbar_root {
        position: relative;
        top: 0px;
        left: 0px;
        height: auto;
        width: 100vw;
        background: transparent;
        display: flex;
        flex-direction: column;
        z-index: 999;
    }
    .navbar_main {
        width: 100vw;
        height: auto;
        background: #ffffff;
        z-index: 2;
        box-shadow: 0 0px 20px 0px rgba(0, 0, 0, 0.15);    
        display: flex;
        flex-direction: row;
        padding-top: 15px;
        padding-bottom: 15px;
    }
    .navbar_secondary {
        flex: 7;
        width: 100vw;
        background: #f1f1f1;
        z-index: 1;
        height: auto;
    }
    .ns_p_cont {
        display: flex;
        flex-direction: row;
        height: auto;
        align-content: center;
        z-index: 5;
    }
    .ns_i_cont {
        display: flex;
        flex-direction: row;
        height: auto;
        align-content: center;
        z-index: 5;
    }
    .ns_i_cont > p{
        padding-left: 40px;
        padding-right: 40px;
        font-weight: 900;
        font-size: 16px;
        transition: 0.5s;
        color: #868686;
        margin-top: 0px;
        margin-bottom: 0px;
        padding-top: 14px;
        padding-bottom: 14px;
        cursor: pointer;
    }
    .bg_focus {
        /* font-size: 18px !important;
        transition: 0.5s; */
        color: #000000 !important;
        background: #fff;
    }

    .search_box {
        all: unset;
        height: 4.5vh;
        width: 20vw;
        background: #fff;
        border: 2px solid #B7B7B7;
        border-radius: 1000000px;
        font-weight: 700;
    }
    .btn-outline {
        all: unset;
        height: 4.1vh;
        margin-left: 2vw;
        padding-left: 10px;
        padding-right: 10px;
        background: #fff;
        border: 2px solid #EA4360;
        font-weight: 900;
        border-radius: 1000000px;
        cursor: pointer;
        transition: 300ms;
    }
    .btn-outline:hover{
        background: #EA4360;
        color: white;
    }
/* Keyframes */

    @-webkit-keyframes shadow-drop-lr {
        0% {
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0);
        }
        100% {
            box-shadow: -12px 0 20px -12px rgba(0, 0, 0, 0.35), 12px 0 20px -12px rgba(0, 0, 0, 0.35);
        }
    }
    @keyframes shadow-drop-lr {
        0% {
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0);
        }
        100% {
            box-shadow: -12px 0 20px -12px rgba(0, 0, 0, 0.35), 12px 0 20px -12px rgba(0, 0, 0, 0.35);
        }
    }


</style>

<script>

import { EventBus } from '../eventBus.js'

export default {
    name: 'navbar',
    data () {
        return {
            search_input: '',
            showNavItem: true,
            navItems: [
                {
                    name: 'News',
                    ref: 'news',
                    route: 'news'
                },
                {
                    name: 'IdeaHub',
                    ref: 'idea_hub',
                    route: 'idea_hub'
                },
                {
                    name: ' MyBucket',
                    ref: 'bucket',
                    route: 'bucket'
                },
                {
                    name: 'Contact Us',
                    ref: 'contact',
                    route: 'contact'
                },
                {
                    name: 'MentorHub',
                    ref: 'mentor_hub',
                    route: 'mentor_hub'
                },
            ]
        }
    },
    mounted: function () {
        this.checkRouteandBgColor(this.$route.name)
        this.checkAdminRoute()
        this.logger()
    },
    methods: {
        logger() {
            EventBus.$emit('sendNavbarHeight', this.$refs.navbar_root.clientHeight)
        },
        search() {
            var vm = this
            this.$http.get('https://sarc-bphc-backend.herokuapp.com/api/home/search/' + vm.search_input).then(resp => {
                EventBus.$emit('search_results', resp)
            })
        },
        checkAdminRoute() {
            if(window.location.pathname == '/admin' || window.location.pathname == 'admin' || window.location.pathname == '/ideahub' || window.location.pathname == 'ideahub') {
                this.showNavItem = false
            }
        },
        checkRouteandBgColor (r) {
            for (let i = 0; i < this.navItems .length; i++) {
                var x = this.navItems[i].ref
                if(this.navItems[i].ref == r) {
                    this.$refs[x][0].classList.add('bg_focus')
                } else{
                    if (this.$refs[x][0].classList.contains('bg_focus')) {
                        this.$refs[x][0].classList.remove('bg_focus')
                    }
                }
            }
        }
    }
}
</script>
