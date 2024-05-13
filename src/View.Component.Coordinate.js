import * as THREE from 'three'

import React from './utils.react'

const render = (props) => {

  var dirX = React.useMemo(() => new THREE.Vector3(1, 0, 0), [])
  var originX = React.useMemo(() => new THREE.Vector3(0, 0, 0), [])
  var lengthX = props.lengthX
  var hexX = 0xff0000
  var arrowHelperX = React.useMemo(() => new THREE.ArrowHelper(dirX, originX, lengthX, hexX), [])

  var dirY = React.useMemo(() => new THREE.Vector3(0, 1, 0), [])
  var originY = React.useMemo(() => new THREE.Vector3(0, 0, 0), [])
  var lengthY = props.lengthY
  var hexY = 0x00ff00
  var arrowHelperY = React.useMemo(() => new THREE.ArrowHelper(dirY, originY, lengthY, hexY), [])

  var dirZ = React.useMemo(() => new THREE.Vector3(0, 0, 1), [])
  var originZ = React.useMemo(() => new THREE.Vector3(0, 0, 0), [])
  var lengthZ = props.lengthZ
  var hexZ = 0x0000ff
  var arrowHelperZ = React.useMemo(() => new THREE.ArrowHelper(dirZ, originZ, lengthZ, hexZ), [])

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