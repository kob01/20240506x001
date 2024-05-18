import * as THREE from 'three'

import React from './utils.react'
import ReactPlugin from './utils.react.plugin'

const Type0x000Component = (props) => {
  const box = React.useMemo(() => {
    const boxGeometry = new THREE.BoxGeometry(2, 2, 2)
    const meshStandardMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff })
    const meth = new THREE.Mesh(boxGeometry, meshStandardMaterial)

    meth.position.x = props.position.column * 2 - (props.map.column - 1) * 2 / 2
    meth.position.y = 1
    meth.position.z = props.position.row * 2 - (props.map.row - 1) * 2 / 2

    return meth
  }, [props.position.column, props.position.row, props.map.column, props.map.column, props.map.row])

  const boxLine = React.useMemo(() => {
    const boxGeometry = new THREE.BoxGeometry(2, 2, 2)
    const meshStandardMaterial = new THREE.MeshStandardMaterial({ color: 0x666666 })
    const edgesGeometry = new THREE.EdgesGeometry(boxGeometry)
    const line = new THREE.LineSegments(edgesGeometry, meshStandardMaterial)

    line.position.x = props.position.column * 2 - (props.map.column - 1) * 2 / 2
    line.position.y = 2 / 2
    line.position.z = props.position.row * 2 - (props.map.row - 1) * 2 / 2

    return line
  }, [props.position.column, props.position.row, props.map.column, props.map.column, props.map.row])

  ReactPlugin.useObject({ target: props.target, object: box })
  ReactPlugin.useObject({ target: props.target, object: boxLine })
}

const Type0x000 = React.component(Type0x000Component)

const Type0x001Component = (props) => {
  const light = React.useMemo(() => {
    const pointLight = new THREE.PointLight(0xffffff, 1)

    pointLight.position.x = props.position.column * 2 - (props.map.column - 1) * 2 / 2
    pointLight.position.y = 3
    pointLight.position.z = props.position.row * 2 - (props.map.row - 1) * 2 / 2

    return pointLight
  }, [props.position.column, props.position.row, props.map.column, props.map.column, props.map.row])

  const box = React.useMemo(() => {
    const boxGeometry = new THREE.BoxGeometry(2, 2, 2)
    const meshStandardMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff })
    const meth = new THREE.Mesh(boxGeometry, meshStandardMaterial)

    meth.position.x = props.position.column * 2 - (props.map.column - 1) * 2 / 2
    meth.position.y = 1
    meth.position.z = props.position.row * 2 - (props.map.row - 1) * 2 / 2

    return meth
  }, [props.position.column, props.position.row, props.map.column, props.map.column, props.map.row])

  const boxLine = React.useMemo(() => {
    const boxGeometry = new THREE.BoxGeometry(2, 2, 2)
    const meshStandardMaterial = new THREE.MeshStandardMaterial({ color: 0x666666 })
    const edgesGeometry = new THREE.EdgesGeometry(boxGeometry)
    const line = new THREE.LineSegments(edgesGeometry, meshStandardMaterial)

    line.position.x = props.position.column * 2 - (props.map.column - 1) * 2 / 2
    line.position.y = 2 / 2
    line.position.z = props.position.row * 2 - (props.map.row - 1) * 2 / 2

    return line
  }, [props.position.column, props.position.row, props.map.column, props.map.column, props.map.row])

  const boxLineAddition = React.useMemo(() => {
    const boxGeometry = new THREE.BoxGeometry(2, 2, 2)
    const meshStandardMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 })
    const edgesGeometry = new THREE.EdgesGeometry(boxGeometry)
    const line = new THREE.LineSegments(edgesGeometry, meshStandardMaterial)

    line.position.x = props.position.column * 2 - (props.map.column - 1) * 2 / 2
    line.position.y = 3
    line.position.z = props.position.row * 2 - (props.map.row - 1) * 2 / 2

    return line
  }, [props.position.column, props.position.row, props.map.column, props.map.column, props.map.row])

  ReactPlugin.useObject({ target: props.target, object: light })
  ReactPlugin.useObject({ target: props.target, object: box })
  ReactPlugin.useObject({ target: props.target, object: boxLine })
  ReactPlugin.useObject({ target: props.target, object: boxLineAddition })
}

const Type0x001 = React.component(Type0x001Component)

const Type0x002Component = (props) => {
  const light = React.useMemo(() => {
    const pointLight = new THREE.PointLight(0xffffff, 1)

    pointLight.position.x = props.position.column * 2 - (props.map.column - 1) * 2 / 2
    pointLight.position.y = 3
    pointLight.position.z = props.position.row * 2 - (props.map.row - 1) * 2 / 2

    return pointLight
  }, [props.position.column, props.position.row, props.map.column, props.map.column, props.map.row])

  const box = React.useMemo(() => {
    const boxGeometry = new THREE.BoxGeometry(2, 2, 2)
    const meshStandardMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff })
    const meth = new THREE.Mesh(boxGeometry, meshStandardMaterial)

    meth.position.x = props.position.column * 2 - (props.map.column - 1) * 2 / 2
    meth.position.y = 1
    meth.position.z = props.position.row * 2 - (props.map.row - 1) * 2 / 2

    return meth
  }, [props.position.column, props.position.row, props.map.column, props.map.column, props.map.row])

  const boxLine = React.useMemo(() => {
    const boxGeometry = new THREE.BoxGeometry(2, 2, 2)
    const meshStandardMaterial = new THREE.MeshStandardMaterial({ color: 0x666666 })
    const edgesGeometry = new THREE.EdgesGeometry(boxGeometry)
    const line = new THREE.LineSegments(edgesGeometry, meshStandardMaterial)

    line.position.x = props.position.column * 2 - (props.map.column - 1) * 2 / 2
    line.position.y = 2 / 2
    line.position.z = props.position.row * 2 - (props.map.row - 1) * 2 / 2

    return line
  }, [props.position.column, props.position.row, props.map.column, props.map.column, props.map.row])

  const boxLineAddition = React.useMemo(() => {
    const boxGeometry = new THREE.BoxGeometry(2, 2, 2)
    const meshStandardMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 })
    const edgesGeometry = new THREE.EdgesGeometry(boxGeometry)
    const line = new THREE.LineSegments(edgesGeometry, meshStandardMaterial)

    line.position.x = props.position.column * 2 - (props.map.column - 1) * 2 / 2
    line.position.y = 3
    line.position.z = props.position.row * 2 - (props.map.row - 1) * 2 / 2

    return line
  }, [props.position.column, props.position.row, props.map.column, props.map.column, props.map.row])

  ReactPlugin.useObject({ target: props.target, object: light })
  ReactPlugin.useObject({ target: props.target, object: box })
  ReactPlugin.useObject({ target: props.target, object: boxLine })
  ReactPlugin.useObject({ target: props.target, object: boxLineAddition })
}

const Type0x002 = React.component(Type0x002Component)

const Type0x003Component = (props) => {
  const box = React.useMemo(() => {
    const boxGeometry = new THREE.BoxGeometry(2, 2, 2)
    const meshStandardMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff })
    const meth = new THREE.Mesh(boxGeometry, meshStandardMaterial)

    meth.position.x = props.position.column * 2 - (props.map.column - 1) * 2 / 2
    meth.position.y = 1
    meth.position.z = props.position.row * 2 - (props.map.row - 1) * 2 / 2

    return meth
  }, [props.position.column, props.position.row, props.map.column, props.map.column, props.map.row])

  const boxLine = React.useMemo(() => {
    const boxGeometry = new THREE.BoxGeometry(2, 2, 2)
    const meshStandardMaterial = new THREE.MeshStandardMaterial({ color: 0x666666 })
    const edgesGeometry = new THREE.EdgesGeometry(boxGeometry)
    const line = new THREE.LineSegments(edgesGeometry, meshStandardMaterial)

    line.position.x = props.position.column * 2 - (props.map.column - 1) * 2 / 2
    line.position.y = 2 / 2
    line.position.z = props.position.row * 2 - (props.map.row - 1) * 2 / 2

    return line
  }, [props.position.column, props.position.row, props.map.column, props.map.column, props.map.row])

  const boxAddition = React.useMemo(() => {
    const boxGeometry = new THREE.BoxGeometry(2, 2, 2)
    const meshStandardMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff })
    const meth = new THREE.Mesh(boxGeometry, meshStandardMaterial)

    meth.position.x = props.position.column * 2 - (props.map.column - 1) * 2 / 2
    meth.position.y = 3
    meth.position.z = props.position.row * 2 - (props.map.row - 1) * 2 / 2

    return meth
  }, [props.position.column, props.position.row, props.map.column, props.map.column, props.map.row])

  const boxLineAddition = React.useMemo(() => {
    const boxGeometry = new THREE.BoxGeometry(2, 2, 2)
    const meshStandardMaterial = new THREE.MeshStandardMaterial({ color: 0x666666 })
    const edgesGeometry = new THREE.EdgesGeometry(boxGeometry)
    const line = new THREE.LineSegments(edgesGeometry, meshStandardMaterial)

    line.position.x = props.position.column * 2 - (props.map.column - 1) * 2 / 2
    line.position.y = 3
    line.position.z = props.position.row * 2 - (props.map.row - 1) * 2 / 2

    return line
  }, [props.position.column, props.position.row, props.map.column, props.map.column, props.map.row])

  ReactPlugin.useObject({ target: props.target, object: box })
  ReactPlugin.useObject({ target: props.target, object: boxLine })
  ReactPlugin.useObject({ target: props.target, object: boxAddition })
  ReactPlugin.useObject({ target: props.target, object: boxLineAddition })
}

const Type0x003 = React.component(Type0x003Component)

const App = (props) => {
  if (props.type === 0x000) Type0x000(props)
  if (props.type === 0x001) Type0x001(props)
  if (props.type === 0x002) Type0x002(props)
  if (props.type === 0x003) Type0x003(props)
}

export default React.component(App)