import * as THREE from 'three'

import React from "./utils.react"

const render = (props) => {
  const meth = React.useMemo(() =>
    new THREE.Mesh(
      new THREE.SphereGeometry(props.radius, props.widthSegments, props.heightSegments),
      new THREE.MeshBasicMaterial({ color: props.color, wireframe: props.wireframe })
    ),
    []
  )

  meth.position.x = props.x
  meth.position.y = props.y
  meth.position.z = props.z

  React.useEffect(() => {
    const event = (event) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1

      props.raycaster.setFromCamera(new THREE.Vector2(mouseX, mouseY), props.camera)

      const intersects = props.raycaster.intersectObjects(props.scene.children)

      const intersectsFindIndex = intersects.findIndex(i => i.object === meth)

      if (intersectsFindIndex !== -1) props.onClick(event, { index: intersectsFindIndex })
    }

    props.renderer.domElement.addEventListener('click', event)

    return () => {
      props.renderer.domElement.removeEventListener('click', event)
    }
  }, [props.onClick])

  React.useEffectImmediate(() => {
    props.scene.add(meth)
    return () => props.scene.remove(meth)
  }, [])

  return meth
}

export default React.component(render)
