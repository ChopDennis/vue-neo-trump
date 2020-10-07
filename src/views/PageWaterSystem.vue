<template>
    <main class="py-3">
        <b-container>
            <b-modal
                    ref="device-error"
                    hide-footer
                    header-bg-variant="danger"
                    header-text-variant="white"
                    centered
                    title="設備異常警告"
            >
                <p class="my-4 text-center">
                    有設備異常，請儘速至現場檢查，並聯絡技術人員。
                </p>
            </b-modal>
            <b-card
                    header="B4F 揚水系統"
                    header-text-variant="white"
                    header-class="font-weight-bold dark-blue"
                    class="mb-3 border-0"
            >
                <b-row>

                    <b-col lg="8" class="py-3">
                        <b-row>
                            <b-col
                                    v-for="(item, index) in defaultTable['15']"
                                    :key="'lifting-pump-2-'+index"
                                    lg="3"
                            >

                                <SystemInfoCard :name="item.name" :error="item.error"
                                                :status="item.status"></SystemInfoCard>
                            </b-col>
                            <b-col
                                    v-for="(item, index) in defaultTable['16']"
                                    :key="'lifting-pump-3-'+index"
                                    lg="3"
                            >
                                <SystemInfoCard :name="item.name" :error="item.error"
                                                :status="item.status"></SystemInfoCard>

                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col lg="4" class="py-3">
                        <div
                                v-for="(item, index) in defaultTable['7']"
                                :key="'lifting-pump-1-'+index"
                        >

                            <SystemInfoCard :name="item.name" :error="item.error"
                                            :status="item.status"></SystemInfoCard>

                        </div>
                    </b-col>
                </b-row>
            </b-card>
            <b-card
                    header="B4F 廢水系統"
                    header-text-variant="white"
                    header-class="font-weight-bold dark-blue"
                    class="mb-3 border-0"
            >
                <b-row>
                    <b-col
                            v-for="(item,index) in defaultTable['19']"
                            :key="'waste-water-1-'+index"
                            lg="4"
                            class="py-3"
                    >
                        <SystemInfoCard :name="item.name" :error="item.error" :status="item.status"></SystemInfoCard>
                    </b-col>
                    <b-col
                            v-for="(item,index) in defaultTable['17']"
                            :key="'waste-water-2-'+index"
                            lg="4"
                            class="py-3"
                    >
                        <SystemInfoCard :name="item.name" :error="item.error" :status="item.status"></SystemInfoCard>
                    </b-col>
                </b-row>
            </b-card>

            <b-card
                    header="B4F 汙水系統"
                    header-text-variant="white"
                    header-class="font-weight-bold dark-blue"
                    class="mb-3 border-0"

            >
                <b-row
                >
                    <b-col
                            v-for="(item,index) in defaultTable['18']"
                            :key="'sewage`-'+index"
                            lg="4"
                            class="py-3"
                    >
                        <SystemInfoCard :name="item.name" :error="item.error" :status="item.status"></SystemInfoCard>
                    </b-col>
                </b-row>
            </b-card>
            <b-card
                    header="9F 自來水水箱"
                    header-text-variant="white"
                    header-class="font-weight-bold dark-blue"
                    class="mb-3 border-0"

            >
                <b-row
                >
                    <b-col
                            v-for="(item,index) in defaultTable['14']"
                            :key="'natural`-'+index"
                            lg="4"
                            class="py-3"
                    >
                        <SystemInfoCard :name="item.name" :error="item.error" :status="item.status"></SystemInfoCard>
                    </b-col>
                </b-row>
            </b-card>
            <b-card
                    header="R3F 自來水水箱"
                    header-text-variant="white"
                    header-class="font-weight-bold dark-blue"
                    class="mb-3 border-0"
            >
                <b-row
                >
                    <b-col
                            v-for="(item,index) in defaultTable['13']"
                            :key="'natural`-'+index"
                            lg="4"
                            class="py-3"
                    >
                        <SystemInfoCard :name="item.name" :error="item.error" :status="item.status"></SystemInfoCard>
                    </b-col>
                </b-row>
            </b-card>
        </b-container>
    </main>
</template>

<script>
    import devicePoints from "../assets/doc/point-table-water-system.json"
    import defaultWaterSystemData from "../assets/doc/default-water-system-data.json"
    import SystemInfoCard from "../components/water-system/SystemInfoCard";

    export default {
        name: "PageCentralSystem",
        components: {
            SystemInfoCard
        },
        data() {
            return {
                defaultTable: defaultWaterSystemData,
                pointTable: devicePoints,
                errorFlag: false
            }
        },
        beforeMount() {
            this.readWaterSystem()
            this.readNaturalWater9F()
            this.readNaturalWaterR3F()
            this.defaultTable = this.pointTable
        },
        mounted() {
        },
        methods: {
            readWaterSystem() {
                let waterSystemAPI = "http://192.168.1.10/api/device/value/read_water_000"
                this.axios.get(waterSystemAPI).then(
                    (response) => {
                        let rex = /^DIn/
                        response.data.forEach((item) => {
                            if (rex.test(item.name)) {
                                this.pointTable[item.address].forEach((device) => {
                                        if (device.status === item.name) {
                                            device.status = item.status
                                        } else if (device.error === item.name) {
                                            device.error = item.status
                                            if (device.error === 1) {
                                                this.errorFlag = true
                                            }
                                        }
                                    }
                                )
                            }
                        })
                    }
                ).catch((error) => {
                    console.log(error)
                })
            },
            readNaturalWater9F(){
                let apiURL = "http://192.168.1.181/api/device/value/read_water_300"
                this.axios.get(apiURL).then(
                    (response) => {
                        let rex = /^DIn/
                        response.data.forEach((item) => {
                            if (rex.test(item.name)) {
                                this.pointTable[item.address].forEach((device) => {
                                        if (device.status === item.name) {
                                            device.status = item.status
                                        } else if (device.error === item.name) {
                                            device.error = item.status
                                            if (device.error === 1) {
                                                this.errorFlag = true
                                            }
                                        }
                                    }
                                )
                            }
                        })
                    }
                ).catch((error) => {
                    console.log(error)
                })
            },
            readNaturalWaterR3F(){
                let apiURL = "http://192.168.1.11/api/device/value/read_water_500"
                this.axios.get(apiURL).then(
                    (response) => {
                        let rex = /^DIn/
                        response.data.forEach((item) => {
                            if (rex.test(item.name)) {
                                this.pointTable[item.address].forEach((device) => {
                                        if (device.status === item.name) {
                                            device.status = item.status
                                        } else if (device.error === item.name) {
                                            device.error = item.status
                                            if (device.error === 1) {
                                                this.errorFlag = true
                                            }
                                        }
                                    }
                                )
                            }
                        })
                    }
                ).catch((error) => {
                    console.log(error)
                })
            },
            showErrorModel() {
                this.$refs["device-error"].show()
            }
        },
        watch: {
            errorFlag: "showErrorModel"
        }
    }
</script>

<style scoped>
    main{
        background: linear-gradient(to bottom left,#216e93,#21648a,#1f5881,#172d5b,#191c51);
        margin-top:-1rem;
    }
    .dark-blue {
        background-color: #32608a;
    }
</style>