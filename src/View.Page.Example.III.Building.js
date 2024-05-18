import * as THREE from 'three'

import React from './utils.react'
import ReactPlugin from './utils.react.plugin'

const Type0x000Component = (props) => {
  const meth = React.useMemo(() => {
    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
    const meth = new THREE.Mesh(geometry, material)

    meth.position.x = props.position.column * 2 - (props.map.column - 1) * 2 / 2
    meth.position.y = 1
    meth.position.z = props.position.row * 2 - (props.map.row - 1) * 2 / 2

    return meth
  }, [props.position.column, props.position.row, props.map.column, props.map.column, props.map.row])

  const methLine = React.useMemo(() => {
    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const material = new THREE.MeshStandardMaterial({ color: 0x666666 })
    const edgesGeometry = new THREE.EdgesGeometry(geometry)
    const line = new THREE.LineSegments(edgesGeometry, material)

    line.position.x = props.position.column * 2 - (props.map.column - 1) * 2 / 2
    line.position.y = 2 / 2
    line.position.z = props.position.row * 2 - (props.map.row - 1) * 2 / 2

    return line
  }, [props.position.column, props.position.row, props.map.column, props.map.column, props.map.row])

  ReactPlugin.useObject({ target: props.target, object: meth })
  ReactPlugin.useObject({ target: props.target, object: methLine })
}

const Type0x000 = React.component(Type0x000Component)

const Type0x001Component = (props) => {
  const pointLight = React.useMemo(() => {
    const light = new THREE.PointLight(0xffffff, 1)
    light.position.x = props.position.column * 2 - (props.map.column - 1) * 2 / 2
    light.position.y = 3
    light.position.z = props.position.row * 2 - (props.map.row - 1) * 2 / 2
    return light
  }, [props.position.column, props.position.row, props.map.column, props.map.column, props.map.row])

  const meth = React.useMemo(() => {
    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
    const meth = new THREE.Mesh(geometry, material)

    meth.position.x = props.position.column * 2 - (props.map.column - 1) * 2 / 2
    meth.position.y = 1
    meth.position.z = props.position.row * 2 - (props.map.row - 1) * 2 / 2

    return meth
  }, [props.position.column, props.position.row, props.map.column, props.map.column, props.map.row])

  const methLine = React.useMemo(() => {
    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const material = new THREE.MeshStandardMaterial({ color: 0x666666 })
    const edgesGeometry = new THREE.EdgesGeometry(geometry)
    const line = new THREE.LineSegments(edgesGeometry, material)

    line.position.x = props.position.column * 2 - (props.map.column - 1) * 2 / 2
    line.position.y = 2 / 2
    line.position.z = props.position.row * 2 - (props.map.row - 1) * 2 / 2

    return line
  }, [props.position.column, props.position.row, props.map.column, props.map.column, props.map.row])

  const methLineSP = React.useMemo(() => {
    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const material = new THREE.MeshStandardMaterial({ color: 0xff0000 })
    const edgesGeometry = new THREE.EdgesGeometry(geometry)
    const line = new THREE.LineSegments(edgesGeometry, material)

    line.position.x = props.position.column * 2 - (props.map.column - 1) * 2 / 2
    line.position.y = 3
    line.position.z = props.position.row * 2 - (props.map.row - 1) * 2 / 2

    return line
  }, [props.position.column, props.position.row, props.map.column, props.map.column, props.map.row])

  ReactPlugin.useObject({ target: props.target, object: pointLight })
  ReactPlugin.useObject({ target: props.target, object: meth })
  ReactPlugin.useObject({ target: props.target, object: methLine })
  ReactPlugin.useObject({ target: props.target, object: methLineSP })
}

const Type0x001 = React.component(Type0x001Component)

const Type0x002Component = (props) => {
  const pointLight = React.useMemo(() => {
    const light = new THREE.PointLight(0xffffff, 1)
    light.position.x = props.position.column * 2 - (props.map.column - 1) * 2 / 2
    light.position.y = 3
    light.position.z = props.position.row * 2 - (props.map.row - 1) * 2 / 2
    return light
  }, [props.position.column, props.position.row, props.map.column, props.map.column, props.map.row])

  const meth = React.useMemo(() => {
    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
    const meth = new THREE.Mesh(geometry, material)

    meth.position.x = props.position.column * 2 - (props.map.column - 1) * 2 / 2
    meth.position.y = 1
    meth.position.z = props.position.row * 2 - (props.map.row - 1) * 2 / 2

    return meth
  }, [props.position.column, props.position.row, props.map.column, props.map.column, props.map.row])

  const methLine = React.useMemo(() => {
    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const material = new THREE.MeshStandardMaterial({ color: 0x666666 })
    const edgesGeometry = new THREE.EdgesGeometry(geometry)
    const line = new THREE.LineSegments(edgesGeometry, material)

    line.position.x = props.position.column * 2 - (props.map.column - 1) * 2 / 2
    line.position.y = 2 / 2
    line.position.z = props.position.row * 2 - (props.map.row - 1) * 2 / 2

    return line
  }, [props.position.column, props.position.row, props.map.column, props.map.column, props.map.row])

  const methLineSP = React.useMemo(() => {
    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 })
    const edgesGeometry = new THREE.EdgesGeometry(geometry)
    const line = new THREE.LineSegments(edgesGeometry, material)

    line.position.x = props.position.column * 2 - (props.map.column - 1) * 2 / 2
    line.position.y = 3
    line.position.z = props.position.row * 2 - (props.map.row - 1) * 2 / 2

    return line
  }, [props.position.column, props.position.row, props.map.column, props.map.column, props.map.row])

  ReactPlugin.useObject({ target: props.target, object: pointLight })
  ReactPlugin.useObject({ target: props.target, object: meth })
  ReactPlugin.useObject({ target: props.target, object: methLine })
  ReactPlugin.useObject({ target: props.target, object: methLineSP })
}

const Type0x002 = React.component(Type0x002Component)

const Type0x003Component = (props) => {
  const meth = React.useMemo(() => {
    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
    const meth = new THREE.Mesh(geometry, material)

    meth.position.x = props.position.column * 2 - (props.map.column - 1) * 2 / 2
    meth.position.y = 1
    meth.position.z = props.position.row * 2 - (props.map.row - 1) * 2 / 2

    return meth
  }, [props.position.column, props.position.row, props.map.column, props.map.column, props.map.row])

  const methLine = React.useMemo(() => {
    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const material = new THREE.MeshStandardMaterial({ color: 0x666666 })
    const edgesGeometry = new THREE.EdgesGeometry(geometry)
    const line = new THREE.LineSegments(edgesGeometry, material)

    line.position.x = props.position.column * 2 - (props.map.column - 1) * 2 / 2
    line.position.y = 2 / 2
    line.position.z = props.position.row * 2 - (props.map.row - 1) * 2 / 2

    return line
  }, [props.position.column, props.position.row, props.map.column, props.map.column, props.map.row])

  const methSP = React.useMemo(() => {
    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
    const meth = new THREE.Mesh(geometry, material)

    meth.position.x = props.position.column * 2 - (props.map.column - 1) * 2 / 2
    meth.position.y = 3
    meth.position.z = props.position.row * 2 - (props.map.row - 1) * 2 / 2

    return meth
  }, [props.position.column, props.position.row, props.map.column, props.map.column, props.map.row])

  const methLineSP = React.useMemo(() => {
    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const material = new THREE.MeshStandardMaterial({ color: 0x666666 })
    const edgesGeometry = new THREE.EdgesGeometry(geometry)
    const line = new THREE.LineSegments(edgesGeometry, material)

    line.position.x = props.position.column * 2 - (props.map.column - 1) * 2 / 2
    line.position.y = 3
    line.position.z = props.position.row * 2 - (props.map.row - 1) * 2 / 2

    return line
  }, [props.position.column, props.position.row, props.map.column, props.map.column, props.map.row])

  ReactPlugin.useObject({ target: props.target, object: meth })
  ReactPlugin.useObject({ target: props.target, object: methLine })
  ReactPlugin.useObject({ target: props.target, object: methSP })
  ReactPlugin.useObject({ target: props.target, object: methLineSP })
}

const Type0x003 = React.component(Type0x003Component)

const App = (props) => {
  if (props.type === 0x000) Type0x000(props)
  if (props.type === 0x001) Type0x001(props)
  if (props.type === 0x002) Type0x002(props)
  if (props.type === 0x003) Type0x003(props)
}

export default React.component(App)