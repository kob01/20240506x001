import * as THREE from 'three'

import React from './utils.react'

const render = (props) => {
  const cube = React.useMemo(() => new THREE.Mesh(new THREE.BoxGeometry(...props.size), new THREE.MeshBasicMaterial({ color: 0x449999 })), [])

  const [x, setX] = React.useState(0)
  const [y, setY] = React.useState(0)

  const [rotationing, setRotationing] = React.useState(true)

  cube.rotation.x = x
  cube.rotation.y = y

  cube.position.x = props.x
  cube.position.y = props.y
  cube.position.z = props.z

  if (rotationing) {
    setX(x + props.rotationRateX)
    setY(y + props.rotationRateY)
  }

  React.useEffect(() => {
    const event = (event) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1

      props.raycaster.setFromCamera(new THREE.Vector2(mouseX, mouseY), props.camera)

      const intersects = props.raycaster.intersectObjects(props.scene.children)

      if (intersects[0] && intersects[0].object === cube) setRotationing(!rotationing)
      if (intersects[0] && intersects[0].object === cube && props.onClick) props.onClick()
    }

    props.renderer.domElement.addEventListener('click', event)

    return () => {
      props.renderer.domElement.removeEventListener('click', event)
    }
  }, [rotationing])

  React.useEffectImmediate(() => {
    props.scene.add(cube)
    return () => props.scene.remove(cube)
  }, [])
}

export default React.component(render)