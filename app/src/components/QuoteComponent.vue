<template>
  <div class="rows">
    <ul>
      <li>{{ quote.name }}</li>
      <li>
        {{ quote.currentCourse }}
        $
      </li>
      <li>{{ initialCourse }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["quote", "initialCourse"],
};
</script>

<style></style>
