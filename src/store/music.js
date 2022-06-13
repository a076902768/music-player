// 音樂控制相關邏輯及相關音樂變數寫在此
import { reactive, onMounted, watch } from 'vue'

const musicInfo = reactive({
  audio: null,
  name: 'music-player',
  uid: undefined, // ant-design upload預設的file uid
  playbackMode: 'repeat', // 音樂播放模式
  paused: true, // 是否為暫停狀態
  timer: undefined,
  timePercentage: 0.00,
  currentTime: 0,
  volume: 1
})

const musicList = reactive([])

watch(musicList, () => {
  if (!musicInfo.audio) {
    setMusicInfo()
  }
})

/** 播放音樂 */
const playSong = () => {
  musicInfo.audio.play()
  setPaused()
  musicSetIntervalService()
  musicInfo.audio.volume = musicInfo.volume
}

/** 暫停音樂 */
const pauseSong = () => {
  musicInfo.audio.pause()
  setPaused()
  clearInterval(musicInfo.timer)
}

/** 將musicList特定位置的值存放至musicInfo
 *
 * @param {Number} pos musicList的索引值
*/
const setMusicInfo = (pos = 0) => {
  musicInfo.uid = musicList[pos].uid
  musicInfo.name = musicList[pos].name
  musicInfo.audio = musicList[pos].audio
}

/** 設定setInterval得知當前音樂時間以及%數，以及當音樂播放完畢時須執行的邏輯 */
const musicSetIntervalService = () => {
  musicInfo.timer = setInterval(() => {
    if (audioIsEnded()) {
      if (musicInfo.playbackMode === 'repeat') nextSong()
      return
    }
    musicInfo.timePercentage = musicInfo.audio.currentTime / musicInfo.audio.duration
    musicInfo.currentTime = musicInfo.audio.currentTime
  }, 10)
}

/** 取得音樂之於musicList的相對位置
 *
 * @param {String} uid ant-design upload file uid
*/
const getMusicPos = (uid) => musicList.findIndex((e) => e.uid === uid)

/** 檢查音樂是否已結束 */
const audioIsEnded = () => {
  return musicInfo.audio.ended
}

/** 重置音樂時間 */
const resetMusic = () => {
  musicInfo.audio.currentTime = 0
}

/** 切換音樂
 *
 * @param {Number} pos musicList的索引值
 */
const changeMusic = (pos) => {
  pauseSong()
  resetMusic()
  setMusicInfo(pos)
  playSong()
}

/** 改變paused屬性 */
const setPaused = () => {
  musicInfo.paused = musicInfo.audio.paused
}

/** 下一首 */
const nextSong = () => {
  const pos = getMusicPos(musicInfo.uid)
  if (pos === musicList.length - 1) {
    changeMusic(0)
    return
  }
  changeMusic(pos + 1)
}

/** 上一首 */
const previousSong = () => {
  const pos = getMusicPos(musicInfo.uid)
  if (pos === 0) {
    changeMusic(musicList.length - 1)
    return
  }
  changeMusic(pos - 1)
}

/** 控制音量 */
const controlAudioVol = (volume) => {
  musicInfo.audio.volume = volume
  musicInfo.volume = volume
}

/** 控制音樂時間線 */
const controlAudioTime = (percentage) => {
  pauseSong()
  musicInfo.audio.currentTime = musicInfo.audio.duration * percentage
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
  changeMusic,
  getMusicPos
}
