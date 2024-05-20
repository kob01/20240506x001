import * as THREE from 'three'

import helvetiker_regular from '../static/font/helvetiker_regular.typeface.json'
import xbot from '../static/model/xbot.glb'

import React from './utils.react'
import ReactPlugin from './utils.react.plugin'

const useLoadSource = () => {
  const [loadCount, setLoadCount] = React.useState(0)

  const [font, setFont] = ReactPlugin.useFont({ font: [{ json: helvetiker_regular, name: 'helvetiker_regular' }], callback: () => setLoadCount(pre => pre + 1) })

  const [model, setModel] = ReactPlugin.useModel({ model: [{ link: xbot, name: 'xbot', type: 'gltf' }], callback: () => setLoadCount(pre => pre + 1) })

  const loading = loadCount !== 2

  return { font, model, loading: loading }
}

export default useLoadSource