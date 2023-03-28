<template>
  <div class="container">
    <quote-component
      v-for="quote in quotes"
      :key="quote.name"
      :quote="quote"
      :initialRate="getInitialQuote(quote.name)"
    ></quote-component>
  </div>
</template>

<script>
import QuoteComponent from "./components/QuoteComponent.vue";
import { loadQuotes } from "./helpers/utils.js";

export default {
  name: "App",
  data() {
    return {
      quotes: [],
    };
  },
  async mounted() {
    await this.initialLoad();
    setInterval(this.updateQuotes, 5000);
  },
  methods: {
    async initialLoad() {
      let data = await loadQuotes();
      this.quotes = Object.keys(data).map((key) => {
        return {
          id: key,
          name: data[key].symbol,
          currentRate: data[key].price,
          initialRate: data[key].price,
        };
      });
    },
    async updateQuotes() {
      let data = await loadQuotes();
      this.quotes.map((quote) => {
        quote.currentRate = data[quote.id].price;
      });
    },
    getInitialQuote(name) {
      let initialQuote = this.quotes.find((quote) => {
        return quote.name === name;
      });
      return initialQuote.currentRate;
    },
  },
  components: {
    QuoteComponent,
  },
};
</script>

<style src="./style.css"></style>
