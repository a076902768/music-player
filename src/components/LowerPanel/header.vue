<template>
  <div class="lower-panel__header">
    <a-button>
        <template #icon>
          <menu-outlined />
        </template>
      </a-button>
  </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import { changePlaybackMode } from '@/store/music'
import { PlaybackModeEnum } from '@/assets/js/enum/playbackModeEnum'
import {
  MenuOutlined
} from '@ant-design/icons-vue'

export default defineComponent({
  components: {
    MenuOutlined
  },
  setup () {
    onMounted(() => { changePlaybackMode(PlaybackModeEnum.LOOP.value) })

    return { }
  }
})

</script>

<style lang="scss" scoped>
.lower-panel__header {
  width: 100%;
  background-color: #494C74;
  border-radius: $main-radius;
  text-align: right;
  padding:  0 0.5rem;
}
</style>
