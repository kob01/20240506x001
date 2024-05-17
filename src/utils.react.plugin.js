import * as THREE from 'three'

import React from './utils.react'

const useEvent = (props) => {
  React.useEffectImmediate(() => {
    const mouseEvent = e => {
      var x = (e.clientX / props.renderer.domElement.width) * 2 - 1
      var y = (e.clientY / props.renderer.domElement.height) * 2 - 1
      y = y * -1

      props.raycaster.setFromCamera(new THREE.Vector2(x, y * -1), props.camera)

      const intersects = props.raycaster.intersectObjects(props.scene.children)
      const intersectsFindIndex = intersects.findIndex(i => i.object === props.object)

      if (intersectsFindIndex !== -1 && props.onClick) props.onClick(e, intersectsFindIndex)
      if (intersectsFindIndex !== -1 && props.onMousedown) props.onMousedown(e, intersectsFindIndex)
      if (intersectsFindIndex !== -1 && props.onMouseup) props.onMouseup(e, intersectsFindIndex)
    }

    const touchEvent = e => {
      var x = (e.targetTouches[0].pageX / props.renderer.domElement.width) * 2 - 1
      var y = (e.targetTouches[0].pageY / props.renderer.domElement.height) * 2 - 1
      y = y * -1

      props.raycaster.setFromCamera(new THREE.Vector2(x, y * -1), props.camera)

      const intersects = props.raycaster.intersectObjects(props.scene.children)
      const intersectsFindIndex = intersects.findIndex(i => i.object === props.object)

      if (intersectsFindIndex !== -1 && props.onTouchstart) props.onTouchstart(e, intersectsFindIndex)
      if (intersectsFindIndex !== -1 && props.onTouchmove) props.onTouchmove(e, intersectsFindIndex)
      if (intersectsFindIndex !== -1 && props.onTouchend) props.onTouchend(e, intersectsFindIndex)
    }

    props.renderer.domElement.addEventListener('click', mouseEvent)
    props.renderer.domElement.addEventListener('mousedown', mouseEvent)
    props.renderer.domElement.addEventListener('mouseup', mouseEvent)
    props.renderer.domElement.addEventListener('touchstart', touchEvent)
    props.renderer.domElement.addEventListener('touchmove', touchEvent)
    props.renderer.domElement.addEventListener('touchend', touchEvent)

    return () => {
      props.renderer.domElement.removeEventListener('click', mouseEvent)
      props.renderer.domElement.removeEventListener('mousedown', mouseEvent)
      props.renderer.domElement.removeEventListener('mouseup', mouseEvent)
      props.renderer.domElement.removeEventListener('touchstart', touchEvent)
      props.renderer.domElement.removeEventListener('touchmove', touchEvent)
      props.renderer.domElement.removeEventListener('touchend', touchEvent)
    }
  }, [props.onClick, props.onMousedown, props.onMouseup, props.onTouchstart, props.onTouchmove, props.onTouchend])
}

const useObject = (props) => {
  React.useEffectImmediate(() => {
    props.target.add(props.object)
    return () => {
      props.target.remove(props.object)
      props.object.dispose()
    }
  }, [props.object, props.target])
}

const ReactPlugin = { useEvent, useObject }

export default ReactPlugin