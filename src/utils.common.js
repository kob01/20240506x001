import * as THREE from 'three'

const random = (number, fixed, offset) => Number(((Math.random() * number).toFixed(fixed))) + offset

export { random }