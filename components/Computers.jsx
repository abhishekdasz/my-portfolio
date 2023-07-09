import React from 'react'
import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

const Computers = () => {
    const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
        <hemisphereLight intensity={0.15} groundColor="black"/>
        <pointLight intensity={1} />
        <primitive object={computer.scene} scale={1} position={[0, -2.0, -1.5]}   />  {/* rotation={[-0.01, -0.2, -0.1]} */}
        <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapsize={1024}  />
    </mesh>
  )
}

const ComputersCanvas = () => {
    return (
        <Canvas
            frameloop='demand'
            shadows
            camera={{ position: [20,3,5], fov: 25 }}
            gl={{ preserveDrawingBuffer:true }}
        >
            <Suspense>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                    // autoRotate
                />
                <Computers />
            </Suspense>

            <Preload all />
        </Canvas>
    )
}

export default ComputersCanvas
