<template>
  <div class="rows">
    <ul>
      <li>{{ quote.name }}</li>
      <li>
        {{ currentCourse }}
        $
      </li>
      <li :style="{ color: difference < 0 ? '#FF3165' : '#78CBBB' }">
        {{ difference }}
        %
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["quote", "initialCourse"],
  computed: {
    currentCourse() {
      let current = +this.quote.currentCourse;
      return current > 1 ? current.toFixed(2) : current.toFixed(5);
    },
    difference() {
      let current = this.quote.currentCourse;
      let initial = this.initialCourse;
      if (current !== initial) {
        return (((current - initial) / current) * 100).toFixed(2);
      } else {
        return "0";
      }
    },
  },
};
</script>

<style></style>
