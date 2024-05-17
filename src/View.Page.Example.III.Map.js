import * as THREE from 'three'

import React from './utils.react'
import ReactPlugin from './utils.react.plugin'

import Building from './View.Page.Example.III.Building'

const json = {
  map: [
    [{ type: 0 }, { type: 0 }, { type: 0 }, { type: 0 }],
    [{ type: 0 }, { type: 3 }, { type: 3 }, { type: 3 }],
    [{ type: 0 }, { type: 0 }, { type: 0 }, { type: 0 }],
    [{ type: 0 }, { type: 3 }, { type: 0 }, { type: 0 }],
    [{ type: 1 }, { type: 3 }, { type: 0 }, { type: 0 }],
    [{ type: 0 }, { type: 0 }, { type: 0 }, { type: 0 }],
    [{ type: 0 }, { type: 0 }, { type: 0 }, { type: 0 }],
    [{ type: 0 }, { type: 3 }, { type: 0 }, { type: 0 }],
    [{ type: 3 }, { type: 3 }, { type: 0 }, { type: 0 }],
    [{ type: 3 }, { type: 0 }, { type: 2 }, { type: 0 }],
    [{ type: 3 }, { type: 0 }, { type: 0 }, { type: 0 }],
    [{ type: 0 }, { type: 0 }, { type: 0 }, { type: 0 }],
  ],
}

const render = () => {
  const context = React.useContext()

  const group = React.useMemo(() => new THREE.Group(), [])

  const building = (map, column, row) => {
    Building(
      {
        type: map[column][row].type,
        map: { column: map.length, row: map[0].length },
        position: { column: column, row: row },
        target: group,
      }
    )
  }

  json.map.forEach((i, column) => i.forEach((i, row) => building(json.map, column, row)))

  ReactPlugin.useObject({ target: context.scene, object: group })
}

export default React.component(render)