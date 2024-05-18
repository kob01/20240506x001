import * as THREE from 'three'

import React from './utils.react'
import ReactPlugin from './utils.react.plugin'

import Building from './View.Page.Example.III.Building'

const json = {
  map: [
    [{ type: 0x000 }, { type: 0x000 }, { type: 0x000 }, { type: 0x000 }, { type: 0x000 }, { type: 0x000 }, { type: 0x000 }, { type: 0x000 }],
    [{ type: 0x000 }, { type: 0x000 }, { type: 0x000 }, { type: 0x000 }, { type: 0x000 }, { type: 0x000 }, { type: 0x000 }, { type: 0x000 }],
    [{ type: 0x000 }, { type: 0x000 }, { type: 0x003 }, { type: 0x003 }, { type: 0x003 }, { type: 0x000 }, { type: 0x000 }, { type: 0x000 }],
    [{ type: 0x000 }, { type: 0x000 }, { type: 0x000 }, { type: 0x000 }, { type: 0x000 }, { type: 0x000 }, { type: 0x002 }, { type: 0x000 }],
    [{ type: 0x000 }, { type: 0x000 }, { type: 0x003 }, { type: 0x000 }, { type: 0x000 }, { type: 0x000 }, { type: 0x000 }, { type: 0x000 }],
    [{ type: 0x000 }, { type: 0x001 }, { type: 0x003 }, { type: 0x000 }, { type: 0x000 }, { type: 0x000 }, { type: 0x000 }, { type: 0x000 }],
    [{ type: 0x000 }, { type: 0x000 }, { type: 0x000 }, { type: 0x000 }, { type: 0x001 }, { type: 0x000 }, { type: 0x000 }, { type: 0x000 }],
    [{ type: 0x000 }, { type: 0x000 }, { type: 0x000 }, { type: 0x003 }, { type: 0x003 }, { type: 0x003 }, { type: 0x003 }, { type: 0x000 }],
    [{ type: 0x000 }, { type: 0x000 }, { type: 0x003 }, { type: 0x000 }, { type: 0x000 }, { type: 0x000 }, { type: 0x000 }, { type: 0x000 }],
    [{ type: 0x000 }, { type: 0x003 }, { type: 0x003 }, { type: 0x000 }, { type: 0x000 }, { type: 0x003 }, { type: 0x000 }, { type: 0x000 }],
    [{ type: 0x000 }, { type: 0x003 }, { type: 0x000 }, { type: 0x002 }, { type: 0x000 }, { type: 0x003 }, { type: 0x000 }, { type: 0x000 }],
    [{ type: 0x000 }, { type: 0x003 }, { type: 0x000 }, { type: 0x003 }, { type: 0x000 }, { type: 0x003 }, { type: 0x000 }, { type: 0x000 }],
    [{ type: 0x000 }, { type: 0x000 }, { type: 0x000 }, { type: 0x000 }, { type: 0x000 }, { type: 0x000 }, { type: 0x000 }, { type: 0x000 }],
    [{ type: 0x000 }, { type: 0x000 }, { type: 0x000 }, { type: 0x000 }, { type: 0x000 }, { type: 0x000 }, { type: 0x000 }, { type: 0x000 }],
  ],
}

const App = () => {
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

export default React.component(App)