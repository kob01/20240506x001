import * as THREE from 'three'

const raycasterIntersects = (position, env) => {
  var x = (position.x / env.canvas.width) * 2 - 1
  var y = (position.y / env.canvas.height) * 2 - 1
  y = y * -1
  env.raycaster.setFromCamera(new THREE.Vector2(x, y * -1), env.camera)
  var intersects = env.raycaster.intersectObjects(env.scene.children)

  return intersects
}

const random = (number, fixed, offset) => Number(((Math.random() * number).toFixed(fixed))) + offset

export { raycasterIntersects, random }