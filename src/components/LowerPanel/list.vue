<template>
  <div class="lower-panel__list" v-if="musicList.length">
    <div v-for="(music, index) in musicList" :key="index" class="music">
      <div class="music__title">
        {{ music.name }}
      </div>
      <div class="music__duration">
        {{ music.duration }}
      </div>
      </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { musicList } from '@/store/music'

export default defineComponent({
  setup () {
    return { musicList }
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
}
</style>
