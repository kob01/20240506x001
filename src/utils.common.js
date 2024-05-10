const styleAppend = () => {
  const id = '*'

  const style = document.getElementById(id) || document.createElement('style')

  const styleString =
    [
      `::-webkit-scrollbar { width: 0; height: 0; }`,
      `body { padding: 0; margin: 0; }`,
      `body, body * { overscroll-behavior: none; }`
    ]
      .join(' ')

  style.id = id
  style.innerHTML = styleString

  if (style.parentNode) style.parentNode.removeChild(style)

  document.head.appendChild(style)
}

const eventAppend = () => {
  window.addEventListener('wheel', e => e.preventDefault(), { passive: false })
  window.addEventListener('touchmove', e => e.preventDefault(), { passive: false })
  window.addEventListener('contextmenu', e => e.preventDefault(), { passive: false })
}

const canvasInit = () => {
  const canvas = document.createElement('canvas')

  canvas.style.width = '100%'
  canvas.style.height = '100%'
  body.style.padding = '0'
  body.style.margin = 'auto'
  body.style.left = 0
  body.style.right = 0
  body.style.top = 0
  body.style.bottom = 0
  body.style.position = 'absolute'
  body.style.width = '100%'
  body.style.height = '100%'
  body.style.background = 'black'
  body.style.overflow = 'hidden'

  document.getElementsByTagName('body')[0].appendChild(canvas)

  return canvas
}

export { styleAppend, eventAppend, canvasInit }