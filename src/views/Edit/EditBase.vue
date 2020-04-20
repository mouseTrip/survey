<template>
  <van-popup
    :value="visible"
    position="right"
    :duration="0.2"
    :style="popupStyle"
  >
    <van-form @submit="handleSubmit">
      <section>
        <h4>标题</h4>
        <van-field
          v-model="title"
          :rules="[{ required: true, message: '请填写问卷标题' }]"
        />
      </section>
      <section>
        <h4>问卷描述</h4>
        <van-field type="textarea" rows="3" v-model="desc" />
      </section>
      <div class="submit">
        <van-button @click="handleBack">返回</van-button>
        <van-button type="info" native-type="submit">保存</van-button>
      </div>
    </van-form>
  </van-popup>
</template>

<script lang="ts">
import { Component, Emit, Mixins } from 'vue-property-decorator'
import { SURVEY_DEFAULT_TITLE, SURVEY_DEFAULT_DESC } from '@/constants'
import { EditMixin } from './mixin'
@Component
export default class EditBase extends Mixins(EditMixin) {
  private title = SURVEY_DEFAULT_TITLE
  private desc = SURVEY_DEFAULT_DESC
  @Emit('on-submit')
  handleSubmit(): { title: string; desc: string } {
    return {
      title: this.title,
      desc: this.desc,
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
