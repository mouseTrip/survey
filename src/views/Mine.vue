<template>
  <div class="page">
    <van-nav-bar @click-left="handleChangeLayout">
      <template #left>
        <van-icon
          class-prefix="ri"
          :name="layoutIcon"
          color="#a9a9a9"
          size="24"
        />
      </template>
    </van-nav-bar>
    <div class="survey-container">
      <div class="survey-container__grid">
        <SurveyPreviewCard v-for="item in surveys" :key="item.uuid" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'
import SurveyPreviewCard from '@/components/SurveyPreview/Card.vue'
export default Vue.extend({
  components: {
    SurveyPreviewCard,
  },
  data() {
    return {
      layout: 'grid',
    }
  },
  computed: {
    ...mapState('user', ['surveys']),
    layoutIcon(): string {
      return this.layout === 'grid' ? 'grid-fill' : 'list-check'
    },
  },
  methods: {
    ...mapActions('user', ['FETCH_USER_SURVEYS']),
    handleChangeLayout(): void {
      this.layout === 'grid' ? (this.layout = 'line') : (this.layout = 'grid')
    },
  },
  mounted() {
    this.FETCH_USER_SURVEYS({ phone: '18510273321' })
  },
})
</script>

<style lang="scss" scoped>
.van-nav-bar {
  ::v-deep &__left {
    display: flex;
    align-content: center;
  }
}
.survey-container {
  padding: 15px;
  &__grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
