<!--
 * @Author: Terry Zhang
 * @Date: 2020-04-21 23:27:53
 * @LastEditors: Terry Zhang
 * @LastEditTime: 2020-04-29 22:52:15
 * @Description: 编辑入口
 -->
<template>
  <div class="page">
    <!-- survey 预览 -->
    <Main @on-switch-editting="handleSwitchEditting" />
    <van-popup
      v-model="popupShow"
      position="right"
      :style="popupStyles"
      closeable
    >
      <!-- 编辑问卷标题 -->
      <Base v-if="editting === 'base'" />
      <!-- 编辑问卷选项 -->
      <Subject :type="" />
      <!-- 编辑问卷结束语 -->
      <Epilogue v-if="editting === 'epilogue'" />
    </van-popup>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { calc } from '@/utils'
import CommonSection from '@/components/CommonSection.vue'
import Main from './components/Main.vue'
import Base from './components/Base.vue'
import Subject from './components/Subejct.vue'
import Epilogue from './components/Epilogue.vue'
@Component({
  components: {
    [CommonSection.name]: CommonSection,
    Main,
    Base,
    Subject,
    Epilogue,
  },
})
export default class Edit extends Vue {
  private popupShow = false
  private editting = 'preview'
  get popupStyles() {
    return {
      boxSizing: 'border-box',
      width: '100vw',
      height: '100vh',
      padding: `${calc.px2vh(20)}vh 0`,
      backgroundColor: '#f4f6f9',
    }
  }
  handleBaseEdited({ title, desc }: { title: string; desc: string }): void {
    this.popupShow = false
    console.log(title, desc)
  }
  handleEpilogueEdited({ epilogue }: { epilogue: string }): void {
    this.popupShow = false
    console.log(epilogue)
  }
  handleSwitchEditting({
    status,
    subjectIndex,
  }: {
    status: string
    subjectIndex: number
  }) {
    this.editting = status
    this.popupShow = true
    if (subjectIndex !== undefined) {
      /**
       * TODO
       * 更改vuex survey里的current
       */
    }
  }
}
</script>

<style lang="scss" scoped></style>
