import * as THREE from 'three'
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js'

import React from './utils.react'
import ReactPlugin from './utils.react.plugin'

const App = () => {
  const context = React.useContext()

  const [animationCount, setAnimationCount] = ReactPlugin.useAnimationCount(0)

  const Object0o0001 = React.useMemo(() => {
    const group = new THREE.Group()

    group.position.x = 0
    group.position.y = 0
    group.position.z = 0

    return group
  }, [])

  const Object0o0002 = React.useMemo(() => {
    if (context.font.helvetiker_regular === undefined) return

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
  }, [context.font.helvetiker_regular])

  const Object0o0003 = React.useMemo(() => {
    const pointLight = new THREE.PointLight(0xffffff, 1)

    pointLight.decay = 4
    pointLight.position.x = 0
    pointLight.position.y = 0
    pointLight.position.z = 0

    return pointLight
  }, [])

  React.useEffectImmediate(() => {
    if (Object0o0001 === undefined || Object0o0002 === undefined) {
      Object0o0001.visible = false
    }
    if (Object0o0001 !== undefined && Object0o0002 !== undefined) {
      Object0o0001.visible = true
    }
  }, [Object0o0001, Object0o0002])

  React.useEffectImmediate(() => {
    if (Object0o0001 === undefined || Object0o0002 === undefined) {
      setAnimationCount(0)
    }
  }, [Object0o0001, Object0o0002])

  React.useEffectImmediate(() => {
    if (Object0o0001 !== undefined && Object0o0002 !== undefined && animationCount > 60 === false) {
      Object0o0001.position.y = 12 - 4 / 60 * animationCount
      Object0o0002.material.forEach(i => i.opacity = 1 / 60 * animationCount)
    }
  }, [Object0o0001, Object0o0002, animationCount])

  ReactPlugin.useObject({ target: Object0o0001, object: Object0o0002 })
  ReactPlugin.useObject({ target: Object0o0001, object: Object0o0003 })
  ReactPlugin.useObject({ target: context.scene, object: Object0o0001 })
}

export default React.component(App)