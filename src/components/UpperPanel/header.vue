<template>
  <div class="upper-pannel__header">
    <div class="upper-pannel__header__title">web</div>
    <div class="upper-pannel__header__timer">{{ musicInfo.currentTime }}</div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { musicInfo, currentTime } from '@/store/music'

export default defineComponent({
  setup () {
    return { musicInfo, currentTime }
  }
})

</script>

<style lang="scss" scoped>
.upper-pannel__header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.9rem;
  background-image: linear-gradient(to bottom, $upper-pannel-background-color1, $upper-pannel-header-background-color);
  padding: 1% 2%;
  box-sizing: border-box;
  border-radius: $main-radius;

  &__timer {
    letter-spacing: 0.2rem;
  }
}
</style>
