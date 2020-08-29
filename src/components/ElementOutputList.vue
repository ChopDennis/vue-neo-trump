<template>
  <b-container>
    <h3 class="my-3" />
    <b-card
      v-for="(item,index) in dataList"
      :key="index"
      bg-variant="light"
      class="mb-3"
    >
      <b-form-group
        label-cols-lg="2"
        :label="index"
        label-size="lg"
        label-class="font-weight-bold pt-0"
        class="mb-0"
      >
        <b-form-group
          v-for="(value,key) in item"
          :key="key"
          label-cols-sm="3"
          :label="key+'：'"
          label-align-sm="right"
        >
          <b-form-input
            v-if="readOnly"
            :placeholder="value"
            type="text"
          />
          <b-form-input
            v-else
            v-model="dataList[index][key]"
            type="text"
          />
        </b-form-group>
      </b-form-group>
      <b-btn
        v-show="!readOnly"
        @click="submitNewValue"
      >
        寫入數值
      </b-btn>
    </b-card>
  </b-container>
</template>

<script>
    export default {
        name: "ElementOutputList",
        props: {
            config: {
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
            return {}
        },
        computed: {
            dataList: {
                get() {
                    return this.config
                }
            }
        },
        methods: {
            submitNewValue() {
                this.$emit('updateConfig', this.dataList)
            }
        }
    }
</script>