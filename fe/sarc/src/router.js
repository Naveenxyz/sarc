import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home.vue'
import contact from './views/contact.vue'
import news from './views/news.vue'
import bucket from './views/bucket.vue'
import ideahub from './views/ideahub.vue'
import post from './views/post.vue'
import login from './views/login.vue'
import signup from './views/signup.vue'
import admin from './views/admin.vue'
import alumni from './views/alumni_mentors.vue'


Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '*',
            redirect:'home'
        },
        {
            path: '/',
            redirect:'home'
        },
        {
            path: '/home',
            name: 'home',
            component: home,
        },
        {
            path: '/news',
            name: 'news',
            component: news,
        },
        {
            path: '/bucket',
            name: 'bucket',
            component: bucket,
        },
        {
            path: '/contact',
            name: 'contact',
            component: contact,
        },
        {
            path: '/idea_hub',
            name: 'idea_hub',
            component: ideahub,
        },
        {
            path: '/post/:id', 
            component: post,
            name: 'post'
        },
        {
            path: '/login', 
            component: login,
            name: 'login'
        },
        {
            path: '/signup', 
            component: signup,
            name: 'signup'
        },
        {
            path: '/admin', 
            component: admin,
            name: 'admin'
        },
        {
            path: '/mentor_hub', 
            component: alumni,
            name: 'mentor_hub'
        },
    ]
})