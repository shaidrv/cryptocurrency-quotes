<template>
  <div class="rows">
    <table>
      <tr>
        <td>{{ quote.name }}</td>
        <td>{{ currentCourse }} $</td>
        <td :style="{ color: difference < 0 ? '#FF3165' : '#78CBBB' }">
          {{ difference }} %
        </td>
      </tr>
    </table>
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
