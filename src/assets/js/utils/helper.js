class Helper {
  static timeFormat (currentTime) {
    const minutes = `0${Math.floor(currentTime / 60)}`
    const seconds = `0${Math.floor(currentTime % 60)}`
    return `${minutes.substring(minutes.length - 2)} : ${seconds.substring(seconds.length - 2)}`
  }

  static getRandomInt (max) {
    return Math.floor(Math.random() * max)
  }
}

export default Helper
