import React from 'react';
import { useBox, useSphere, useCone } from '@react-three/drei';

export function Objects({ type }) {
  function Sphere() {
    const sphere = useSphere(() => ({ args: 1 }));
    return <mesh ref={sphere} />;
  }

  function Box() {
    const box = useBox(() => ({ args: [1, 1, 1] }));
    return <mesh ref={box} />;
  }

  function Cone() {
    const cone = useCone(() => ({ args: [1, 1, 32] }));
    return <mesh ref={cone} />;
  }

  switch (type) {
    case 'sphere':
      return <Sphere />;
    case 'cube':
      return <Box />;
    case 'cone':
      return <Cone />;
    default:
      return <Sphere />;
  }
}
