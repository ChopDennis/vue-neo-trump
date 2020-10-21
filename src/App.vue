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
          <span class="text-center text-light font-weight-bold">NEO TRUMP 新川普</span>
        </b-col>
        <b-col sm="8">
          <router-link to="/fan">
            進排風系統
          </router-link> |
          <router-link to="/water">
            揚汙廢水系統
          </router-link> |
          <router-link to="/light">
            燈控系統
          </router-link> |
          <router-link to="/ac">
            冷氣系統
          </router-link>
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
    padding: 1rem;
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
