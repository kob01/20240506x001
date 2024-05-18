import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

import React from './utils.react'

import Galaxy from './View.Page.Example.I.Galaxy'

const App = () => {
  const context = React.useContext()

  const render = React.useRender()

  React.useEffectImmediate(() => {
    context.camera.position.set(24, 24, 24)
    context.camera.lookAt(new THREE.Vector3(0, 0, 0))
  }, [])

  React.useEffectImmediate(() => {
    const orbitControls = new OrbitControls(context.camera, context.renderer.domElement)
    orbitControls.addEventListener('change', render)
  }, [])

  Galaxy()
}

export default React.component(App)
