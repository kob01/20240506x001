import * as THREE from 'three'

import React from './utils.react'

const render = (props) => {
  const geometry = React.useMemo(() => new THREE.BoxGeometry(...props.size), [])
  const material = React.useMemo(() => new THREE.MeshBasicMaterial({ color: 0x00ff00 }), [])
  const cube = React.useMemo(() => new THREE.Mesh(geometry, material), [])

  const [x, setX] = React.useState(0)
  const [y, setY] = React.useState(0)

  React.useEffect(() => {
    cube.position.x = props.x
    cube.position.y = props.y
    cube.position.z = props.z
  }, [])

  cube.rotation.x = x
  cube.rotation.y = y

  setX(x + 0.01)
  setY(y + 0.01)

  props.scene.add(cube)
}

export default React.component(render)