<template>
  <b-container>
    <b-card
      bg-variant="light"
      class="mb-3"
    >
      <b-btn
        class="mb-3"
        @click="insertInputs"
      >
        新增網路設定欄位
      </b-btn>
      <b-form-group
        v-for="(item,index) in wifiConfigData"
        :key="index"
        :label="title + ' - ' + String(index+1)"
        label-cols-lg="2"
        label-size="lg"
        label-class="font-weight-bold pt-0"
        class="mb-3"
      >
        <b-form-group
          v-for="(value,key) in item"
          :key="key"
          label-cols-sm="3"
          :label="key+'：'"
          label-align-sm="right"
        >
          <b-form-select
            v-if="key==='priority'"
            v-model="wifiConfigData[index][key]"
            :options="options.priority"
          />
          <b-form-select
            v-else-if="key==='key_mgmt'"
            v-model="wifiConfigData[index][key]"
            :options="options.ket_mgmt"
          />
          <b-form-input
            v-else
            v-model="wifiConfigData[index][key]"
            type="text"
          />
        </b-form-group>
      </b-form-group>
      <b-btn
        type="submit"
        @click="updateWifiConfig"
      >
       寫入設定
      </b-btn>
    </b-card>
  </b-container>
</template>

<script>
    export default {
        name: "PageConfigWifi",
        data() {
            return {
                title: "Wifi 連線設定",
                elementId: 'wifi-config-lists',
                path: 'network',
                options: {
                    ket_mgmt: [
                        'WPA-PSK',
                        'WPA2-PSK',
                    ],
                    priority: [
                        '0',
                        '1',
                        '2',
                        '3',
                        '4',
                        '5',
                    ]
                },
            }
        },
        computed: {
            wifiConfigData() {
                return this.$store.getters.wifiConfigData
            }
        },
        beforeCreate() {
            this.$store.commit('getWifiConfigData')
        },
        methods: {
            show() {
                console.log(this.wifiConfigData)
            },
            insertInputs() {
                this.$store.commit('insertWifiConfigInput')
            },
            updateWifiConfig() {
                this.$store.commit('postWifiConfig')
            }

        }
    }
</script>
