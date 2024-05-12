import './utils.adapter.weapp'

import React from './utils.react'

import App from './View.App'

const style = document.createElement('style')

const styleString =
  [
    `::-webkit-scrollbar { width: 0; height: 0; }`,
    `body { padding: 0; margin: 0; }`,
    `body, body * { overscroll-behavior: none; }`
  ]
    .join(' ')

style.innerHTML = styleString

document.head.appendChild(style)

window.addEventListener('wheel', e => e.preventDefault(), { passive: false })
window.addEventListener('touchmove', e => e.preventDefault(), { passive: false })
window.addEventListener('contextmenu', e => e.preventDefault(), { passive: false })

React.render(App)