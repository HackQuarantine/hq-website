const ASPECT_RATIO = 16 / 9

window.addEventListener('resize', resizeEmbedded)
document.addEventListener('DOMContentLoaded', resizeEmbedded)

function resizeEmbedded () {
  const elem = document.querySelector('#embedded-iframe')
  elem.height = elem.offsetWidth / ASPECT_RATIO
}
