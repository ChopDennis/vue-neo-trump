<template>
  <main>
    <div id="nav">
      <router-link to="/config/wifi">
        Wifi
      </router-link>
      <router-link to="/config/io">
        I/O
      </router-link>
      <router-link to="/config/ini">
        Initial
      </router-link>
      <router-link to="/config/driver">
        Driver
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
