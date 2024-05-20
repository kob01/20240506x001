import * as THREE from 'three'
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js'

import React from './utils.react'
import ReactPlugin from './utils.react.plugin'

import { materials } from './utils.common'

const App = () => {
  const context = React.useContext()

  const animationProcess = React.useRef(0)
  const animationFlow = React.useRef(0)

  const ObjectGroup = React.useMemo(() => {
    const group = new THREE.Group()

    group.position.x = 0
    group.position.y = 8
    group.position.z = 0

    return group
  }, [])

  const ObjectText = React.useMemo(() => {
    const geometry = new TextGeometry(
      'Arknights',
      { font: context.font.helvetiker_regular, size: 1, depth: 0.2, curveSegments: 12, bevelThickness: 20, bevelSize: 8, bevelEnabled: false }
    )
    const material = [
      new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 1 }),
      new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 1 }),
    ]
    const meth = new THREE.Mesh(geometry, material)

    geometry.computeBoundingBox()

    meth.position.x = (geometry.boundingBox.max.x - geometry.boundingBox.min.x) * -1 * 0.5
    meth.position.y = 0
    meth.position.z = 0

    return meth
  }, [])

  const ObjectLight = React.useMemo(() => {
    const pointLight = new THREE.PointLight(0xffffff, 1)

    pointLight.decay = 4
    pointLight.position.x = 0
    pointLight.position.y = 0
    pointLight.position.z = 0

    return pointLight
  }, [])

  React.useEffectImmediate(() => {
    if (animationFlow.current === 0 && animationProcess.current < 60) {
      animationProcess.current = animationProcess.current + 1
    }
    if (animationFlow.current === 1 && animationProcess.current > 0) {
      animationProcess.current = animationProcess.current - 1
    }
  })

  React.useEffectImmediate(() => {
    materials(ObjectGroup).forEach(i => i.opacity = animationProcess.current / 60 * 1)
  }, [animationProcess.current])

  const event = React.useMemo(() => {
    const s = () => animationFlow.current = 1
    const e = () => animationFlow.current = 0
    return { onMousedown: s, onMouseup: e, onTouchstart: s, onTouchend: e }
  }, [])

  ReactPlugin.useEvent({ ...context, ...event })

  ReactPlugin.useObject({ target: ObjectGroup, object: ObjectText })
  ReactPlugin.useObject({ target: ObjectGroup, object: ObjectLight })
  ReactPlugin.useObject({ target: context.scene, object: ObjectGroup })
}

export default React.component(App)