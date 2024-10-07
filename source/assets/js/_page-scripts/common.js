import { qS } from '../functions/selectElement.js'
import hamburgerToggle from '../pages/common/hamburgerToggle.js'

const hamburger = qS('.js-hamburger')
const body = qS('body')
const mainHeaderNav = qS('.js-sidebar')

document.addEventListener('DOMContentLoaded', () => {
  // call hamburger menu show/hide module
  if (hamburger !== null) {
    hamburgerToggle(hamburger, body, mainHeaderNav)
  }
})
