import * as THREE from 'three'

import React from './utils.react'

import SphereGeometry from './View.Component.SphereGeometry'

const render = (props) => {
  const context = React.useContext()

  const contextProps = { scene: context.scene, raycaster: context.raycaster, camera: context.camera, renderer: context.renderer }
  
  const sphereGeometryWireframePosition1Base = [0, 0, 0]
  const sphereGeometryWireframePosition2Base = 12
  const sphereGeometryWireframePosition3Base = 8

  const [sphereGeometryWireframePosition1, setSphereGeometryWireframePosition1] = React.useState(sphereGeometryWireframePosition1Base)
  const [sphereGeometryWireframePosition2, setSphereGeometryWireframePosition2] = React.useState([sphereGeometryWireframePosition1[0] + sphereGeometryWireframePosition2Base, 0, 0])
  const [sphereGeometryWireframePosition3, setSphereGeometryWireframePosition3] = React.useState([sphereGeometryWireframePosition2[0] + sphereGeometryWireframePosition3Base, 0, 0])

  if (props.rotate) {
    setSphereGeometryWireframePosition2([sphereGeometryWireframePosition1[0] + sphereGeometryWireframePosition2Base * Math.cos(props.nowDiff * 0.0002), 0, sphereGeometryWireframePosition1[2] + sphereGeometryWireframePosition2Base * Math.sin(props.nowDiff * 0.0002)])
    setSphereGeometryWireframePosition3([sphereGeometryWireframePosition2[0] + sphereGeometryWireframePosition3Base * Math.cos(props.nowDiff * 0.0004), 0, sphereGeometryWireframePosition2[2] + sphereGeometryWireframePosition3Base * Math.sin(props.nowDiff * 0.0004)])
  }
 
  SphereGeometry({ x: sphereGeometryWireframePosition1[0], y: sphereGeometryWireframePosition1[1], z: sphereGeometryWireframePosition1[2], radius: 2, widthSegments: 16, heightSegments:16, color: 0x888888, wireframe: true, ...contextProps})
  SphereGeometry({ x: sphereGeometryWireframePosition2[0], y: sphereGeometryWireframePosition2[1], z: sphereGeometryWireframePosition2[2], radius: 4, widthSegments: 16, heightSegments:16, color: 0x888800, wireframe: true, ...contextProps})
  SphereGeometry({ x: sphereGeometryWireframePosition3[0], y: sphereGeometryWireframePosition3[1], z: sphereGeometryWireframePosition3[2], radius: 1, widthSegments: 16, heightSegments:16, color: 0x008888, wireframe: true, ...contextProps})
}

export default React.component(render)