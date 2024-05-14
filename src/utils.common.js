import * as THREE from 'three'

const raycasterIntersects = (position, env) => {
  const x = (position.x / env.canvas.width) * 2 - 1
  const y = (position.y / env.canvas.height) * 2 - 1
  env.raycaster.setFromCamera(new THREE.Vector2(x, y * -1), env.camera)
  return env.raycaster.intersectObjects(env.scene.children)
}

const random = (number, fixed, offset) => Number(((Math.random() * number).toFixed(fixed))) + offset

export { raycasterIntersects, random }