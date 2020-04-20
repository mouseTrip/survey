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
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import { SURVEY_DEFAULT_TITLE, SURVEY_DEFAULT_DESC } from '@/constants'
@Component
export default class EditBase extends Vue {
  @Prop({ default: false }) readonly visible!: boolean
  private title = SURVEY_DEFAULT_TITLE
  private desc = SURVEY_DEFAULT_DESC
  get popupStyle() {
    return {
      width: '100vw',
      minHeight: '100vh',
      backgroundColor: '#F3F5F9',
    }
  }
  @Emit('on-submit')
  handleSubmit(): { title: string; desc: string } {
    return {
      title: this.title,
      desc: this.desc,
    }
  }
  @Emit('on-back')
  handleBack() {}
}
</script>

<style lang="scss" scoped>
h4 {
  margin: 0;
  padding: 20px 0 8px 16px;
  font-size: 14px;
}
.submit {
  position: absolute;
  background: #fff;
  bottom: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 15px;
  .van-button {
    &:first-of-type {
      width: 30%;
      margin-right: 5%;
    }
    &:last-of-type {
      width: 65%;
    }
  }
}
</style>
