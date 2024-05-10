import React from './utils.react'

import Cube from './View.Component.Cube'

const render = () => {
  const context = React.useContext()

  const commonProps = { scene: context.scene, raycaster: context.raycaster, camera: context.camera, renderer: context.renderer }

  Cube({ size: [1, 1, 1], x: 0, y: 0, z: 0, rotationRateX: 0.01, rotationRateY: 0.01, ...commonProps })
  Cube({ size: [2, 1, 1], x: 2, y: -3, z: 0, rotationRateX: 0, rotationRateY: 0.01, ...commonProps })
  Cube({ size: [1, 2, 1], x: -2, y: 0, z: 2, rotationRateX: 0.01, rotationRateY: 0.005, ...commonProps })
  Cube({ size: [1, 1, 2], x: 3, y: 1, z: 0, rotationRateX: 0.002, rotationRateY: 0.002, ...commonProps })
}

export default React.component(render)