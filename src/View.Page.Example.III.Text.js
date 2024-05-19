import * as THREE from 'three'
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js'

import React from './utils.react'
import ReactPlugin from './utils.react.plugin'

const App = () => {
  const context = React.useContext()

  const Object0x001 = React.useMemo(() => {
    const group = new THREE.Group()

    group.position.x = 0
    group.position.y = 8
    group.position.z = 0

    return group
  }, [])

  const Object0x002 = React.useMemo(() => {
    if (context.font.helvetiker_regular === undefined) return

    const geometry = new TextGeometry('Arknights', { font: context.font.helvetiker_regular, size: 1, depth: 0.2, curveSegments: 12, bevelThickness: 20, bevelSize: 8, bevelEnabled: false })
    const material = [new THREE.MeshStandardMaterial({ color: 0xffffff }), new THREE.MeshStandardMaterial({ color: 0xffffff })]
    const meth = new THREE.Mesh(geometry, material)

    geometry.computeBoundingBox()

    meth.position.x = (geometry.boundingBox.max.x - geometry.boundingBox.min.x) * -1 * 0.5
    meth.position.y = 0
    meth.position.z = 0

    return meth
  }, [context.font.helvetiker_regular])

  const Object0x003 = React.useMemo(() => {
    const pointLight = new THREE.PointLight(0xffffff, 1)

    pointLight.decay = 1
    pointLight.position.x = 0
    pointLight.position.y = 0
    pointLight.position.z = 0

    return pointLight
  }, [])

  ReactPlugin.useObject({ target: Object0x001, object: Object0x002 })
  ReactPlugin.useObject({ target: Object0x001, object: Object0x003 })
  ReactPlugin.useObject({ target: context.scene, object: Object0x001 })
}

export default React.component(App)