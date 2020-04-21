<template>
  <van-popup
    :value="visible"
    position="right"
    :duration="0.2"
    :style="popupStyle"
  >
    <van-form @submit="handleSubmit">
      <CommonSection title="问卷结束语">
        <van-field type="textarea" rows="3" v-model="epilogue" />
      </CommonSection>
      <div class="submit">
        <van-button @click="handleBack">返回</van-button>
        <van-button type="info" native-type="submit">保存</van-button>
      </div>
    </van-form>
  </van-popup>
</template>

<script lang="ts">
import { Component, Emit, Mixins } from 'vue-property-decorator'
import { SURVEY_DEFAULT_EPILOGUE } from '@/constants'
import CommonSection from '@/components/CommonSection.vue'
import { EditMixin } from './mixin'
@Component({
  components: {
    [CommonSection.name]: CommonSection,
  },
})
export default class EditBase extends Mixins(EditMixin) {
  private epilogue = SURVEY_DEFAULT_EPILOGUE
  @Emit('on-submit')
  handleSubmit(): { epilogue: string } {
    return {
      epilogue: this.epilogue,
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
