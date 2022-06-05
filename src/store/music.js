// 音樂控制相關邏輯及相關音樂變數寫在此
import { reactive, onMounted, watch } from 'vue'

const musicInfo = reactive({
  audio: null,
  name: 'music-player',
  paused: true, // 是否為暫停狀態
  timer: undefined,
  timePercentage: 0.00,
  currentTime: 0,
  volume: 0
})

const musicList = reactive([])

watch(musicList, () => {
  if (!musicInfo.audio) {
    setMusic()
  }
})

const setMusic = (index = 0) => {
  musicInfo.name = musicList[index].name
  musicInfo.audio = musicList[index].audio
  musicInfo.volume = musicList[index].audio.volume
}

const startTime = () => {
  musicInfo.timer = setInterval(() => {
    musicInfo.timePercentage = musicInfo.audio.currentTime / musicInfo.audio.duration
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
  // setPaused()
})

export {
  musicInfo,
  musicList,
  playSong,
  pauseSong,
  nextSong,
  previousSong,
  controlAudioVol,
  controlAudioTime,
  uploadSong
}
