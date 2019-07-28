<template>
    <div class="bage_body" style="display: flex; flex-direction: row;">
        <navbar style="position: fixed;" />
        <div class="sidebar" style="width: 20vw;">
            <div style="width: auto; height: 80vh;position: fixed; top: 15vh; left: 2vw;">
                <button class="btn-new" style="margin-top: 4vh;">New Post</button>
            </div>
        </div>
        <div style="display: flex; flex-direction: column;margin-left: auto; margin-right: auto;margin-top: 20vh;width: 80vw;" class="main_body">
            <!-- <div style="display: flex;flex-direction: column; margin-top: 20vh;background: #333333; width: 60vw;height: auto; align-self: center;border-radius: 10px;" class="create_post">
                <div style="display: flex; flex-direction: row;width: 60vw;" class="post_heading">
                    <p style="color: white; padding: 5px;font-size: 18px;font-weight: 900;padding-left: 40px;">Post your idea</p>
                    <img v-if="this.show_post_cat" @click="show_post_cat = false" src="../assets/cross.png" style="height: 12px; width: 12px;margin-left: auto;align-self: center;margin-right: 40px;cursor: pointer;" alt="">
                </div>
                <textarea :class="{'height_10': !show_post_cat}" @click="show_post_cat = true" ref="post_body" placeholder="Write your idea in your own words " name="" style="width: calc(60vw - 80px);resize: none;margin: 0px;border: none;text-decoration: none;background: #eeeeee;padding: 40px;font-size: 18px; color: black;"></textarea>
                <p v-if="this.show_post_cat" style="color: #959595; font-size: 18px; font-weight: 500; text-align: left;padding-left: 40px;padding-top: 20px;">Add an image to better suit your idea an argument. </p>
                <div v-if="this.show_post_cat" style="margin-right: auto;width: auto;background: transparent;margin-left: 40px;margin-top: 10px; margin-bottom: 10px;display: flex; flex-direction: row;">
                    <input type="file" name="file" id="file" style="width: 0.1px; height: 0.1px; opacity: 0;z-index: -1;overflow: hidden;" ref="uploadContent" class="inputfile" />
                    <label class="bg_hover_light" style="margin-right: auto;cursor: pointer;border: 1px solid #eeeeee;padding: 10px 35px 10px 35px;align-self: center;border-radius: 1000000px;font-size: 15px;" for="file">Pick a picture</label>
                    <p style="color: white;margin-left: 40px;">{{this.pic_name}}</p>
                </div>
                <p v-if="this.show_post_cat" style="color: #959595; font-size: 18px; font-weight: 500; text-align: left;padding-left: 40px;padding-top: 20px;">Select a category you want to post it in</p>
                <button v-if="this.show_post_cat" class="btn" style="padding: 10px 40px 10px 40px;margin-right: auto;text-align: center;margin-left: 40px;border: 1px solid #eeeeee;border-radius: 1000000px;margin-top: 15px;margin-bottom: 30px;cursor: pointer;">Post</button>
            </div> -->
            <div style="align-self: center;margin-top: (4vh-50px);margin-bottom: 10vh;display: flex; flex-direction: column" class="view_posts">
                <div class="post_main" style="width: 60vw;height: auto;border-radius: 10px;background: transparent;display: flex; flex-direction: column;">
                    <img class="post_img" style="width: 60vw;hight: auto;border-radius: 10px;max-height: 70vh;" src="https://firebasestorage.googleapis.com/v0/b/myownproject-7c0c9.appspot.com/o/images%2F4.jpg?alt=media&token=03bdb984-f03c-475a-9304-62d4e84f66bc" alt="">
                    <div style="width: 60vw;height: 10vh;background: #eeeeee;z-index: 99;transform: translateY(-15vh);"></div>
                </div>
                <div class="post_main" style="width: 60vw;height: auto;border-radius: 10px;background: transparent;display: flex; flex-direction: column;">
                    <img class="post_img" style="width: 60vw;hight: auto;border-radius: 10px;max-height: 70vh;" src="https://firebasestorage.googleapis.com/v0/b/myownproject-7c0c9.appspot.com/o/images%2F4.jpg?alt=media&token=03bdb984-f03c-475a-9304-62d4e84f66bc" alt="">
                    <div style="width: 60vw;height: 10vh;background: #eeeeee;z-index: 99;transform: translateY(-15vh);"></div>
                </div>
                <div class="post_main" style="width: 60vw;height: auto;border-radius: 10px;background: transparent;display: flex; flex-direction: column;">
                    <img class="post_img" style="width: 60vw;hight: auto;border-radius: 10px;max-height: 70vh;" src="https://firebasestorage.googleapis.com/v0/b/myownproject-7c0c9.appspot.com/o/images%2F4.jpg?alt=media&token=03bdb984-f03c-475a-9304-62d4e84f66bc" alt="">
                    <div style="width: 60vw;height: 10vh;background: #eeeeee;z-index: 99;transform: translateY(-15vh);"></div>
                </div>
                <div class="post_main" style="width: 60vw;height: auto;border-radius: 10px;background: transparent;display: flex; flex-direction: column;">
                    <img class="post_img" style="width: 60vw;hight: auto;border-radius: 10px;max-height: 70vh;" src="https://firebasestorage.googleapis.com/v0/b/myownproject-7c0c9.appspot.com/o/images%2F4.jpg?alt=media&token=03bdb984-f03c-475a-9304-62d4e84f66bc" alt="">
                    <div style="width: 60vw;height: 10vh;background: #eeeeee;z-index: 99;transform: translateY(-15vh);"></div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
    textarea:focus{
        outline: 0;
    }
    .btn {
        all: unset;
        background: #eeeeee;
        transition: 0.2s;
    }
    .btn-new{
        all: unset;
        align-self: unset;
        color: black;
        border: 2px solid #EA4360;
        background: transparent;
        padding: 15px 40px 15px 40px;
        font-size: 18px;
        font-weight: 700;
        /* margin-left: 2vw; */
        cursor: pointer;
        border-radius: 1000000px;
    }
    .btn-new:hover{
        background: #EA4360;
        color: white;
    }
    .btn:hover{
        transform: scale(1.2) translateX(12px);
        transition: 0.2s;
    }
    .bg_hover_light {
        color: #eeeeee
    }
    .bg_hover_light:hover {
        background: #eeeeee;
        color: black;
    }
    .autoHeight{
        height: auto;
    }
    .height_10{
        height: 30px !important
    }
    .post_img {
        -webkit-animation: shadow-drop-lr 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        animation: shadow-drop-lr 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
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
</style>

<script>

import navbar from '../components/navbar'

export default {
    name: 'test',
    components: {
        navbar
    },
    data () {
        return {
            posts: [
                {
                    id: 'asdasdaieiuwdnoudoiehtnokmxoufhm',
                }
            ],
            pic_name: 'No Picture Selected',
            show_post_cat: false
        }
    },
    mounted: function () {
        this.initTextAutoSetHeight()
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
            var text = this.$refs.post_body
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
    }
}
</script>
