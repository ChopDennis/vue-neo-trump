<template>
  <div>
    {{ axiosResponse }}
  </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "SystemCheckStatus",
        data(){
            return{
                axiosResponse:''
            }
        },
        beforeCreate() {
            const request = {
                "hostname":"16484740018"
            }
            axios.post(this.$store.state.url+'/api/system/check',request).then(
                (response) => {
                    console.log(response)
                    this.axiosResponse = response.data
                }
            ).catch((error) => {
                console.log(error)
            })
        }
    }
</script>

<style scoped>

</style>