import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

import React from './utils.react'
import ReactPlugin from './utils.react.plugin'

const useLoadEnvironment = () => {
  const context = React.useContext()

  const ObjectAmbientLight = React.useMemo(() => new THREE.AmbientLight(0xffffff, 0.02), [])
  const ObjectOrbitControls = React.useMemo(() => new OrbitControls(context.camera, context.renderer.domElement), [context.camera, context.renderer.domElement])

  React.useEffectImmediate(() => {
    const position = Math.max(17500 / context.renderer.domElement.width, 17500 / context.renderer.domElement.height)
    context.camera.position.set(position, position, position)
    context.camera.lookAt(new THREE.Vector3(0, 0, 0))
  }, [])

  React.useEffectImmediate(() => {
    ObjectOrbitControls.autoRotate = true
    ObjectOrbitControls.enableDamping = true
    ObjectOrbitControls.enablePan = false
    ObjectOrbitControls.minPolarAngle = Math.PI * 0.15
    ObjectOrbitControls.maxPolarAngle = Math.PI * 0.35
    return () => {
      ObjectOrbitControls.dispose()
    }
  }, [ObjectOrbitControls])

  React.useEffectImmediate(() => ObjectOrbitControls.update())

  ReactPlugin.useObject({ target: context.scene, object: ObjectAmbientLight })
}

export default useLoadEnvironment