import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

export function CameraControls({
  position = [0, 0, 10], // Increase the distance to zoom out
  fov = 80, // Adjust the field of view
  enableZoom = false,
  enablePan = true,
  enableRotate = true
}) {
  return (
    <>
      <PerspectiveCamera makeDefault position={position} fov={fov} />
      <OrbitControls
        enableZoom={enableZoom}
        enablePan={enablePan}
        enableRotate={enableRotate}
      />
    </>
  );
}
