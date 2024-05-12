import * as THREE from "three"

import React from "./utils.react"

const render = (props) => {
  const cameraHelper = React.useMemo(() => new THREE.CameraHelper(props.camera), [props.camera])

  React.useEffect(() => {
    props.scene.add(cameraHelper)
    return () => props.scene.remove(cameraHelper)
  }, [])
};

export default React.component(render)
