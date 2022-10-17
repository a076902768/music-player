<template>
  <div class="audio-graph">
    <canvas id="canvas"></canvas>
  </div>
</template>
<script>
import { defineComponent, onMounted } from 'vue'
export default defineComponent({
  setup () {
    onMounted(() => {
      try {
        window.AudioContext = window.AudioContext || window.webkitAudioContext
        const audioCtx = new AudioContext()
        console.log(audioCtx)
      } catch (e) {
        console.error('Web Audio API is not supported in this browser')
      }
    })
    return {}
  }
})
</script>
