<template>
  <b-container>
    <b-card bg-variant="light">
      <h4>
        <span class="fa fa-list-alt mx-3" />
        系統日誌
      </h4>
      <div
        class="bg-white border-info border p-3 rounded-lg overflow-auto"
        style="max-height: 80vh"
      >
        <pre class="text-left">{{ response.log }}</pre>
      </div>

      <h4 class="mt-5">
        <span class="fa fa-usb mx-3" />
        USB 外接裝置紀錄
      </h4>
      <div
        class="bg-white border-info border p-3 rounded-lg overflow-auto "
        style="max-height: 80vh"
      >
        <pre class="text-left">{{ response.usb }}</pre>
      </div>
    </b-card>
  </b-container>
</template>

<script>
    import axios from "axios";

    export default {
        name: "ElementLogDisplay",
        data: () => {
            return {
                response: {
                    log: '',
                    usb: ''
                }
            }
        },
        beforeMount() {
            const baseURL = this.$store.state.url
            const request = {
                name: "mainframe",
                action: "log"
            }
            axios.post(baseURL + '/api/system/systemd', request).then(
                (response) => {
                    this.response.log = response.data.message
                }
            )
            axios.get(baseURL + '/api/system/usb',).then(
                (response) => {
                    this.response.usb = response.data.message
                }
            )
        }
    }
</script>

<style scoped>

</style>