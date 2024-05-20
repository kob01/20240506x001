import * as THREE from 'three'
import { FontLoader } from 'three/addons/loaders/FontLoader.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

import React from './utils.react'

const fontLoader = new FontLoader()
const gltfLoader = new GLTFLoader()

const useEvent = (props) => {
  const dependence = props.dependence ? props.dependence : []

  React.useEffectImmediate(() => {
    const mouseEvent = (e, callback) => {
      var x = (e.clientX / props.renderer.domElement.width) * 2 - 1
      var y = (e.clientY / props.renderer.domElement.height) * 2 - 1
      y = y * -1

      props.raycaster.setFromCamera(new THREE.Vector2(x, y * -1), props.camera)

      const intersects = props.raycaster.intersectObjects(props.scene.children)
      const intersectsFindIndex = intersects.findIndex(i => i.object === props.object)

      if (intersectsFindIndex !== -1 && callback) callback(e, intersectsFindIndex)
      if (intersectsFindIndex === -1 && callback && props.object === undefined) callback(e, intersectsFindIndex)
    }

    const touchEvent = (e, callback) => {
      var x = (e.changedTouches[0].pageX / props.renderer.domElement.width) * 2 - 1
      var y = (e.changedTouches[0].pageY / props.renderer.domElement.height) * 2 - 1
      y = y * -1

      props.raycaster.setFromCamera(new THREE.Vector2(x, y * -1), props.camera)

      const intersects = props.raycaster.intersectObjects(props.scene.children)
      const intersectsFindIndex = intersects.findIndex(i => i.object === props.object)

      if (intersectsFindIndex !== -1 && callback) callback(e, intersectsFindIndex)
      if (intersectsFindIndex === -1 && callback && props.object === undefined) callback(e, intersectsFindIndex)
    }

    const onClick = e => mouseEvent(e, props.onClick)
    const onMousedown = e => mouseEvent(e, props.onMousedown)
    const onMouseup = e => mouseEvent(e, props.onMouseup)
    const onTouchstart = e => touchEvent(e, props.onTouchstart)
    const onTouchmove = e => touchEvent(e, props.onTouchmove)
    const onTouchend = e => touchEvent(e, props.onTouchend)

    props.renderer.domElement.addEventListener('click', onClick)
    props.renderer.domElement.addEventListener('mousedown', onMousedown)
    props.renderer.domElement.addEventListener('mouseup', onMouseup)
    props.renderer.domElement.addEventListener('touchstart', onTouchstart)
    props.renderer.domElement.addEventListener('touchmove', onTouchmove)
    props.renderer.domElement.addEventListener('touchend', onTouchend)

    return () => {
      props.renderer.domElement.removeEventListener('click', onClick)
      props.renderer.domElement.removeEventListener('mousedown', onMousedown)
      props.renderer.domElement.removeEventListener('mouseup', onMouseup)
      props.renderer.domElement.removeEventListener('touchstart', onTouchstart)
      props.renderer.domElement.removeEventListener('touchmove', onTouchmove)
      props.renderer.domElement.removeEventListener('touchend', onTouchend)
    }
  }, [props.renderer, props.camera, props.scene, props.raycaster, props.object, props.onClick, props.onMousedown, props.onMouseup, props.onTouchstart, props.onTouchmove, props.onTouchend, ...dependence])
}

const useObject = (props) => {
  React.useEffectImmediate(() => {
    if (Boolean(props.target) === false) return
    if (Boolean(props.object) === false) return

    props.target.add(props.object)

    return () => {
      props.target.remove(props.object)
    }
  }, [props.target, props.object])
}

const useAnimationCount = (props) => {
  const [animationCount, setAnimationCount] = React.useStateImmediate(props)

  React.useEffectImmediate(() => setAnimationCount(animationCount + 1))

  return [animationCount, setAnimationCount]
}

const useFont = (props) => {
  const [font, setFont] = React.useState(Object())

  React.useEffectImmediate(() => {
    const deal = (i, r) => {
      if (i.json) {
        fontLoader.load(`data:text/plain;base64,${btoa(unescape(encodeURIComponent(JSON.stringify(i.json))))}`, value => r({ name: i.name, value: value }))
      }
      if (i.link) {
        fontLoader.load(i.link, value => r({ name: i.name, value: value }))
      }
    }

    const then = r => {
      setFont(r.reduce((t, i) => Object.assign(t, { [i.name]: i.value }), Object()))
      if (props.callback) props.callback()
    }

    Promise.all(props.font.map(i => new Promise(r => deal(i, r)))).then(then)
  }, [])

  return [font, setFont]
}

const useModel = (props) => {
  const [model, setModel] = React.useState(Object())

  React.useEffectImmediate(() => {
    const deal = (i, r) => {
      if (i.model) {
        r({ name: i.name, value: i.model })
      }
      if (i.link && i.type === 'gltf') {
        gltfLoader.load(i.link, value => r({ name: i.name, value: value }))
      }
    }

    const then = r => {
      setModel(r.reduce((t, i) => Object.assign(t, { [i.name]: i.value }), Object()))
      if (props.callback) props.callback()
    }

    Promise.all(props.model.map(i => new Promise(r => deal(i, r)))).then(then)
  }, [])

  return [model, setModel]
}

const ReactPlugin = { useEvent, useObject, useAnimationCount, useFont, useModel }

export default ReactPlugin