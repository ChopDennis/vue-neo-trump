<template>
  <b-container v-html="response" />
</template>

<script>
    import axios from "axios";

    export default {
        name: "SystemRealTime",
        data() {
            return {
                response: ''
            }
        },
        beforeCreate() {
            const baseURL = this.$store.state.url
            axios.get(baseURL + '/api/system/check').then(
                (response) => {
                    this.response = response.data
                }
            )
        }
    }
</script>

<style scoped>

</style>