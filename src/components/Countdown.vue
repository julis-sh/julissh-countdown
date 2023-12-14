<template>
  <div class="radial-progress-bar">
    <vue-countdown :time="time" v-slot="{ days, hours, minutes, seconds }">
      <div class="flex-view">
        <div>
          <radial-progress-bar
            :diameter="diameter"
            :completed-steps="days"
            :total-steps="61"
            :animateSpeed="1000"
            :strokeWidth="strokeWidth"
            :innerStrokeWidth="innerStrokeWidth"
            :startColor="startColor"
            :stopColor="stopColor"
            :innerStrokeColor="innerStrokeColor"
          >
            <p class="completedSteps">{{ days }}</p>
          </radial-progress-bar>
          <span class="label-style">Tage</span>
        </div>
        &nbsp;&nbsp;
        <div>
          <radial-progress-bar
            :diameter="diameter"
            :completed-steps="hours"
            :total-steps="24"
            :animateSpeed="1000"
            :strokeWidth="strokeWidth"
            :innerStrokeWidth="innerStrokeWidth"
            :startColor="startColor"
            :stopColor="stopColor"
            :innerStrokeColor="innerStrokeColor"
          >
            <p class="completedSteps">{{ hours }}</p>
          </radial-progress-bar>
          <span class="label-style">Stunden</span>
        </div>
        &nbsp;&nbsp;
        <div>
          <radial-progress-bar
            :diameter="diameter"
            :completed-steps="minutes"
            :total-steps="60"
            :animateSpeed="1000"
            :strokeWidth="strokeWidth"
            :innerStrokeWidth="innerStrokeWidth"
            :startColor="startColor"
            :stopColor="stopColor"
            :innerStrokeColor="innerStrokeColor"
          >
            <p class="completedSteps">{{ minutes }}</p>
          </radial-progress-bar>
          <span class="label-style">Minuten</span>
        </div>
        &nbsp;&nbsp;
        <div>
          <radial-progress-bar
            :diameter="diameter"
            :completed-steps="seconds"
            :total-steps="60"
            :animateSpeed="1000"
            :strokeWidth="strokeWidth"
            :innerStrokeWidth="innerStrokeWidth"
            :startColor="startColor"
            :stopColor="stopColor"
            :innerStrokeColor="innerStrokeColor"
          >
            <p class="completedSteps">{{ seconds }}</p>
          </radial-progress-bar>
          <span class="label-style">Sekunden</span>
        </div>
      </div>
    </vue-countdown>
  </div>
</template>

<script>
import RadialProgressBar from "vue-radial-progress";
import VueCountdown from "@chenfengyuan/vue-countdown";

export default {
  name: "CountdownTimerComponent",
  data() {
    const now = new Date();
    const deadline = new Date("February 01 2024 18:00:00");
    return {
      diameter: 145,
      strokeWidth: 8,
      innerStrokeWidth: 4,
      time: deadline - now,
      startColor: "#f5b5d2",
      stopColor: "#a1daf8",
      innerStrokeColor: "#ffffff",
    };
  },
  components: {
    RadialProgressBar,
    VueCountdown,
  },
};
</script>
<style scoped>
.flex-view {
  display: flex;
}
.completedSteps {
  font-size: 35px;
  color: #192e5b;
}
.label-style {
  color: #192e5b;
  font-size: 15px;
}
</style>
