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
        燈光設備正在{{ notice }}，請稍等網頁重整...。
      </p>
    </b-modal>
    <b-container>
      <b-row>
        <b-col lg="4">
          <h4 class="text-white">
            1L1
          </h4>
          <b-row
            v-for="(item,index) in defaultTable['2']"
            :key="'1L1-'+index"
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
                @toggleButton="toggleLightSystem(index+1,item.status,1)"
              />
            </b-col>
          </b-row>
          <h4 class="text-white">
            EL1
          </h4>
          <b-row
            v-for="(item,index) in defaultTable['4']"
            :key="'1L-6-'+index"
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
                @toggleButton="toggleLightSystem(index+1,item.status,4)"
              />
            </b-col>
          </b-row>
        </b-col>
        <b-col lg="8">
          <h4 class="text-white">
            1L
          </h4>
          <b-row
            v-for="(item,index) in defaultTable['5']"
            :key="'1L-5-'+index"
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
                @toggleButton="toggleLightSystem(index+1,item.status,5)"
              />
            </b-col>
          </b-row>
          <b-row
            v-for="(item,index) in defaultTable['6']"
            :key="'1L-6-'+index"
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
                @toggleButton="toggleLightSystem(index+1,item.status,6)"
              />
            </b-col>
          </b-row>
          <b-row
            v-for="(item,index) in defaultTable['7']"
            :key="'1L-7-'+index"
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
                @toggleButton="toggleLightSystem(index+1,item.status,7)"
              />
            </b-col>
          </b-row>
        </b-col>
        <b-col lg="4">
          <h4 class="text-white">
            1LA
          </h4>
          <b-row
            v-for="(item,index) in defaultTable['11']"
            :key="'1L1A-1-'+index"
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
                @toggleButton="toggleLightSystem(index+1,item.status,9)"
              />
            </b-col>
          </b-row>
        </b-col>
        <b-col lg="8">
          <h4 class="text-white">
            1LA
          </h4>
          <b-row
            v-for="(item,index) in defaultTable['12']"
            :key="'1L1A-2-'+index"
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
                @toggleButton="toggleLightSystem(index+1,item.status,10)"
              />
            </b-col>
          </b-row>
          <h4 class="text-white">
            E1LA
          </h4>
          <b-row
            v-for="(item,index) in defaultTable['21']"
            :key="'EL1A-'+index"
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
                @toggleButton="toggleLightSystem(index+1,item.status,20)"
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
                show: true,
                notice: "關閉"
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
                                if (item.address === 2 || item.address === 5 || item.address === 4 || item.address === 6
                                    || item.address === 7 || item.address === 11 || item.address === 12 ||
                                    item.address === 21) {
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
                if (status === false) this.notice = "開啟"
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