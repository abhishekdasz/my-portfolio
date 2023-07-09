import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, useTexture } from '@react-three/drei';

const Ball = (props) => {
  const [decal] = useTexture([props.imgurl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={1}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal position={[0, 0, 1]} map={decal} rotation={[2*Math.PI, 0, 6.25]} />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ imgurl }) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} />
        <Ball imgurl={imgurl} />
      </Suspense>
    </Canvas>
  );
};

export default BallCanvas;
