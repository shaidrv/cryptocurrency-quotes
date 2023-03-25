<template>
  <div class="container">
    <!-- <div class="rows" v-for="quote in quotes" :key="quote.name">
      <ul>
        <li>{{ quote.name }}</li>
        <li>{{ quote.price }}</li>
        <li>difference</li>
      </ul>
    </div> -->
    <quote-component
      v-for="quote in quotes"
      :key="quote.name"
      :quote="quote"
    ></quote-component>
  </div>
</template>

<script>
import QuoteComponent from "./components/QuoteComponent.vue";
export default {
  name: "App",
  data() {
    return {
      quotes: [],
    };
  },

  async mounted() {
    await this.loadQuotes();
    setInterval(this.loadQuotes, 5000);
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
          currentCourse: data[key].price,
        };
      });
    },
  },
  components: {
    QuoteComponent,
  },
};
</script>

<style src="./style.css"></style>
