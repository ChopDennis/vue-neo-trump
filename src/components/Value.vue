<template>
  <div>
    <b-container>
      <b-button variant="light" to="/device">回上一頁</b-button>
      <b-card
        bg-variant="light"
        class="my-3"
      >
        <b-form-group
          label-cols-lg="3"
          label="設備數值寫入"
          label-size="lg"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <div
            v-for="(item,index_write) in value_list_write"
            :key="index_write"
            :value="item"
            class="my-3"
          >
            <div v-if="item.type==='w'">
              <b-row>
                <b-col lg="8">
                  <b-form-group
                    label-cols-sm="3"
                    :label="item.name + '：'"
                    label-align-sm="right"
                    label-for="driver-port-value"
                  >
                    <b-form-input
                      :id="'value-write-list-input-'+index_write"
                      v-model="inputs[index_write].value"
                      type="text"
                      placeholder="輸入功能數值"
                    />
                  </b-form-group>
                </b-col>
                <b-col lg="4">
                  <b-button
                    type="submit"
                    @click="writeValue(index_write)"
                  >
                    寫入資料
                  </b-button>
                </b-col>
              </b-row>
            </div>
          </div>
        </b-form-group>
      </b-card>
      <b-card
        bg-variant="light"
        class="my-3"
      >
        <b-form-group
          label-cols-lg="3"
          label="設備數值讀取"
          label-size="lg"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <div
            v-for="(item,index_write) in value_list_write"
            :key="index_write"
            :value="item"
            class="my-3"
          >
            <div v-if="item.type==='r'">
              <b-row>
                <b-col lg="8">
                  <b-form-group
                    label-cols-sm="3"
                    :label="item.name + '：'"
                    label-align-sm="right"
                    label-for="driver-port-value"
                  >
                    <b-form-input
                      :id="'value-write-list-input-'+index_write"
                      v-model="inputs[index_write].value"
                      type="text"
                      placeholder="點擊按鈕讀取數值"
                    />
                  </b-form-group>
                </b-col>
                <b-col lg="4">
                  <b-button
                    type="submit"
                    @click="readValue(index_write)"
                  >
                    讀取資料
                  </b-button>
                </b-col>
              </b-row>
            </div>
          </div>
        </b-form-group>
      </b-card>
    </b-container>
  </div>
</template>
<script>
    import axios from 'axios'

    export default {
        data: () => {
            return {
                value_list_write: [],
                value_list_read: [],
                inputs:[]
            }
        },
        beforeMount() {
            const baseUrl = this.$store.state.url
            const request = {
                port: this.$store.state.device.port,
                address: this.$store.state.device.address
            }
            axios.post(baseUrl + '/api/device/value', request).then(
                (response) => {
                    this.response = response.data
                    this.value_list_write = response.data
                    this.value_list_read = response.data
                    response.data.forEach((item)=>{
                        this.inputs.push({
                            key:item.value,
                            value:''
                        })
                    })
                }
            )
        },
        methods: {
            readValue(index) {
                const baseUrl = this.$store.state.url
                const request = {
                    port: this.$store.state.device.port,
                    address: this.$store.state.device.address,
                    name: this.inputs[index].key
                }
                axios.post(baseUrl + '/api/device/value/read', request).then(
                    (response) => {
                        this.inputs[index].value = response.data.value
                        console.log("name:" + response.data.name + "\n" + "status:" + response.data.status + "\n" + "value:" + response.data.value + "\n")
                    }
                )
            },
            writeValue(index) {
                const baseUrl = this.$store.state.url
                const request = {
                    port: this.$store.state.device.port,
                    address: this.$store.state.device.address,
                    name: this.inputs[index].key,
                    value: parseInt(this.inputs[index].value)
                }
                axios.post(baseUrl + '/api/device/value/write', request).then(
                    (response)=>{
                        alert("name:" + response.data.name + "\n" + "status:" + response.data.status + "\n" + "value:" + response.data.value + "\n")
                    }
                )
            }
        }
    }
</script>