<template>
  <div>
    <b-container>
      <b-card
        bg-variant="light"
        class="my-3"
      >
        <b-form-group
          label-cols-lg="3"
          label="Input Wifi Config"
          label-size="lg"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-btn @click="addInputWifi()">
            Add more input for Wifi config
          </b-btn>

          <div
            v-for="(item,index) in inputs.wifi"
            :key="index"
          >
            <h4 class="text-left">
              {{ index + 1 }}.
            </h4>

            <b-form-group
              label-cols-sm="3"
              label="SSID:"
              label-align-sm="right"
              label-for="wifi-config-ssid"
            >
              <b-form-input
                id="wifi-config-ssid"
                v-model="inputs.wifi[index].ssid"
                type="text"
                placeholder="Input the service set identifier."
              />
            </b-form-group>
            <b-form-group
              label-cols-sm="3"
              label="PSK:"
              label-align-sm="right"
              label-for="wifi-config-psk"
            >
              <b-form-input
                id="wifi-config-psk"
                v-model="inputs.wifi[index].psk"
                type="text"
                placeholder="Input the pre-shared key."
              />
            </b-form-group>
            <b-form-group
              label-cols-sm="3"
              label="Key_MGMT:"
              label-align-sm="right"
              label-for="wifi-config-key-mgmt"
            >
              <b-form-select
                id="wifi-config-key-mgmt"
                v-model="inputs.wifi[index].key_mgmt"
                :options="options.wifi.ket_mgmt"
                placeholder="Input the key management."
              />
            </b-form-group>
            <b-form-group
              label-cols-sm="3"
              label="Priority:"
              label-align-sm="right"
              label-for="wifi-config-priority"
            >
              <b-form-select
                id="wifi-config-priority"
                v-model="inputs.wifi[index].priority"
                :options="options.wifi.priority"
                placeholder="Input the priority."
              />
            </b-form-group>
          </div>
        </b-form-group>
        <b-button
          type="submit"
          @click="writeWifi()"
        >
          Submit
        </b-button>
      </b-card>
      <b-card>
        <p>{{ response.wifi_config }}</p>
      </b-card>
    </b-container>
  </div>
</template>
<script>
    import axios from 'axios'

    export default {
        data: () => {
            return {
                inputs: {
                    wifi:[{
                        ssid: "",
                        psk: "",
                        key_mgmt: "",
                        priority: 0
                    }]
                },
                response: {
                    wifi_config: []
                },
                options:{
                    wifi:{
                        ket_mgmt:[
                            'WPA-PSK',
                            'WPA2-PSK',
                        ],
                        priority:[
                            '0',
                            '1',
                            '2',
                            '3',
                            '4',
                            '5',
                        ]
                    }
                }

            }
        },
        beforeMount() {
            this.readWifi()
        },
      methods: {
            writeWifi() {
                const baseUrl = this.$store.state.url
                const request = {
                    network: this.inputs.wifi
                }
                axios.post(baseUrl + '/api/config/network', request).then(
                    (response) => {
                        console.log(response.data)
                        this.readWifi()
                    }
                )
            },
            readWifi() {
                const baseUrl = this.$store.state.url
                axios.get(baseUrl + '/api/config/network').then(
                    (response) => {
                        this.response.wifi_config = response.data.network
                    }
                )
            },
            addInputWifi() {
                this.inputs.wifi.push(
                    {
                        ssid: "",
                        psk: "",
                        key_mgmt: "",
                        priority: 0
                    }
                )
            }
        }
    }
</script>