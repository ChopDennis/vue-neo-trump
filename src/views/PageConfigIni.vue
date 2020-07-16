<template>
    <main>
        <ElementFormStatic
                :title="title"
                :element-id="elementId"
                :path="path"
                :options="options"
                :config-data="configData"
                :read-only="readOnly"
                @updateSelectValue="setIniConfigData($event)"
        />
    </main>
</template>

<script>
    import ElementFormStatic from "../components/ElementFormStatic";

    export default {
        name: "PageConfigIni",
        components: {
            ElementFormStatic,
        },
        data() {
            return {
                title: "Initial Config Type",
                elementId: 'ini-config-type',
                path: 'ini',
                options: [
                    'Mainframe',
                    'AdrSettingData',
                    'PutChillerData',
                    'ImaM'
                ],
                readOnly: true
            }
        },
        computed:{
            configData(){
                return this.$store.getters.iniConfigData
            }
        },
        methods: {
            setIniConfigData(event) {
                this.$store.commit('getIniConfigData', event)
            }
        }
    }
</script>