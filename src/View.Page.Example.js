import React from './utils.react'

import Cube from './View.Component.Cube'

const render = () => {
  const context = React.useContext()

  Cube({ size: [1, 1, 1], x: 0, y: 0, z: 0, scene: context.scene })
  Cube({ size: [2, 1, 1], x: 8, y: 8, z: 0, scene: context.scene })
  Cube({ size: [1, 2, 1], x: -2, y: 0, z: 2, scene: context.scene })
  Cube({ size: [1, 1, 2], x: 3, y: 1, z: 0, scene: context.scene })
}

export default React.component(render)