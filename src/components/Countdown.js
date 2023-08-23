import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

function Countdown() {
  const [counter, setCounter] = useState(10);
  const mesh = useRef();

  useEffect(() => {
    const timer = setInterval(() => {
      if (counter > 0) setCounter(counter - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [counter]);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01;
    }
  });

  return (
    <mesh ref={mesh}>
      <Text
        font="https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLCz7Z1xlFd2JQEl8qw.woff2"
        fontSize={1}
        color="black"
      >
        {counter}
      </Text>
    </mesh>
  );
}

export default Countdown;
