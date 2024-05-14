import React from './utils.react'

import Cube from './View.Component.Cube'

const render = () => {
  const context = React.useContext()

  // const [visible, setVisible] = React.useState([true, true, true, true])

  const commonProps = { scene: context.scene, raycaster: context.raycaster, camera: context.camera, renderer: context.renderer }

  Cube({ size: [1, 1, 1], x: 0, y: 0, z: 0, rotationRateX: 0.01, rotationRateY: 0.01, ...commonProps })
  Cube({ size: [2, 1, 1], x: 2, y: -3, z: 0, rotationRateX: 0, rotationRateY: 0.01, ...commonProps })
  Cube({ size: [1, 2, 1], x: -2, y: 0, z: 2, rotationRateX: 0.01, rotationRateY: 0.005, ...commonProps })
  Cube({ size: [1, 1, 2], x: 3, y: 1, z: 0, rotationRateX: 0.002, rotationRateY: 0.002, ...commonProps })

  React.useEffectImmediate(() => {
    context.camera.position.set(8, 8, 8)
    context.camera.lookAt(0, 0, 0)
  }, [])

  // if (visible[0]) Cube({ key: 0, size: [1, 1, 1], x: 0, y: 0, z: 0, rotationRateX: 0.01, rotationRateY: 0.01, onClick: () => setVisible([!visible[0], true, true, true]), ...commonProps })
  // if (visible[1]) Cube({ key: 1, size: [2, 1, 1], x: 2, y: -3, z: 0, rotationRateX: 0, rotationRateY: 0.01, onClick: () => setVisible([true, !visible[1], true, true]), ...commonProps })
  // Cube({ key: 2, size: [1, 2, 1], x: -2, y: 0, z: 2, rotationRateX: 0.01, rotationRateY: 0.005, ...commonProps })
  // Cube({ key: 3, size: [1, 1, 2], x: 3, y: 1, z: 0, rotationRateX: 0.002, rotationRateY: 0.002, ...commonProps })
}

export default React.component(render)