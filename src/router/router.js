import Vue from 'vue'
import VueRouter from 'vue-router'
import Device from '../components/Device.vue'
import Value from '../components/Value.vue'
import Wifi from '../components/Wifi.vue'
import Driver from '../components/Driver.vue'
import ImamLog from "../components/ImamLog";

Vue.use(VueRouter)

const routes = [
    {
        path: '/device',
        name: 'Device',
        component: Device
    }, {
        path: '/config',
        name: 'config',
        component: () => import('../views/PageConfigList'),
        children: [
            {
                path: 'io',
                component: () => import('../views/PageConfigIo'),
            },
            {
                path: 'ini',
                component: () => import('../views/PageConfigIni'),
            },{
                path: 'wifi',
                component: () => import('../views/PageConfigWifi'),
            },
        ]

    }, {
        path: '/wifi-config',
        name: 'Wifi',
        component: Wifi
    }, {
        path: '/driver-config',
        name: 'Driver',
        component: Driver
    }, {
        path: '/value',
        name: 'Value',
        component: Value
    }, {
        path: '/imam-log',
        name: 'ImamLog',
        component: ImamLog
    },
    {
        path: '/io-config',
        name: 'IOConfig',
        component: () => import('../views/PageConfigIo')
    },
    {
        path: '/ini-config',
        name: 'IniConfig',
        component: () => import('../views/PageConfigIni')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
