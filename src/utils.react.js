var contextQueue = []
var contextQueueRecordCount = []

var renderQueuePreviousAnimation = []
var renderQueueNextAnimation = []
var renderQueueCurrent = undefined
var renderQueueHookIndex = undefined

const component = (alternate) => {
  return (...props) => {
    var renderQueueFind
    var renderQueueFindIndex

    if (renderQueueFind === undefined) {
      renderQueueFindIndex = renderQueuePreviousAnimation.findIndex(i => i.alternate === alternate)
      renderQueueFind = renderQueuePreviousAnimation[renderQueueFindIndex]
      renderQueuePreviousAnimation = renderQueuePreviousAnimation.filter((i, index) => index > renderQueueFindIndex)
    }

    if (renderQueueFind === undefined) {
      renderQueueFind = { alternate: alternate, hooks: [] }
    }

    renderQueueNextAnimation.push(renderQueueFind)

    renderQueueCurrent = renderQueueFind
    renderQueueHookIndex = 0

    contextQueueRecordCount.push(0)

    alternate(...props)

    contextQueue = contextQueue.filter((i, index) => index < contextQueue.length - contextQueueRecordCount[contextQueueRecordCount.length - 1])
    contextQueueRecordCount = contextQueueRecordCount.filter((i, index) => index < contextQueueRecordCount.length - 1)
  }
}

const render = (component) => {
  component()

  renderQueuePreviousAnimation = renderQueueNextAnimation
  renderQueueNextAnimation = []

  requestAnimationFrame(() => render(component))
}

const hookProxy = (callback) => {
  return (...props) => {
    try {
      if (renderQueueCurrent.hooks[renderQueueHookIndex] !== undefined && renderQueueCurrent.hooks[renderQueueHookIndex]._type !== callback) {
        throw Error(callback)
      }
      return callback(...props)
    } finally {
      renderQueueCurrent.hooks[renderQueueHookIndex]._type = callback
      renderQueueHookIndex = renderQueueHookIndex + 1
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

const useState = (state) => {
  var renderQueueCurrentFind

  if (renderQueueCurrentFind === undefined) renderQueueCurrentFind = renderQueueCurrent.hooks[renderQueueHookIndex]
  if (renderQueueCurrentFind === undefined) renderQueueCurrentFind = { state: state }

  renderQueueCurrent.hooks[renderQueueHookIndex] = renderQueueCurrentFind

  return [renderQueueCurrentFind.state, (state) => renderQueueCurrentFind.state = state]
}

const useRef = (current) => {
  var renderQueueCurrentFind

  if (renderQueueCurrentFind === undefined) renderQueueCurrentFind = renderQueueCurrent.hooks[renderQueueHookIndex]
  if (renderQueueCurrentFind === undefined) renderQueueCurrentFind = { current: current }

  renderQueueCurrent.hooks[renderQueueHookIndex] = renderQueueCurrentFind

  return renderQueueCurrentFind
}

const useEffect = (effect, dependence) => {
  var renderQueueCurrentFind

  if (renderQueueCurrentFind === undefined) renderQueueCurrentFind = renderQueueCurrent.hooks[renderQueueHookIndex]
  if (renderQueueCurrentFind === undefined) renderQueueCurrentFind = { effect: effect }

  renderQueueCurrent.hooks[renderQueueHookIndex] = renderQueueCurrentFind

  if (renderQueueCurrentFind.dependence === undefined || renderQueueCurrentFind.dependence.some((i, index) => i !== dependence[index])) effect()

  renderQueueCurrentFind.dependence = dependence
}

const useMemo = (memo, dependence) => {
  var renderQueueCurrentFind

  if (renderQueueCurrentFind === undefined) renderQueueCurrentFind = renderQueueCurrent.hooks[renderQueueHookIndex]
  if (renderQueueCurrentFind === undefined) renderQueueCurrentFind = { memo: memo }

  renderQueueCurrent.hooks[renderQueueHookIndex] = renderQueueCurrentFind

  if (renderQueueCurrentFind.dependence === undefined || renderQueueCurrentFind.dependence.some((i, index) => i !== dependence[index])) renderQueueCurrentFind.state = memo()

  renderQueueCurrentFind.dependence = dependence

  return renderQueueCurrentFind.state
}

const React = { render: render, component: component, contextProvider: contextProvider, useContext: useContext, useState, useRef, useEffect, useMemo }

Object.keys(React).filter(i => [useState, useRef, useEffect, useMemo].includes(React[i])).forEach(i => React[i] = hookProxy(React[i]))

export default React