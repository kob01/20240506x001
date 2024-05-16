import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

import React from './utils.react'

import Building from './View.Page.Example.III.Building'

const json = {
  map: [
    [{ type: 3 }, { type: 1 }, { type: 0 }, { type: 0 }],
    [{ type: 0 }, { type: 0 }, { type: 0 }, { type: 0 }],
    [{ type: 3 }, { type: 0 }, { type: 0 }, { type: 0 }],
    [{ type: 3 }, { type: 0 }, { type: 0 }, { type: 0 }],
    [{ type: 0 }, { type: 0 }, { type: 3 }, { type: 0 }],
    [{ type: 0 }, { type: 3 }, { type: 2 }, { type: 0 }],
  ],
}

const render = () => {
  const context = React.useContext()

  const group = React.useMemo(() => new THREE.Group(), [])

  const renderBuilding = (map, column, row) => {
    Building(
      {
        type: map[column][row].type,
        map: { column: map.length, row: map[0].length },
        position: { column: column, row: row },
        root: group,
      }
    )
  }

  json.map.forEach((i, column) => i.forEach((i, row) => renderBuilding(json.map, column, row)))

  React.useEffectImmediate(() => {
    context.scene.add(group)
    return () => context.scene.remove(group)
  }, [])
}

export default React.component(render)