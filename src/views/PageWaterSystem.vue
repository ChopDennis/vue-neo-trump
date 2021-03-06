<template>
  <main class="py-3">
    <b-overlay
      :show="show"
      no-wrap
      variant="dark"
      spinner-variant="light"
    />
    <b-container>
      <b-modal
        ref="device-error"
        hide-footer
        header-bg-variant="danger"
        header-text-variant="white"
        centered
        title="設備異常警告"
      >
        <p class="my-4 text-center">
          有設備異常，請儘速至現場檢查，並聯絡技術人員。
        </p>
      </b-modal>
      <p class="text-white mb-3">下次更新時間：{{countDownTime}} 秒</p>
      <b-card
        header="B4F 揚水系統"
        header-text-variant="white"
        header-class="font-weight-bold dark-blue"
        class="mb-3 border-0"
      >
        <b-row>
          <b-col
            lg="8"
          >
            <b-row>
              <b-col
                v-for="(item, index) in defaultTable['15']"
                :key="'lifting-pump-2-'+index"
                lg="3"
                class="py-3"
              >
                <SystemInfoCard
                  :name="item.name"
                  :error="item.error"
                  :status="item.status"
                />
              </b-col>
              <b-col
                v-for="(item, index) in defaultTable['16']"
                :key="'lifting-pump-3-'+index"
                lg="3"
                class="py-3"
              >
                <SystemInfoCard
                  :name="item.name"
                  :error="item.error"
                  :status="item.status"
                />
              </b-col>
            </b-row>
          </b-col>
          <b-col
            lg="4"
            class="py-3"
          >
            <div
              v-for="(item, index) in defaultTable['7']"
              :key="'lifting-pump-1-'+index"
            >
              <SystemInfoCard
                :name="item.name"
                :error="item.error"
                :status="item.status"
              />
            </div>
          </b-col>
        </b-row>
      </b-card>
      <b-card
        header="B4F 廢水系統"
        header-text-variant="white"
        header-class="font-weight-bold dark-blue"
        class="mb-3 border-0"
      >
        <b-row>
          <b-col
            v-for="(item,index) in defaultTable['19']"
            :key="'waste-water-1-'+index"
            lg="4"
            class="py-3"
          >
            <SystemInfoCard
              :name="item.name"
              :error="item.error"
              :status="item.status"
            />
          </b-col>
          <b-col
            v-for="(item,index) in defaultTable['17']"
            :key="'waste-water-2-'+index"
            lg="4"
            class="py-3"
          >
            <SystemInfoCard
              :name="item.name"
              :error="item.error"
              :status="item.status"
            />
          </b-col>
        </b-row>
      </b-card>

      <b-card
        header="B4F 汙水系統"
        header-text-variant="white"
        header-class="font-weight-bold dark-blue"
        class="mb-3 border-0"
      >
        <b-row>
          <b-col
            v-for="(item,index) in defaultTable['18']"
            :key="'sewage`-'+index"
            lg="4"
            class="py-3"
          >
            <SystemInfoCard
              :name="item.name"
              :error="item.error"
              :status="item.status"
            />
          </b-col>
        </b-row>
      </b-card>
      <b-card
        header="9F 自來水水箱"
        header-text-variant="white"
        header-class="font-weight-bold dark-blue"
        class="mb-3 border-0"
      >
        <b-row>
          <b-col
            v-for="(item,index) in defaultTable['14']"
            :key="'natural`-'+index"
            lg="4"
            class="py-3"
          >
            <SystemInfoCard
              :name="item.name"
              :error="item.error"
              :status="item.status"
            />
          </b-col>
        </b-row>
      </b-card>
      <b-card
        header="R3F 自來水水箱"
        header-text-variant="white"
        header-class="font-weight-bold dark-blue"
        class="mb-3 border-0"
      >
        <b-row>
          <b-col
            v-for="(item,index) in defaultTable['13']"
            :key="'natural`-'+index"
            lg="4"
            class="py-3"
          >
            <SystemInfoCard
              :name="item.name"
              :error="item.error"
              :status="item.status"
            />
          </b-col>
        </b-row>
      </b-card>
    </b-container>
  </main>
</template>

<script>
    import devicePoints from "../assets/doc/water-system-point-table.json"
    import defaultWaterSystemData from "../assets/doc/water-system-default-data.json"
    import SystemInfoCard from "../components/water-system/SystemInfoCard";

    export default {
        name: "PageCentralSystem",
        components: {
            SystemInfoCard
        },
        data() {
            return {
                defaultTable: defaultWaterSystemData,
                pointTable: devicePoints,
                errorFlag: false,
                show: true,
                countDownTime:300,
            }
        },
        watch: {
            errorFlag: "showErrorModel"
        },
        beforeMount() {
            this.readWaterSystem()
            this.readNaturalWater9F()
            this.readNaturalWaterR3F()
            this.updateSystemData()
        },
        mounted() {
            setTimeout(() => {
                this.showOverlay()
            }, 3000)
            setInterval(()=>{
              location.reload()
              this.countDownTime = 300
            },300000)
            setInterval(()=>{
             this.countDownTime--
            },1000)

        },
        methods: {
            readWaterSystem() {
                let waterSystemAPI = "http://192.168.1.10/proxy/api/device/value/read_water_000"
                this.axios.get(waterSystemAPI).then(
                    (response) => {
                        let rex = /^DIn/
                        response.data.forEach((item) => {
                            if (rex.test(item.name)) {
                                this.pointTable[item.address].forEach((device) => {
                                        if (device.status === item.name) {
                                            device.status = item.status.toString()
                                        } else if (device.error === item.name) {
                                            device.error = item.status.toString()
                                            if (device.error === 0) {
                                                this.errorFlag = true
                                            }
                                        }
                                    }
                                )
                            }
                        })
                    }
                ).catch((error) => {
                    console.log(error)
                })
            },
            readNaturalWater9F() {
                let apiURL = "http://192.168.1.10/proxy/api/device/value/read_water_300"
                this.axios.get(apiURL).then(
                    (response) => {
                        let rex = /^DIn/
                        response.data.forEach((item) => {
                            if (rex.test(item.name)) {
                                this.pointTable[item.address].forEach((device) => {
                                        if (device.status === item.name) {
                                            device.status = item.status.toString()
                                        } else if (device.error === item.name) {
                                            device.error = item.status.toString()
                                            if (device.error === 1) {
                                                this.errorFlag = true
                                            }
                                        }
                                    }
                                )
                            }
                        })
                    }
                ).catch((error) => {
                    console.log(error)
                })
            },
            readNaturalWaterR3F() {
                let apiURL = "http://192.168.1.10/proxy/api/device/value/read_water_500"
                this.axios.get(apiURL).then(
                    (response) => {
                        let rex = /^DIn/
                        response.data.forEach((item) => {
                            if (rex.test(item.name)) {
                                this.pointTable[item.address].forEach((device) => {

                                        if (device.status === item.name) {
                                            device.status = item.status.toString()
                                        } else if (device.error === item.name) {
                                            device.error = item.status.toString()
                                            if (device.error === 1) {
                                                this.errorFlag = true
                                            }
                                        }

                                    }
                                )
                            }
                        })
                    }
                ).catch((error) => {
                    console.log(error)
                })
            },
            showErrorModel() {
                this.$refs["device-error"].show()
            }, updateSystemData() {
                this.defaultTable = this.pointTable
            }, showOverlay() {
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

    .dark-blue {
        background-color: #32608a;
    }
</style>