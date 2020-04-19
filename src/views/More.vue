<template>
  <div class="page">
    <div class="user-info">
      <van-image
        :width="avatarWidth"
        :height="avatarHeight"
        :src="userAvatar"
        round
      />
      <span class="user-info__name">{{ userName }}</span>
    </div>
    <van-cell size="large" value="问卷废纸篓" :border="false" is-link>
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
    <van-button class="logout-btn" block>
      退出登录
    </van-button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State, Getter } from 'vuex-class'
import { Survey } from '../store/type'
import { px2vw, px2vh } from '@/utils/calc'
@Component
export default class More extends Vue {
  @State('surveys', { namespace: 'user' }) surveys!: Survey[]
  @Getter('avatar') userAvatar!: string
  @Getter('name') userName!: string
  get avatarWidth() {
    return `${px2vw(50)}vw`
  }
  get avatarHeight() {
    return `${px2vh(50)}vh`
  }
}
</script>

<style lang="scss" scoped>
.page {
  padding: 16px;
}
.user-info {
  display: flex;
  align-items: center;
  padding: 4px 0 16px;
  &__name {
    margin-left: 16px;
    font-size: 18px;
  }
}
.van-cell {
  ::v-deep &__value {
    font-weight: 700;
    padding-top: 2px;
  }
}
.logout-btn {
  height: 50px;
  margin-top: 8px;
  color: #ff1313;
  background-color: #fff;
  border: 0;
  font-weight: 700;
}
</style>
