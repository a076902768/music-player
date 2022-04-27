<template>
  <div class="upper-panel__header">
    <div class="upper-panel__header__title">web</div>
    <div class="upper-panel__header__timer">{{ currentTime }}</div>
  </div>
</template>
<script>
import { defineComponent, computed } from 'vue'
import { musicInfo } from '@/store/music'
import Helper from '@/assets/js/utils/helper'

export default defineComponent({
  setup () {
    const currentTime = computed(() => {
      return `${Helper.timeFormat(musicInfo.currentTime)}`
    })

    return { musicInfo, currentTime }
  }
})

</script>

<style lang="scss" scoped>
.upper-panel__header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.9rem;
  background-image: linear-gradient(to bottom, $upper-panel-background-color1, $upper-panel-header-background-color);
  padding: 1% 2%;
  box-sizing: border-box;
  border-radius: $main-radius;

  &__timer {
    letter-spacing: 0.2rem;
  }
}
</style>
