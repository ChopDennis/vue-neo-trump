import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'
import VueAxios from "vue-axios";

axios.defaults.withCredentials = true
Vue.use(VueAxios, axios)

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        // url: 'http://192.168.6.235',
        url: '',
        device: {
            port: "",
            address: ""
        },
        config: {
            io: {
                data: {}
            },
            ini: {
                data: {}
            },
            wifi: {
                data: {}
            }

        },
        system: {
            mainframe: {
                toggled: true
            }

        }
    },
    mutations: {
        getDevice(state, {port, address}) {
            state.device.port = port
            state.device.address = address
        },
        getIoConfigData(state) {
            axios.get(state.url + '/api/config/io').then(
                (response) => {
                    state.config.io.data = response.data

                }
            ).catch(
                (error) => {
                    console.log(error)
                }
            )
        },
        getIniConfigData(state, payload) {
            axios.get(state.url + '/api/config/ini/' + payload).then(
                (response) => {
                    state.config.ini.data = response.data
                }
            ).catch(
                (error) => {
                    console.log(error)
                }
            )
        },
        getWifiConfigData(state) {
            axios.get(state.url + '/api/config/network').then(
                (response) => {
                    state.config.wifi.data = response.data
                }
            ).catch(
                (error) => {
                    console.log(error)
                }
            )
        },
        insertWifiConfigInput(state) {
            state.config.wifi.data.push(
                {
                    ssid: "",
                    psk: "",
                    key_mgmt: "WPA-PSK",
                    priority: 0
                }
            )
        },
        postWifiConfig(state) {
            let postValid = false
            state.config.wifi.data.forEach((item) => {
                    console.log(item.ssid + item.psk)
                    if (item.ssid && item.psk) {
                        postValid = true
                        console.log(postValid)
                    }
                    else {
                        alert("錯誤，禁止輸入空格！")
                        postValid = false
                        console.log(postValid)
                    }
                }
            )
            if(postValid){
                axios.post(state.url + '/api/config/network', state.config.wifi.data).then(
                    (response) => {
                        if (response.status === 200) {
                            console.log(response.data)
                            alert("網路設定更新成功！")
                        }
                    }
                ).catch(
                    (error) => {
                        console.log(error)
                    }
                )
            }

        }
    },
    getters: {
        ioConfigOptions: state => {
            return Object.keys(state.config.io.data)
        },
        ioConfigData: state => {
            return state.config.io.data
        },
        iniConfigData: state => {
            return state.config.ini.data
        },
        wifiConfigData: state => {
            return state.config.wifi.data
        }

    }
})