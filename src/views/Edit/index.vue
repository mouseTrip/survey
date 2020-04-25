<template>
  <div class="page editor">
    <!-- survey 预览 -->
    <main v-if="editting === 'preview'">
      <CommonSection title="标题与描述">
        <van-cell label="描述" center>
          <template #title>
            <h5 class="editor__title">试标题辑</h5>
          </template>
          <template>
            <span class="editor__btn" @click="handleToEdit('base')">编辑</span>
          </template>
        </van-cell>
      </CommonSection>
      <CommonSection title="问题" class="editor__subjects">
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
      </CommonSection>
      <CommonSection title="结束语">
        <van-cell title="" label="结束语" center>
          <template>
            <span class="editor__btn" @click="handleToEdit('epilogue')">
              编辑
            </span>
          </template>
        </van-cell>
      </CommonSection>
      <div class="editor__action">
        <van-button type="info" plain>设置</van-button>
        <van-button type="info" icon-prefix="ri" icon="play-circle-line">
          开始回收
        </van-button>
      </div>
    </main>

    <!-- 编辑问卷标题 -->
    <section v-if="editting === 'base'">
      <EditBase />
    </section>
    <!-- 编辑问题 -->
    <!-- 编辑结束语 -->
    <section v-if="editting === 'epilogue'">
      <EditEpilogue />
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import CommonSection from '@/components/CommonSection.vue'
import EditBase from './EditBase.vue'
import EditEpilogue from './EditEpilogue.vue'

type EDIT_STATUS = 'preview' | 'base' | 'epilogue' | 'subject'

@Component({
  components: {
    [CommonSection.name]: CommonSection,
    EditBase,
    EditEpilogue,
  },
})
export default class Edit extends Vue {
  private editting: EDIT_STATUS = 'preview'
  handleToEdit(status: EDIT_STATUS): void {
    this.$router.push({ path: `/edit/${status}` })
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
  initData() {
    console.log(this.$route.params)
    this.editting = this.$route.params.status as EDIT_STATUS
  }
  created() {
    this.initData()
  }
}
</script>

<style lang="scss" scoped>
.editor {
  &__title {
    font-size: 16px;
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
