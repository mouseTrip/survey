<!--
 * @Author: Terry Zhang
 * @Date: 2020-04-20 21:04:44
 * @LastEditors: Terry Zhang
 * @LastEditTime: 2020-04-29 22:23:04
 * @Description: 编辑基础信息
 -->
<template>
  <van-form @submit="handleSubmit">
    <CommonSection title="标题">
      <van-field
        v-model="title"
        :rules="[{ required: true, message: '请填写问卷标题' }]"
      />
    </CommonSection>
    <CommonSection title="问卷描述">
      <van-field type="textarea" rows="3" v-model="desc" />
    </CommonSection>
    <div class="submit">
      <van-button type="info" block native-type="submit">保存</van-button>
    </div>
  </van-form>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator'
import { SURVEY_DEFAULT_TITLE, SURVEY_DEFAULT_DESC } from '@/constants'
import CommonSection from '@/components/CommonSection.vue'
@Component({
  components: {
    [CommonSection.name]: CommonSection,
  },
})
export default class EditBase extends Vue {
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
