import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
        path: '/fan',
        name: 'Home',
        component: () => import('../views/PageFanSystem')
    },
    {
        path: '/water',
        name: 'Water',
        component: () => import('../views/PageWaterSystem'),
    },{
        path: '/light',
        name: 'Light',
        component: () => import('../views/PageLightSystem'),
    }, {
        path: '/ac',
        name: 'AC',
        component: () => import('../views/PageACSystem'),
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
