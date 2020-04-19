<template>
  <div class="page">
    <img :src="userAvatar" alt="用户头像" />
    <p>{{ userName }}</p>
    <van-cell size="large" value="问卷废纸篓">
      <template #icon>
        <van-icon
          class-prefix="ri"
          name="delete-bin-line"
          color="#008fff"
          size="20"
          style="margin-right: 3.73333vw"
        />
      </template>
    </van-cell>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State, Getter } from 'vuex-class'
import { Survey } from '../store/type'
@Component
export default class More extends Vue {
  @State('surveys', { namespace: 'user' }) surveys!: Survey[]
  @Getter('avatar') userAvatar!: string
  @Getter('name') userName!: string
}
</script>

<style lang="scss" scoped>
.page {
  padding: 16px;
}
.van-cell {
  ::v-deep &__value {
    font-weight: 700;
    padding-top: 2px;
  }
}
</style>
