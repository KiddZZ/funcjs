export const getLastTime = date => {
  const now = new Date().getTime()
  const diff_time = (date - now) / 1000
  var h = Math.floor(diff_time / 3600)
  var m = Math.floor((diff_time / 60) % 60)
  var s = Math.floor(diff_time % 60)
  return {
    h,
    m,
    s
  }
}
