<template>
  <b-container>
    <div id="nav">
      <router-link to="/system/log">
        Log
      </router-link>
      <router-link to="/system/mainframe">
        Mainframe
      </router-link><router-link to="/system/hostname">
        Hostname
      </router-link>
    </div>
    <router-view />
    <b-btn
            class="my-3 btn-danger"
            @click="reboot"
    >
      Reboot System
    </b-btn>
  </b-container>
</template>
<script>
    import axios from "axios";

    export default {
        name: "PageSystemControl",
        methods:{
            reboot() {
                axios.get(this.$store.state.url+'/api/system/reboot').then(
                    (response) => {
                        console.log(response)
                    }
                ).catch((error) => {
                    console.log(error)
                })
            },
        }
    }
</script>

<style scoped>
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