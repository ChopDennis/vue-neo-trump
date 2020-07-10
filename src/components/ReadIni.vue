<template><div /></template>


<script>
    export default {
        name: "ReadIni",
        components:{
        },
        data() {
            return {
                options: [
                    'Mainframe',
                    'AdrSettingData',
                    'PutChillerData',
                    'ImaM'
                ],
            }
        },
        methods: {
            ReadIniConfig(event) {
                this.axios.get('http://192.168.6.235//api/config/ini/' + event).then(
                    (response)=>{
                        console.log(response)
                    }
                )
            }
        }
    }
</script>