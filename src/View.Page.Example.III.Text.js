import * as THREE from 'three'
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js'
import { FontLoader } from 'three/addons/loaders/FontLoader.js'
import helvetiker_regular from 'three/examples/fonts/helvetiker_regular.typeface.json'

import React from './utils.react'
import ReactPlugin from './utils.react.plugin'

const loader = new FontLoader()

const App = () => {
  const context = React.useContext()

  const fontBoundingBox = React.useRef()

  const [font, setFont] = React.useState()

  const group = React.useMemo(() => {
    const group = new THREE.Group()

    group.position.x = 0
    group.position.y = 8
    group.position.z = 0

    return group
  }, [])

  const text = React.useMemo(() => {
    if (font === undefined) return

    const textGeometry = new TextGeometry('Arknights Mock', { font: font, size: 1, depth: 0.2, curveSegments: 12, bevelThickness: 20, bevelSize: 8, bevelEnabled: false })
    const textMaterials = [new THREE.MeshStandardMaterial({ color: 0xffffff }), new THREE.MeshStandardMaterial({ color: 0xffffff })]
    const textMeth = new THREE.Mesh(textGeometry, textMaterials)

    textGeometry.computeBoundingBox()

    fontBoundingBox.current = textGeometry.boundingBox

    textMeth.position.x = (textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x) * -1 * 0.5
    textMeth.position.y = 0
    textMeth.position.z = 0

    return textMeth
  }, [font])

  const light = React.useMemo(() => {
    const pointLight = new THREE.PointLight(0xffffff, 1)

    pointLight.decay = 1
    pointLight.position.x = 0
    pointLight.position.y = 0
    pointLight.position.z = 0

    return pointLight
  }, [])

  React.useEffectImmediate(() => {
    loader.load(`data:text/plain;base64,${btoa(unescape(encodeURIComponent(JSON.stringify(helvetiker_regular))))}`, font => setFont(font))
  }, [])

  ReactPlugin.useEvent({ ...context, object: text, onClick: (e, i) => { console.log(1) } })

  ReactPlugin.useObject({ target: group, object: text })
  ReactPlugin.useObject({ target: group, object: light })
  ReactPlugin.useObject({ target: context.scene, object: group })
}

export default React.component(App)