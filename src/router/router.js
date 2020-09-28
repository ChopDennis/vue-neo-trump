import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/PageFanSystem')
    },
    {
        path: '/on-off',
        name: 'OnOff',
        component: () => import('../views/PagePowerController'),
    },
    {
        path: '/status',
        name: 'Status',
        component: () => import('../views/PageDeviceStatus'),
    }, {
        path: '/system',
        name: 'System',
        component: () => import('../views/PageWaterSystem'),
    },{
        path: '/light',
        name: 'Light',
        component: () => import('../views/PageLightList'),
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
