<template>
  <div class="lower-panel__header">
    我是播放列表的header
  </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import { changePlaybackMode } from '@/store/music'
import { PlaybackModeEnum } from '@/assets/js/enum/playbackModeEnum'

export default defineComponent({
  setup () {
    onMounted(() => { changePlaybackMode(PlaybackModeEnum.LOOP.value) })

    return { }
  }
})

</script>

<style lang="scss" scoped>
.lower-panel__header {
  width: 100%;
}
</style>
