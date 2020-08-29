<template>
  <main>
    <b-container class="px-5">
      <b-button
        block
        variant="dark"
        to="/system"
      >
        中控系統
      </b-button>
      <b-button
        block
        variant="dark"
        to="/status"
      >
        設備運轉狀態
      </b-button>
      <b-button
        block
        variant="dark"
        to="/on-off"
      >
        設備起停
      </b-button>
    </b-container>
  </main>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
}
</script>
