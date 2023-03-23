<template>
  <div class="container">
    <div class="rows" v-for="quote in quotes" :key="quote.name">
      <ul>
        <li>{{ quote.name }}</li>
        <li>{{ quote.price }}</li>
        <li>difference</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      quotes: [
        { name: "ETHBTC", price: "0.06332100" },
        { name: "LTCBTC", price: "0.00318100" },
      ],
    };
  },
};
</script>

<style src="./style.css"></style>
