import * as THREE from 'three'

import React from './utils.react'

import { raycasterIntersects } from './utils.common'

const render = (props) => {
  const geometry = React.useMemo(() => new THREE.BoxGeometry(...props.geometryProps), [props.geometryProps])
  const material = React.useMemo(() => new THREE.LineBasicMaterial(...props.materialProps), [props.materialProps])
  const edgesGeometry = React.useMemo(() => new THREE.EdgesGeometry(geometry), [geometry])
  const line = React.useMemo(() => new THREE.LineSegments(edgesGeometry, material), [edgesGeometry, material])

  const eventMouse = React.useMemo(() => {
    return (callback) => {
      return (event) => {
        const intersects = raycasterIntersects({ x: event.clientX, y: event.clientY }, { canvas: props.canvas, scene: props.scene, camera: props.camera, raycaster: props.raycaster })
        const intersectsFindIndex = intersects.findIndex(i => i.object === line)
        if (intersectsFindIndex === 0 && callback) callback(event)
      }
    }
  }, [])

  React.useEffectImmediate(() => {
    line.position.x = props.position.x
    line.position.y = props.position.y
    line.position.z = props.position.z
  }, [line, props.position])

  React.useEffectImmediate(() => {
    const click = eventMouse(props.onClick)

    props.renderer.domElement.addEventListener('click', click)

    return () => {
      props.renderer.domElement.removeEventListener('click', click)
    }
  }, [props.onClick])

  React.useEffectImmediate(() => {
    props.root.add(line)
    return () => props.root.remove(line)
  }, [line, props.root])

  return line
}

export default React.component(render)
