import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

import React from './utils.react'
import ReactPlugin from './utils.react.plugin'

import Map from './View.Page.Example.III.Map'
import Text from './View.Page.Example.III.Text'

const App = () => {
  const context = React.useContext()

  const render = React.useRender()

  const ambientLight = React.useMemo(() => new THREE.AmbientLight(0xffffff, 0.1), [])
  const axesHelper = React.useMemo(() => new THREE.AxesHelper(24), [])
  const orbitControls = React.useMemo(() => new OrbitControls(context.camera, context.renderer.domElement), [context.camera, context.renderer.domElement])
  
  React.useEffectImmediate(() => {
    context.camera.position.set(12, 24, 24)
    context.camera.lookAt(new THREE.Vector3(0, 0, 0))
  }, [])

  React.useEffectImmediate(() => {
    orbitControls.addEventListener('change', render)
    return () => orbitControls.dispose()
  }, [orbitControls])

  ReactPlugin.useObject({ target: context.scene, object: ambientLight })
  // ReactPlugin.useObject({ target: context.scene, object: axesHelper })

  Map()
  Text()
}

export default React.component(App)