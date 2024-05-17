import * as THREE from 'three'

import React from './utils.react'

const render = (props) => {
  const geometry = React.useMemo(() => new THREE.BoxGeometry(...props.geometryProps), [props.geometryProps])
  const material = React.useMemo(() => new THREE.LineBasicMaterial(...props.materialProps), [props.materialProps])
  const edgesGeometry = React.useMemo(() => new THREE.EdgesGeometry(geometry), [geometry])
  const line = React.useMemo(() => new THREE.LineSegments(edgesGeometry, material), [edgesGeometry, material])

  React.useEffectImmediate(() => {
    line.position.x = props.position.x
    line.position.y = props.position.y
    line.position.z = props.position.z
  }, [line, props.position])

  return line
}

export default React.component(render)
