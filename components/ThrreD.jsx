import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

const ThrreD = () => {
  return (
    <div className='three'>
        <Canvas>
            <OrbitControls enableZoom={false}/>
            <ambientLight intensity={1}/>
            <directionalLight position={[3,2,1]} />
            <mesh>
                <boxGeometry args={[1,1,1]} />
                <meshStandardMaterial color="red"/>
            </mesh>
        </Canvas>
    </div>
  )
}

export default ThrreD
