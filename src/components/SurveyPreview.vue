<template>
  <div
    class="survey-preview"
    :class="{ 'survey-grid': type === 'grid', 'survey-cell': type === 'cell' }"
  >
    <div class="survey-grid__thumbnail" v-if="isGridType">
      <van-image
        :src="thumbnail || defaultPreviewPlaceholder"
        fit="cover"
        width="100%"
        height="100%"
      />
    </div>
    <div
      :style="{ '--color': statusColor }"
      class="survey-preview__info"
      :class="`survey-${type}__info`"
    >
      {{ title }}
    </div>
    <span class="survey-preview__count" :class="`survey-${type}__count`">
      0
    </span>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'
import {
  monoPreviewPlaceholderSrc,
  colorPreviewPlaceholderSrc,
} from '@/constants'
@Component({
  name: 'SurveyPreview',
})
export default class SurveyPreview extends Vue {
  @Prop({ default: 'grid' }) readonly type!: 'grid' | 'cell' // 预览布局类型
  @Prop({ default: 0 }) readonly status!: 1 | 0 // 回收状态 1-正在回收 0-尚未回收
  @Prop({ default: '', required: true }) readonly uuid!: string
  @Prop({ default: '问卷标题' }) readonly title!: string
  @Prop({ default: '' }) readonly thumbnail!: string
  get isGridType() {
    return this.type === 'grid'
  }
  get defaultPreviewPlaceholder() {
    return this.status === 1
      ? monoPreviewPlaceholderSrc
      : colorPreviewPlaceholderSrc
  }
  get statusColor() {
    return this.status === 1 ? '#ef5350' : '#3bb357'
  }
}
</script>

<style lang="scss" scoped>
.survey-preview {
  position: relative;
  &__info {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    &::before {
      content: ' ';
      display: inline-block;
      margin-right: 4px;
      vertical-align: 1px;
      width: 6px;
      height: 6px;
      border-radius: 100%;
      background-color: #{'var(--color)'};
    }
  }
}
.survey-preview__count {
  position: absolute;
  color: #a9a9a9;
}
.survey-grid {
  width: 100px;
  height: 150px;
  margin-bottom: 8px;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  &__thumbnail {
    box-sizing: border-box;
    width: 100%;
    background-color: #fff;
    padding: 6px 6px 26px 6px;
    height: 125px;
    box-shadow: 0 0 0 1px #e1e7f2;
  }
  &__count {
    bottom: 32px;
    right: 6px;
  }
  &__info {
    box-sizing: border-box;
    width: 100%;
    padding: 8px 2px 0 2px;
    height: 25px;
    text-align: center;
  }
}
.survey-cell {
  box-sizing: border-box;
  background: #fff;
  width: 100%;
  padding: 17px 15px;
  font-size: 14px;
  text-align: left;
  &:not(:first-of-type)::before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    width: auto;
    height: 1px;
    background-color: #e1e7f2;
    transform: scaleY(0.5);
    transform-origin: top center;
  }
  &__count {
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
  }
}
</style>
