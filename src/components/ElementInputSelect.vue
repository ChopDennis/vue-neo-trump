<template>
  <b-form-group
    label-cols-sm="3"
    label="value:"
    label-align-sm="right"
    :label-for="elementId"
  >
    <b-form-select
      :id="elementId"
      v-model="selected"
      :options="selectOptions"
      @change="updateSelectFrom"
    />
  </b-form-group>
</template>

<script>
    export default {
        name: "InputSelect",
        props: {
            elementId: {
                type: String,
                default: '',
                required: false
            },
            selectOptions: {
                type: Array,
                default: ()=>{
                    return []
                },
                required: true
            }
        },
        data() {
            return {
                selected: ''
            }
        },
         methods: {
            updateSelectFrom(){
                this.$emit('updateSelectValue', this.selected)
            }
        }
    }
</script>