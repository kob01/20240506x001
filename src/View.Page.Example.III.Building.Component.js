import * as THREE from 'three'

import React from './utils.react'
import ReactPlugin from './utils.react.plugin'

const Type0x000Style0x000 = (props) => {
  const Index0x000Style0x000 = React.useMemo(() => {
    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
    const meth = new THREE.Mesh(geometry, material)

    meth.position.x = (props.position.column - (props.dimension.column - 1) / 2) * 2
    meth.position.y = 0.5 * 2
    meth.position.z = (props.position.row - (props.dimension.row - 1) / 2) * 2

    return meth
  }, [props.position.column, props.position.row, props.dimension.column, props.dimension.column, props.dimension.row])

  const Index0x000Style0x001 = React.useMemo(() => {
    const geometry = new THREE.EdgesGeometry(new THREE.BoxGeometry(2, 2, 2))
    const material = new THREE.MeshStandardMaterial({ color: 0x666666 })
    const line = new THREE.LineSegments(geometry, material)

    line.position.x = (props.position.column - (props.dimension.column - 1) / 2) * 2
    line.position.y = 0.5 * 2
    line.position.z = (props.position.row - (props.dimension.row - 1) / 2) * 2

    return line
  }, [props.position.column, props.position.row, props.dimension.column, props.dimension.column, props.dimension.row])

  ReactPlugin.useObject({ target: props.target, object: Index0x000Style0x000 })
  ReactPlugin.useObject({ target: props.target, object: Index0x000Style0x001 })
}

const Type0x001Style0x000 = (props) => {
  const Index0x000Style0x000 = React.useMemo(() => {
    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
    const meth = new THREE.Mesh(geometry, material)

    meth.position.x = (props.position.column - (props.dimension.column - 1) / 2) * 2
    meth.position.y = 0.5 * 2
    meth.position.z = (props.position.row - (props.dimension.row - 1) / 2) * 2

    return meth
  }, [props.position.column, props.position.row, props.dimension.column, props.dimension.column, props.dimension.row])

  const Index0x000Style0x001 = React.useMemo(() => {
    const geometry = new THREE.EdgesGeometry(new THREE.BoxGeometry(2, 2, 2))
    const material = new THREE.MeshStandardMaterial({ color: 0x666666 })
    const line = new THREE.LineSegments(geometry, material)

    line.position.x = (props.position.column - (props.dimension.column - 1) / 2) * 2
    line.position.y = 0.5 * 2
    line.position.z = (props.position.row - (props.dimension.row - 1) / 2) * 2

    return line
  }, [props.position.column, props.position.row, props.dimension.column, props.dimension.column, props.dimension.row])

  const Index0x001Style0x000 = React.useMemo(() => {
    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const material = new THREE.MeshStandardMaterial({ color: 0xff0000, transparent: true, opacity: 0.2 })
    const meth = new THREE.Mesh(geometry, material)

    meth.position.x = (props.position.column - (props.dimension.column - 1) / 2) * 2
    meth.position.y = 1.5 * 2
    meth.position.z = (props.position.row - (props.dimension.row - 1) / 2) * 2

    return meth
  }, [props.position.column, props.position.row, props.dimension.column, props.dimension.column, props.dimension.row])

  const Index0x001Style0x001 = React.useMemo(() => {
    const geometry = new THREE.EdgesGeometry(new THREE.BoxGeometry(2, 2, 2))
    const material = new THREE.MeshStandardMaterial({ color: 0xff0000 })
    const line = new THREE.LineSegments(geometry, material)

    line.position.x = (props.position.column - (props.dimension.column - 1) / 2) * 2
    line.position.y = 1.5 * 2
    line.position.z = (props.position.row - (props.dimension.row - 1) / 2) * 2

    return line
  }, [props.position.column, props.position.row, props.dimension.column, props.dimension.column, props.dimension.row])

  const Index0x010Style0x000 = React.useMemo(() => {
    const pointLight = new THREE.PointLight(0xffffff, 1)

    pointLight.position.x = (props.position.column - (props.dimension.column - 1) / 2) * 2
    pointLight.position.y = 1.5 * 2
    pointLight.position.z = (props.position.row - (props.dimension.row - 1) / 2) * 2

    return pointLight
  }, [props.position.column, props.position.row, props.dimension.column, props.dimension.column, props.dimension.row])

  ReactPlugin.useObject({ target: props.target, object: Index0x000Style0x000 })
  ReactPlugin.useObject({ target: props.target, object: Index0x000Style0x001 })
  ReactPlugin.useObject({ target: props.target, object: Index0x001Style0x000 })
  ReactPlugin.useObject({ target: props.target, object: Index0x001Style0x001 })
  ReactPlugin.useObject({ target: props.target, object: Index0x010Style0x000 })
}

const Type0x002Style0x000 = (props) => {
  const Index0x000Style0x000 = React.useMemo(() => {
    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
    const meth = new THREE.Mesh(geometry, material)

    meth.position.x = (props.position.column - (props.dimension.column - 1) / 2) * 2
    meth.position.y = 0.5 * 2
    meth.position.z = (props.position.row - (props.dimension.row - 1) / 2) * 2

    return meth
  }, [props.position.column, props.position.row, props.dimension.column, props.dimension.column, props.dimension.row])

  const Index0x000Style0x001 = React.useMemo(() => {
    const geometry = new THREE.EdgesGeometry(new THREE.BoxGeometry(2, 2, 2))
    const material = new THREE.MeshStandardMaterial({ color: 0x666666 })
    const line = new THREE.LineSegments(geometry, material)

    line.position.x = (props.position.column - (props.dimension.column - 1) / 2) * 2
    line.position.y = 0.5 * 2
    line.position.z = (props.position.row - (props.dimension.row - 1) / 2) * 2

    return line
  }, [props.position.column, props.position.row, props.dimension.column, props.dimension.column, props.dimension.row])

  const Index0x001Style0x000 = React.useMemo(() => {
    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff00, transparent: true, opacity: 0.2 })
    const meth = new THREE.Mesh(geometry, material)

    meth.position.x = (props.position.column - (props.dimension.column - 1) / 2) * 2
    meth.position.y = 1.5 * 2
    meth.position.z = (props.position.row - (props.dimension.row - 1) / 2) * 2

    return meth
  }, [props.position.column, props.position.row, props.dimension.column, props.dimension.column, props.dimension.row])

  const Index0x001Style0x001 = React.useMemo(() => {
    const geometry = new THREE.EdgesGeometry(new THREE.BoxGeometry(2, 2, 2))
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 })
    const line = new THREE.LineSegments(geometry, material)

    line.position.x = (props.position.column - (props.dimension.column - 1) / 2) * 2
    line.position.y = 1.5 * 2
    line.position.z = (props.position.row - (props.dimension.row - 1) / 2) * 2

    return line
  }, [props.position.column, props.position.row, props.dimension.column, props.dimension.column, props.dimension.row])

  const Index0x010Style0x000 = React.useMemo(() => {
    const pointLight = new THREE.PointLight(0xffffff, 1)

    pointLight.position.x = (props.position.column - (props.dimension.column - 1) / 2) * 2
    pointLight.position.y = 1.5 * 2
    pointLight.position.z = (props.position.row - (props.dimension.row - 1) / 2) * 2

    return pointLight
  }, [props.position.column, props.position.row, props.dimension.column, props.dimension.column, props.dimension.row])

  ReactPlugin.useObject({ target: props.target, object: Index0x000Style0x000 })
  ReactPlugin.useObject({ target: props.target, object: Index0x000Style0x001 })
  ReactPlugin.useObject({ target: props.target, object: Index0x001Style0x000 })
  ReactPlugin.useObject({ target: props.target, object: Index0x001Style0x001 })
  ReactPlugin.useObject({ target: props.target, object: Index0x010Style0x000 })
}

const Type0x003Style0x000 = (props) => {
  const Index0x000Style0x000 = React.useMemo(() => {
    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
    const meth = new THREE.Mesh(geometry, material)

    meth.position.x = (props.position.column - (props.dimension.column - 1) / 2) * 2
    meth.position.y = 0.5 * 2
    meth.position.z = (props.position.row - (props.dimension.row - 1) / 2) * 2

    return meth
  }, [props.position.column, props.position.row, props.dimension.column, props.dimension.column, props.dimension.row])

  const Index0x000Style0x001 = React.useMemo(() => {
    const geometry = new THREE.EdgesGeometry(new THREE.BoxGeometry(2, 2, 2))
    const material = new THREE.MeshStandardMaterial({ color: 0x666666 })
    const line = new THREE.LineSegments(geometry, material)

    line.position.x = (props.position.column - (props.dimension.column - 1) / 2) * 2
    line.position.y = 0.5 * 2
    line.position.z = (props.position.row - (props.dimension.row - 1) / 2) * 2

    return line
  }, [props.position.column, props.position.row, props.dimension.column, props.dimension.column, props.dimension.row])

  const Index0x001Style0x000 = React.useMemo(() => {
    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
    const meth = new THREE.Mesh(geometry, material)

    meth.position.x = (props.position.column - (props.dimension.column - 1) / 2) * 2
    meth.position.y = 1.5 * 2
    meth.position.z = (props.position.row - (props.dimension.row - 1) / 2) * 2

    return meth
  }, [props.position.column, props.position.row, props.dimension.column, props.dimension.column, props.dimension.row])

  const Index0x001Style0x001 = React.useMemo(() => {
    const geometry = new THREE.EdgesGeometry(new THREE.BoxGeometry(2, 2, 2))
    const material = new THREE.MeshStandardMaterial({ color: 0x666666 })
    const line = new THREE.LineSegments(geometry, material)

    line.position.x = (props.position.column - (props.dimension.column - 1) / 2) * 2
    line.position.y = 1.5 * 2
    line.position.z = (props.position.row - (props.dimension.row - 1) / 2) * 2

    return line
  }, [props.position.column, props.position.row, props.dimension.column, props.dimension.column, props.dimension.row])

  ReactPlugin.useObject({ target: props.target, object: Index0x000Style0x000 })
  ReactPlugin.useObject({ target: props.target, object: Index0x000Style0x001 })
  ReactPlugin.useObject({ target: props.target, object: Index0x001Style0x000 })
  ReactPlugin.useObject({ target: props.target, object: Index0x001Style0x001 })
}

const App = (props) => {
  if (props.cell.type === 0x000 && props.cell.style === 0x000) React.component(Type0x000Style0x000)(props)
  if (props.cell.type === 0x001 && props.cell.style === 0x000) React.component(Type0x001Style0x000)(props)
  if (props.cell.type === 0x002 && props.cell.style === 0x000) React.component(Type0x002Style0x000)(props)
  if (props.cell.type === 0x003 && props.cell.style === 0x000) React.component(Type0x003Style0x000)(props)
}

export default React.component(App)