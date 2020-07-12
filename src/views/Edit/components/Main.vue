<!--
 * @Author: Terry Zhang
 * @Date: 2020-04-29 21:55:21
 * @LastEditors: Terry Zhang
 * @LastEditTime: 2020-04-29 22:52:22
 * @Description: 编辑面板
 -->
<template>
  <main class="editor">
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
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import CommonSection from '@/components/CommonSection.vue'
@Component({
  components: {
    [CommonSection.name]: CommonSection,
  },
})
export default class Main extends Vue {
  handleToEdit(status: string, subjectIndex?: number) {
    this.$emit('on-switch-editting', { status, subjectIndex })
  }
}
</script>

<style lang="scss" scoped>
.editor {
  flex: 1;
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
