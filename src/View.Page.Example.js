import * as THREE from "three"

import React from "./utils.react"

import Event from "./View.Page.Example.Event"
import Camera from "./View.Page.Example.Camera"
import ComposeGalaxy from "./View.Page.Example.ComposeGalaxy"

const render = () => {
  const [nowRecord, setNowRecord] = React.useState(Date.now())
  const [nowDiff, setNowDiff] = React.useState(0)
  const [rotate, setRotate] = React.useState(true)

  const commonProps = { nowRecord: nowRecord, setNowRecord: setNowRecord, nowDiff: nowDiff, setNowDiff: setNowDiff, rotate: rotate, setRotate: setRotate }

  Event({ ...commonProps })
  Camera({ ...commonProps })
  ComposeGalaxy({ ...commonProps })
}

export default React.component(render)
