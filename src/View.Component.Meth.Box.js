import * as THREE from 'three'

import React from './utils.react'

const render = (props) => {
  const geometry = React.useMemo(() => new THREE.BoxGeometry(...props.geometryProps), [props.geometryProps])
  const material = React.useMemo(() => new THREE.MeshBasicMaterial(...props.materialProps), [props.materialProps])
  const meth = React.useMemo(() => new THREE.Mesh(geometry, material), [geometry, material])

  React.useEffectImmediate(() => {
    meth.position.x = props.position.x
    meth.position.y = props.position.y
    meth.position.z = props.position.z
  }, [meth, props.position])

  return meth
}

export default React.component(render)
