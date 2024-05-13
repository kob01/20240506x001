import * as THREE from "three";

import React from "./utils.react";

const render = (props) => {
  const points = React.useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    const vertices = []

    for ( let i = 0; i < 10000; i ++ ) {
      vertices.push( THREE.MathUtils.randFloatSpread( 1000 ) )
      vertices.push( THREE.MathUtils.randFloatSpread( 1000 ) )
      vertices.push( THREE.MathUtils.randFloatSpread( 1000 ) )
    }
  
    geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) )
  
    const points = new THREE.Points( geometry, new THREE.PointsMaterial( { color: 0x888888 } ) )

    return points
  },[])

  React.useEffectImmediate(() => {
    props.scene.add(points)
    return () => props.scene.remove(points)
  }, [])
};

export default React.component(render)
