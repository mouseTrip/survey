<template>
  <div class="survey-card">
    <div class="survey-card__thumbnail"></div>
    <div class="survey-card__info"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
.survey-card {
  width: 100px;
  height: 150px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  &__thumbnail {
    width: 100%;
    flex: 1;
  }
  &__info {
    width: 100%;
    height: 25px;
  }
}
</style>
