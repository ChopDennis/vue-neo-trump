<template>
  <b-container>
    <h3 class="my-3">
      Output List
    </h3>
    <b-card
      v-for="(item,index) in output"
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
        <!--            <ElementInputSelect :select-options="objectKeys"/>-->
      </b-form-group>
    </b-card>
  </b-container>
</template>

<script>
    // import ElementInputSelect from "./ElementInputSelect";

    export default {
        name: "ElementSelectList",

        components: {
            // ElementInputSelect
        },
        props: {
            output: {
                type: Object,
                default: () => {
                    return {}
                },
                required: true
            }
        },
        data(){
            return {
                objectKeys:Array
            }
        },
        beforeMount() {
            this.objectKeys = Object.keys(this.props.output)
        }
    }
</script>

<style scoped>

</style>