import * as THREE from 'three'

import React from './utils.react'
import ReactPlugin from './utils.react.plugin'

import { random } from './utils.common'

const Type0o000 = (props) => {
  const ObjectBox = React.useMemo(() => {
    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
    const meth = new THREE.Mesh(geometry, material)

    meth.position.x = props.x
    meth.position.y = 0.5 * 2
    meth.position.z = props.y

    return meth
  }, [props.x, props.y])

  const ObjectLine = React.useMemo(() => {
    const geometry = new THREE.EdgesGeometry(new THREE.BoxGeometry(2, 2, 2))
    const material = new THREE.MeshStandardMaterial({ color: 0x666666 })
    const line = new THREE.LineSegments(geometry, material)

    line.position.x = props.x
    line.position.y = 0.5 * 2
    line.position.z = props.y

    return line
  }, [props.x, props.y])

  ReactPlugin.useObject({ target: props.target, object: ObjectBox })
  ReactPlugin.useObject({ target: props.target, object: ObjectLine })
}

const Type0o001 = (props) => {
  const ObjectBox = React.useMemo(() => {
    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
    const meth = new THREE.Mesh(geometry, material)

    meth.position.x = props.x
    meth.position.y = 0.5 * 2
    meth.position.z = props.y

    return meth
  }, [props.x, props.y])

  const ObjectLine = React.useMemo(() => {
    const geometry = new THREE.EdgesGeometry(new THREE.BoxGeometry(2, 2, 2))
    const material = new THREE.MeshStandardMaterial({ color: 0x666666 })
    const line = new THREE.LineSegments(geometry, material)

    line.position.x = props.x
    line.position.y = 0.5 * 2
    line.position.z = props.y

    return line
  }, [props.x, props.y])

  const ObjectBoxRed = React.useMemo(() => {
    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const material = new THREE.MeshStandardMaterial({ color: 0xff0000, transparent: true, opacity: 0.2 })
    const meth = new THREE.Mesh(geometry, material)

    meth.position.x = props.x
    meth.position.y = 1.5 * 2
    meth.position.z = props.y

    return meth
  }, [props.x, props.y])

  const ObjectLineRed = React.useMemo(() => {
    const geometry = new THREE.EdgesGeometry(new THREE.BoxGeometry(2, 2, 2))
    const material = new THREE.MeshStandardMaterial({ color: 0xff0000 })
    const line = new THREE.LineSegments(geometry, material)

    line.position.x = props.x
    line.position.y = 1.5 * 2
    line.position.z = props.y

    return line
  }, [props.x, props.y])

  const ObjectLight = React.useMemo(() => {
    const pointLight = new THREE.PointLight(0xffffff, 1)

    pointLight.position.x = props.x
    pointLight.position.y = 1.5 * 2
    pointLight.position.z = props.y

    return pointLight
  }, [props.x, props.y])

  ReactPlugin.useObject({ target: props.target, object: ObjectBox })
  ReactPlugin.useObject({ target: props.target, object: ObjectLine })
  ReactPlugin.useObject({ target: props.target, object: ObjectBoxRed })
  ReactPlugin.useObject({ target: props.target, object: ObjectLineRed })
  ReactPlugin.useObject({ target: props.target, object: ObjectLight })
}

const Type0o002 = (props) => {
  const ObjectBox = React.useMemo(() => {
    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
    const meth = new THREE.Mesh(geometry, material)

    meth.position.x = props.x
    meth.position.y = 0.5 * 2
    meth.position.z = props.y

    return meth
  }, [props.x, props.y])

  const ObjectLine = React.useMemo(() => {
    const geometry = new THREE.EdgesGeometry(new THREE.BoxGeometry(2, 2, 2))
    const material = new THREE.MeshStandardMaterial({ color: 0x666666 })
    const line = new THREE.LineSegments(geometry, material)

    line.position.x = props.x
    line.position.y = 0.5 * 2
    line.position.z = props.y

    return line
  }, [props.x, props.y])

  const ObjectBoxGreen = React.useMemo(() => {
    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff00, transparent: true, opacity: 0.2 })
    const meth = new THREE.Mesh(geometry, material)

    meth.position.x = props.x
    meth.position.y = 1.5 * 2
    meth.position.z = props.y

    return meth
  }, [props.x, props.y])

  const ObjectLineGreen = React.useMemo(() => {
    const geometry = new THREE.EdgesGeometry(new THREE.BoxGeometry(2, 2, 2))
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 })
    const line = new THREE.LineSegments(geometry, material)

    line.position.x = props.x
    line.position.y = 1.5 * 2
    line.position.z = props.y

    return line
  }, [props.x, props.y])

  const ObjectLight = React.useMemo(() => {
    const pointLight = new THREE.PointLight(0xffffff, 1)

    pointLight.position.x = props.x
    pointLight.position.y = 1.5 * 2
    pointLight.position.z = props.y

    return pointLight
  }, [props.x, props.y])

  ReactPlugin.useObject({ target: props.target, object: ObjectBox })
  ReactPlugin.useObject({ target: props.target, object: ObjectLine })
  ReactPlugin.useObject({ target: props.target, object: ObjectBoxGreen })
  ReactPlugin.useObject({ target: props.target, object: ObjectLineGreen })
  ReactPlugin.useObject({ target: props.target, object: ObjectLight })
}

const Type0o003 = (props) => {
  const ObjectBox = React.useMemo(() => {
    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
    const meth = new THREE.Mesh(geometry, material)

    meth.position.x = props.x
    meth.position.y = 0.5 * 2
    meth.position.z = props.y

    return meth
  }, [props.x, props.y])

  const ObjectLine = React.useMemo(() => {
    const geometry = new THREE.EdgesGeometry(new THREE.BoxGeometry(2, 2, 2))
    const material = new THREE.MeshStandardMaterial({ color: 0x666666 })
    const line = new THREE.LineSegments(geometry, material)

    line.position.x = props.x
    line.position.y = 0.5 * 2
    line.position.z = props.y

    return line
  }, [props.x, props.y])

  const ObjectBoxTop = React.useMemo(() => {
    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
    const meth = new THREE.Mesh(geometry, material)

    meth.position.x = props.x
    meth.position.y = 1.5 * 2
    meth.position.z = props.y

    return meth
  }, [props.x, props.y])

  const ObjectLineTop = React.useMemo(() => {
    const geometry = new THREE.EdgesGeometry(new THREE.BoxGeometry(2, 2, 2))
    const material = new THREE.MeshStandardMaterial({ color: 0x666666 })
    const line = new THREE.LineSegments(geometry, material)

    line.position.x = props.x
    line.position.y = 1.5 * 2
    line.position.z = props.y

    return line
  }, [props.x, props.y])

  ReactPlugin.useObject({ target: props.target, object: ObjectBox })
  ReactPlugin.useObject({ target: props.target, object: ObjectLine })
  ReactPlugin.useObject({ target: props.target, object: ObjectBoxTop })
  ReactPlugin.useObject({ target: props.target, object: ObjectLineTop })

  return {}
}

const App = (props) => {
  const animationProcess = React.useRef(-1)
  const animationRandom = React.useRef(random(1, 0, 2))

  const ObjectGroup = React.useMemo(() => {
    const group = new THREE.Group()

    group.position.x = 0
    group.position.y = 0
    group.position.z = 0


    return group
  }, [])

  React.useEffectImmediate(() => {
    if (animationProcess.current < 120) {
      animationProcess.current = animationProcess.current + 1
    }
  })

  React.useEffectImmediate(() => {
    ObjectGroup.position.y = animationRandom.current * -8 - animationProcess.current / 120 * animationRandom.current * -8
  })

  if (props.cell.type === 0o000) React.component(Type0o000)({ ...props, target: ObjectGroup })
  if (props.cell.type === 0o001) React.component(Type0o001)({ ...props, target: ObjectGroup })
  if (props.cell.type === 0o002) React.component(Type0o002)({ ...props, target: ObjectGroup })
  if (props.cell.type === 0o003) React.component(Type0o003)({ ...props, target: ObjectGroup })

  ReactPlugin.useObject({ target: props.target, object: ObjectGroup })
}

export default React.component(App)