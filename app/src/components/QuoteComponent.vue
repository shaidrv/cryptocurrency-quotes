<template>
  <div class="rows">
    <ul>
      <li>{{ quote.name }}</li>
      <li>
        {{ quote.currentCourse }}
        $
      </li>
      <li>difference</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["quote"],
};
</script>

<style></style>
