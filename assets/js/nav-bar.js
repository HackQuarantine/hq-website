document.addEventListener('DOMContentLoaded', () => {
  const pull = document.querySelector('.nav-content nav #pull')
  const menu = document.querySelector('.nav-content nav ul')

  pull.addEventListener('click', () => {
    menu.classList.toggle('hide')
  })
})
