import * as THREE from 'three'

import React from './utils.react'
import ReactPlugin from './utils.react.plugin'

import Building from './View.Page.Example.III.Building.Component'

const App = () => {
  const context = React.useContext()

  const ObjectGroup = React.useMemo(() => {
    const group = new THREE.Group()

    group.position.x = 0
    group.position.y = 0
    group.position.z = 0

    return group
  }, [])

  const build = (building, dimension, row, column) => {
    Building(
      {
        building: building,
        dimension: dimension,
        row: row,
        column: column,
        cell: building[row][column],
        x: (column - (dimension.column - 1) / 2) * 2,
        y: (row - (dimension.row - 1) / 2) * 2,
        target: ObjectGroup,
      }
    )
  }

  new Array(context.map.dimension.row).fill().forEach((i, row) => new Array(context.map.dimension.column).fill().forEach((i, column) => build(context.map.building, context.map.dimension, row, column)))

  ReactPlugin.useObject({ target: context.scene, object: ObjectGroup })
}

export default React.component(App)