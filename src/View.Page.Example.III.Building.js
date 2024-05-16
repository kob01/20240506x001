import * as THREE from 'three'

import React from './utils.react'

import MethBox from './View.Component.Meth.Box'
import MethBoxLine from './View.Component.Meth.BoxLine'

const render = (props) => {
  const context = React.useContext()

  const contextProps = { scene: context.scene, raycaster: context.raycaster, camera: context.camera, renderer: context.renderer, canvas: context.canvas }

  if (props.type === 0) {
    MethBox(
      {
        geometryProps: [2, 2, 2],
        materialProps: [{ color: 0x999999 }],
        position: {
          x: props.position.column * 2 - (props.map.column - 1) * 2 / 2,
          y: 2 / 2,
          z: props.position.row * 2 - (props.map.row - 1) * 2 / 2,
        },
        root: props.root,
        ...contextProps
      }
    )

    MethBoxLine(
      {
        geometryProps: [2, 2, 2],
        materialProps: [{ color: 0x666666 }],
        position: {
          x: props.position.column * 2 - (props.map.column - 1) * 2 / 2,
          y: 2 / 2,
          z: props.position.row * 2 - (props.map.row - 1) * 2 / 2,
        },
        root: props.root,
        ...contextProps
      }
    )
  }

  if (props.type === 1) {
    MethBox(
      {
        geometryProps: [2, 2, 2],
        materialProps: [{ color: 0x999999 }],
        position: {
          x: props.position.column * 2 - (props.map.column - 1) * 2 / 2,
          y: 2 / 2,
          z: props.position.row * 2 - (props.map.row - 1) * 2 / 2,
        },
        root: props.root,
        ...contextProps
      }
    )

    MethBoxLine(
      {
        geometryProps: [2, 2, 2],
        materialProps: [{ color: 0x666666 }],
        position: {
          x: props.position.column * 2 - (props.map.column - 1) * 2 / 2,
          y: 2 / 2,
          z: props.position.row * 2 - (props.map.row - 1) * 2 / 2,
        },
        root: props.root,
        ...contextProps
      }
    )

    MethBoxLine(
      {
        geometryProps: [2, 2, 2],
        materialProps: [{ color: 0xff0000 }],
        position: {
          x: props.position.column * 2 - (props.map.column - 1) * 2 / 2,
          y: 3,
          z: props.position.row * 2 - (props.map.row - 1) * 2 / 2,
        },
        root: props.root,
        ...contextProps
      }
    )
  }

  if (props.type === 2) {
    MethBox(
      {
        geometryProps: [2, 2, 2],
        materialProps: [{ color: 0x999999 }],
        position: {
          x: props.position.column * 2 - (props.map.column - 1) * 2 / 2,
          y: 2 / 2,
          z: props.position.row * 2 - (props.map.row - 1) * 2 / 2,
        },
        root: props.root,
        ...contextProps
      }
    )

    MethBoxLine(
      {
        geometryProps: [2, 2, 2],
        materialProps: [{ color: 0x666666 }],
        position: {
          x: props.position.column * 2 - (props.map.column - 1) * 2 / 2,
          y: 2 / 2,
          z: props.position.row * 2 - (props.map.row - 1) * 2 / 2,
        },
        root: props.root,
        ...contextProps
      }
    )

    MethBoxLine(
      {
        geometryProps: [2, 2, 2],
        materialProps: [{ color: 0x00ff00 }],
        position: {
          x: props.position.column * 2 - (props.map.column - 1) * 2 / 2,
          y: 3,
          z: props.position.row * 2 - (props.map.row - 1) * 2 / 2,
        },
        root: props.root,
        ...contextProps
      }
    )
  }

  if (props.type === 3) {
    MethBox(
      {
        geometryProps: [2, 2, 2],
        materialProps: [{ color: 0x999999 }],
        position: {
          x: props.position.column * 2 - (props.map.column - 1) * 2 / 2,
          y: 2 / 2,
          z: props.position.row * 2 - (props.map.row - 1) * 2 / 2,
        },
        root: props.root,
        ...contextProps
      }
    )

    MethBoxLine(
      {
        geometryProps: [2, 2, 2],
        materialProps: [{ color: 0x666666 }],
        position: {
          x: props.position.column * 2 - (props.map.column - 1) * 2 / 2,
          y: 2 / 2,
          z: props.position.row * 2 - (props.map.row - 1) * 2 / 2,
        },
        root: props.root,
        ...contextProps
      }
    )

    MethBox(
      {
        geometryProps: [2, 2, 2],
        materialProps: [{ color: 0x999999 }],
        position: {
          x: props.position.column * 2 - (props.map.column - 1) * 2 / 2,
          y: 3,
          z: props.position.row * 2 - (props.map.row - 1) * 2 / 2,
        },
        root: props.root,
        ...contextProps
      }
    )

    MethBoxLine(
      {
        geometryProps: [2, 2, 2],
        materialProps: [{ color: 0x666666 }],
        position: {
          x: props.position.column * 2 - (props.map.column - 1) * 2 / 2,
          y: 3,
          z: props.position.row * 2 - (props.map.row - 1) * 2 / 2,
        },
        root: props.root,
        ...contextProps
      }
    )
  }
}

export default React.component(render)