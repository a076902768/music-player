<template>
  <div class="lower-panel__list" v-if="musicList.length">
    <div v-for="(music, index) in musicList" :key="index" class="music">
      <div class="music__title" @click="changeMusic(getMusicPos(music.uid))">
        {{ music.name }}
      </div>
      <div class="music__duration">
        {{ Helper.timeFormat(music.audio.duration) }}
      </div>
      </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { musicList, changeMusic, getMusicPos } from '@/store/music'
import Helper from '@/assets/js/utils/helper'

export default defineComponent({
  setup () {
    return { musicList, changeMusic, getMusicPos, Helper }
  }
})
</script>

<style lang="scss" scoped>
.lower-panel__list {
  flex-basis: 70%;
}

.music {
  display: flex;
  justify-content: space-between;

  &__title {
    cursor: pointer;
  }
}
</style>
