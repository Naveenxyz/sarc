<template>
    <div class="post_page_body">
        <navbar style="position: fixed;" />
        <div class="main">
            <div style="width: 100vw;position: relative;margin-top: 0px;background: transparent;height: auto;" class="top_img">
                <img :src="this.image" style="width: 100vw; height: auto;max-height: 90vh;object-fit: fit;" alt="">
                <div @click="$router.push('/news')" style="position: absolute;top: 20vh; left: 20px;width: 40px;height: 40px; border-radius: 50%;background: white;display: flex; flex-direction : column;cursor: pointer;box-shadow: 0 0 30px 0px rgba(0, 0, 0, 0.55);">
                    <img src="../assets/pointer_alt_left.png" style="width: 15px; height: 20px;align-self: center;margin-top: auto;margin-bottom: auto;" alt="">
                </div>
                <div class="top_items" style="display: flex; flex-direction: row;margin-top: 40px;">
                    <div style="display: flex; flex-direction:column;align-self: center;">
                        <p style="font-size: 24px;font-weight: 900;color: black;padding: 0px;margin: 0px;padding-left: 5vw;text-align: left;">{{ this.title }}</p>
                        <p style="font-size: 17px;font-weight: 400;color: #9E9E9E;padding: 0px;margin: 0px;padding-left: calc(5vw);padding-top: 10px;text-align: left;">{{ this.description }}</p>
                    </div>
                    <div style="margin-left: auto;margin-right: 40px;display: flex; flex-direction: row;align-self: center;">
                        <button style="all: unset;padding: 20px;font-size: 17px;color:white; background: #E34848;padding-left: 40px;padding-right: 40px;border-radius: 100000px;align-self: center;cursor: pointer;box-shadow: 5px 5px 7px 0px rgba(0, 0, 0, 0.15);">Connect With Student</button>
                        <img src="../assets/bucket.svg" style="width: 30px; height: 30px;align-self: center;margin-left: 30px;cursor: pointer;" alt="">
                        <img src="../assets/star.svg" style="width: 30px; height: 30px;align-self: center;margin-left: 30px;cursor: pointer;" alt="">
                    </div>
                </div>
                <pre style="line-height: 22px;font-size: 16px;font-family: 'Quicksand'; padding: 70px; white-space: pre-wrap;text-align: left;">{{ this.bodyText }}</pre>
                <div class="comments_section" style="margin-top: 10vh;margin-bottom: 10vh;text-align: left;margin-left: 5vw;">
                    <p style="font-weight: 900;color: black;font-size: 22px;padding: 0px; margin: 0px;text-align: left;">Comments</p> <br> <br>
                    <textarea class="comment_input" name="Comment" v-model="comment_input" ref="comment_input" placeholder="What are your thoughts ??"></textarea> <br>
                    <button @click="this.send_comment" style="padding: 15px;background: #E34848;color: white;font-weight: 500;font-size: 18px; margin-top: 20px;cursor: pointer;border-radius: 100000px;padding-left: 30px; padding-right: 30px;">Comment</button>
                    <div class="main_comments">
                        <div v-for="(sc, i) in this.comments" :key="i" class="single_comment_cont" style="display: flex;margin-top: 7vh;margin-bottom: 7vh;">
                            <div style="width: 50px; height: 50px;margin-right: 25px;">
                                <img style="width: 50px;height: 50px;margin-right: 25px;background: grey;border-radius: 50%;align-self: flex-start;" :src="sc.img" />
                            </div>
                            <div style="display: flex; flex-direction: column;align-self: center;">
                                <div style="display: flex;flex-direction: row;margin: 0px; padding: 0px;align-self: flex-start;">
                                    <p style="font-size: 20px;padding-right: 20px;color: black;font-weight: 900;align-self: center;margin-top: 0px;">{{ sc.name }}</p>
                                    <p style="font-size: 20px;padding-left: 0px;color: #777;font-weight: 900;align-self: center;margin-top: 0px;">{{ getTimeInSec(sc.time) }} ago</p>
                                </div>
                                <span style="padding: 0px;margin: 0px;align-self: flex-start;padding-right: 10vw;align-self: flex-start;white-space: pre-line;">{{ sc.comment }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import navbar from '../components/navbar.vue'
import { EventBus } from '../eventBus';

export default {
    name: 'Post',
    data () {
        return {
            postID: this.$route.params.id,
            commentDueDates: [],
            bucket: false,
            stared: false,
            stars: 123,
            image: '',
            bodyText: '',
            title: '',
            description: '',
            comment_input: '',
            comments: [
                // {
                //     name: 'Naveen Kumar',
                //     time: 1560719012235,
                //     comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur porro minima voluptate voluptatibus ea, accusantium fuga inventore accusamus exercitationem. Dignissimos?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur porro minima voluptate voluptatibus ea, accusantium fuga inventore accusamus exercitationem. Dignissimos?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur porro minima voluptate voluptatibus ea, accusantium fuga inventore accusamus exercitationem. Dignissimos?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur porro minima voluptate voluptatibus ea, accusantium fuga inventore accusamus exercitationem. Dignissimos?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur porro minima voluptate voluptatibus ea, accusantium fuga inventore accusamus exercitationem. Dignissimos?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur porro minima voluptate voluptatibus ea, accusantium fuga inventore accusamus exercitationem. Dignissimos?',
                //     img: 'https://firebasestorage.googleapis.com/v0/b/myownproject-7c0c9.appspot.com/o/images%2F1.jpg?alt=media&token=9c0d59d9-9dd8-4ee9-976f-9f0567e28c43'
                // },
                // {
                //     name: 'Suraj Thotakura',
                //     time: 1560709012235,
                //     comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur porro minima voluptate voluptatibus ea, accusantium fuga inventore accusamus exercitationem. Dignissimos',
                //     img: 'https://firebasestorage.googleapis.com/v0/b/myownproject-7c0c9.appspot.com/o/images%2F2.jpg?alt=media&token=9ca13bd8-0f98-4049-ada8-c5c375140d05'
                // },
                // {
                //     name: 'Vamsi Krishna',
                //     time: 1560719112235,
                //     comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur porro minima voluptate voluptatibus ea, accusantium fuga inventore accusamus exercitationem. Dignissimos',
                //     img: 'https://firebasestorage.googleapis.com/v0/b/myownproject-7c0c9.appspot.com/o/images%2F3.jpg?alt=media&token=678d67d8-a874-4d2a-96fc-f0f0bb8c66ef'
                // },
                // {
                //     name: 'Jayakanth',
                //     time: 1559719002235,
                //     comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur porro minima voluptate voluptatibus ea, accusantium fuga inventore accusamus exercitationem. DignissimosLorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur porro minima voluptate voluptatibus ea, accusantium fuga inventore accusamus exercitationem. Dignissimos',
                //     img: 'https://firebasestorage.googleapis.com/v0/b/myownproject-7c0c9.appspot.com/o/images%2F3.jpg?alt=media&token=678d67d8-a874-4d2a-96fc-f0f0bb8c66ef'
                // },
            ]
        }
    },
    components: {
        navbar
    },
    mounted: function () {
        this.getData()
        this.initTextAutoSetHeight();
        // this.TimeMaker()
        this.listenToEventBus()
    },
    methods: {
        getData () {
           console.log(this.postID)
           var vm = this
           this.$http.get('https://sarc-bphc-backend.herokuapp.com/api/home/posts/' + vm.postID).then( res => {
               console.log(res.body[0])
                vm.title = res.body[0].title
                vm.description = res.body[0].description
                vm.image = res.body[0].image
                vm.bodyText = res.body[0].bodyText
                vm.comments = res.body[0].comments
           })
        },
        dateConverter (milliseconds) {
            var day, hour, minute, seconds
            seconds = Math.floor(milliseconds / 1000)
            minute = Math.floor(seconds / 60)
            seconds = seconds % 60
            hour = Math.floor(minute / 60)
            minute = minute % 60
            day = Math.floor(hour / 24)
            hour = hour % 24
            return {
                day: day,
                hour: hour,
                minute: minute,
                seconds: seconds
            }
        },
        getTimeInSec (a) {
            var vm = this
            var d = new Date
            var t = d.getTime()
            if ( vm.dateConverter(t - a).day ) {
                return (vm.dateConverter(t - a).day + ' days')
            } else {
                if ( vm.dateConverter(t - a).hour ) {
                    return (vm.dateConverter(t - a).hour + ' hours')
                } else {
                    if ( vm.dateConverter(t - a).minute ) {
                        return (vm.dateConverter(t - a).minute + ' minutes')
                    } else {
                        return (vm.dateConverter(t - a).seconds + ' seconds')
                    }
                }
            }
        },
        observe(el, event, handler) {
            if (window.attachEvent) {
                el.attachEvent("on" + event, handler);
            } else {
                el.addEventListener(event, handler, false);
            }
        },
        initTextAutoSetHeight() {
            var text = this.$refs.comment_input;
            function resize() {
                text.style.height = "auto";
                text.style.height = text.scrollHeight + "px";
            }
            /* 0-timeout to get the already changed text */
            function delayedResize() {
                window.setTimeout(resize, 0);
            }
            this.observe(text, "change", resize);
            this.observe(text, "cut", delayedResize);
            this.observe(text, "paste", delayedResize);
            this.observe(text, "drop", delayedResize);
            this.observe(text, "keydown", delayedResize);

            text.focus();
            text.select();
            resize();
        },
        listenToEventBus() {
            var vm = this
            EventBus.$on("newComment", comment_resp => {
                vm.comments.push(comment_resp)
            });
        },
        
        send_comment () {
            this.$http.headers.common['Authorization'] = 'Bearer ' +  localStorage.getItem('auth_token')
            var date = new Date
            var time = date.getTime()
            var vm = this
            this.$http.get('https://sarc-bphc-backend.herokuapp.com/api/auth').then( resp => {
                if (resp.body.authdata.user.username.length) {
                    EventBus.$emit("comment", {
                        comment: vm.comment_input,
                        name: resp.body.authdata.user.username,
                        time: time,
                        id: vm.postID,
                        img: 'https://firebasestorage.googleapis.com/v0/b/myownproject-7c0c9.appspot.com/o/images%2F3.jpg?alt=media&token=678d67d8-a874-4d2a-96fc-f0f0bb8c66ef'
                    });
                    this.comment_input = "";
                }else {
                    alert('no no')
                }
            })
        }
    }
}

</script>

<style scoped>
    .main {
        -webkit-animation: fadeAnim 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: fadeAnim 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    }
    textarea:focus {
        outline: 0;
    }
    .comment_input {
        width: 80vw;
        height: auto;
        background: #F1F1F1;
        color: #444;
        font-weight: 500;
        font-size: 18px;
        padding: 15px;
        padding-right: 40px;
        padding-left: 40px;
        text-align: left; 
        border-radius: 0px;
        resize: none;
        text-decoration: none;
        border: none;
    }
    .main_comments {
        margin-top: 10vh;
    }
/* Keyframes */

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

