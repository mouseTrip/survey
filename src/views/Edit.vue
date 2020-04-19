<template>
  <div class="page editor">
    <!-- survey 预览 -->
    <!-- 编辑问卷标题 -->
    <!-- 编辑问题 -->
    <!-- 编辑结束语 -->
    <div class="editor__action">
      <van-button>设置</van-button>
      <van-button>开始回收</van-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class Edit extends Vue {}
</script>
