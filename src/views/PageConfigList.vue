<template>
  <main>
    <div id="nav">
      <router-link to="/config/wifi">
        網路設定
      </router-link>
      <router-link to="/config/io">
        讀取/寫入
      </router-link>
      <router-link to="/config/ini">
        初始化設定
      </router-link>
      <router-link to="/config/driver">
        驅動程式
      </router-link>
    </div>
    <router-view />
  </main>
</template>

<script>
    export default {
        name: "PageConfigList"
    }
</script>

<style scoped>

</style>
