import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

import React from './utils.react'

import Map from './View.Page.Example.III.Map'

const App = () => {
  const context = React.useContext()

  const render = React.useRender()

  const ambientLight = React.useMemo(() => new THREE.AmbientLight(0xffffff, 0.1), [])

  React.useEffectImmediate(() => {
    const position = Math.min(20000 / context.renderer.domElement.width, 25000 / context.renderer.domElement.height)
    context.camera.position.set(position, position, position)
    context.camera.lookAt(new THREE.Vector3(0, 0, 0))
  }, [])

  React.useEffectImmediate(() => {
    const orbitControls = new OrbitControls(context.camera, context.renderer.domElement)
    orbitControls.addEventListener('change', render)
    return () => {
      orbitControls.dispose()
    }
  }, [])

  React.useEffectImmediate(() => {
    context.scene.add(ambientLight)
    return () => {
      context.scene.remove(ambientLight)
    }
  }, [])

  Map()
}

export default React.component(App)