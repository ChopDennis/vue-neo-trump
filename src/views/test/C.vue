<template>
  <div>
    <h4>消防系統</h4>
    <b-row class="mb-5">
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
  </div>
</template>

<script>
    export default {
        name: "C"
    }
</script>

<style scoped>

</style>