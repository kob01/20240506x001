import * as THREE from 'three'

import React from "./utils.react"

const render = (props) => {
  const meth = React.useMemo(() =>
    new THREE.Mesh(
      new THREE.SphereGeometry(props.radius, props.widthSegments, props.heightSegments),
      new THREE.MeshBasicMaterial({ color: props.color, wireframe: props.wireframe })
    )
  ,[])

  meth.position.x = props.x
  meth.position.y = props.y
  meth.position.z = props.z

  React.useEffect(() => {
    props.scene.add(meth)
    return () => props.scene.remove(meth)
  }, [])

  return meth
}

export default React.component(render)
