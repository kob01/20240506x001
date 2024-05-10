import * as THREE from 'three'

import React from './utils.react'

const render = (props) => {
  const geometry = React.useMemo(() => new THREE.BoxGeometry(...props.size), [])
  const material = React.useMemo(() => new THREE.MeshBasicMaterial({ color: 0x449999 }), [])
  const cube = React.useMemo(() => new THREE.Mesh(geometry, material), [])

  const [x, setX] = React.useState(0)
  const [y, setY] = React.useState(0)

  const [rotationing, setRotationing] = React.useState(true)

  cube.rotation.x = x
  cube.rotation.y = y

  if (rotationing) {
    setX(x + props.rotationRateX)
    setY(y + props.rotationRateY)
  }

  React.useEffect(() => {
    cube.position.x = props.x
    cube.position.y = props.y
    cube.position.z = props.z
  }, [])

  React.useEffect(() => {
    const event = (event) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1

      props.raycaster.setFromCamera(new THREE.Vector2(mouseX, mouseY), props.camera)

      const intersects = props.raycaster.intersectObjects(props.scene.children)

      if (intersects[0] && intersects[0].object === cube) setRotationing(!rotationing)
    }

    props.renderer.domElement.addEventListener('click', event)

    return () => {
      props.renderer.domElement.removeEventListener('click', event)
    }
  }, [rotationing])

  React.useEffect(() => {
    props.scene.add(cube)
  }, [])
}

export default React.component(render)