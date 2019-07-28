import Vue from 'vue'
import Router from 'vue-router'
import contact from './views/contact.vue'
import news from './views/news.vue'
import bucket from './views/bucket.vue'
import ideahub from './views/ideahub.vue'
import post from './views/post.vue'
import login from './views/login.vue'
import signup from './views/signup.vue'
import admin from './views/admin.vue'
import alumni from './views/alumni_mentors.vue'
import test from './views/test.vue'
import auth from './auth'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '*',
            redirect:'about'
        },
        {
            path: '/',
            redirect:'news',
        },
        {
            path: '/news',
            name: 'news',
            component: news,
            beforeEnter: (to, from, next) => {
                var auth_token = localStorage.getItem('auth_token')
                if (auth_token) {
                    next()
                    Vue.http.headers.common['Authorization'] = 'Bearer ' +  auth_token
                    Vue.http.get('https://sarc-bphc-backend.herokuapp.com/api/auth').then( resp => {
                        if (resp) {
                            next()
                            console.log(resp)
                            if (resp.body == 'no') {
                                next({path: 'login'})
                            }
                        }else {
                            next({path: 'login'})
                        }
                    })
                } else {
                    next({path: 'login'})
                }
            }
        },
        {
            path: '/bucket',
            name: 'bucket',
            component: bucket,
            beforeEnter: (to, from, next) => {
                var auth_token = localStorage.getItem('auth_token')
                console.log(auth_token)
                if (auth_token) {
                    next()
                    Vue.http.headers.common['Authorization'] = 'Bearer ' +  auth_token
                    Vue.http.get('https://sarc-bphc-backend.herokuapp.com/api/auth').then( resp => {
                        if (resp) {
                            next()
                        }else {
                            next({path: 'login'})
                        }
                    })
                } else {
                    next({path: 'login'})
                }
            }
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
        {
            path: '/test', 
            component: test,
            name: 'test'
        },
    ]
})