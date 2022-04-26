// 音樂控制相關邏輯及相關音樂變數寫在此
import { reactive, onMounted } from 'vue'

const musicInfo = reactive({
  audio: new Audio(),
  paused: true, // 是否為暫停狀態
  timer: undefined,
  currentTime: 0
})

const startTime = () => {
  musicInfo.timer = setInterval(() => {
    musicInfo.currentTime = musicInfo.audio.currentTime
  }, 10)
}

const stopTime = () => {
  clearInterval(musicInfo.timer)
}

const playSong = () => {
  musicInfo.audio.play()
  setPaused()
  startTime()
}

const pauseSong = () => {
  musicInfo.audio.pause()
  setPaused()
  stopTime()
}

const setPaused = () => {
  musicInfo.paused = musicInfo.audio.paused
}

const nextSong = () => { }

const previousSong = () => { }

const controlAudioVol = () => { }

const controlAudioTime = () => { }

const uploadSong = (url) => {
  musicInfo.audio.src = require(`${url}`)
}

onMounted(() => {
  setPaused()
})

export {
  musicInfo,
  playSong,
  pauseSong,
  nextSong,
  previousSong,
  controlAudioVol,
  controlAudioTime,
  uploadSong
}
