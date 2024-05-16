var contextQueue = []
var contextQueueRecordCount = []

var renderComponent = undefined

var renderQueue = { alternate: 'root', children: [] }

var renderQueueInRender = false
var renderQueueShouldRender = false

var renderQueueCallback = []

var renderQueueNode = undefined
var renderQueueNodeChildrenIndex = 0

var renderQueueHooks = []
var renderQueueHook = undefined

const destory = (node) => {
  node.hooks
    .filter(i => i.type === useEffect && i.effectPrevious && typeof i.effectPrevious === 'function')
    .forEach(i => renderQueueCallback.push(() => i.effectPrevious()))

  node.children.forEach(i => destory(i))
}

const component = (alternate) => {
  return (props) => {
    var node
    var key = Object(props).key
    var equalIndex = renderQueueNode.children.findIndex(i => i.key !== undefined && i.key === key && i.alternate === alternate)

    if (equalIndex !== -1) {
      renderQueueNode.children.splice(renderQueueNodeChildrenIndex, 0, renderQueueNode.children.splice(equalIndex, 1)[0])
    }

    if (node === undefined && renderQueueNode.children[renderQueueNodeChildrenIndex] && renderQueueNode.children[renderQueueNodeChildrenIndex].alternate === alternate && renderQueueNode.children[renderQueueNodeChildrenIndex].key === key) {
      node = renderQueueNode.children[renderQueueNodeChildrenIndex]
    }

    if (node === undefined) {
      node = { key: key, alternate: alternate, children: [], hooks: [] }
    }

    if (node !== renderQueueNode.children[renderQueueNodeChildrenIndex] && renderQueueNode.children[renderQueueNodeChildrenIndex]) {
      destory(renderQueueNode.children[renderQueueNodeChildrenIndex])
    }

    node.parent = renderQueueNode

    renderQueueNode.children[renderQueueNodeChildrenIndex] = node

    renderQueueNode = node
    renderQueueNodeChildrenIndex = 0

    contextQueueRecordCount.push(0)

    renderQueueHooks.push({ hooks: node.hooks, index: 0 })
    renderQueueHook = renderQueueHooks[renderQueueHooks.length - 1]

    node.alternate(props)

    node.children.filter((i, index) => index > renderQueueNodeChildrenIndex || index === renderQueueNodeChildrenIndex).forEach(i => destory(i))
    node.children = node.children.filter((i, index) => index < renderQueueNodeChildrenIndex)

    renderQueueNode = node.parent
    renderQueueNodeChildrenIndex = renderQueueNode.children.findIndex(i => i === node) + 1

    contextQueue = contextQueue.filter((i, index) => index < contextQueue.length - contextQueueRecordCount[contextQueueRecordCount.length - 1])
    contextQueueRecordCount = contextQueueRecordCount.filter((i, index) => index < contextQueueRecordCount.length - 1)

    renderQueueHooks = renderQueueHooks.filter((i, index) => index < renderQueueHooks.length - 1)
    renderQueueHook = renderQueueHooks[renderQueueHooks.length - 1]
  }
}

const mount = (component) => {
  renderComponent = component
  return React
}

const render = () => {
  renderQueueInRender = true

  renderQueueNode = renderQueue
  renderQueueNodeChildrenIndex = 0

  renderQueueCallback.forEach(i => i())
  renderQueueCallback = []

  renderComponent()

  renderQueueCallback.forEach(i => i())

  requestAnimationFrame(() => {
    const renderQueueShouldRenderCache = renderQueueShouldRender

    renderQueueInRender = false
    renderQueueShouldRender = false

    if (renderQueueShouldRenderCache) render()
  })
}

const hook = (callback) => {
  return (...props) => {
    try {
      if (renderQueueHook.hooks[renderQueueHook.index] !== undefined && renderQueueHook.hooks[renderQueueHook.index].type !== callback) {
        throw Error(callback)
      }
      return callback(...props)
    } finally {
      renderQueueHook.hooks[renderQueueHook.index].type = callback
      renderQueueHook.index = renderQueueHook.index + 1
    }
  }
}

const contextProvider = (value) => {
  contextQueue.push(value)
  contextQueueRecordCount[contextQueueRecordCount.length - 1] = contextQueueRecordCount[contextQueueRecordCount.length - 1] + 1
}

const useContext = () => {
  return contextQueue[contextQueue.length - 1]
}

const useRender = () => {
  return () => {
    if (renderQueueInRender === true) renderQueueShouldRender = true
    if (renderQueueInRender === false) requestAnimationFrame(render)
  }
}

const useState = (state) => {
  var hook

  if (hook === undefined) hook = renderQueueHook.hooks[renderQueueHook.index]
  if (hook === undefined) hook = { state: state }

  renderQueueHook.hooks[renderQueueHook.index] = hook

  const setState = (state) => {
    if (typeof state === 'function') renderQueueCallback.push(() => hook.state = state(hook.state))
    if (typeof state !== 'function') renderQueueCallback.push(() => hook.state = state)

    if (renderQueueInRender === true) renderQueueShouldRender = true
    if (renderQueueInRender === false) requestAnimationFrame(render)
  }

  return [hook.state, setState]
}

const useStateImmediate = (state) => {
  var hook

  if (hook === undefined) hook = renderQueueHook.hooks[renderQueueHook.index]
  if (hook === undefined) hook = { state: state }

  renderQueueHook.hooks[renderQueueHook.index] = hook

  const setState = (state) => {
    if (typeof state === 'function') hook.state = state(hook.state)
    if (typeof state !== 'function') hook.state = state

    if (renderQueueInRender === true) renderQueueShouldRender = true
    if (renderQueueInRender === false) requestAnimationFrame(render)
  }

  return [hook.state, setState]
}

const useRef = (current) => {
  var hook

  if (hook === undefined) hook = renderQueueHook.hooks[renderQueueHook.index]
  if (hook === undefined) hook = { current: current }

  renderQueueHook.hooks[renderQueueHook.index] = hook

  return renderQueueHook
}

const useEffect = (effect, dependence) => {
  var hook

  if (hook === undefined) hook = renderQueueHook.hooks[renderQueueHook.index]
  if (hook === undefined) hook = { effect: effect }

  renderQueueHook.hooks[renderQueueHook.index] = hook

  if (hook.dependence === undefined || hook.dependence.some((i, index) => i !== dependence[index])) renderQueueCallback.push(() => hook.effectPrevious = hook.effectPrevious && typeof hook.effectPrevious === 'function' ? hook.effectPrevious() : undefined)
  if (hook.dependence === undefined || hook.dependence.some((i, index) => i !== dependence[index])) renderQueueCallback.push(() => hook.effectPrevious = effect())

  hook.dependence = dependence
}

const useEffectImmediate = (effect, dependence) => {
  var hook

  if (hook === undefined) hook = renderQueueHook.hooks[renderQueueHook.index]
  if (hook === undefined) hook = { effect: effect }

  renderQueueHook.hooks[renderQueueHook.index] = hook

  if (hook.dependence === undefined || hook.dependence.some((i, index) => i !== dependence[index])) hook.effectPrevious = hook.effectPrevious && typeof hook.effectPrevious === 'function' ? hook.effectPrevious() : undefined
  if (hook.dependence === undefined || hook.dependence.some((i, index) => i !== dependence[index])) hook.effectPrevious = effect()

  hook.dependence = dependence
}

const useMemo = (memo, dependence) => {
  var hook

  if (hook === undefined) hook = renderQueueHook.hooks[renderQueueHook.index]
  if (hook === undefined)console.log(1)
  if (hook === undefined) hook = { memo: memo }

  renderQueueHook.hooks[renderQueueHook.index] = hook

  if (hook.dependence === undefined || hook.dependence.some((i, index) => i !== dependence[index])) hook.state = memo()

  hook.dependence = dependence

  return hook.state
}

const React = { mount, render, component, contextProvider, useContext, useRender, useState, useStateImmediate, useRef, useEffect, useEffectImmediate, useMemo }

Object.keys(React).filter(i => [useState, useStateImmediate, useRef, useEffect, useEffectImmediate, useMemo].includes(React[i])).forEach(i => React[i] = hook(React[i]))

export default React