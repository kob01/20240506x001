import * as THREE from 'three'

import React from './utils.react'

import { raycasterIntersects } from './utils.common'

const render = (props) => {
  const geometry = React.useMemo(() => new THREE.BoxGeometry(...props.geometryProps), [props.geometryProps])
  const material = React.useMemo(() => new THREE.MeshBasicMaterial(...props.materialProps), [props.materialProps])
  const meth = React.useMemo(() => new THREE.Mesh(geometry, material), [geometry, material])

  const eventMouse = React.useMemo(() => {
    return (callback) => {
      return (event) => {
        const intersects = raycasterIntersects({ x: event.clientX, y: event.clientY }, { canvas: props.canvas, scene: props.scene, camera: props.camera, raycaster: props.raycaster })
        const intersectsFindIndex = intersects.findIndex(i => i.object === meth)
        if (intersectsFindIndex === 0 && callback) callback(event)
      }
    }
  }, [])

  React.useEffectImmediate(() => {
    meth.position.x = props.position.x
    meth.position.y = props.position.y
    meth.position.z = props.position.z
  }, [meth, props.position])

  React.useEffectImmediate(() => {
    const click = eventMouse(props.onClick)

    props.renderer.domElement.addEventListener('click', click)

    return () => {
      props.renderer.domElement.removeEventListener('click', click)
    }
  }, [props.onClick])

  React.useEffectImmediate(() => {
    props.root.add(meth)
    return () => props.root.remove(meth)
  }, [meth, props.root])

  return meth
}

export default React.component(render)
