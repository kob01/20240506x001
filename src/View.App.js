import * as THREE from 'three'

import React from './utils.react'

import Example from './View.Page.Example'
import Coordinate from './View.Component.Coordinate'

function App() {
  const scene = React.useMemo(() => new THREE.Scene(), [])
  const camera = React.useMemo(() => new THREE.PerspectiveCamera(), [])
  const renderer = React.useMemo(() => new THREE.WebGLRenderer({ antialias: true }), [])
  const raycaster = React.useMemo(() => new THREE.Raycaster(), [])

  const context = { scene: scene, camera: camera, renderer: renderer, raycaster: raycaster }

  React.useEffect(() => {
    camera.position.set(10, 10, 10)
    camera.lookAt(new THREE.Vector3(0, 0, 0))

    document.body.appendChild(renderer.domElement)

    const resize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight)
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
    }

    resize()

    window.addEventListener('resize', resize)
  }, [])


  React.contextProvider(context)

  Coordinate({ lengthX: 10, lengthY: 10, lengthZ: 10, ...context })

  Example()

  renderer.render(scene, camera)
}

export default React.component(App)