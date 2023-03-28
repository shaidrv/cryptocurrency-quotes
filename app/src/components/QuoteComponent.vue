<template>
  <div class="rows">
    <table>
      <tr>
        <td>{{ quote.name }}</td>
        <td>{{ currentRate }} $</td>
        <td :class="setColor">{{ difference }} %</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ["quote"],
  computed: {
    currentRate() {
      let current = +this.quote.currentRate;
      return current > 1 ? current.toFixed(2) : current.toFixed(5);
    },
    difference() {
      let current = this.quote.currentRate;
      let initial = this.quote.initialRate;
      if (current !== initial) {
        return (((current - initial) / current) * 100).toFixed(2);
      } else {
        return "0";
      }
    },
    setColor() {
      return {
        pink: this.difference < 0,
        green: this.difference >= 0,
      };
    },
  },
};
</script>

<style>
.pink {
  color: #ff3165;
}

.green {
  color: #78cbbb;
}
</style>
