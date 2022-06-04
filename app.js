const header = document.querySelector('.header')
const brandImg = document.querySelector('.header-brand img')

window.onscroll = function () {
  fixedTop()
}

function fixedTop() {
  let sticky = header.offsetHeight
  let currentScroll = window.pageYOffset || window.scrollY || document.documentElement.scrollTop
  if (currentScroll >= sticky) {
    header.classList.add('top-fixed')
  } else {
    header.classList.remove('top-fixed')
  }
}
