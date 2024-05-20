import * as THREE from 'three'

const random = (number, offset, fixed) => Number(((Math.random() * number).toFixed(fixed))) + offset

const materials = (object) => {
  const r = []
  if (object.children) object.children.forEach(i => r.push(...materials(i)))
  if (object.material && Array.isArray(object.material) === true) r.push(...object.material)
  if (object.material && Array.isArray(object.material) === false) r.push(object.material)
  return r
}

function customCurve(t, duration = 1) {  
  let scaledTime = Math.min(t / duration, 1) * Math.PI / 2;  
  let transformedTime = Math.pow(scaledTime, 2) / (2 * Math.PI / 4);  
  let value = Math.sin(transformedTime)
  return (value + 1) / 2;  
}  

export { random, materials, customCurve }