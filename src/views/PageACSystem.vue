<template>
  <main class="py-3">
    <b-btn
      variant="info"
      class="font-weight-bold mb-3"
      @click="reloadPage"
    >
      手動重整系統
    </b-btn>
    <b-overlay
      fixed
      :show="show"
      no-wrap
      variant="dark"
      spinner-variant="light"
    />
    <b-modal
      ref="device-error"
      hide-footer
      header-bg-variant="dark"
      header-text-variant="white"
      centered
      title="系統訊息"
    >
      <p class="my-4 text-center">
        燈光設備正在關閉，請稍等網頁重整...。
      </p>
    </b-modal>
    <b-container>
      <b-row>
        <b-col lg="6">
          <b-row
            v-for="(item,index) in defaultTable['15']"
            :key="'15-'+index"
            style="background-color: #343a40"
            class="rounded-lg border-0 text-white font-weight-bold mb-3 mx-1"
          >
            <b-col
              cols="8"
              class="text-lg-center text-left py-2"
              style="line-height: 2.5rem"
            >
              {{ item.name }}
            </b-col>
            <b-col cols="4">
              <ElementSwitchToggle
                class="mt-2"
                :toggled.sync="item.status"
                @toggleButton="toggleLightSystem(index+1,item.status,15)"
              />
            </b-col>
          </b-row>
        </b-col>
        <b-col lg="6">
          <b-row
            v-for="(item,index) in defaultTable['16']"
            :key="'16-'+index"
            style="background-color: #343a40"
            class="rounded-lg border-0 text-white font-weight-bold mb-3 mx-1"
          >
            <b-col
              cols="8"
              class="text-lg-center text-left py-2"
              style="line-height: 2.5rem"
            >
              {{ item.name }}
            </b-col>
            <b-col cols="4">
              <ElementSwitchToggle
                class="mt-2"
                :toggled.sync="item.status"
                @toggleButton="toggleLightSystem(index+1,item.status,16)"
              />
            </b-col>
          </b-row>
          <b-row
            v-for="(item,index) in defaultTable['17']"
            :key="'17-'+index"
            style="background-color: #343a40"
            class="rounded-lg border-0 text-white font-weight-bold mb-3 mx-1"
          >
            <b-col
              cols="8"
              class="text-lg-center text-left py-2"
              style="line-height: 2.5rem"
            >
              {{ item.name }}
            </b-col>
            <b-col cols="4">
              <ElementSwitchToggle
                class="mt-2"
                :toggled.sync="item.status"
                @toggleButton="toggleLightSystem(index+1,item.status,17)"
              />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>

<script>
    import acDevice from "../assets/doc/ac-system-read-only.json"
    import defaultTable from "../assets/doc/ac-system-default-data.json"
    import ElementSwitchToggle from "../components/ElementSwitchToggle"

    export default {
        name: "PageLightList",
        components: {
            ElementSwitchToggle
        },
        data() {
            return {
                light1l1: acDevice,
                defaultTable: defaultTable,
                toggled: true,
                errorFlag: false,
                show: true
            }
        }, watch: {
            errorFlag: "showErrorModel"
        },
        mounted() {
            this.readLight1l1()
            setTimeout(() => {
                this.showOverlay()
            }, 1500)
        },
        methods: {
            readLight1l1() {
                let waterSystemAPI = "http://192.168.1.10/proxy/api/device/value/read_ac_100"
                this.axios.get(waterSystemAPI).then(
                    (response) => {
                        let rex = /^DIn/
                        response.data.forEach((item) => {
                            if (rex.test(item.name)) {
                                if (item.address === 15 || item.address === 16 || item.address === 17) {
                                    this.light1l1[item.address].forEach((device) => {
                                        if (device.status === item.name) {
                                            device.status = item.status === 1;
                                        }
                                    })
                                }
                            }
                        })
                    }
                ).catch((error) => {
                    console.log(error)
                })
            },
            toggleLightSystem(index, status, address) {
                let value = (status === true) ? 0 : 1
                let key = (index < 10) ? "0" + index : index
                let request = {
                    "port": "/dev/ttyUSB0",
                    "address": address,
                    "name": "DOut" + key,
                    "value": value
                }
                let waterSystemAPI = "http://192.168.1.10/proxy/api/device/value/write"
                this.errorFlag = true
                this.axios.post(waterSystemAPI, request).then(
                    (response) => {
                        if (response.data.status === 0) {
                            setTimeout(() => {
                                this.reloadPage()
                            }, 1500)
                        } else {
                            alert("System error!")
                        }
                    }
                )
            },
            showErrorModel() {
                this.$refs["device-error"].show()
            },
            showOverlay() {
                this.defaultTable = this.light1l1
                this.show = false
            },
            reloadPage() {
                location.reload()
            }
        }
    }
</script>

<style scoped>
    main {
        background: linear-gradient(to bottom left, #216e93, #21648a, #1f5881, #172d5b, #191c51);
        margin-top: -1rem;
    }
</style>