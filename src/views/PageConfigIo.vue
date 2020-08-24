<template>
  <main>
    <ElementFormStatic
      :title="title"
      :element-id="elementId"
      :path="path"
      :options="ioConfigOptions"
      :config-data="configData"
      :read-only="readOnly"
      @updateSelectValue="setIoConfigData($event)"
    />
  </main>
</template>

<script>
    import ElementFormStatic from "../components/ElementFormStatic";

    export default {
        name: "PageIOConfig",
        components: {
            ElementFormStatic,
        },
        data: () => {
            return {
                title: "「讀取/寫入」設定檔",
                elementId: 'io-config-lists',
                path: 'io',
                options: [],
                configData: {},
                readOnly: false
            }
        },
        computed: {
            ioConfigOptions() {
                return this.$store.getters.ioConfigOptions
            },
            ioConfigData() {
                console.log(this.$store.getters.ioConfigData)

                return this.$store.getters.ioConfigData
            }
        },
        beforeCreate() {
            this.$store.commit('getIoConfigData')
        },
        methods: {
            setIoConfigData(event) {
                this.configData = this.$store.getters.ioConfigData[event]
            }
        }
    }
</script>