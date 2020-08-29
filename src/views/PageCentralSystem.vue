<template>
  <main>
    <b-container>
      <b-card
        bg-variant="light"
        class="mb-3"
      >
        <b-form-group
          label="選擇中控系統："
          label-cols-lg="2"
          label-size="lg"
          label-class="font-weight-bold pt-1"
          class="mb-3"
        >
          <b-form-select
            v-model="systemSelected"
            :options="deviceList"
          />
        </b-form-group>
      </b-card>
    </b-container>
    <b-container>
      <h3>{{ deviceName[systemSelected] }}</h3>
      <div class="border-top">
        <b-row
          v-for="(theArray,key) in myJson[systemSelected]"
          :key="key"
          class="mb-1"
        >
          <b-col
            v-for="(item,index) in theArray"
            :key="index"
            :lg="12/deviceAmount[systemSelected]"
            class="p-3"
            style="height: 200px"
          >
            <div
              v-if="item.error === 0"
            >
              <b-card
                v-if="item.status === 0"
                :header="item.name"
                header-tag="header"
              >
                <b-card-text />
                <b-row>
                  <b-col
                    cols="12"
                    class="mb-2"
                    style="color: darkgray"
                  >
                    <b-icon-dash-circle-fill class="mx-1" />
                    <span>設備未啟動</span>
                  </b-col>
                </b-row>
              </b-card>
              <b-card
                v-if="item.status === 1"
                :header="item.name"
                header-tag="header"
                header-text-variant="white"
                header-bg-variant="success"
                border-variant="success"
              >
                <b-card-text />
                <b-row>
                  <b-col
                    cols="12"
                    class="mb-2"
                    style="color: #42b983"
                  >
                    <b-icon-file-check-fill class="mx-1" />
                    <span>設備運行中</span>
                  </b-col>
                </b-row>
              </b-card>
            </div>
            <div v-else>
              <b-card
                :header="item.name"
                header-tag="header"
                header-text-variant="white"
                header-bg-variant="danger"
                border-variant="danger"
              >
                <b-card-text />
                <b-row>
                  <b-col
                    cols="12"
                    class="mb-2"
                    style="color: lightcoral"
                  >
                    <b-icon-exclamation-triangle-fill class="mx-1" />
                    <span>系統偵測到錯誤</span>
                  </b-col>
                </b-row>
              </b-card>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </main>
</template>

<script>
    import point from "../assets/doc/point-table.json"
    export default {
        name: "PageCentralSystem",
        data() {
            return {
                pump: [],
                waste: point["waste_water"],
                myJson: point,
                systemSelected:"",
                deviceList:[
                    { text: "揚水系統", value: "lifting_pump" },
                    { text: "廢水系統", value: "waste_water" },
                ],
                deviceAmount:{
                    "lifting_pump":2,
                    "waste_water":3
                },
                deviceName:{
                    "lifting_pump":"揚水系統",
                    "waste_water":"廢水系統",
                }
            }
        },
        created() {

        },
        methods:{
            Test(){
                this.axios.get("http://192.168.6.235/api/device/value/read_lifting_pump").then(
                    (response) => {
                        console.log(response)
                        let rex = /^DIn/
                        response.data.forEach((item)=>{
                            if(rex.test(item.name)){
                                this.pump.push(item)
                                this.myJson["lifting_pump"][item.address].forEach((device)=>{
                                    if(device.status === item.name){
                                        device.status = item.status
                                    }
                                    else if(device.error === item.name){
                                        device.error = item.status
                                    }
                                })
                            }
                        })
                    }
                ).catch((error) => {
                    console.log(error)
                })
            }
        }
    }
</script>

<style scoped>

</style>