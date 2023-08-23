import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import {  MeshBasicMaterial, TextureLoader, SphereGeometry } from 'three';
import { CameraControls } from './CameraControls';
import Countdown from './Countdown';


function BackgroundSphere() {
  const texture = useLoader(TextureLoader, '/background/bg4.jpg');
  const geometry = new SphereGeometry(500, 60, 40);
  const material = new MeshBasicMaterial({ map: texture, side: 2 });

  return (
    <mesh geometry={geometry} material={material} scale={[-1, 1, 1]} />
  );
}

function WitchRoom() {
  return (
    <Canvas>
      <BackgroundSphere />
      <CameraControls />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Countdown />
      {/* Add other 3D objects and controls as needed */}
    </Canvas>
  );
}

export default WitchRoom;