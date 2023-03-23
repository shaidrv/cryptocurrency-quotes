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

  async mounted() {
    await this.loadQuotes();
  },

  methods: {
    async loadQuotes() {
      const response = await fetch(
        "https://www.binance.com/api/v3/ticker/price"
      );
      const data = await response.json();
      this.quotes = Object.keys(data).map((key) => {
        return {
          id: key,
          name: data[key].symbol,
          price: data[key].price,
        };
      });
    },
  },
};
</script>

<style src="./style.css"></style>
