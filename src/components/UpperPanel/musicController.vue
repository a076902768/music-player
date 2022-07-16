<template>
  <div class="upper-panel__music-controller">
    <a-slider
      v-model:value="musicInfo.timePercentage"
      :min="0"
      :max="1"
      :step="0.01"
      @afterChange="onAfterChange"
      @change="controlAudioTime"
    />
    <div class="upper-panel__music-controller--upper">
      <div class="button-controller">
        <a-button shape="circle" @click="previousSong">
          <template #icon>
            <step-backward-outlined />
          </template>
        </a-button>
        <a-button :disabled="!musicList.length" shape="circle" v-if="musicInfo.paused" @click="playSong">
          <template #icon>
            <caret-right-outlined />
          </template>
        </a-button>
        <a-button shape="circle" v-else @click="pauseSong">
          <template #icon>
            <pause-outlined  />
          </template>
        </a-button>
        <a-button shape="circle" @click="nextSong()">
          <template #icon>
            <step-forward-outlined />
          </template>
        </a-button>
        <a-upload
          name="file"
          :multiple="true"
          :show-upload-list="false"
          :customRequest="upLoadFiles"
          @change="handleChange"
        >
          <a-button shape="circle">
            <template #icon>
              <upload-outlined />
            </template>
          </a-button>
        </a-upload>
      </div>
      <div class="voice-controller">
        <sound-filled
         :class="{mute: musicInfo.volume === 0}"
         @click="controlAudioVol(audioVolume)"
         />
        <div class="voice-controller__slider">
          <a-slider
          v-model:value="musicInfo.volume"
          :min="0"
          :max="1"
          :step="0.01"
          @change="controlAudioVol"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, computed } from 'vue'
import {
  StepBackwardOutlined,
  CaretRightOutlined,
  StepForwardOutlined,
  UploadOutlined,
  SoundFilled,
  PauseOutlined
} from '@ant-design/icons-vue'
import { musicInfo, musicList, playSong, pauseSong, previousSong, nextSong, controlAudioTime, controlAudioVol } from '@/store/music'

export default defineComponent({
  components: {
    StepBackwardOutlined,
    CaretRightOutlined,
    StepForwardOutlined,
    UploadOutlined,
    SoundFilled,
    PauseOutlined
  },
  setup () {
    const audioVolume = computed(() => musicInfo.volume ? 0 : 0.5)

    const upLoadFiles = async () => {}

    const handleChange = ({ file }) => {
      console.log(file)
      if (musicList.find((e) => e?.uid === file.uid)) return

      let timer = null
      const saveAudioFile = () => {
        timer = setInterval(() => {
          if (!audio.readyState) return

          audio.removeEventListener('loadstart', saveAudioFile)
          file.audio = audio
          musicList.push(file)
          clearInterval(timer)
        }, 10)
      }
      const audio = new Audio()
      audio.src = URL.createObjectURL(file.originFileObj)
      audio.addEventListener('loadstart', saveAudioFile)
    }

    const onAfterChange = () => playSong()

    return {
      playSong,
      pauseSong,
      previousSong,
      nextSong,
      controlAudioTime,
      controlAudioVol,
      musicInfo,
      musicList,
      audioVolume,
      upLoadFiles,
      handleChange,
      onAfterChange
    }
  }
})
</script>

<style lang="scss" scoped>
  .upper-panel__music-controller {
    width: 100%;

    &--upper {
      display: flex;
      align-items: center;
      padding: 2% 0;
    }
  }

  .button-controller {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-basis: 60%;
  }

  .voice-controller {
    display: flex;
    align-items: center;
    flex-basis: 40%;
    gap: 0.5rem;

    &__slider {
      width: 100%;
    }

    .anticon {
      &-sound.mute {
        position: relative;
        cursor: pointer;

        &::after {
          position: absolute;
          top: 50%;
          left: -25%;
          width: 141.4%;
          height: 0.1rem;
          background-color: red;
          transform-origin: center;
          transform: rotate(45deg) translateY(-50%);
          content: '';
        }
      }
    }
  }

  :deep(.ant-btn) {
    &-icon-only {
      &:nth-last-child(3):nth-child(2) {
        width: 2.5rem;
        height: 2.5rem;

        .anticon {
          font-size: 1.75rem;
        }
      }
    }
  }

  :deep(.ant-slider) {
    &-rail {
      background-color: #545784;
    }

    &-track {
      background-color: #75B7EC;
    }

    &-handle {
      border: solid 0.1rem #333;
      background-image: radial-gradient(#25238C, #372C7D, #6D5CAE, #8EADE2, #fff);
    }

    &-handle.ant-tooltip-open {
      border-color: #8EADE2;
      background-image: radial-gradient(#25238C, #372C7D, #6D5CAE, #8EADE2, #fff);
    }

    &:hover .ant-slider-rail {
      background-color: #545784;
    }
  }
</style>
