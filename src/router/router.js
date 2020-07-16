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
            }
        ]
    },{
        path: '/value',
        name: 'Value',
        component: Value
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
