<template>
  <div class="upper-panel">
    <div class="upper-panel__container">
      <Header />
      <audio-graph />
      <music-controller />
    </div>
  </div>
</template>

<script>
import Header from '@/components/UpperPanel/header'
import AudioGraph from '@/components/UpperPanel/audioGraph'
import MusicController from '@/components/UpperPanel/musicController'

export default {
  components: {
    Header,
    AudioGraph,
    MusicController
  }
}
</script>

<style lang="scss" scoped>
.upper-panel {
  width: 100%;
  height: $upper-panel-height;
  background-image: linear-gradient(to bottom, $upper-panel-background-color1, $upper-panel-background-color2);
  border-radius: $main-radius;
  padding: 2%;
  box-sizing: border-box;

  &__container {
    width: 100%;
    height: 100%;
  }
}
</style>
