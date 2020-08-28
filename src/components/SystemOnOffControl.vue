<template>
  <div>
    <b-container>
      <h3>B4F 燈光設備</h3>
      <b-card
        v-for="(item,index) in lightList"
        :key="index"
        class="mb-3"
        bg-variant="light"
      >
        <b-row>
          <b-col cols="8">
            <transition
              name="fade"
              mode="out-in"
            >
              <p
                v-if="item.toggled"
                key="on"
                class="p-2 m-0 power-on font-weight-bold"
              >
                {{ item.name }}
              </p>
              <p
                v-else
                key="off"
                class="p-2 m-0 power-off font-weight-bold"
              >
                {{ item.name }}
              </p>
            </transition>
          </b-col>
          <b-col cols="4">
            <ElementSwitchToggle
              :toggled.sync="item.toggled"
              @toggleButton="changeLightToggleValue(index)"
            />
          </b-col>
        </b-row>
      </b-card>
      <h3>冷氣機</h3>
      <b-card
        v-for="(item,index) in powerList"
        :key="index"
        class="mb-3"
        bg-variant="light"
      >
        <b-row>
          <b-col cols="8">
            <transition
              name="fade"
              mode="out-in"
            >
              <p
                v-if="item.toggled"
                key="on"
                class="p-2 m-0 power-on font-weight-bold"
              >
                {{ item.name }}
              </p>
              <p
                v-else
                key="off"
                class="p-2 m-0 power-off font-weight-bold"
              >
                {{ item.name }}
              </p>
            </transition>
          </b-col>
          <b-col cols="4">
            <ElementSwitchToggle
              :toggled.sync="item.toggled"
              @toggleButton="changePowerToggleValue(index)"
            />
          </b-col>
        </b-row>
      </b-card>
    </b-container>
  </div>
</template>

<script>
    import ElementSwitchToggle from "./ElementSwitchToggle";

    export default {
        name: "SystemOnOffControl",
        components: {ElementSwitchToggle},
        data() {
            return {
                lightList: [
                    {
                        name: 'B4F 走道燈',
                        type: 'light',
                        toggled: false
                    },
                    {
                        name: 'B4F 車道燈',
                        type: 'light',
                        toggled: false
                    },
                    {
                        name: 'B4F 大廳燈',
                        type: 'light',
                        toggled: false
                    },
                    {
                        name: 'B4F 投射燈',
                        type: 'light',
                        toggled: true
                    }
                ],
                powerList: [
                    {
                        name: 'B3F 冷氣機',
                        type: 'light',
                        toggled: false
                    },
                    {
                        name: 'B4F 冷氣機',
                        type: 'light',
                        toggled: true
                    },
                    {
                        name: '1F 冷氣機',
                        type: 'light',
                        toggled: true
                    },
                    {
                        name: '2F 冷氣機',
                        type: 'light',
                        toggled: false
                    }
                ],
                show: true,
                powerOption: [
                    {
                        text: '電力設備',
                        value: 'electric'
                    },
                    {
                        text: '燈光設備',
                        value: 'light'
                    }
                ],
                select: '',
                input: ''
            }
        },
        methods: {
            changeLightToggleValue(index) {
                this.lightList[index].toggled = !this.lightList[index].toggled
                if (this.lightList[index].toggled) {
                    console.log("START")
                } else {
                    console.log("STOP")
                }
            },
            changePowerToggleValue(index) {
                this.powerList[index].toggled = !this.powerList[index].toggled
                if (this.powerList[index].toggled) {
                    console.log("START")
                } else {
                    console.log("STOP")
                }
            },
            insertLightList() {
                this.lightList.push({
                    name: this.input,
                    type: this.select,
                    toggled: false
                })
            }
        }
    }
</script>

<style scoped>
    .power-on {
        color: #42b983;
    }

    .power-off {
        color: lightgray;
    }

    .fade-enter-active, .fade-leave-active {
        transition: color .5s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        color: #42b983;
    }

</style>