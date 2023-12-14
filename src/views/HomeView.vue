<template>
  <div class="flex-container">
    <img alt="logo" src="../assets/logo.png" width="1912" height="1464"/>
  </div>
  <font>
    Es passiert was...<br>
  </font>
  <div class="center">
    <Countdown />
  </div>
</template>

<script>
import Countdown from "../components/Countdown.vue";

export default {
name: "CountdownTimer",
components: {
Countdown,
},
};
</script>
