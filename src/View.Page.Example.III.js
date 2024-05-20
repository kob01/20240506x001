import * as THREE from 'three'

import React from './utils.react'
import ReactPlugin from './utils.react.plugin'

import useLoadEnvironment from './View.Page.Example.III.useLoadEnvironment'
import useLoadSource from './View.Page.Example.III.useLoadSource'

import Building from './View.Page.Example.III.Building'
import Text from './View.Page.Example.III.Text'
import Enemy from './View.Page.Example.III.Enemy'

const map = {
  building: [
    [{ type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }],
    [{ type: 0o000 }, { type: 0o003 }, { type: 0o000 }, { type: 0o003 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o001 }, { type: 0o001 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }],
    [{ type: 0o000 }, { type: 0o002 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }],
    [{ type: 0o000 }, { type: 0o003 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o003 }, { type: 0o003 }, { type: 0o000 }, { type: 0o003 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }],
    [{ type: 0o000 }, { type: 0o003 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o003 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }],
    [{ type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o003 }, { type: 0o003 }, { type: 0o003 }, { type: 0o003 }, { type: 0o002 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }],
    [{ type: 0o000 }, { type: 0o003 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o003 }, { type: 0o003 }, { type: 0o000 }, { type: 0o000 }],
    [{ type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o003 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }],
    [{ type: 0o000 }, { type: 0o003 }, { type: 0o003 }, { type: 0o003 }, { type: 0o003 }, { type: 0o000 }, { type: 0o000 }, { type: 0o002 }, { type: 0o000 }, { type: 0o003 }, { type: 0o003 }, { type: 0o000 }],
    [{ type: 0o000 }, { type: 0o003 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o003 }, { type: 0o000 }, { type: 0o000 }],
    [{ type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }],
    [{ type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }, { type: 0o000 }],
  ],
  dimension: { row: 12, column: 12 },
  enemy: [
    { type: 0o000, from: { row: 2, column: 8 }, to: { row: 3, column: 2 }, path: [], delay: [{ duration: 240, type: 0o000 }] }
  ]
}

const App = () => {
  const context = React.useContext()

  const render = React.useRender()

  useLoadEnvironment()

  const { font, model, loading } = useLoadSource()

  const [animationCount, setAnimationCount] = React.useState(0)
  const [animationSpeed, setAnimationSpeed] = React.useState(4)

  React.useEffectImmediate(() => render())
  React.useEffectImmediate(() => setAnimationCount(animationCount + animationSpeed))

  React.contextProvider({ ...context, font, model, animationCount, setAnimationCount, animationSpeed, setAnimationSpeed, map })

  if (loading === false) new Array(Text, Building, Enemy).forEach(i => i())
}

export default React.component(App)