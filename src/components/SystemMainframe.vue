<template>
    <div>
        <b-container>
            <b-card bg-variant="light">
                <b-row>
                    <b-col cols="8">
                        <h4 class="d-none d-lg-block">Mainframe Control</h4>
                        <h6 class="d-lg-none" style="line-height: 40px">Mainframe Control</h6>
                    </b-col>
                    <b-col cols="4">
                        <ElementSwitchToggle
                                :toggled.sync="$store.state.system.mainframe.toggled"
                                @toggleButton = "changeToggleValue"
                        />
                    </b-col>
                </b-row>
                <div class="bg-white border-info border p-3 rounded-lg overflow-auto" style="max-height: 80vh">
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
            }
        },
        beforeMount() {
            this.mainframeControl('log')
            this.mainframeControl('status')
        },
        methods: {
            changeToggleValue(){
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
            mainframeControl(action){
                const request = {
                    "name": "mainframe",
                    "action": action
                }
                axios.post(this.$store.state.url+'/api/system/systemd',request).then(
                    (response) => {
                        if(action === 'log'){
                            this.log = response.data.message
                        }
                        else if(action === 'status'){
                            this.status = response.data.message
                            this.$store.state.system.mainframe.toggled = response.data.message === 'on'
                            console.log('Status: ',response.data.message)
                            console.log(this.$store.state.system.mainframe.toggled)
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
pre{
    white-space: pre;
}
</style>