import Vue from 'vue'
import Router from 'vue-router'
import home from './components/home.vue'

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
            path: '/home',
            name: 'home',
            component: home,
        }
    ]
})