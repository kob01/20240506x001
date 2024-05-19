import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

import helvetiker_regular from '../static/font/helvetiker_regular.typeface.json'
import xbot from '../static/model/xbot.glb'

import React from './utils.react'
import ReactPlugin from './utils.react.plugin'

import Building from './View.Page.Example.III.Building'
import Text from './View.Page.Example.III.Text'
import Enemy from './View.Page.Example.III.Enemy'

const map = {
  building: [
    [{ type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }],
    [{ type: 0o0000, style: 0o0000 }, { type: 0o0003, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0003, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0001, style: 0o0000 }, { type: 0o0001, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }],
    [{ type: 0o0000, style: 0o0000 }, { type: 0o0002, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }],
    [{ type: 0o0000, style: 0o0000 }, { type: 0o0003, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0003, style: 0o0000 }, { type: 0o0003, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0003, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }],
    [{ type: 0o0000, style: 0o0000 }, { type: 0o0003, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0003, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }],
    [{ type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0003, style: 0o0000 }, { type: 0o0003, style: 0o0000 }, { type: 0o0003, style: 0o0000 }, { type: 0o0003, style: 0o0000 }, { type: 0o0002, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }],
    [{ type: 0o0000, style: 0o0000 }, { type: 0o0003, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0003, style: 0o0000 }, { type: 0o0003, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }],
    [{ type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0003, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }],
    [{ type: 0o0000, style: 0o0000 }, { type: 0o0003, style: 0o0000 }, { type: 0o0003, style: 0o0000 }, { type: 0o0003, style: 0o0000 }, { type: 0o0003, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0002, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0003, style: 0o0000 }, { type: 0o0003, style: 0o0000 }, { type: 0o0000, style: 0o0000 }],
    [{ type: 0o0000, style: 0o0000 }, { type: 0o0003, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0003, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }],
    [{ type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }],
    [{ type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }, { type: 0o0000, style: 0o0000 }],
  ],
  dimension: { row: 12, column: 12 },
  enemy: [
    { type: 0o0000, from: { row: 2, column: 8 }, to: { row: 3, column: 2 }, path: [], delay: [{ duration: 240, type: 0o0000 }] }
  ]
}

const useCamera = () => {
  const context = React.useContext()

  React.useEffectImmediate(() => {
    const position = Math.max(20000 / context.renderer.domElement.width, 20000 / context.renderer.domElement.height)

    context.camera.position.set(0, position, position)

    context.camera.lookAt(new THREE.Vector3(0, 0, 0))
  }, [])
}

const useAmbientLight = () => {
  const context = React.useContext()

  const ambientLight = React.useMemo(() => new THREE.AmbientLight(0xffffff, 0.02), [])

  ReactPlugin.useObject({ target: context.scene, object: ambientLight })
}

const useOrbitControls = () => {
  const context = React.useContext()

  const render = React.useRender()

  const orbitControls = React.useMemo(() => new OrbitControls(context.camera, context.renderer.domElement), [context.camera, context.renderer.domElement])

  React.useEffectImmediate(() => {
    orbitControls.autoRotate = true
    orbitControls.enableDamping = true
    orbitControls.enablePan = false
    orbitControls.minPolarAngle = Math.PI * 0.15
    orbitControls.maxPolarAngle = Math.PI * 0.35
    orbitControls.addEventListener('change', render)
    return () => {
      orbitControls.removeEventListener('change', render)
      orbitControls.dispose()
    }
  }, [orbitControls])

  React.useEffectImmediate(() => orbitControls.update())

  React.useEffectImmediate(() => render())
}

const useLoadFont = () => {
  const context = React.useContext()

  const font = ReactPlugin.useFont([{ json: helvetiker_regular, name: 'helvetiker_regular' }])[0]

  React.contextProvider({ ...context, font })
}

const useLoadModel = () => {
  const context = React.useContext()

  const model = ReactPlugin.useModel([{ link: xbot, name: 'xbot', type: 'gltf' }])[0]

  React.contextProvider({ ...context, model })
}

const useAnimationRecord = () => {
  const context = React.useContext()

  const [animationCount, setAnimationCount] = React.useState(0)
  const [animationSpeed, setAnimationSpeed] = React.useState(4)

  React.useEffectImmediate(() => setAnimationCount(animationCount + animationSpeed))

  React.contextProvider({ ...context, animationCount, setAnimationCount, animationSpeed, setAnimationSpeed })
}

const useEmemy = () => {
  const context = React.useContext()

  const enemy = React.useState(JSON.parse(JSON.stringify(map.enemy)))

  React.contextProvider({ ...context, enemy })
}

const App = () => {
  const context = React.useContext()

  React.contextProvider({ ...context, map })

  new Array(useCamera, useAmbientLight, useOrbitControls, useLoadFont, useLoadModel, useAnimationRecord, useEmemy).forEach(i => i())

  new Array(Text, Building, Enemy).forEach(i => i())
}

export default React.component(App)