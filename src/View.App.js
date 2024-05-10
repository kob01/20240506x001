import * as THREE from 'three'

import React from './utils.react'

import Battle from './View.Page.Battle'

function App() {
  const scene = React.useMemo(() => new THREE.Scene(), [])
  const camera = React.useMemo(() => new THREE.PerspectiveCamera(), [])
  const renderer = React.useMemo(() => new THREE.WebGLRenderer({ antialias: true }), [])

  React.useEffect(() => {
    camera.position.z = 5

    document.body.appendChild(renderer.domElement)

    const resize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight)
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
    }

    resize()

    window.addEventListener('resize', resize)
  }, [])

  React.contextProvider({ scene: scene, camera: camera, renderer: renderer })

  Battle()

  renderer.render(scene, camera)
}

export default React.component(App)