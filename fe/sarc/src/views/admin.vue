<template>
    <div style="text-align: left;" class="admin_page_body">
        <navbar style="position: fixed;" />

<!-- Loader -->

    <div v-if="this.loading" style="position: absolute;z-index: 999;width: 80px;height: 80px;top: calc(50vh - 40px);left: calc(50vw - 40px);background: transparent;">
        <img src="../assets/loader_2.png" class="rotator" style="width: 80px; height: 80px;" alt="">
    </div>

<!-- Add a category -->

        <p v-if="!this.loading" style="font-size: 22px;color: black;font-weight: 900;word-spacing: 8px;padding-top: 150px; padding-bottom: 15px;padding-left: 5vw;">Add a category.</p>
        <div v-if="!this.loading" style="width: 70vw;height: auto;margin-left: 5vw;border-radius: 10px;">
            <input type="text" style="width: 50%;background: #f1f1f1;text-align: left;padding-left: 50px;" placeholder="Enter a name for the new category" class="new_input" v-model="new_category">
            <button @click="this.submit_category" style="width: auto; padding: 15px;padding-left: 40px; padding-right: 40px;margin-left: 40px;" class="btn_submit" >Submit</button>
        </div>

<!-- Add a post -->

        <p v-if="!this.loading" style="font-size: 22px;color: black;font-weight: 900;word-spacing: 8px;padding-top: 10vh; padding-bottom: 15px;padding-left: 5vw;">Enter the fields to post an event.</p>
        <div v-if="!this.loading" style="width: 80vw;height: auto;margin-left: 5vw;background: #f1f1f1;border-radius: 10px;display: flex; flex-direction: column;margin-bottom: 10vh;">
            <div class="post_title" style="display: flex; flex-direction: row;margin-top: 50px;">
                <p style="align-slef: flex-start;padding: 0px;padding-left: 40px;font-size: 18px;font-weight: 600;align-self: center;">Give a title to your post</p>
                <input style="margin-left: auto;margin-right: 10%;width: 40%;padding-left: 40px;color: #757575" placeholder="Enter the title of the post" type="text" class="new_input" v-model="title">
            </div>
            <div class="post_support_line" style="display: flex; flex-direction: row;margin-top: 50px;">
                <p style="align-slef: flex-start;padding: 0px;padding-left: 40px;font-size: 18px;font-weight: 600;align-self: center;">Give a Tag Line to your post</p>
                <input style="margin-left: auto;margin-right: 10%;width: 40%;padding-left: 40px;color: #757575" placeholder="Enter a tag of the post" type="text" class="new_input" v-model="post_tagline">
            </div>
            <div class="category" style="display: flex; flex-direction: row;margin-top: 50px;">
                <p style="align-slef: flex-start;padding: 0px;padding-left: 40px;font-size: 18px;font-weight: 600;align-self: center;">Select a category you want to post in</p>
                <p style="margin-left: auto;margin-right: calc(10% - 15px);width: 40%;background: #fff;padding-top: 20px;padding-bottom: 20px;padding-left: 40px;padding-right: 20px;border-radius: 10000px;font-weight: 600;color: #757575">{{ this.selected_category }}</p>
                <img v-if="!this.show_category_selector" src="../assets/pointer_alt_down.png" style="width: 15px;height: 15px;align-self: center;transform: translateX(-10vw) scale(1.4, 1); cursor: pointer;" @click="show_category_selector = true" alt="">
                <img v-if="this.show_category_selector" src="../assets/pointer_alt_left.png" style="width: 15px;height: 20px;align-self: center;transform: translateX(-10vw); cursor: pointer;"  @click="show_category_selector = false" alt="">
                <div v-if="this.show_category_selector" class="bg_shadow show_arrow" style="height: auto;width: 30vw; position: absolute;background: #EA4360;top: 107vh;right: calc(23vw - 25px);border-radius: 10px;z-index:99;display: flex;flex-direction: column;margin-bottom: 50px;">
                    <p class="category_selector_items" v-if="!this.categories.length" style="color: white; font-size: 16px;text-align: left;padding: 15px;padding-left: 30px;font-weight: 900;cursor: pointer;"  >No Categories Available</p> 
                    <p class="category_selector_items" v-for="(sc, i) in this.categories" :key="i" style="color: white; font-size: 14px;text-align: left;padding: 5px;padding-left: 30px;font-weight: 900;cursor: pointer;" @click="selected_category = sc, show_category_selector = false" >{{ sc }}</p>
                </div>
            </div>
            <div class="post_img" style="display: flex; flex-direction: row;margin-top: 50px;">
                <p style="align-slef: flex-start;padding: 0px;padding-left: 40px;font-size: 18px;font-weight: 600;align-self: center;">Upload an Image</p>
                <div style="margin-left: auto;margin-right: 10%;width: calc(40% + 60px);background: transparent;">
                    <input type="file" name="file" id="file" ref="uploadContent" class="inputfile" />
                    <label for="file">Pick a picture</label>
                </div>
            </div>
            <div class="description" style="display: flex; flex-direction: column;margin-top: 50px;">
                <p style="align-slef: flex-start;padding: 0px;padding-left: 40px;text-align: left;font-size: 18px;font-weight: 600;">Give a title to your post :</p>
                <textarea name="description" class="description_input" style="width: calc(90% - 120px); margin-left: 40px;margin-top: 20px;color: #757575" placeholder="Give a writeup of the idea ..." v-model="description" ref="description_input"></textarea>
            </div>
            <button @click="this.submit_post" style="width: 8vw; padding: 15px;padding-left: 40px; padding-right: 40px;margin-left: 40px;margin-bottom: 50px;margin-top: 25px;" class="btn_submit" >Submit Post</button>
        </div>
    </div>
</template>

<style scoped>
    .new_input {
        all: unset;
        background: white;
        color: black;
        font-weight: 600;
        padding: 20px;
        font-size: 16px;
        border-radius: 100000px;
        /* border: 2px solid #EA4360; */
    }
    .btn_submit {
        all: unset;
        background: transparent;
        border: 2px solid #EA4360;
        border-radius: 10000px;
        text-align: center;
        padding-left: 40px;
        padding-right: 40px;
        cursor: pointer;
        font-weight: 900;
        color: black;
    }
    .btn_submit:hover{
        background: #EA4360;
        color: white;
    }
    textarea:focus {
        outline: 0;
    }
    .description_input {
        min-height: 10vh;
        height: auto;
        background: white;
        color: black;
        font-weight: 500;
        font-size: 16px;
        padding: 15px;
        padding-right: 40px;
        padding-left: 40px;
        text-align: left; 
        border-radius: 0px;
        resize: none;
        text-decoration: none;
        border: none;
        border-radius: 10px;
    }
    .bg_shadow {
        -webkit-animation: shadow-drop-lr 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
            animation: shadow-drop-lr 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
    .show_arrow::after{
        content: '';
        width: 0px; 
        height: 0px;
        position: absolute;
        border-right: 15px solid transparent;
        border-top: 15px solid transparent;
        border-left: 15px solid transparent;
        border-bottom: 15px solid #EA4360;
        top: -30px;
        right: 25px;
        /* -webkit-animation: boxShadowSm 0.1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: boxShadowSm 0.1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both; */
    }
    .inputfile {
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
    }
    .inputfile + label {
        font-size: 16px;
        font-weight: 700;
        color: white;
        background-color: white;
        border-radius: 100000px;
        color: #757575;
        padding: 16px;
        padding-left: 50px;
        padding-right: 50px;
        display: inline-block;
    }

    .inputfile:focus + label,
    .inputfile + label:hover {
        background-color: #EA4360;
        color: white;
    }
    .inputfile + label {
        cursor: pointer; /* "hand" cursor */
    }
    .rotator {
        -webkit-animation: rotator 1s ease-in-out infinite;
	        animation: rotator 1s ease-in-out infinite;
    }

/* Keyframes */

    @-webkit-keyframes shadow-drop-lr {
        0% {
            -webkit-transform: translateZ(0);
                    transform: translateZ(0);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
        }
        100% {
            -webkit-transform: translateZ(50px);
                    transform: translateZ(50px);
            box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.15);
        }
    }
    @keyframes shadow-drop-lr {
        0% {
            -webkit-transform: translateZ(0);
                    transform: translateZ(0);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
        }
        100% {
            -webkit-transform: translateZ(50px);
                    transform: translateZ(50px);
            box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.15);
        }
    }

 @-webkit-keyframes rotator {
        0% {
            transform: rotate(0deg)
        }
        100% {
            transform: rotate(360deg)
        }
    }
    @keyframes rotator {
        0% {
            transform: rotate(0deg)
        }
        100% {
            transform: rotate(360deg)
        }
    }

</style>

<script>

import navbar from '../components/navbar'
import { EventBus } from '../eventBus.js'
import * as firebase from 'firebase'

export default {
    name: 'Admin_Panel',
    components: {
        navbar
    },
    data () {
        return {
            categories: [],
            new_category: '',
            title: '',
            post_tagline: '',
            description: '',
            show_category_selector: false,
            selected_category: 'Choose a category',
            loading: false
        }
    },
    mounted: function () {
        this.initTextAutoSetHeight()
        this.getCategories()
    },
    methods: {
        observe(el, event, handler) {
            if (window.attachEvent) {
                el.attachEvent("on" + event, handler)
            } else {
                el.addEventListener(event, handler, false)
            }
        },
        initTextAutoSetHeight() {
            var text = this.$refs.description_input
            function resize() {
                text.style.height = "auto";
                text.style.height = text.scrollHeight + "px"
            }
            /* 0-timeout to get the already changed text */
            function delayedResize() {
                window.setTimeout(resize, 0)
            }
            this.observe(text, "change", resize)
            this.observe(text, "cut", delayedResize)
            this.observe(text, "paste", delayedResize)
            this.observe(text, "drop", delayedResize)
            this.observe(text, "keydown", delayedResize)

            text.focus()
            text.select()
            resize()
        },
        getCategories () {
            var vm = this
            EventBus.$on('get_categories', resp => {
                vm.categories = resp
                for (let index = 0; index < vm.categories.length; index++) {
                    if(vm.categories[index] == 'All') {
                        vm.categories.splice(index, 1)
                    }
                }
                console.log(vm.categories)
            })
        },
        submit_category () {
            var vm = this
            this.loading = true
            if(this.new_category) {
                var newCat = {
                    new : vm.new_category
                }
                this.$http.post('https://sarc-bphc-backend.herokuapp.com/api/home/new_categorie', newCat).then(resp => {
                    console.log(resp)
                    vm.new_category = ''
                    alert('New Category Added')
                    vm.loading = false
                })
            }
        },
        submit_post () {
            var vm = this
            var d = new Date()
            var t = d.getTime()
            this.loading = true
            var randomString = ''
            var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
            for (let i = 0; i < 5; i++) {
                randomString += possible.charAt(Math.floor(Math.random() * possible.length))
            }
            randomString = randomString + t
            var uc = this.$refs.uploadContent.files[0]
            if (this.title && this.post_tagline && this.description && this.selected_category != 'Choose a category') {
              firebase.storage().ref('post_pics/' + randomString + uc.name).put(uc).then(resp => {
                  resp.ref.getDownloadURL().then(rsp => {
                    console.log(rsp)
                    const data_json = {
                        title: vm.title,
                        bodyText: vm.description,
                        tags: [vm.selected_category],
                        description: vm.post_tagline,
                        image: rsp
                    }
                    this.$http.post('https://sarc-bphc-backend.herokuapp.com/api/home/posts', data_json).then(resp => {
                        console.log(resp)
                        alert('New post Added')
                        vm.loading = false
                    })
                  })
              })

            }
        },
    },
}
</script>
