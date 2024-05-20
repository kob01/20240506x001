import * as THREE from 'three'

const random = (number, offset, fixed) => Number(((Math.random() * number).toFixed(fixed))) + offset

const materials = (object) => {
  const r = []
  if (object.children) object.children.forEach(i => r.push(...materials(i)))
  if (object.material && Array.isArray(object.material) === true) r.push(...object.material)
  if (object.material && Array.isArray(object.material) === false) r.push(object.material)
  return r
}

export { random, materials }