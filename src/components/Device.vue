<template>
  <b-container>
    <div
      v-for="(item,key) in response.device"
      :key="key"
      :value="item"
      class="my-3"
    >
      <b-button
        v-b-toggle="'collapse-'+ key"
        variant="info"
        :to="'device/'+item.port+'/'+item.address+'/'"
        @click="getValueList(item.port,item.address)"
      >
        {{ item.class }}<br>
        {{ item.model }}
      </b-button>
      <b-collapse
        :id="'collapse-'+key"
        class="mt-2"
      >
        <b-card>
          <p class="card-text">
            {{ response.value[key] }}
          </p>
          <b-button
            v-b-toggle.collapse-1-inner
            size="sm"
          >
            Toggle Inner Collapse
          </b-button>
          <b-collapse
            id="collapse-1-inner"
            class="mt-2"
          >
            <b-card>Hello!</b-card>
          </b-collapse>
        </b-card>
      </b-collapse>
    </div>
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