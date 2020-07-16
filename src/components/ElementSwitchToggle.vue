<template>
    <div>
        <span
                class="fa toggle"
                :class="{'fa-toggle-on': toggled, 'fa-toggle-off': !toggled, 'text-success': toggled, 'text-muted': !toggled}"
                @click="toggleButton"
        />
        <span
                v-show="label"
                class="toggle-label"
        >{{ label }}</span>
    </div>
</template>

<script>
    export default {
        name: "ElementSwitchToggle",
        props: {
            toggled: {
                type: Boolean,
                default: false,
                required: true
            },
            label: {
                type: String,
                default: '',
                required: false
            }
        }, methods: {
            toggleButton() {
                this.$emit('toggleButton')
            }

        }
    }
</script>

<style lang="scss" scoped>
    $purple: #5c4084;
    .fa {
        font-size: 40px;
        cursor: pointer;
    }

    .text-success {
        color: $purple;
    }

    .toggle-label {
        display: inline-block;
        padding: 2px 0 0 4px;
        vertical-align: top;
        font-size: 24px;
        color: #777;
    }
</style>