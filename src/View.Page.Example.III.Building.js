import * as THREE from 'three'

import React from './utils.react'
import ReactPlugin from './utils.react.plugin'

import MethBox from './View.Component.Meth.Box'
import MethBoxLine from './View.Component.Meth.BoxLine'

const Type0 = (props) => {
  const methBox = React.useMemo(() => {
    return MethBox(
      {
        geometryProps: [2, 2, 2],
        materialProps: [{ color: 0x999999 }],
        position: {
          x: props.position.column * 2 - (props.map.column - 1) * 2 / 2,
          y: 2 / 2,
          z: props.position.row * 2 - (props.map.row - 1) * 2 / 2,
        },
      }
    )
  }, [props.position.column, props.position.row, props.map.column, props.map.column, props.map.row])

  const methBoxLine = React.useMemo(() => {
    return MethBoxLine(
      {
        geometryProps: [2, 2, 2],
        materialProps: [{ color: 0x666666 }],
        position: {
          x: props.position.column * 2 - (props.map.column - 1) * 2 / 2,
          y: 2 / 2,
          z: props.position.row * 2 - (props.map.row - 1) * 2 / 2,
        },
      }
    )
  }, [props.position.column, props.position.row, props.map.column, props.map.column, props.map.row])

  ReactPlugin.useObject({ target: props.target, object: methBox })
  ReactPlugin.useObject({ target: props.target, object: methBoxLine })
}

const renderType0 = React.component(Type0)

const Type1 = (props) => {
  const methBox = React.useMemo(() => {
    return MethBox(
      {
        geometryProps: [2, 2, 2],
        materialProps: [{ color: 0x999999 }],
        position: {
          x: props.position.column * 2 - (props.map.column - 1) * 2 / 2,
          y: 2 / 2,
          z: props.position.row * 2 - (props.map.row - 1) * 2 / 2,
        },
      }
    )
  }, [props.position.column, props.position.row, props.map.column, props.map.column, props.map.row])

  const methBoxLine = React.useMemo(() => {
    return MethBoxLine(
      {
        geometryProps: [2, 2, 2],
        materialProps: [{ color: 0x666666 }],
        position: {
          x: props.position.column * 2 - (props.map.column - 1) * 2 / 2,
          y: 2 / 2,
          z: props.position.row * 2 - (props.map.row - 1) * 2 / 2,
        },
      }
    )
  }, [props.position.column, props.position.row, props.map.column, props.map.column, props.map.row])

  const methBoxLineSP = React.useMemo(() => {
    return MethBoxLine(
      {
        geometryProps: [2, 2, 2],
        materialProps: [{ color: 0xff0000 }],
        position: {
          x: props.position.column * 2 - (props.map.column - 1) * 2 / 2,
          y: 3,
          z: props.position.row * 2 - (props.map.row - 1) * 2 / 2,
        },
      }
    )
  }, [props.position.column, props.position.row, props.map.column, props.map.column, props.map.row])

  ReactPlugin.useObject({ target: props.target, object: methBox })
  ReactPlugin.useObject({ target: props.target, object: methBoxLine })
  ReactPlugin.useObject({ target: props.target, object: methBoxLineSP })
}

const renderType1 = React.component(Type1)

const Type2 = (props) => {
  const methBox = React.useMemo(() => {
    return MethBox(
      {
        geometryProps: [2, 2, 2],
        materialProps: [{ color: 0x999999 }],
        position: {
          x: props.position.column * 2 - (props.map.column - 1) * 2 / 2,
          y: 2 / 2,
          z: props.position.row * 2 - (props.map.row - 1) * 2 / 2,
        },
      }
    )
  }, [props.position.column, props.position.row, props.map.column, props.map.column, props.map.row])

  const methBoxLine = React.useMemo(() => {
    return MethBoxLine(
      {
        geometryProps: [2, 2, 2],
        materialProps: [{ color: 0x666666 }],
        position: {
          x: props.position.column * 2 - (props.map.column - 1) * 2 / 2,
          y: 2 / 2,
          z: props.position.row * 2 - (props.map.row - 1) * 2 / 2,
        },
      }
    )
  }, [props.position.column, props.position.row, props.map.column, props.map.column, props.map.row])

  const methBoxLineSP = React.useMemo(() => {
    return MethBoxLine(
      {
        geometryProps: [2, 2, 2],
        materialProps: [{ color: 0x00ff00 }],
        position: {
          x: props.position.column * 2 - (props.map.column - 1) * 2 / 2,
          y: 3,
          z: props.position.row * 2 - (props.map.row - 1) * 2 / 2,
        },
      }
    )
  }, [props.position.column, props.position.row, props.map.column, props.map.column, props.map.row])

  ReactPlugin.useObject({ target: props.target, object: methBox })
  ReactPlugin.useObject({ target: props.target, object: methBoxLine })
  ReactPlugin.useObject({ target: props.target, object: methBoxLineSP })
}

const renderType2 = React.component(Type2)

const Type3 = (props) => {
  const methBox = React.useMemo(() => {
    return MethBox(
      {
        geometryProps: [2, 2, 2],
        materialProps: [{ color: 0x999999 }],
        position: {
          x: props.position.column * 2 - (props.map.column - 1) * 2 / 2,
          y: 2 / 2,
          z: props.position.row * 2 - (props.map.row - 1) * 2 / 2,
        },
      }
    )
  }, [props.position.column, props.position.row, props.map.column, props.map.column, props.map.row])

  const methBoxLine = React.useMemo(() => {
    return MethBoxLine(
      {
        geometryProps: [2, 2, 2],
        materialProps: [{ color: 0x666666 }],
        position: {
          x: props.position.column * 2 - (props.map.column - 1) * 2 / 2,
          y: 2 / 2,
          z: props.position.row * 2 - (props.map.row - 1) * 2 / 2,
        },
      }
    )
  }, [props.position.column, props.position.row, props.map.column, props.map.column, props.map.row])

  const methBoxSP = React.useMemo(() => {
    return MethBox(
      {
        geometryProps: [2, 2, 2],
        materialProps: [{ color: 0x999999 }],
        position: {
          x: props.position.column * 2 - (props.map.column - 1) * 2 / 2,
          y: 3,
          z: props.position.row * 2 - (props.map.row - 1) * 2 / 2,
        },
      }
    )
  }, [props.position.column, props.position.row, props.map.column, props.map.column, props.map.row])

  const methBoxLineSP = React.useMemo(() => {
    return MethBoxLine(
      {
        geometryProps: [2, 2, 2],
        materialProps: [{ color: 0x666666 }],
        position: {
          x: props.position.column * 2 - (props.map.column - 1) * 2 / 2,
          y: 3,
          z: props.position.row * 2 - (props.map.row - 1) * 2 / 2,
        },
      }
    )
  }, [props.position.column, props.position.row, props.map.column, props.map.column, props.map.row])

  ReactPlugin.useObject({ target: props.target, object: methBox })
  ReactPlugin.useObject({ target: props.target, object: methBoxLine })
  ReactPlugin.useObject({ target: props.target, object: methBoxSP })
  ReactPlugin.useObject({ target: props.target, object: methBoxLineSP })
}

const renderType3 = React.component(Type3)

const render = (props) => {
  if (props.type === 0) renderType0(props)
  if (props.type === 1) renderType1(props)
  if (props.type === 2) renderType2(props)
  if (props.type === 3) renderType3(props)
}

export default React.component(render)