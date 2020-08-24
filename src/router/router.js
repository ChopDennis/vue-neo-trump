import Vue from 'vue'
import VueRouter from 'vue-router'
import Value from '../components/Value.vue'
Vue.use(VueRouter)

const routes = [
    {
        path: '/device',
        name: 'Device',
        component: () => import('../components/Device'),
        children: [
            {
                path: ':port/:address',
                component: ()=>import('../views/PageDeviceValue')
            }
        ]
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
            }, {
                path: 'wifi',
                component: () => import('../views/PageConfigWifi')
            },
            {
                path: 'driver',
                component: () => import('../components/Driver')
            }
        ]

    },{
        path: '/system',
        name: 'system',
        component:()=>import('../views/PageSystemControl'),
        children: [
            {
                path: 'log',
                component: ()=>import('../components/SystemLogDisplay')
            },
            {
                path: 'check',
                component:()=>import('../components/SystemCheckStatus')
            },
            {
                path: 'mainframe',
                component:()=>import('../components/SystemMainframe')
            },
            {
                path: 'hostname',
                component:()=>import('../components/SystemHostname')
            },
            {
                path: 'real-time',
                component:()=>import('../components/SystemRealTime')
            }
        ]
    },{
        path: '/value',
        name: 'Value',
        component: Value
    },
    {
        path: '/on-off',
        name: 'OnOff',
        component: () => import('../components/SystemOnOffControl')
    },{
        path: '/demo',
        name: 'Demo',
        component: () => import('../views/PageDemoList')
    },{
        path: '/light',
        name: 'Light',
        component: () => import('../views/PageLightList')
    },{
        path: '/a',
        name: 'A',
        component: () => import('../views/test/A')
    },{
        path: '/b',
        name: 'B',
        component: () => import('../views/test/B')
    },{
        path: '/c',
        name: 'C',
        component: () => import('../views/test/C')
    },{
        path: '/d',
        name: 'D',
        component: () => import('../views/test/D')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
