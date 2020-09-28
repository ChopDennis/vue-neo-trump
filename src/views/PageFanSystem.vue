<template>
  <main>
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
      <h4 class="mt-5">進排風系統</h4>
      <b-row>
        <b-col lg="3" class="py-3"
               v-for="(item, index) in defaultTable"
               :key="'fan-'+index"
        >
          <div>
            <SystemInfoCard :name="item[0].name" :error="item[0].error" :status="item[0].status"></SystemInfoCard>

          </div>
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>

<script>
  import devicePoints from "../assets/doc/fan-point-table.json"
  import defaultData from "../assets/doc/fan-point-table-default.json"
  import SystemInfoCard from "../components/water-system/SystemInfoCard";

  export default {
    name: "PageCentralSystem",
    components: {
      SystemInfoCard
    },
    data() {
      return {
        defaultTable: defaultData,
        pointTable: devicePoints,
        axiosResponse: [],
        errorFlag: false,
        systemSelected: "",
        deviceList: [
          {text: "揚水系統", value: "lifting_pump"},
          {text: "廢水系統", value: "waste_water"},
          {text: "污水系統", value: "sewage"},
          {text: "進出風系統", value: "fan"},
        ],
        deviceAmount: {
          "lifting_pump": 2,
          "waste_water": 3,
          "sewage": 3,
          "fan": 1,
        },
        deviceName: {
          "lifting_pump": "B4F 揚水系統",
          "waste_water": "B4F 廢水系統",
          "sewage": "B4F 汙水系統",
          "fan": "進出風系統",
        }
      }
    },
    beforeMount() {
      this.readWaterSystem()

    },
    methods: {
      readWaterSystem() {
        let apiURL = "http://192.168.1.10/api/device/value/read_fan"
        this.axios.get(apiURL).then(
                (response) => {
                  let rex = /^DIn/
                  console.log(response.data)
                  response.data.forEach((item) => {
                    if (rex.test(item.name)) {

                      this.pointTable[item.address].forEach((device) => {
                                if (device.status === item.name) {
                                  device.status = item.status
                                } else if (device.error === item.name) {
                                  device.error = item.status
                                  if (device.error === 1) {
                                    this.errorFlag = true
                                  }
                                }
                              }
                      )
                    }
                    this.defaultTable = this.pointTable
                  })
                }
        ).catch((error) => {
          console.log(error)
        })
      },
      error() {
        this.errorFlag = true
      },
      showErrorModel() {
        this.$refs["device-error"].show()
      }
    },
    watch: {
      errorFlag: "showErrorModel"
    }
  }
</script>

<style scoped>

</style>