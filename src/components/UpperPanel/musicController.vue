<template>
  <div class="upper-panel__music-controller">
    <a-slider v-model="time" :min="0" :max="1" :step="0.01" />
    <div class="upper-panel__music-controller--upper">
      <div class="button-controller">
        <a-button shape="circle">
          <template #icon>
            <step-backward-outlined />
          </template>
        </a-button>
        <a-button shape="circle" v-if="musicInfo.paused" @click="playSong">
          <template #icon>
            <caret-right-outlined />
          </template>
        </a-button>
        <a-button shape="circle" v-else @click="pauseSong">
          <template #icon>
            <pause-outlined  />
          </template>
        </a-button>
        <a-button shape="circle">
          <template #icon>
            <step-forward-outlined />
          </template>
        </a-button>
        <a-upload
          v-model:file-list="musicList"
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
        <sound-filled />
        <div class="voice-controller__slider">
          <a-slider v-model="music" :min="0" :max="1" :step="0.01" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
import {
  StepBackwardOutlined,
  CaretRightOutlined,
  StepForwardOutlined,
  UploadOutlined,
  SoundFilled,
  PauseOutlined
} from '@ant-design/icons-vue'
import { musicInfo, musicList, playSong, pauseSong } from '@/store/music'

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
    const time = ref(0.5)
    const music = ref(0.5)

    musicInfo.audio.src = require('@/assets/test.mp3')

    const upLoadFiles = ({ onSuccess, onError, file }) => {
      console.log(file)
    }

    const handleChange = (info) => {
      console.log(info)
    }

    return { time, music, playSong, pauseSong, musicInfo, musicList, upLoadFiles, handleChange }
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
  }

  :deep(.ant-btn) {
    &-icon-only {
      width: 1.8rem;
      height: 1.8rem;
      min-width: unset;
      border: solid 0.2rem #333;
      box-sizing: border-box;
      color: #fff;
      background-image: radial-gradient(#25238C, #372C7D, #6D5CAE, #8EADE2, #fff);

      &:hover {
        color: #fff;
        background-image: radial-gradient(#25238C, #372C7D, #6D5CAE, #8EADE2, #fff);
        border-color: #8EADE2;
      }

      &:nth-last-child(3):nth-child(2) {
        width: 2.5rem;
        height: 2.5rem;

        .anticon {
          font-size: 1.75rem;
        }
      }
    }

    &[disabled] {
      color: #fff;
      background-image: radial-gradient(#817BBA, #A9A0CD, #ADA5CF, #B9B0D4, #fff);
        border-color: #333;

        &:hover {
          color: #fff;
          background-image: radial-gradient(#817BBA, #A9A0CD, #ADA5CF, #B9B0D4, #fff);
        border-color: #333;
        }
    }

    .anticon {
      font-size: 0.75rem;
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
