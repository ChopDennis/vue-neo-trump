<template>
  <div id="app">
    <div id="nav">
      <router-link to="/device">
        Device
      </router-link>
      <router-link to="/config/wifi">
        Config
      </router-link>
      <router-link to="/system/log">
        System
      </router-link>
    </div>

    <div class="my-3" />

    <router-view />
  </div>
</template>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
        padding: 0.5rem;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
</style>
<script>
    import axios from 'axios'

    export default {
        methods: {
            rebootImam() {
                const baseURL = this.$store.state.url
                axios.post(baseURL + '/api/system/reboot').then(
                    (response) => {
                        alert(response)
                    }
                )
            },
            getUSB() {
                const baseURL = this.$store.state.url
                axios.get(baseURL + '/api/system/usb').then(
                    (response) => {
                        alert(response)
                    }
                )
            },
            getLog() {
                const baseURL = this.$store.state.url
                const request = {
                    "name": "mainframe",
                    "action": "log"
                }
                axios.post(baseURL + '/api/system/systemd', request).then(
                    (response) => {
                        console.log(response)
                    }
                )
            }
        }
    }
</script>
