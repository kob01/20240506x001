import * as THREE from 'three'

import React from './utils.react'

import SphereGeometry from './View.Component.SphereGeometry'

const PlanetComponent = (props) => {
  const context = React.useContext()

  const contextProps = { scene: context.scene, raycaster: context.raycaster, camera: context.camera, renderer: context.renderer }

  const [rotateing, setRotateing] = React.useState(true)
  const [rotateAngle, setRotateAngle] = React.useState((props.angle || 0))
  const [position, setPosition] = React.useState([props.x, props.y, props.z])

  const onClick = React.useMemo(() => () => setRotateing(!rotateing), [rotateing])

  React.useEffectImmediate(() => {
    if (rotateing) setRotateAngle(rotateAngle + 1)

    setPosition(
      [
        props.x + (props.unitCosX || 0) * Math.cos(rotateAngle * (props.cosX || 0)) + (props.unitSinX || 0) * Math.sin(rotateAngle * (props.sinX || 0)),
        props.y + (props.unitCosY || 0) * Math.cos(rotateAngle * (props.cosY || 0)) + (props.unitSinY || 0) * Math.sin(rotateAngle * (props.sinY || 0)),
        props.z + (props.unitCosZ || 0) * Math.cos(rotateAngle * (props.cosZ || 0)) + (props.unitSinZ || 0) * Math.sin(rotateAngle * (props.sinZ || 0)),
      ]
    )
  })

  SphereGeometry({ x: position[0], y: position[1], z: position[2], radius: props.radius, widthSegments: props.widthSegments, heightSegments: props.heightSegments, color: props.color, wireframe: props.wireframe, onClick: onClick, ...contextProps })
}

const Planet =  React.component(PlanetComponent)

const random = (number, fixed, offset) => Number(((Math.random() * number).toFixed(fixed))) + offset

const render = (props) => {
  const renderArray = React.useMemo(() => {
    return new Array(120)
      .fill()
      .map(i => {
        return {
          key: Math.random(),
          x: random(128, 0, -64),
          y: random(128, 0, -64),
          z: random(128, 0, -64),
          angle: 0,
          unitCosX: random(16, 0, -8),
          unitCosY: random(16, 0, -8),
          unitSinZ: random(16, 0, -8),
          cosX: random(0.04, 4, 0.02),
          cosY: random(0.04, 4, 0.02),
          sinZ: random(0.04, 4, 0.02),
          radius: random(4, 0, 2),
          widthSegments: 16,
          heightSegments: 16,
          color: random(16777215, 0, 0),
          wireframe: true
        }
      })
  }, [])

  renderArray.forEach(i => Planet(i))
}

export default React.component(render)