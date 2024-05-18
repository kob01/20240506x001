import * as THREE from 'three'

import React from './utils.react'

import ExampleI from './View.Page.Example.I'
import ExampleII from './View.Page.Example.II'
import ExampleIII from './View.Page.Example.III'

function App() {
  const scene = React.useMemo(() => new THREE.Scene(), [])
  const camera = React.useMemo(() => new THREE.PerspectiveCamera(), [])
  const renderer = React.useMemo(() => new THREE.WebGLRenderer({ antialias: true }), [])
  const raycaster = React.useMemo(() => new THREE.Raycaster(), [])

  const context = { scene: scene, camera: camera, renderer: renderer, raycaster: raycaster }

  const render = React.useRender()

  React.contextProvider(context)

  React.useEffectImmediate(() => {
    document.body.appendChild(renderer.domElement)

    const resize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight)
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      render()
    }

    resize()

    window.addEventListener('resize', resize)
  }, [])

  React.useEffectImmediate(() => {
    renderer.domElement.style.background = 'transparent'
  }, [])

  if (new URLSearchParams(new URL(window.location.href).search).get('example') === '1') ExampleI()
  if (new URLSearchParams(new URL(window.location.href).search).get('example') === '2') ExampleII()
  if (new URLSearchParams(new URL(window.location.href).search).get('example') === '3') ExampleIII()
  if (new URLSearchParams(new URL(window.location.href).search).get('example') === null) ExampleIII()

  renderer.render(scene, camera)
}

export default React.component(App)