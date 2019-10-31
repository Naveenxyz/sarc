import Vue from 'vue'
import Router from 'vue-router'
import contact from './views/contact.vue'
import news from './views/news.vue'
import techclubs from './views/techclubs.vue'
import CIIE from './views/CIIE.vue'
import campusevents from './views/campusevents.vue'
import aluminievents from './views/aluminievents.vue'
import socialservice from './views/socialservice.vue'
import merchandise from './views/merchandise.vue'
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
                    Vue.http.headers.common['Authorization'] = 'Bearer ' +  auth_token
                    Vue.http.get('https://sarc-bphc-backend.herokuapp.com/api/auth').then( resp => {
                        if (resp) {
                            if (resp.body == 'no') {
                                next({path: 'login'})
                            } else{
                                next()
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
                if (auth_token) {
                    Vue.http.headers.common['Authorization'] = 'Bearer ' +  auth_token
                    Vue.http.get('https://sarc-bphc-backend.herokuapp.com/api/auth').then( resp => {
                        if (resp) {
                            if (resp.body == 'no') {
                                next({path: 'login'})
                            } else{
                                next()
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
            path: '/contact',
            name: 'contact',
            component: contact,
            beforeEnter: (to, from, next) => {
                var auth_token = localStorage.getItem('auth_token')
                if (auth_token) {
                    Vue.http.headers.common['Authorization'] = 'Bearer ' +  auth_token
                    Vue.http.get('https://sarc-bphc-backend.herokuapp.com/api/auth').then( resp => {
                        if (resp) {
                            if (resp.body == 'no') {
                                next({path: 'login'})
                            } else{
                                next()
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
            path: '/Technical_Clubs',
            name: 'Technical_Clubs',
            component: techclubs,
            beforeEnter: (to, from, next) => {
                var auth_token = localStorage.getItem('auth_token')
                if (auth_token) {
                    Vue.http.headers.common['Authorization'] = 'Bearer ' + auth_token
                    Vue.http.get('https://sarc-bphc-backend.herokuapp.com/api/auth').then(resp => {
                        if (resp) {
                            if (resp.body == 'no') {
                                next({ path: 'login' })
                            } else {
                                next()
                            }
                        } else {
                            next({ path: 'login' })
                        }
                    })
                } else {
                    next({ path: 'login' })
                }
            }
        },
        {
            path: '/CIIE',
            name: 'CIIE',
            component: CIIE,
            beforeEnter: (to, from, next) => {
                var auth_token = localStorage.getItem('auth_token')
                if (auth_token) {
                    Vue.http.headers.common['Authorization'] = 'Bearer ' + auth_token
                    Vue.http.get('https://sarc-bphc-backend.herokuapp.com/api/auth').then(resp => {
                        if (resp) {
                            if (resp.body == 'no') {
                                next({ path: 'login' })
                            } else {
                                next()
                            }
                        } else {
                            next({ path: 'login' })
                        }
                    })
                } else {
                    next({ path: 'login' })
                }
            }
        },
        {
            path: '/Campus_Events',
            name: 'Campus_Events',
            component: campusevents,
            beforeEnter: (to, from, next) => {
                var auth_token = localStorage.getItem('auth_token')
                if (auth_token) {
                    Vue.http.headers.common['Authorization'] = 'Bearer ' + auth_token
                    Vue.http.get('https://sarc-bphc-backend.herokuapp.com/api/auth').then(resp => {
                        if (resp) {
                            if (resp.body == 'no') {
                                next({ path: 'login' })
                            } else {
                                next()
                            }
                        } else {
                            next({ path: 'login' })
                        }
                    })
                } else {
                    next({ path: 'login' })
                }
            }
        },
        {
            path: '/Alumini_Events',
            name: 'Alumini_Events',
            component: aluminievents,
            beforeEnter: (to, from, next) => {
                var auth_token = localStorage.getItem('auth_token')
                if (auth_token) {
                    Vue.http.headers.common['Authorization'] = 'Bearer ' + auth_token
                    Vue.http.get('https://sarc-bphc-backend.herokuapp.com/api/auth').then(resp => {
                        if (resp) {
                            if (resp.body == 'no') {
                                next({ path: 'login' })
                            } else {
                                next()
                            }
                        } else {
                            next({ path: 'login' })
                        }
                    })
                } else {
                    next({ path: 'login' })
                }
            }
        },
        {
            path: '/Social_service',
            name: 'Social_service',
            component: socialservice,
            beforeEnter: (to, from, next) => {
                var auth_token = localStorage.getItem('auth_token')
                if (auth_token) {
                    Vue.http.headers.common['Authorization'] = 'Bearer ' + auth_token
                    Vue.http.get('https://sarc-bphc-backend.herokuapp.com/api/auth').then(resp => {
                        if (resp) {
                            if (resp.body == 'no') {
                                next({ path: 'login' })
                            } else {
                                next()
                            }
                        } else {
                            next({ path: 'login' })
                        }
                    })
                } else {
                    next({ path: 'login' })
                }
            }
        },
        {
            path: '/Merchandise',
            name: 'Merchandise',
            component: merchandise,
            beforeEnter: (to, from, next) => {
                var auth_token = localStorage.getItem('auth_token')
                if (auth_token) {
                    Vue.http.headers.common['Authorization'] = 'Bearer ' + auth_token
                    Vue.http.get('https://sarc-bphc-backend.herokuapp.com/api/auth').then(resp => {
                        if (resp) {
                            if (resp.body == 'no') {
                                next({ path: 'login' })
                            } else {
                                next()
                            }
                        } else {
                            next({ path: 'login' })
                        }
                    })
                } else {
                    next({ path: 'login' })
                }
            }
        },
        {
            path: '/idea_hub',
            name: 'idea_hub',
            component: ideahub,
            beforeEnter: (to, from, next) => {
                var auth_token = localStorage.getItem('auth_token')
                if (auth_token) {
                    Vue.http.headers.common['Authorization'] = 'Bearer ' +  auth_token
                    Vue.http.get('https://sarc-bphc-backend.herokuapp.com/api/auth').then( resp => {
                        if (resp) {
                            if (resp.body == 'no') {
                                next({path: 'login'})
                            } else{
                                next()
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
            path: '/post/:id', 
            component: post,
            name: 'post',
            beforeEnter: (to, from, next) => {
                var auth_token = localStorage.getItem('auth_token')
                if (auth_token) {
                    Vue.http.headers.common['Authorization'] = 'Bearer ' +  auth_token
                    Vue.http.get('https://sarc-bphc-backend.herokuapp.com/api/auth').then( resp => {
                        if (resp) {
                            if (resp.body == 'no') {
                                next({path: 'login'})
                            } else{
                                next()
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
            name: 'admin',
            beforeEnter: (to, from, next) => {
                var auth_token = localStorage.getItem('auth_token')
                if (auth_token) {
                    Vue.http.headers.common['Authorization'] = 'Bearer ' +  auth_token
                    Vue.http.get('https://sarc-bphc-backend.herokuapp.com/api/auth').then( resp => {
                        if (resp) {
                            if (resp.body == 'no') {
                                next({path: 'login'})
                            } else{
                                if(resp.body.authdata.user.role == 'admin'){
                                    next()
                                } else {
                                    next({path: 'news'})
                                }
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
            path: '/mentor_hub', 
            component: alumni,
            name: 'mentor_hub',
            beforeEnter: (to, from, next) => {
                var auth_token = localStorage.getItem('auth_token')
                if (auth_token) {
                    Vue.http.headers.common['Authorization'] = 'Bearer ' +  auth_token
                    Vue.http.get('https://sarc-bphc-backend.herokuapp.com/api/auth').then( resp => {
                        if (resp) {
                            if (resp.body == 'no') {
                                next({path: 'login'})
                            } else{
                                next()
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
            path: '/test', 
            component: test,
            name: 'test'
        },
    ]
})
