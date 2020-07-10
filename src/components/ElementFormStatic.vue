<template>
  <div>
    <b-container>
      <b-card bg-variant="light">
        <b-form-group
          label-cols-lg="4"
          :label="'Select ' + title"
          label-size="lg"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <ElementInputSelect
            :select-options="options"
            :element-id="elementId"
            @updateSelectValue="setSelectValue($event)"
          />
        </b-form-group>
      </b-card>
    </b-container>
    <ElementOutputList
      :config="configData"
      :read-only="readOnly"
      @updateConfig="setNewConfigValue($event)"
    />
  </div>
</template>

<script>
    import ElementInputSelect from "./ElementInputSelect";
    import ElementOutputList from "./ElementOutputList";

    export default {
        name: "ElementFormStatic",
        components: {
            ElementInputSelect,
            ElementOutputList
        },
        props: {
            title: {
                type: String,
                default: '',
                required: true
            },
            elementId: {
                type: String,
                default: '',
                required: true
            },
            path: {
                type: String,
                default: '',
                required: true
            },
            options: {
                type: Array,
                default: () => {
                    return []
                },
                required: true
            },
            configData: {
                type: Object,
                default: () => {
                    return {}
                },
                required: true
            },
            readOnly:{
              type:Boolean,
              default:true,
              required: true
            }
        },
        data() {
            return {
                selected: ''
            }
        },
        methods: {
            setSelectValue(event) {
                this.selected = event
                this.$emit('updateSelectValue', this.selected)
            },
            setNewConfigValue(event) {
                let request = {}
                request[this.selected] = event
                this.axios.post('/api/config/' + this.path, request).then(
                    (response) => {
                        if(response.data['massage'] === 'Success' && response.status === 200){
                            alert(response.status + ' - Update config success!')
                        }
                    }
                ).catch((error)=>{
                    console.log(error)
                })
            }
        },
    }
</script>
