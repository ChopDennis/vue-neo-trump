<template>
  <main>
    <b-container>
      <b-row class="mb-1">
        <b-col cols="3">
          <p style="color: #42b983">
            樓層
          </p>
        </b-col>
        <b-col cols="3">
          <p>
            1L1
          </p>
        </b-col>
        <b-col cols="3">
          <p>
            1P1&E1L
          </p>
        </b-col>
        <b-col cols="3">
          <p>
            1L
          </p>
        </b-col>
      </b-row>
      <b-row class="mb-1">
        <b-col cols="3">
          <h3
            class="mt-4 text-dark"
          >
            DIn00
          </h3>
        </b-col>
        <b-col cols="9">
          <b-row
            style="height: 50px;background-color: lightgray"
            class="rounded-lg mt-3"
          >
            <b-col cols="4">
              <span
                class="fa fa-circle mt-3"
                style="color: darkgray"
              />
            </b-col>
            <b-col cols="4">
              <span
                class="fa fa-circle mt-3"
                style="color: #42b983"
              />
            </b-col>
            <b-col cols="4">
              <span
                class="fa fa-circle mt-3"
                style="color: #42b983"
              />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <p>{{ myJson }}</p>
    </b-container>
  </main>
</template>

<script>
  import illumi from "../assets/doc/illumi-1L1-table.json"
    export default {
        name: "PageDeviceStatus",
        data(){
            return{
              myJson: illumi,
                floors:[
                    "B2F",
                    "B1F",
                    "1F",
                    "2F",
                    "3F",
                    "4F",
                ]
            }
        },
      methods:{
        readIllumination() {
          let request = {
            "port": "/dev/ttyUSB0",
            "address": 12
          }
          let apiURL = "/api/device/value/read_illumi"
          this.axios.post(apiURL,request).then(
                  (response) => {
                    console.log(response.data)
                    let rex = /^DIn/
                    response.data.forEach((item) => {
                      if (rex.test(item.name)) {
                        this.myJson[item.address].forEach((device) => {
                          if (device.status === item.name) {
                            device.status = item.status
                          } else if (device.control === item.name) {
                            device.control = item.status
                          }
                        })
                      }
                    })

                  }
          ).catch((error) => {
            console.log(error)
          })
        },
      }
    }
</script>

<style scoped>

</style>