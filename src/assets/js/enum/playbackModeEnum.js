class PlaybackModeEnum {
  constructor (name, cnName, value) {
    this.name = name
    this.cnName = cnName
    this.value = value
  }
}

PlaybackModeEnum.LOOP = new PlaybackModeEnum('loop', '全部循環', 0) // 全部循環
PlaybackModeEnum.SINGLE_LOOP = new PlaybackModeEnum('single_loop', '單曲循環', 1) // 單曲循環
PlaybackModeEnum.SHUFFLE = new PlaybackModeEnum('shuffle', '隨機撥放', 2) // 隨機撥放

Object.freeze(PlaybackModeEnum)

const playbackModeList = [
  PlaybackModeEnum.LOOP,
  PlaybackModeEnum.SINGLE_LOOP,
  PlaybackModeEnum.SHUFFLE
]

const getPlaybackModeName = (value) => {
  const mode = playbackModeList.find((e) => e.value === value)
  return mode?.name
}

const getPlaybackModeCnName = (value) => {
  const mode = playbackModeList.find((e) => e.value === value)
  return mode?.cnName
}

export default PlaybackModeEnum

export { PlaybackModeEnum, getPlaybackModeName, getPlaybackModeCnName }
