import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

import React from './utils.react'

import Map from './View.Page.Example.III.Map'

const render = () => {
  const context = React.useContext()

  const render = React.useRender()

  // const axesHelper = React.useMemo(() => new THREE.AxesHelper(5), [])
  // const directionalLight = React.useMemo(() => new THREE.DirectionalLight(0xffffff, 0.5), [])

  React.useEffectImmediate(() => {
    context.camera.position.set(12, 12, 12)
    context.camera.lookAt(new THREE.Vector3(0, 0, 0))
  }, [])

  // React.useEffectImmediate(() => {
  //   directionalLight.position.set(20, 0, 20)
  // }, [])

  React.useEffectImmediate(() => {
    const orbitControls = new OrbitControls(context.camera, context.renderer.domElement)
    orbitControls.addEventListener('change', render)
  }, [])

  // React.useEffectImmediate(() => {
  //   context.scene.add(axesHelper)
  //   return () => context.scene.remove(axesHelper)
  // }, [])

  // React.useEffectImmediate(() => {
  //   context.scene.add(directionalLight)
  //   return () => context.scene.remove(directionalLight)
  // }, [])

  Map()
}

export default React.component(render)