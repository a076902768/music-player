<template>
  <div class="lower-panel__header">
    <a-dropdown :trigger="['click']">
      <a class="ant-dropdown-link" @click.prevent>
        <menu-outlined />
      </a>
      <template #overlay>
        <a-menu>
          <a-menu-item
            @click="changePlaybackMode(PlaybackModeEnum.LOOP.value)"
          >
            <div :class="{'menu-is-active': musicInfo.playbackMode === PlaybackModeEnum.LOOP.name}">{{ PlaybackModeEnum.LOOP.cnName }}</div>
          </a-menu-item>
          <a-menu-item
            @click="changePlaybackMode(PlaybackModeEnum.SINGLE_LOOP.value)"
          >
            <div :class="{'menu-is-active': musicInfo.playbackMode === PlaybackModeEnum.SINGLE_LOOP.name}">{{ PlaybackModeEnum.SINGLE_LOOP.cnName }}</div>
          </a-menu-item>
          <a-menu-item
            @click="changePlaybackMode(PlaybackModeEnum.SHUFFLE.value)"
          >
            <div :class="{'menu-is-active': musicInfo.playbackMode === PlaybackModeEnum.SHUFFLE.name}">{{ PlaybackModeEnum.SHUFFLE.cnName }}</div>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import { changePlaybackMode, musicInfo } from '@/store/music'
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

    return {
      PlaybackModeEnum,
      changePlaybackMode,
      musicInfo
    }
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

.menu-is-active {
  background-color: #6f97ce;
  color: #fff;
}
</style>
