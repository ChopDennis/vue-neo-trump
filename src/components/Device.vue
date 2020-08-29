<template>
  <b-container class="my-3">
    <b-card
      v-for="(item,key) in response.device"
      :key="key"
      :value="item"
      class="mb-3"
      :header="item.class"
      header-bg-variant="dark"
      header-text-variant="white"
      header-class="font-weight-bold"
    >
      <b-button
        variant="light"
        :to="'device/'+item.port+'/'+item.address+'/'"
        class="text-dark"
        @click="getValueList(item.port,item.address)"
      >
        {{ item.model }}
      </b-button>
    </b-card>
    <router-view />
  </b-container>
</template>
<script>
    import axios from 'axios'

    export default {
        data: () => {
            return {
                response: {
                    device: [],
                    value: [{"name": "hz", "value": 50}, {"name": "hz", "value": 60}],
                    temp: []
                }
            }
        },
        computed: {},
        beforeMount() {
            const baseUrl = this.$store.state.url
            axios.get(baseUrl + '/api/device').then(
                (response) => {
                    console.log(response)
                    this.response.device = response.data
                    console.log(this.response.device)
                }
            )
            axios.get(baseUrl + '/api/config').then(
                (response) => {
                    console.log(response)
                }
            )
        },
        methods: {
            getValueList(port, address) {
                this.$store.commit('getDevice', {port, address})
                console.log(this.$store.state.device)
                this.$router.push('/value')
            }

        }
    }
</script>