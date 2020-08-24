<template>
  <div>
    <h4>廢水系統</h4>
    <b-row class="mb-5">
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
  </div>
</template>

<script>
    export default {
        name: "B"
    }
</script>

<style scoped>

</style>