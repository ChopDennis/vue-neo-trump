<template>
  <main class="py-3">
    <b-overlay
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
            v-for="(item,index) in defaultTable['2']"
            :key="index"
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
                @toggleButton="changeToggleValue(index+1,item.status)"
              />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>

<script>
    import lightDevice1L1 from "../assets/doc/illumi-system-read-only.json"
    import defaultTable from "../assets/doc/illumi-system-default-data.json"
    import ElementSwitchToggle from "../components/ElementSwitchToggle"

    export default {
        name: "PageLightList",
        components: {
            ElementSwitchToggle
        },
        data() {
            return {
                light1l1: lightDevice1L1,
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
                let waterSystemAPI = "http://192.168.1.10/proxy/api/device/value/read_illumi_100"
                this.axios.get(waterSystemAPI).then(
                    (response) => {
                        let rex = /^DIn/
                        response.data.forEach((item) => {
                            if (rex.test(item.name)) {
                                if (item.address === 2) {
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
            changeToggleValue(index, status) {
                this.errorFlag = true
                let value = 0
                if (status === true) {
                    value = 0
                } else {
                    value = 1
                }
                if (index < 10) {
                    index = "0" + index
                }
                let request = {
                    "port": "/dev/ttyUSB0",
                    "address": 1,
                    "name": "DOut" + index,
                    "value": value
                }
                let waterSystemAPI = "http://192.168.1.10/proxy/api/device/value/write"
                this.axios.post(waterSystemAPI, request).then(
                    (response) => {
                        if (response.data.status === 0) {
                            setTimeout(function () {
                                location.reload()
                            }, 1500)

                        } else {
                            alert("Error!")
                        }
                    }
                )
                let lightToggle = this.light1l1['2'][index].status
                lightToggle = !lightToggle
                this.light1l1['2'][index].status = lightToggle
            },
            showErrorModel() {
                this.$refs["device-error"].show()
            },
            showOverlay() {
                this.defaultTable = this.light1l1
                this.show = false
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