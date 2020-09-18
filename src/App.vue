<template>
  <div id="app">
    <div
      id="app-nav"
      class="mb-3"
    >
      <b-row>
        <b-col
          sm="4"
          class="mb-sm-0 mb-3"
        >
          <span class="text-center text-light ">NEO TRUMP</span>
        </b-col>
        <b-col sm="8">
          <router-link to="/">
            首頁
          </router-link> |
          <router-link to="/system">
            中控系統
          </router-link> |
          <router-link to="/light">
            設備運轉狀態
          </router-link> |
          <router-link to="/on-off">
            設備起停
          </router-link> |
        </b-col>
      </b-row>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #app-nav {
    padding: 2rem;
    background-color: lightslategrey;
    color: whitesmoke;
  }

  #app-nav a {
    font-weight: bold;
    color: whitesmoke;
    padding: 0.5rem;
  }

  #app-nav a.router-link-exact-active {
    color: deepskyblue;
  }
</style>
