<template>
    <div>
        <div v-if="error === 0">
            <b-card
                    v-if="status === 0"
                    :header="name"
                    header-tag="header"
                    class="shadow"
            >
                <div
                        class="py-1"
                        style="color: darkgray"
                >
                    <b-icon-emoji-smile class="mx-1"/>
                    <span>正常待機</span>
                </div>
            </b-card>
            <b-card
                    v-if="status === 1"
                    :header="name"
                    header-tag="header"
                    header-text-variant="white"
                    header-bg-variant="success"
                    class="shadow"
            >
                <div
                        class="py-1"
                        style="color: #42b983"
                >
                    <b-icon-check-square-fill class="mx-1"/>
                    <span>設備運行</span>
                </div>
            </b-card>
            <b-card
                    v-if="status === -1"
                    :header="name"
                    header-tag="header"
                    header-text-variant="white"
                    header-bg-variant="primary"
                    class="shadow"
            >
                <div
                        class="py-1"
                        style="color: deepskyblue"
                >
                    <b-icon-droplet-fill class="mx-1"/>
                    <span>水位正常</span>
                </div>
            </b-card>
            <b-card
                    v-if="status === 99"
                    :header="name"
                    header-tag="header"
                    class="shadow"
            >
                <div
                        class="py-1"
                        style="color: darkgray"
                >
                    <b-icon-clock-history class="mx-1" />
                    <span>等待回應...</span>
                </div>
            </b-card>
        </div>
        <div v-else>
            <div v-if="error === 1">

                <b-card
                        v-if="status === -1"
                        :header="name"
                        header-tag="header"
                        header-text-variant="white"
                        header-bg-variant="danger"
                        class="shadow"
                >
                    <div
                            class="py-1"
                            style="color: lightcoral"
                    >
                        <b-icon-exclamation-circle-fill class="mx-1"/>
                        <span>水位異常</span>
                    </div>
                </b-card>
                <b-card
                        v-else
                        :header="name"
                        header-tag="header"
                        header-text-variant="white"
                        header-bg-variant="danger"
                        class="shadow"
                >
                    <div
                            class="py-1"
                            style="color: lightcoral"
                    >
                        <b-icon-exclamation-triangle-fill class="mx-1"/>
                        <span>泵補異常</span>
                    </div>
                </b-card>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "SystemInfoCard",
        props: {
            name: {
                type: String,
                default: "",
                required: true
            },
            error: {
                type: Number,
                default: 0,
                required: true
            },
            status: {
                type: Number,
                default: 0,
                required: true
            },
        },
    }
</script>

<style scoped>

</style>