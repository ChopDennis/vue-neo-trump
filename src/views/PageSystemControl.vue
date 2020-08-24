<template>
  <b-container>
    <div id="nav">
      <router-link to="/system/log">
        系統日誌
      </router-link>
      <router-link to="/system/mainframe">
        主機控制
      </router-link>
      <router-link to="/system/real-time">
        即時資料
      </router-link>
    </div>
    <router-view />
    <b-button class="my-3 btn-danger" v-b-modal.reboot-alert>重啟系統</b-button>

    <b-modal id="reboot-alert" title="警告" hide-footer header-bg-variant="danger" header-text-variant="white">
      <p class="my-4 text-center">確定重啟系統？</p>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal">是</b-button>
      <b-button class="mt-3" variant="outline-info" block @click="reboot">否</b-button>

    </b-modal>
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
          hideModal() {
            this.$refs['reboot-alert'].hide()
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