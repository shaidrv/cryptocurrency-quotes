<template>
  <div class="container">
    <quote-component
      v-for="quote in quotes"
      :key="quote.name"
      :quote="quote"
      :initialCourse="getInitialQuote(quote.name)"
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
      quotesInitial: [],
    };
  },

  async mounted() {
    await this.initialLoad();
    setInterval(this.updateQuotes, 5000);
  },

  methods: {
    async loadQuotes() {
      const response = await fetch(
        "https://www.binance.com/api/v3/ticker/price"
      );
      const data = await response.json();
      return Object.keys(data).map((key) => {
        return {
          id: key,
          name: data[key].symbol,
          currentCourse: data[key].price,
        };
      });
    },
    async initialLoad() {
      this.quotesInitial = await this.loadQuotes();
      this.quotes = this.quotesInitial;
    },
    async updateQuotes() {
      this.quotes = await this.loadQuotes();
    },
    getInitialQuote(name) {
      let initialQuote = this.quotesInitial.find((quote) => {
        return quote.name === name;
      });
      return initialQuote.currentCourse;
    },
  },
  components: {
    QuoteComponent,
  },
};
</script>

<style src="./style.css"></style>
