<template>
  <div class="tabbar-layout">
    <router-view />
    <van-tabbar route active-color="#008fff" inactive-color="#a9a9a9">
      <van-tabbar-item replace to="/mine">
        <span>我的问卷</span>
        <template #icon>
          <van-icon class-prefix="ri" name="user-line" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/more">
        <span>更多</span>
        <template #icon>
          <van-icon class-prefix="ri" name="more-fill" />
        </template>
      </van-tabbar-item>
      <div class="center-btn">
        <div class="center-btn__layout">
          <van-icon class-prefix="ri" name="add-line" size="36" color="#fff" />
        </div>
      </div>
    </van-tabbar>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
<style lang="scss" scoped>
.van-tabbar-item:first-of-type {
  padding-right: 50px;
}
.center-btn {
  position: absolute;
  left: 50%;
  top: -8px;
  transform: translate(-50%, 0);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #008fff;
  z-index: 2;
  &__layout {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
