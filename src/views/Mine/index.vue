<template>
  <div class="page">
    <van-nav-bar @click-left="handleChangeLayout">
      <template #left>
        <van-icon
          class-prefix="ri"
          :name="layoutIconName"
          color="#a9a9a9"
          size="24"
        />
      </template>
    </van-nav-bar>
    <div class="survey-container">
      <div :class="`survey-container--${layout}`">
        <SurveyPreview v-for="n in 5" :key="n" :uuid="n + ''" :type="layout" />
        <i v-for="n in 3" :key="n + 'placeholder'" class="grid-placeholder"></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { LAYOUT_GRID, LAYOUT_CELL } from '@/constants'
import SurveyPreview from '@/components/SurveyPreview.vue'

@Component({
  components: {
    SurveyPreview,
  },
})
export default class Mine extends Vue {
  private layout = LAYOUT_GRID
  get isGrid() {
    return this.layout === LAYOUT_GRID
  }
  get layoutIconName() {
    return this.isGrid ? 'list-check' : 'grid-fill'
  }
  handleChangeLayout(): void {
    this.isGrid ? (this.layout = LAYOUT_CELL) : (this.layout = LAYOUT_GRID)
  }
}
</script>

<style lang="scss" scoped>
.van-nav-bar {
  ::v-deep &__left {
    display: flex;
    align-content: center;
  }
}
.survey-container {
  padding: 16px;
  &--grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
.grid-placeholder {
  width: 100px;
  height: 0;
}
</style>
