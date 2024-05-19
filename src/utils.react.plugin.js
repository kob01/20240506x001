import * as THREE from 'three'

import React from './utils.react'

const useEvent = (props) => {
  const dependence = props.dependence ? props.dependence : []

  React.useEffectImmediate(() => {
    const mouseEvent = (e, callback) => {
      var x = (e.clientX / props.renderer.domElement.width) * 2 - 1
      var y = (e.clientY / props.renderer.domElement.height) * 2 - 1
      y = y * -1

      props.raycaster.setFromCamera(new THREE.Vector2(x, y * -1), props.camera)

      const intersects = props.raycaster.intersectObjects(props.scene.children)
      const intersectsFindIndex = intersects.findIndex(i => i.object === props.object)

      if (intersectsFindIndex !== -1 && callback) callback(e, intersectsFindIndex)
    }

    const touchEvent = (e, callback) => {
      var x = (e.targetTouches[0].pageX / props.renderer.domElement.width) * 2 - 1
      var y = (e.targetTouches[0].pageY / props.renderer.domElement.height) * 2 - 1
      y = y * -1

      props.raycaster.setFromCamera(new THREE.Vector2(x, y * -1), props.camera)

      const intersects = props.raycaster.intersectObjects(props.scene.children)
      const intersectsFindIndex = intersects.findIndex(i => i.object === props.object)

      if (intersectsFindIndex !== -1 && callback) callback(e, intersectsFindIndex)
    }

    const onClick = e => mouseEvent(e, props.onClick)
    const onMousedown = e => mouseEvent(e, props.onMousedown)
    const onMouseup = e => mouseEvent(e, props.onMouseup)
    const onTouchstart = e => touchEvent(e, props.onTouchstart)
    const onTouchmove = e => touchEvent(e, props.onTouchmove)
    const onTouchend = e => touchEvent(e, props.onTouchend)

    props.renderer.domElement.addEventListener('click', onClick)
    props.renderer.domElement.addEventListener('mousedown', onMousedown)
    props.renderer.domElement.addEventListener('mouseup', onMouseup)
    props.renderer.domElement.addEventListener('touchstart', onTouchstart)
    props.renderer.domElement.addEventListener('touchmove', onTouchmove)
    props.renderer.domElement.addEventListener('touchend', onTouchend)

    return () => {
      props.renderer.domElement.removeEventListener('click', onClick)
      props.renderer.domElement.removeEventListener('mousedown', onMousedown)
      props.renderer.domElement.removeEventListener('mouseup', onMouseup)
      props.renderer.domElement.removeEventListener('touchstart', onTouchstart)
      props.renderer.domElement.removeEventListener('touchmove', onTouchmove)
      props.renderer.domElement.removeEventListener('touchend', onTouchend)
    }
  }, [props.renderer, props.camera, props.scene, props.raycaster, props.object, props.onClick, props.onMousedown, props.onMouseup, props.onTouchstart, props.onTouchmove, props.onTouchend, ...dependence])
}

const useObject = (props) => {
  React.useEffectImmediate(() => {
    if (props.target && props.object) {
      props.target.add(props.object)
      return () => {
        props.target.remove(props.object)
      }
    }
  }, [props.object, props.target])
}

const useAnimationCount = (props) => {
  const count = React.useRef(props.default)

  const render = React.useRender()

  React.useEffectImmediate(() => {
    count.current = count.current + 1
  })

  React.useEffectImmediate(() => {
    if (props.render) render()
  })

  return count.current
}

const ReactPlugin = { useEvent, useObject, useAnimationCount }

export default ReactPlugin