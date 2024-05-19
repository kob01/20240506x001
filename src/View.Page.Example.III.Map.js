import * as THREE from 'three'

import React from './utils.react'
import ReactPlugin from './utils.react.plugin'

import Building from './View.Page.Example.III.Building'


const App = () => {
  const context = React.useContext()

  const Object0x000 = React.useMemo(() => {
    const group = new THREE.Group()

    group.position.x = 0
    group.position.y = 0
    group.position.z = 0

    return group
  }, [])

  const build = (map, dimension, row, column) => {
    Building(
      {
        map: map,
        dimension: dimension,
        cell: map[row][column],
        position: { row: row, column: column },
        target: Object0x000,
      }
    )
  }

  context.json.map.forEach((i, row) => i.forEach((i, column) => build(context.json.map, context.json.dimension, row, column)))

  ReactPlugin.useObject({ target: context.scene, object: Object0x000 })
}

export default React.component(App)