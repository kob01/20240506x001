import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

import React from './utils.react'

import Map from './View.Page.Example.III.Map'

const render = () => {
  const context = React.useContext()

  const render = React.useRender()

  React.useEffectImmediate(() => {
    context.camera.position.set(12, 12, 12)
    context.camera.lookAt(new THREE.Vector3(0, 0, 0))
  }, [])

  React.useEffectImmediate(() => {
    const orbitControls = new OrbitControls(context.camera, context.renderer.domElement)
    orbitControls.addEventListener('change', render)
  }, [])

  Map()
}

export default React.component(render)