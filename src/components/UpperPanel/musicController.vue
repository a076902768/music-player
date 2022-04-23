<template>
  <div class="upper-pannel__music-controller">
    <div class="button-container">
      <a-button shape="circle">
        <template #icon>
          <step-backward-outlined />
        </template>
      </a-button>
      <a-button shape="circle">
        <template #icon>
          <double-left-outlined />
        </template>
      </a-button>
      <a-button shape="circle">
        <template #icon>
          <caret-right-outlined />
        </template>
      </a-button>
      <a-button shape="circle">
        <template #icon>
          <double-right-outlined />
        </template>
      </a-button>
      <a-button shape="circle">
        <template #icon>
          <step-forward-outlined />
        </template>
      </a-button>
      <a-button shape="circle">
        <template #icon>
          <upload-outlined />
        </template>
      </a-button>
    </div>
    <a-slider v-model="inputValue" :min="0" :max="1" :step="0.01" />
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
import {
  StepBackwardOutlined,
  DoubleLeftOutlined,
  CaretRightOutlined,
  DoubleRightOutlined,
  StepForwardOutlined,
  UploadOutlined
} from '@ant-design/icons-vue'

export default defineComponent({
  components: {
    StepBackwardOutlined,
    DoubleLeftOutlined,
    CaretRightOutlined,
    DoubleRightOutlined,
    StepForwardOutlined,
    UploadOutlined
  },
  setup () {
    const inputValue = ref(0.5)

    return { inputValue }
  }
})
</script>

<style lang="scss" scoped>
  .upper-pannel__music-controller {
    width: 100%;
  }

  .button-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2% 4%;
  }

  /deep/ .ant-btn {
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

      &:nth-child(3) {
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
</style>
