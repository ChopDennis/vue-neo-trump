<template>
  <div>
    <h4>揚水系統</h4>
    <b-row class="mb-5">
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
  </div>
</template>

<script>
    export default {
        name: "A"
    }
</script>

<style scoped>

</style>