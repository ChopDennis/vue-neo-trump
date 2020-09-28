<template>
    <main>
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
            <h4 class="mt-5">B4F 揚水系統</h4>
            <b-row>
                <b-col lg="4" class="py-3">
                    <div
                            v-for="(item, index) in defaultTable['7']"
                            :key="'lifting-pump-1-'+index"
                    >

                        <SystemInfoCard :name="item.name" :error="item.error" :status="item.status"></SystemInfoCard>

                    </div>
                </b-col>
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
            </b-row>
            <h4 class="mt-5">B4F 廢水系統</h4>
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
            <h4 class="mt-5">B4F 汙水系統</h4>
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
        </b-container>
    </main>
</template>

<script>
    import devicePoints from "../assets/doc/water-point-table.json"
    import defaultData from "../assets/doc/water-point-table-default.json"
    import SystemInfoCard from "../components/water-system/SystemInfoCard";

    export default {
        name: "PageCentralSystem",
        components: {
            SystemInfoCard
        },
        data() {
            return {
                defaultTable: defaultData,
                pointTable: devicePoints,
                axiosResponse: [],
                errorFlag: false,
                systemSelected: "",
                deviceList: [
                    {text: "揚水系統", value: "lifting_pump"},
                    {text: "廢水系統", value: "waste_water"},
                    {text: "污水系統", value: "sewage"},
                    {text: "進出風系統", value: "fan"},
                ],
                deviceAmount: {
                    "lifting_pump": 2,
                    "waste_water": 3,
                    "sewage": 3,
                    "fan": 1,
                },
                deviceName: {
                    "lifting_pump": "B4F 揚水系統",
                    "waste_water": "B4F 廢水系統",
                    "sewage": "B4F 汙水系統",
                    "fan": "進出風系統",
                }
            }
        },
        beforeMount() {
            this.readWaterSystem()
        },
        methods: {
            readWaterSystem() {
                let apiURL = "http://192.168.1.10/api/device/value/read_water"
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
                                            if (device.error === 0) {
                                                this.errorFlag = true
                                            }
                                        }
                                    }
                                )
                            }
                            this.defaultTable = this.pointTable
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

</style>