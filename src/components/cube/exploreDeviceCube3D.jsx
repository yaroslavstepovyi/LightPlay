import { useRef } from 'react'

import { Canvas, useFrame } from 'react-three-fiber'
import * as THREE from 'three'

const TextPlane = ({ position, rotation, text }) => {
  const planeRef = useRef()

  const texture = new THREE.TextureLoader().load(
    `https://dummyimage.com/256x256/a31486/fff&text=${text}`,
  )

  const material = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: false,
    opacity: 1,
  })

  return (
    <mesh ref={planeRef} position={position} rotation={rotation}>
      <planeGeometry args={[2, 2]} />
      <meshBasicMaterial attach="material" args={[material]} />
    </mesh>
  )
}

const ExploreDeviceCube3D = ({ toggleIsVisualizing }) => {
  const Box = () => {
    const meshRef = useRef()

    useFrame(() => {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.02
    })

    return (
      <group ref={meshRef}>
        <mesh>
          <boxGeometry args={[2.2, 2.2, 2.2]} />
          <meshStandardMaterial color="#c80ef1" />
        </mesh>
        <TextPlane 
          position={[0, 0, -1.1]} 
          rotation={[0, 0, 0]} 
          text="Light" 
        />
        <TextPlane
          position={[0, 0, 1.1]}
          rotation={[0, Math.PI, 0]}
          text="Light"
        />
        <TextPlane
          position={[0, 1.1, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          text="Light"
        />
        <TextPlane
          position={[0, -1.1, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          text="Light"
        />
        <TextPlane
          position={[1.1, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
          text="Light"
        />
        <TextPlane
          position={[-1.1, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
          text="Light"
        />
      </group>
    )
  }

  return (
    <Canvas
      style={{ position: 'absolute', top: 0, left: 0 }}
      onClick={toggleIsVisualizing}
    >
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Box />
    </Canvas>
  )
}

export { ExploreDeviceCube3D }
