const STREAM_ADDR = 'https://mixer.com/hackquarantine/'
const ASPECT_RATIO = 16 / 9
let streamElem

window.addEventListener('resize', resizeEmbedded)
document.addEventListener('DOMContentLoaded', () => {
  streamElem = document.querySelector('#embedded-iframe')
  resizeEmbedded()

  document.querySelector('#embedded').addEventListener('onclick', () => {
    window.location.href = STREAM_ADDR
  })
})

function resizeEmbedded () {
  streamElem.height = streamElem.offsetWidth / ASPECT_RATIO
}
