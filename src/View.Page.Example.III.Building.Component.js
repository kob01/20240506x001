import * as THREE from 'three'

import React from './utils.react'
import ReactPlugin from './utils.react.plugin'

const Type0o0000Style0o0000 = (props) => {
  const Index0x000Style0o0000 = React.useMemo(() => {
    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
    const meth = new THREE.Mesh(geometry, material)

    meth.position.x = (props.position.column - (props.dimension.column - 1) / 2) * 2
    meth.position.y = 0.5 * 2
    meth.position.z = (props.position.row - (props.dimension.row - 1) / 2) * 2

    return meth
  }, [props.position.column, props.position.row, props.dimension.column, props.dimension.column, props.dimension.row])

  const Index0x000Style0o0001 = React.useMemo(() => {
    const geometry = new THREE.EdgesGeometry(new THREE.BoxGeometry(2, 2, 2))
    const material = new THREE.MeshStandardMaterial({ color: 0x666666 })
    const line = new THREE.LineSegments(geometry, material)

    line.position.x = (props.position.column - (props.dimension.column - 1) / 2) * 2
    line.position.y = 0.5 * 2
    line.position.z = (props.position.row - (props.dimension.row - 1) / 2) * 2

    return line
  }, [props.position.column, props.position.row, props.dimension.column, props.dimension.column, props.dimension.row])

  ReactPlugin.useObject({ target: props.target, object: Index0x000Style0o0000 })
  ReactPlugin.useObject({ target: props.target, object: Index0x000Style0o0001 })
}

const Type0o0001Style0o0000 = (props) => {
  const Index0x000Style0o0000 = React.useMemo(() => {
    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
    const meth = new THREE.Mesh(geometry, material)

    meth.position.x = (props.position.column - (props.dimension.column - 1) / 2) * 2
    meth.position.y = 0.5 * 2
    meth.position.z = (props.position.row - (props.dimension.row - 1) / 2) * 2

    return meth
  }, [props.position.column, props.position.row, props.dimension.column, props.dimension.column, props.dimension.row])

  const Index0x000Style0o0001 = React.useMemo(() => {
    const geometry = new THREE.EdgesGeometry(new THREE.BoxGeometry(2, 2, 2))
    const material = new THREE.MeshStandardMaterial({ color: 0x666666 })
    const line = new THREE.LineSegments(geometry, material)

    line.position.x = (props.position.column - (props.dimension.column - 1) / 2) * 2
    line.position.y = 0.5 * 2
    line.position.z = (props.position.row - (props.dimension.row - 1) / 2) * 2

    return line
  }, [props.position.column, props.position.row, props.dimension.column, props.dimension.column, props.dimension.row])

  const Index0x001Style0o0000 = React.useMemo(() => {
    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const material = new THREE.MeshStandardMaterial({ color: 0xff0000, transparent: true, opacity: 0.2 })
    const meth = new THREE.Mesh(geometry, material)

    meth.position.x = (props.position.column - (props.dimension.column - 1) / 2) * 2
    meth.position.y = 1.5 * 2
    meth.position.z = (props.position.row - (props.dimension.row - 1) / 2) * 2

    return meth
  }, [props.position.column, props.position.row, props.dimension.column, props.dimension.column, props.dimension.row])

  const Index0x001Style0o0001 = React.useMemo(() => {
    const geometry = new THREE.EdgesGeometry(new THREE.BoxGeometry(2, 2, 2))
    const material = new THREE.MeshStandardMaterial({ color: 0xff0000 })
    const line = new THREE.LineSegments(geometry, material)

    line.position.x = (props.position.column - (props.dimension.column - 1) / 2) * 2
    line.position.y = 1.5 * 2
    line.position.z = (props.position.row - (props.dimension.row - 1) / 2) * 2

    return line
  }, [props.position.column, props.position.row, props.dimension.column, props.dimension.column, props.dimension.row])

  const Index0x010Style0o0000 = React.useMemo(() => {
    const pointLight = new THREE.PointLight(0xffffff, 1)

    pointLight.position.x = (props.position.column - (props.dimension.column - 1) / 2) * 2
    pointLight.position.y = 1.5 * 2
    pointLight.position.z = (props.position.row - (props.dimension.row - 1) / 2) * 2

    return pointLight
  }, [props.position.column, props.position.row, props.dimension.column, props.dimension.column, props.dimension.row])

  ReactPlugin.useObject({ target: props.target, object: Index0x000Style0o0000 })
  ReactPlugin.useObject({ target: props.target, object: Index0x000Style0o0001 })
  ReactPlugin.useObject({ target: props.target, object: Index0x001Style0o0000 })
  ReactPlugin.useObject({ target: props.target, object: Index0x001Style0o0001 })
  ReactPlugin.useObject({ target: props.target, object: Index0x010Style0o0000 })
}

const Type0o0002Style0o0000 = (props) => {
  const Index0x000Style0o0000 = React.useMemo(() => {
    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
    const meth = new THREE.Mesh(geometry, material)

    meth.position.x = (props.position.column - (props.dimension.column - 1) / 2) * 2
    meth.position.y = 0.5 * 2
    meth.position.z = (props.position.row - (props.dimension.row - 1) / 2) * 2

    return meth
  }, [props.position.column, props.position.row, props.dimension.column, props.dimension.column, props.dimension.row])

  const Index0x000Style0o0001 = React.useMemo(() => {
    const geometry = new THREE.EdgesGeometry(new THREE.BoxGeometry(2, 2, 2))
    const material = new THREE.MeshStandardMaterial({ color: 0x666666 })
    const line = new THREE.LineSegments(geometry, material)

    line.position.x = (props.position.column - (props.dimension.column - 1) / 2) * 2
    line.position.y = 0.5 * 2
    line.position.z = (props.position.row - (props.dimension.row - 1) / 2) * 2

    return line
  }, [props.position.column, props.position.row, props.dimension.column, props.dimension.column, props.dimension.row])

  const Index0x001Style0o0000 = React.useMemo(() => {
    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff00, transparent: true, opacity: 0.2 })
    const meth = new THREE.Mesh(geometry, material)

    meth.position.x = (props.position.column - (props.dimension.column - 1) / 2) * 2
    meth.position.y = 1.5 * 2
    meth.position.z = (props.position.row - (props.dimension.row - 1) / 2) * 2

    return meth
  }, [props.position.column, props.position.row, props.dimension.column, props.dimension.column, props.dimension.row])

  const Index0x001Style0o0001 = React.useMemo(() => {
    const geometry = new THREE.EdgesGeometry(new THREE.BoxGeometry(2, 2, 2))
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 })
    const line = new THREE.LineSegments(geometry, material)

    line.position.x = (props.position.column - (props.dimension.column - 1) / 2) * 2
    line.position.y = 1.5 * 2
    line.position.z = (props.position.row - (props.dimension.row - 1) / 2) * 2

    return line
  }, [props.position.column, props.position.row, props.dimension.column, props.dimension.column, props.dimension.row])

  const Index0x010Style0o0000 = React.useMemo(() => {
    const pointLight = new THREE.PointLight(0xffffff, 1)

    pointLight.position.x = (props.position.column - (props.dimension.column - 1) / 2) * 2
    pointLight.position.y = 1.5 * 2
    pointLight.position.z = (props.position.row - (props.dimension.row - 1) / 2) * 2

    return pointLight
  }, [props.position.column, props.position.row, props.dimension.column, props.dimension.column, props.dimension.row])

  ReactPlugin.useObject({ target: props.target, object: Index0x000Style0o0000 })
  ReactPlugin.useObject({ target: props.target, object: Index0x000Style0o0001 })
  ReactPlugin.useObject({ target: props.target, object: Index0x001Style0o0000 })
  ReactPlugin.useObject({ target: props.target, object: Index0x001Style0o0001 })
  ReactPlugin.useObject({ target: props.target, object: Index0x010Style0o0000 })
}

const Type0o0003Style0o0000 = (props) => {
  const Index0x000Style0o0000 = React.useMemo(() => {
    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
    const meth = new THREE.Mesh(geometry, material)

    meth.position.x = (props.position.column - (props.dimension.column - 1) / 2) * 2
    meth.position.y = 0.5 * 2
    meth.position.z = (props.position.row - (props.dimension.row - 1) / 2) * 2

    return meth
  }, [props.position.column, props.position.row, props.dimension.column, props.dimension.column, props.dimension.row])

  const Index0x000Style0o0001 = React.useMemo(() => {
    const geometry = new THREE.EdgesGeometry(new THREE.BoxGeometry(2, 2, 2))
    const material = new THREE.MeshStandardMaterial({ color: 0x666666 })
    const line = new THREE.LineSegments(geometry, material)

    line.position.x = (props.position.column - (props.dimension.column - 1) / 2) * 2
    line.position.y = 0.5 * 2
    line.position.z = (props.position.row - (props.dimension.row - 1) / 2) * 2

    return line
  }, [props.position.column, props.position.row, props.dimension.column, props.dimension.column, props.dimension.row])

  const Index0x001Style0o0000 = React.useMemo(() => {
    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
    const meth = new THREE.Mesh(geometry, material)

    meth.position.x = (props.position.column - (props.dimension.column - 1) / 2) * 2
    meth.position.y = 1.5 * 2
    meth.position.z = (props.position.row - (props.dimension.row - 1) / 2) * 2

    return meth
  }, [props.position.column, props.position.row, props.dimension.column, props.dimension.column, props.dimension.row])

  const Index0x001Style0o0001 = React.useMemo(() => {
    const geometry = new THREE.EdgesGeometry(new THREE.BoxGeometry(2, 2, 2))
    const material = new THREE.MeshStandardMaterial({ color: 0x666666 })
    const line = new THREE.LineSegments(geometry, material)

    line.position.x = (props.position.column - (props.dimension.column - 1) / 2) * 2
    line.position.y = 1.5 * 2
    line.position.z = (props.position.row - (props.dimension.row - 1) / 2) * 2

    return line
  }, [props.position.column, props.position.row, props.dimension.column, props.dimension.column, props.dimension.row])

  ReactPlugin.useObject({ target: props.target, object: Index0x000Style0o0000 })
  ReactPlugin.useObject({ target: props.target, object: Index0x000Style0o0001 })
  ReactPlugin.useObject({ target: props.target, object: Index0x001Style0o0000 })
  ReactPlugin.useObject({ target: props.target, object: Index0x001Style0o0001 })
}

const App = (props) => {
  if (props.cell.type === 0o0000 && props.cell.style === 0o0000) React.component(Type0o0000Style0o0000)(props)
  if (props.cell.type === 0o0001 && props.cell.style === 0o0000) React.component(Type0o0001Style0o0000)(props)
  if (props.cell.type === 0o0002 && props.cell.style === 0o0000) React.component(Type0o0002Style0o0000)(props)
  if (props.cell.type === 0o0003 && props.cell.style === 0o0000) React.component(Type0o0003Style0o0000)(props)
}

export default React.component(App)