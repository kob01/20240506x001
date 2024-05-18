import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

import React from './utils.react'
import ReactPlugin from "./utils.react.plugin"

const random = (number, fixed, offset) => Number(((Math.random() * number).toFixed(fixed))) + offset

const SphereGeometryComponent = (props) => {
  const meth = React.useMemo(() =>
    new THREE.Mesh(
      new THREE.SphereGeometry(props.radius, props.widthSegments, props.heightSegments),
      new THREE.MeshBasicMaterial({ color: props.color, wireframe: props.wireframe })
    ),
    []
  )

  meth.position.x = props.x
  meth.position.y = props.y
  meth.position.z = props.z

  ReactPlugin.useObject({ target: props.target, object: meth })
}

const SphereGeometry =  React.component(SphereGeometryComponent)

const PlanetComponent = (props) => {
  const context = React.useContext()

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

  SphereGeometry({ x: position[0], y: position[1], z: position[2], radius: props.radius, widthSegments: props.widthSegments, heightSegments: props.heightSegments, color: props.color, wireframe: props.wireframe, target: context.scene, onClick: onClick, ...context })
}

const Planet = React.component(PlanetComponent)

const GalaxyComponent = () => {
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

const Galaxy = React.component(GalaxyComponent)

const App = () => {
  const context = React.useContext()

  const render = React.useRender()

  React.useEffectImmediate(() => {
    context.camera.position.set(24, 24, 24)
    context.camera.lookAt(new THREE.Vector3(0, 0, 0))
  }, [])

  React.useEffectImmediate(() => {
    const orbitControls = new OrbitControls(context.camera, context.renderer.domElement)
    orbitControls.addEventListener('change', render)
    return () => orbitControls.dispose()
  }, [])

  Galaxy()
}

export default React.component(App)
