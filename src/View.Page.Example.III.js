import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { FontLoader } from 'three/addons/loaders/FontLoader.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

import helvetiker_regular from '../static/font/helvetiker_regular.typeface.json'
import xbot from '../static/model/xbot.glb'

import React from './utils.react'
import ReactPlugin from './utils.react.plugin'

import Map from './View.Page.Example.III.Map'
import Text from './View.Page.Example.III.Text'

const json = {
  map: [
    [{ type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }],
    [{ type: 0x000, style: 0x000 }, { type: 0x003, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x003, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x001, style: 0x000 }, { type: 0x001, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }],
    [{ type: 0x000, style: 0x000 }, { type: 0x002, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }],
    [{ type: 0x000, style: 0x000 }, { type: 0x003, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x003, style: 0x000 }, { type: 0x003, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x003, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }],
    [{ type: 0x000, style: 0x000 }, { type: 0x003, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x003, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }],
    [{ type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x003, style: 0x000 }, { type: 0x003, style: 0x000 }, { type: 0x003, style: 0x000 }, { type: 0x003, style: 0x000 }, { type: 0x002, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }],
    [{ type: 0x000, style: 0x000 }, { type: 0x003, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x003, style: 0x000 }, { type: 0x003, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }],
    [{ type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x003, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }],
    [{ type: 0x000, style: 0x000 }, { type: 0x003, style: 0x000 }, { type: 0x003, style: 0x000 }, { type: 0x003, style: 0x000 }, { type: 0x003, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x002, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x003, style: 0x000 }, { type: 0x003, style: 0x000 }, { type: 0x000, style: 0x000 }],
    [{ type: 0x000, style: 0x000 }, { type: 0x003, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x003, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }],
    [{ type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }],
    [{ type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }, { type: 0x000, style: 0x000 }],
  ],
  dimension: { row: 12, column: 12 }
}

const App = () => {
  const context = React.useContext()

  const render = React.useRender()
  
  const animationCount = ReactPlugin.useAnimationCount({ default: 0 })

  const [font, setFont] = React.useState(Object())
  const [model, setModel] = React.useState(Object())

  const ambientLight = React.useMemo(() => new THREE.AmbientLight(0xffffff, 0.02), [])
  const orbitControls = React.useMemo(() => new OrbitControls(context.camera, context.renderer.domElement), [context.camera, context.renderer.domElement])

  React.useEffectImmediate(() => {
    context.camera.position.set(0, 0, 32)
    context.camera.lookAt(new THREE.Vector3(0, 0, 0))
  }, [])

  React.useEffectImmediate(() => {
    orbitControls.autoRotate = true
    orbitControls.enableDamping = true
    orbitControls.enablePan = false
    orbitControls.minPolarAngle = Math.PI * 0.25
    orbitControls.maxPolarAngle = Math.PI * 0.25
    orbitControls.addEventListener('change', render)
    return () => orbitControls.dispose()
  }, [orbitControls])

  React.useEffectImmediate(() => orbitControls.update())

  React.useEffectImmediate(() => {
    const loader = new FontLoader()
    loader.load(`data:text/plain;base64,${btoa(unescape(encodeURIComponent(JSON.stringify(helvetiker_regular))))}`, value => setFont({ ...font, helvetiker_regular: value }))
  }, [])

  React.useEffectImmediate(() => {
    const loader = new GLTFLoader()
    loader.load(xbot, value => setModel({ ...font, xbot: value }))
  }, [])

  React.useEffectImmediate(() => render())

  React.contextProvider({ ...context, font: font, model: model, json: json, animationCount: animationCount })

  ReactPlugin.useObject({ target: context.scene, object: ambientLight })

  Map()
  Text()
}

export default React.component(App)