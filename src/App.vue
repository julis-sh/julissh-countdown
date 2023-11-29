<template>
  <div class="app">
    <div class="flex-container">
      <img alt="logo" src="./assets/logo.png" width="1912" height="1464"/>
    </div>
    <div class="center">
      <Countdown />
    </div>
  </div>
</template>

<script>
import Countdown from "./components/Countdown.vue";

export default {
  name: "CountdownTimer",
  components: {
    Countdown,
  },
};
</script>

<style>
.app {
  text-align: center;
}
.flex-container {
  display: flex;
  justify-content: center;
}
.center {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10vh;
}
img {
  max-width: 33%;
  height: auto;
}
body {
  background: linear-gradient(to bottom right, #ffffff, #fff7b2);
}
</style>
