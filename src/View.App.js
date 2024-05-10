import * as THREE from 'three'

import React from './utils.react'

import Example from './View.Page.Example'

function App() {
  const scene = React.useMemo(() => new THREE.Scene(), [])
  const camera = React.useMemo(() => new THREE.PerspectiveCamera(), [])
  const renderer = React.useMemo(() => new THREE.WebGLRenderer({ antialias: true }), [])
  const raycaster = React.useMemo(() => new THREE.Raycaster(), [])

  React.useEffect(() => {
    camera.position.z = 10

    document.body.appendChild(renderer.domElement)

    const resize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight)
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
    }

    resize()

    window.addEventListener('resize', resize)
  }, [])

  React.contextProvider({ scene: scene, camera: camera, renderer: renderer, raycaster: raycaster })

  Example()

  renderer.render(scene, camera)
}

export default React.component(App)