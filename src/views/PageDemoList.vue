<template>
  <main>
    <b-container>
      <h4>揚水系統</h4>
      <b-row class="mb-5 border-top">
        <b-col
          lg="3"
          class="p-3"
          style="height: 200px"
        >
          <b-card
            header="EB4P2_揚水汞#1 (陸上)"
            header-tag="header"
          >
            <b-card-text />
            <b-button
              style="width: 100%"
              class="mb-3"
            >
              啟動設備
            </b-button>
            <b-row>
              <b-col
                cols="12"
                class="mb-2"
              >
                <span style="color: darkgray">設備未啟動</span>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col
          lg="3"
          class="p-3"
          style="height: 200px"
        >
          <b-card
            header="EB4P2_揚水汞#2 (陸上)"
            header-tag="header"
          >
            <b-card-text />
            <b-button
              style="width: 100%"
              class="mb-3"
            >
              啟動設備
            </b-button>
            <b-row>
              <b-col
                cols="12"
                class="mb-2"
              >
                <span style="color: darkgray">設備未啟動</span>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col
          lg="3"
          class="p-3"
          style="height: 200px"
        >
          <b-card
            header="EB4P2_揚水汞#3 (沈水)"
            header-tag="header"
            header-text-variant="white"
            header-bg-variant="success"
            border-variant="success"
          >
            <b-card-text />
            <b-button
              variant="success"
              style="width: 100%"
              class="mb-3"
            >
              關閉設備
            </b-button>
            <b-row>
              <b-col
                cols="12"
                class="mb-2"
              >
                <span style="color: #42b983">設備運行中</span>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col
          lg="3"
          class="p-3"
          style="height: 200px"
        >
          <b-card
            header="EB4P2_揚水汞#4 (沈水)"
            header-tag="header"
            header-text-variant="white"
            header-bg-variant="danger"
            border-variant="danger"
          >
            <b-card-text />
            <b-button
              variant="danger"
              style="width: 100%"
              class="mb-3"
            >
              設備故障
            </b-button>
            <b-row>
              <b-col
                cols="12"
              >
                <p style="color: lightpink">
                  <span class="fa fa-exclamation-triangle" />
                  系統偵測到錯誤
                </p>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
      <h4>排風系統</h4>
      <b-row class="mb-5 border-top">
        <b-col
          lg="3"
          class="p-3"
          style="height: 200px"
        >
          <b-card
            header="B1P2-1 排風機"
            header-tag="header"
          >
            <b-card-text />
            <b-button
              style="width: 100%"
              class="mb-3"
            >
              啟動設備
            </b-button>
            <b-row>
              <b-col cols="8">
                <span>手動模式</span>
              </b-col>
              <b-col cols="4">
                <span
                  class="fa toggle fa-toggle-on"
                  style="font-size: 30px;color: #42b983;"
                />
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col
          lg="3"
          class="p-3"
          style="height: 200px"
        >
          <b-card
            header="B2P2-1 排風機"
            header-tag="header"
          >
            <b-card-text />
            <b-button
              style="width: 100%"
              class="mb-3"
            >
              啟動設備
            </b-button>
            <b-row>
              <b-col cols="8">
                <span style="color: lightgray">手動模式</span>
              </b-col>
              <b-col cols="4">
                <span
                  class="fa toggle fa-toggle-off"
                  style="font-size: 30px;color: #6c757d"
                />
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col
          lg="3"
          class="p-3"
          style="height: 200px"
        >
          <b-card
            header="B3P1-1 排風機"
            header-tag="header"
            header-text-variant="white"
            header-bg-variant="success"
            border-variant="success"
          >
            <b-card-text />
            <b-button
              variant="success"
              style="width: 100%"
              class="mb-3"
            >
              關閉設備
            </b-button>
            <b-row>
              <b-col cols="8">
                <span>手動模式</span>
              </b-col>
              <b-col cols="4">
                <span
                  class="fa toggle fa-toggle-on"
                  style="font-size: 30px;color: #42b983;"
                />
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col
          lg="3"
          class="p-3"
          style="height: 200px"
        >
          <b-card
            header="B4P5-1 排風機"
            header-tag="header"
            header-text-variant="white"
            header-bg-variant="danger"
            border-variant="danger"
          >
            <b-card-text />
            <b-button
              variant="danger"
              style="width: 100%"
              class="mb-3"
            >
              設備故障
            </b-button>
            <b-row>
              <b-col
                cols="12"
                class="mb-2"
              >
                <span
                  class="fa fa-exclamation-triangle"
                  style="color: lightpink"
                />
                <span style="color: lightpink">&nbsp;系統偵測到錯誤</span>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
      <h4>廢水系統</h4>
      <b-row class="mb-2 border-top">
        <b-col
          lg="3"
          class="p-3"
          style="height: 200px"
        >
          <b-card
            header="EB4P4_廢水汞#1"
            header-tag="header"
          >
            <b-card-text />
            <p style="color: darkgray">
              設備未啟動
            </p>
          </b-card>
        </b-col>
        <b-col
          lg="3"
          class="p-3"
          style="height: 200px"
        >
          <b-card
            header="EB4P4_廢水汞#2"
            header-tag="header"
          >
            <b-card-text />

            <p style="color: darkgray">
              設備未啟動
            </p>
          </b-card>
        </b-col>
        <b-col
          lg="3"
          class="p-3"
          style="height: 200px"
        >
          <b-card
            header="EB4P3_廢水汞#1"
            header-tag="header"
            header-text-variant="white"
            header-bg-variant="success"
            border-variant="success"
          >
            <b-card-text />

            <p style="color: #42b983">
              設備運行中
            </p>
          </b-card>
        </b-col>
        <b-col
          lg="3"
          class="p-3"
          style="height: 200px"
        >
          <b-card
            header="EB4P3_廢水汞#2"
            header-tag="header"
            header-text-variant="white"
            header-bg-variant="danger"
            border-variant="danger"
          >
            <b-card-text />

            <b-row>
              <b-col
                cols="12"
              >
                <p style="color: lightpink">
                  <span class="fa fa-exclamation-triangle" />
                  系統偵測到錯誤
                </p>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
      <h4>消防系統</h4>
      <b-row class="mb-5 border-top">
        <b-col
          lg="3"
          class="p-3"
          style="height: 200px"
        >
          <b-card
            header="B4F-消防汞"
            header-tag="header"
          >
            <b-card-text />
            <p style="color: darkgray">
              設備未啟動
            </p>
          </b-card>
        </b-col>
        <b-col
          lg="3"
          class="p-3"
          style="height: 200px"
        >
          <b-card
            header="B4F-泡沫汞"
            header-tag="header"
            header-text-variant="white"
            header-bg-variant="success"
            border-variant="success"
          >
            <b-card-text />

            <p style="color: #42b983">
              設備運行中
            </p>
          </b-card>
        </b-col>
        <b-col
          lg="3"
          class="p-3"
          style="height: 200px"
        >
          <b-card
            header="B2F-加壓汞"
            header-tag="header"
            header-text-variant="white"
            header-bg-variant="primary"
            border-variant="primary"
          >
            <b-card-text />

            <p style="color: skyblue">
              <span class="fa-tint fa" />
              缺水警告，水位過低
            </p>
          </b-card>
        </b-col>
        <b-col
          lg="3"
          class="p-3"
          style="height: 200px"
        >
          <b-card
            header="B4F-灑水汞"
            header-tag="header"
            header-text-variant="white"
            header-bg-variant="danger"
            border-variant="danger"
          >
            <b-card-text />

            <b-row>
              <b-col
                cols="12"
              >
                <p style="color: lightpink">
                  <span class="fa fa-exclamation-triangle" />
                  系統偵測到錯誤
                </p>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>

<script>
    export default {
        name: "PageDemoList",
        data(){
            return{
                demoList:[
                    {
                        name: 'B4F 走廊燈 - A',
                        control:true,
                        manual: false,
                        alert:false,
                        state:true
                    },
                    {
                        name: 'B3F 車道燈 - B',
                        type: 'light',
                        toggled: false
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>