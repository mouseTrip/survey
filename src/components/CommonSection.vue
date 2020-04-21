<template>
  <section class="common-section">
    <h4>{{ title }}</h4>
    <div
      class="common-section__content"
      :class="{ 'common-section__content--gap': gap }"
      :style="customStyle"
    >
      <slot></slot>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component({
  name: 'CommonSection',
})
export default class CommonSection extends Vue {
  @Prop({ default: '' }) readonly title!: string // 标题
  @Prop({ default: false }) readonly gap!: boolean // 内容区是否需要内边距
  @Prop({ default: '' }) readonly customStyle!: string | object // 其他内容区自定义样式
}
</script>

<style lang="scss" scoped>
h4 {
  margin: 0;
  padding: 20px 0 8px;
  font-size: 12px;
  color: #999;
  font-weight: normal;
}
.common-section {
  margin: 0 16px;
  &__content {
    background: #fff;
    &--gap {
      padding: 10px 16px;
    }
  }
}
</style>
