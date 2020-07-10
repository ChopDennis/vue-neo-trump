<template>
  <div>
    <b-btn :click="ReadIoConfig">
      讀取
    </b-btn>
  </div>
</template>

<script>
    export default {
        name: "ReadIO",
        created() {
        this.ReadIoConfig()
            },
        methods:{
            ReadIoConfig(){
                this.axios.get('http://192.168.6.235//api/config/ini/Mainframe').then(
                    (response)=>{
                        console.log(response.data)
                    }
                )
            }
        }
    }
</script>

<style scoped>

</style>