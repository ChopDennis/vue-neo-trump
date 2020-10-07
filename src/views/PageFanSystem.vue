<template>
  <main class="py-3">
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
      <b-card
              header="進排風系統"
              header-text-variant="white"
              header-class="font-weight-bold dark-blue"
              class="mb-3 border-0"
      >
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
      </b-card>

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
        errorFlag: false,
      }
    },
    beforeMount() {
      this.readFanSystem()
    },
    methods: {
      readFanSystem() {
        let apiURL = "http://192.168.1.10/api/device/value/read_fan_000"
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
  main{
    background: linear-gradient(to bottom left, #939121, #4d8a21, #34811f, #2b5b17);
    margin-top:-1rem;
    min-height: 100vh;
  }
  .dark-blue {
    background-color: #40972c;
  }
</style>