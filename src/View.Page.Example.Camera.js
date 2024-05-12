import * as THREE from 'three'

import React from './utils.react'

const render = (props) => {
  const context = React.useContext()

  const [cameraPosition, setCameraPosition] = React.useState([36, 36, 0])

  if (props.rotate) {
    props.setNowDiff(Date.now() - props.nowRecord)
    setCameraPosition([36 * Math.cos(props.nowDiff * 0.001), 36, 36 * Math.sin(props.nowDiff * 0.001)])
    context.camera.position.set(...cameraPosition)
    context.camera.lookAt(new THREE.Vector3(0, 0, 0))
  }
}

export default React.component(render)