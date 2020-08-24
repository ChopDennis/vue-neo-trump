<template>
    <div>
        <b-container>
            <b-card bg-variant="light">
                <b-row class="mb-3">
                    <b-col cols="8" lg="4">
                        <h5 class="d-none d-lg-block font-weight-bold">
                            <span class="fa fa-power-off mx-3"></span>主機開關
                        </h5>
                        <h5
                                class="d-lg-none"
                                style="line-height: 40px"
                        >
                            <span class="fa fa-power-off mx-3"></span>主機開關
                        </h5>
                    </b-col>
                    <b-col cols="4">
                        <ElementSwitchToggle
                                :toggled.sync="$store.state.system.mainframe.toggled"
                                @toggleButton="changeToggleValue"
                        />
                    </b-col>
                </b-row>
                <b-form-group
                        label-cols-lg="4"
                        label="目前主機名稱："
                        label-size="lg"
                        label-class="font-weight-bold pt-0"
                        class="mb-3"
                >
                    <b-form-input
                            disabled
                            v-model="hostnameOld"
                    />
                </b-form-group>
                <b-form-group
                        label-cols-lg="4"
                        label="更新主機名稱："
                        label-size="lg"
                        label-class="font-weight-bold pt-0"
                        class="mb-0"
                >
                    <b-form-input
                            v-model="hostname"
                    />
                </b-form-group>
                <div class="m-auto w-25">
                    <b-btn
                            class="my-3"
                            block
                            @click="postHostname"
                    >
                        送出
                    </b-btn>
                </div>

                <div
                        class="bg-white border-info border p-3 rounded-lg overflow-auto"
                        style="max-height: 80vh"
                >
                    <pre class="text-left">{{ log }}</pre>
                </div>
            </b-card>
        </b-container>
    </div>
</template>

<script>
    import axios from "axios";
    import ElementSwitchToggle from "./ElementSwitchToggle";

    export default {
        name: "SystemMainframe",
        components: {ElementSwitchToggle},
        data() {
            return {
                log: '',
                hostname: '',
                hostnameOld:''
            }
        },
        beforeMount() {
            this.mainframeControl('log')
            this.mainframeControl('status')
        },
        beforeCreate() {
            axios.get(this.$store.state.url + '/api/system/hostname').then(
                (response) => {
                    console.log(response)
                    this.hostname = response.data.hostname
                    this.hostnameOld = response.data.hostname
                }
            ).catch((error) => {
                console.log(error)
            })
        },
        methods: {
            changeToggleValue() {
                let mainframeToggle = this.$store.state.system.mainframe.toggled
                mainframeToggle = !mainframeToggle
                this.$store.state.system.mainframe.toggled = mainframeToggle
                if (mainframeToggle) {
                    this.mainframeControl('start')
                    console.log("START")
                } else {
                    this.mainframeControl('stop')
                    console.log("STOP")
                }
                console.log(mainframeToggle)
                this.mainframeControl('log')
                this.mainframeControl('status')
            },
            mainframeControl(action) {
                const request = {
                    "name": "mainframe",
                    "action": action
                }
                axios.post(this.$store.state.url + '/api/system/systemd', request).then(
                    (response) => {
                        if (action === 'log') {
                            this.log = response.data.message
                        } else if (action === 'status') {
                            this.status = response.data.message
                            this.$store.state.system.mainframe.toggled = response.data.message === 'on'
                            console.log('Status: ', response.data.message)
                            console.log(this.$store.state.system.mainframe.toggled)
                        }
                    }
                ).catch((error) => {
                    console.log(error)
                })
            },
            postHostname() {
                const request = {
                    'hostname': this.hostname
                }
                axios.post(this.$store.state.url + '/api/system/hostname', request).then(
                    (response) => {
                        console.log(response)
                        if(response.data.status==='Success'){
                            alert("主機名稱更新成功！")
                        }
                    }
                ).catch((error) => {
                    console.log(error)
                })
            }
        }

    }
</script>

<style scoped>
    pre {
        white-space: pre;
    }
</style>