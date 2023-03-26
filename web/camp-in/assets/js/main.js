const inputEmail = document.getElementById('email')
const inputPassword = document.getElementById('password')

inputEmail.addEventListener('focusin', () => {
  handleToggleImgIcons('focusin', '.emailImg', 'mail-focus.svg')
})

inputEmail.addEventListener('focusout', () => {
  handleToggleImgIcons('focusout', '.emailImg', 'mail.svg')
})

inputPassword.addEventListener('focusin', () => {
  handleToggleImgIcons('focusin', '.passwordLockIcon', 'lock-focus.svg')
})

inputPassword.addEventListener('focusout', () => {
  handleToggleImgIcons('focusin', '.passwordLockIcon', 'lock.svg')
})

function handleToggleImgIcons(type, className, icon) {
  const elementImg = document.querySelector(className)
  
  if (type === 'focusin') {
    switchIconPath(elementImg, icon)
  } else if (type === 'focusout') {
    switchIconPath(elementImg, icon)
  }

  
}

function switchIconPath(element, icon) {
  let [baseUrl] = element.src.split('icons/')

  const newSrc = baseUrl.concat(`icons/${icon}`)

  element.src = newSrc
}