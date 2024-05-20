import * as THREE from 'three'

const Building0o0000 = () => {
  const ObjectTargetGroup = new THREE.Group()

  const ObjectMethBoxGeometry = new THREE.BoxGeometry(2, 2, 2)
  const ObjectMethBoxMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff })
  const ObjectMethBox = new THREE.Mesh(ObjectMethBoxGeometry, ObjectMethBoxMaterial)

  const ObjectMethLineGeometry = new THREE.EdgesGeometry(new THREE.BoxGeometry(2, 2, 2))
  const ObjectMethLineMaterial = new THREE.MeshStandardMaterial({ color: 0x666666 })
  const ObjectMethLine = new THREE.LineSegments(ObjectMethLineGeometry, ObjectMethLineMaterial)

  ObjectTargetGroup.add(ObjectMethBox)
  ObjectTargetGroup.add(ObjectMethLine)

  return ObjectTargetGroup
}

const model = {
  'Building0o0000': Building0o0000
}

export default model