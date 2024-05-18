import * as THREE from 'three'

import React from './utils.react'
import ReactPlugin from './utils.react.plugin'

const CubeComponent = (props) => {
  const cube = React.useMemo(() => {
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff })
    const meth = new THREE.Mesh(geometry, material)

    return meth
  }, [])

  cube.position.x = props.x
  cube.position.y = props.y
  cube.position.z = props.z

  ReactPlugin.useEvent({ ...props, object: cube, onClick: (e, i) => props.onClick() })

  ReactPlugin.useObject({ target: props.scene, object: cube })
}

const Cube = React.component(CubeComponent)

const App = () => {
  const context = React.useContext()

  const [visible, setVisible] = React.useState([true, true, true, true])

  const commonProps = { scene: context.scene, raycaster: context.raycaster, camera: context.camera, renderer: context.renderer }

  React.useEffectImmediate(() => {
    context.camera.position.set(8, 8, 8)
    context.camera.lookAt(0, 0, 0)
  }, [])

  if (visible[0]) Cube({ key: 0, x: 0, y: 0, z: 0, onClick: () => setVisible([!visible[0], true, true, true]), ...commonProps })
}

export default React.component(App)