<template>
  <div class="page editor">
    <!-- survey 预览 -->
    <section>
      <h4>标题与描述</h4>
      <van-cell label="描述" center>
        <template #title>
          <h3 class="editor__title">试标题辑</h3>
        </template>
        <template>
          <span class="editor__btn">编辑</span>
        </template>
      </van-cell>
    </section>
    <section class="editor__subjects">
      <h4>问题</h4>
      <van-cell-group>
        <van-cell
          icon-prefix="ri"
          icon="indeterminate-circle-line"
          title="单选题"
          center
        >
          <template #icon>
            <van-icon
              class-prefix="ri"
              name="indeterminate-circle-line"
              color="#de4337"
              size="20"
            />
          </template>
          <template #right-icon>
            <van-icon
              class-prefix="ri"
              name="menu-line"
              color="#a9a9a9"
              size="20"
            />
          </template>
        </van-cell>
      </van-cell-group>
    </section>
    <section>
      <h4>结束语</h4>
      <van-cell title="" label="结束语" center>
        <template>
          <span class="editor__btn">编辑</span>
        </template>
      </van-cell>
    </section>
    <!-- 编辑问卷标题 -->
    <EditBase
      :visible="editting === 'base'"
      @on-submit="handleBaseEdited"
      @on-back="handleBack"
    />
    <!-- 编辑问题 -->
    <!-- 编辑结束语 -->
    <EditEpilogue
      :visible="editting === 'epilogue'"
      @on-submit="handleEpilogueEdited"
      @on-back="handleBack"
    />
    <div class="editor__action">
      <van-button type="info" plain>设置</van-button>
      <van-button type="info" icon-prefix="ri" icon="play-circle-line">
        开始回收
      </van-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import EditBase from './EditBase.vue'
import EditEpilogue from './EditEpilogue.vue'

type EDIT_STATUS = 'preview' | 'base' | 'epilogue' | 'subject'

@Component({
  components: {
    EditBase,
    EditEpilogue,
  },
})
export default class Edit extends Vue {
  private editting: EDIT_STATUS = 'preview'
  handleToEdit(status: EDIT_STATUS): void {
    this.editting = status
  }
  handleBaseEdited({ title, desc }: { title: string; desc: string }): void {
    this.handleBack()
    console.log(title, desc)
  }
  handleEpilogueEdited({ epilogue }: { epilogue: string }): void {
    this.handleBack()
    console.log(epilogue)
  }
  handleBack() {
    this.editting = 'preview'
  }
}
</script>

<style lang="scss" scoped>
section {
  margin: 0 16px;
}
h4 {
  margin: 0;
  padding: 20px 0 8px;
  font-size: 13px;
  color: #999;
  font-weight: normal;
}
.editor {
  &__title {
    margin: 0;
  }
  &__btn {
    color: #1e8ffb;
  }
  &__action {
    position: fixed;
    display: flex;
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
  &__subjects {
    ::v-deep .van-cell__title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding: 0 16px;
    }
  }
}
</style>
