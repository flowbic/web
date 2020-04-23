let facebook = document.getElementById('facebook')
let instagram = document.getElementById('instagram')
let github = document.getElementById('github')

// facebook.addEventListener('click', () => {
//   openInNewTab('URL')
// })

github.addEventListener('click', () => {
  openInNewTab('https://github.com/flowbic')
})

instagram.addEventListener('click', () => {
  openInNewTab('https://www.instagram.com/flowbic.ab/')
})

const openInNewTab = (url) => {
  var win = window.open(url, '_blank')
  win.focus()
}
