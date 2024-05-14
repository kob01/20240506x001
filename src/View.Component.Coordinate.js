import * as THREE from 'three'

import React from './utils.react'

const render = (props) => {
  var arrowHelperX = React.useMemo(() => new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), new THREE.Vector3(0, 0, 0), props.lengthX, 0xff0000), [])
  var arrowHelperY = React.useMemo(() => new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 0), props.lengthY, 0x00ff00), [])
  var arrowHelperZ = React.useMemo(() => new THREE.ArrowHelper(new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 0, 0), props.lengthZ, 0x0000ff), [])

  React.useEffectImmediate(() => {
    props.scene.add(arrowHelperX)
    props.scene.add(arrowHelperY)
    props.scene.add(arrowHelperZ)
    return () => {
      props.scene.remove(arrowHelperX)
      props.scene.remove(arrowHelperY)
      props.scene.remove(arrowHelperZ)
    }
  }, [])
}

export default React.component(render)