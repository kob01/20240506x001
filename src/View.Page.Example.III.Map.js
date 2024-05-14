import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

import React from './utils.react'

import MethBox from './View.Component.Meth.Box'
import MethBoxLine from './View.Component.Meth.BoxLine'

import { random } from './utils.common'

const render = () => {
  const context = React.useContext()

  const contextProps = { scene: context.scene, raycaster: context.raycaster, camera: context.camera, renderer: context.renderer, canvas: context.canvas }

  const group = React.useMemo(() => new THREE.Group(), [])

  const building = React.useMemo(() => {
    return new Array(36)
      .fill()
      .map((i, index) => {
        return {
          // key: Math.random(),
          // position: {
          //   x: Math.floor(index % 6) * 2,
          //   y: 0,
          //   z: Math.floor(index / 6) * 2,
          // },
          // geometryProps: [2, 2, 2],
          // materialProps: [{ color: random(16777215, 0, 0) }],
          // root: group,
          // ...contextProps

          geometryProps: [2, 2, 2],
          materialProps: [{ color: 0x888888 }],
          position: { x: Math.floor(index % 6) * 2 - 6, y: 0, z: Math.floor(index / 6) * 2 - 6 },
          root: group,
          ...contextProps
        }
      })
  }, [])

  building.forEach(i => MethBoxLine(i))

  // MethBoxLine({
  //   geometryProps: [2, 2, 2],
  //   materialProps: [{ color: 0x888888 }],
  //   position: { x: 0, y: 0, z: 0 },
  //   root: group,
  //   ...contextProps
  // })

  React.useEffectImmediate(() => {
    context.scene.add(group)
    return () => context.scene.remove(group)
  }, [])
}

export default React.component(render)