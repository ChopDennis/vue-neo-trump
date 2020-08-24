<template>
  <div>
    <h3>{{ hostname }}</h3>
    <b-container>
      <b-card bg-variant="light">
        <b-form-group
          label-cols-lg="4"
          label="輸入主機名稱："
          label-size="lg"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-form-input
            v-model="hostname"
          />
        </b-form-group>
        <b-btn
          class="mt-3"
          @click="postHostname"
        >
          送出
        </b-btn>
      </b-card>
    </b-container>
  </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "SystemHostname",
        data() {
            return {
                hostname: ''
            }
        },
        beforeCreate() {
            axios.get(this.$store.state.url + '/api/system/hostname').then(
                (response) => {
                    console.log(response)
                    this.hostname = response.data.hostname
                }
            ).catch((error) => {
                console.log(error)
            })
        },
        methods: {
            postHostname() {
                const request = {
                    'hostname': this.hostname
                }
                axios.post(this.$store.state.url + '/api/system/hostname', request).then(
                    (response) => {
                        console.log(response)
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