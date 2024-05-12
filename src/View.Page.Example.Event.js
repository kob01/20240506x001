import * as THREE from 'three'

import React from './utils.react'

const render = (props) => {
  const context = React.useContext()

  React.useEffect(() => {
    const event = () => {
      props.setRotate(!props.rotate)
      props.setNowRecord(Date.now() - props.nowDiff)
    }

    context.renderer.domElement.addEventListener('click', event)

    return () => {
      context.renderer.domElement.removeEventListener('click', event)
    }
  }, [props.rotate, props.nowDiff])
}

export default React.component(render)