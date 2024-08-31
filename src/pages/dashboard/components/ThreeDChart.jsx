import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Edges } from '@react-three/drei';

const barData = [
  { day: 'Monday', height: 2 },
  { day: 'Tuesday', height: 3 },
  { day: 'Wednesday', height: 1 },
  { day: 'Thursday', height: 4 },
  { day: 'Friday', height: 2.5 },
  { day: 'Saturday', height: 3.5 },
  { day: 'Sunday', height: 2 },
];

const Bar = ({ position, height, color }) => {
  return (
    <group position={position}>
      {/* Main Bar */}
      <mesh>
        <boxGeometry args={[0.5, height, 0.5]} />
        <meshStandardMaterial color={color} />
        <Edges color="black" />
      </mesh>
    </group>
  );
};

const ThreeDChart = () => {
  return (
    <Canvas className="three-d-chart-canvas">
      {/* Ambient light and point light */}
      <ambientLight intensity={6} />
      <pointLight position={[10, 10, 10]} />

      {/* Render the bars */}
      {barData.map((bar, index) => (
        <Bar
          key={bar.day}
          position={[index - 3, bar.height / 2 - 1, 0]} // Lower the bars by adjusting y-position
          height={bar.height}
          color="skyblue"
        />
      ))}

      {/* Orbit Controls for interaction */}
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
};

export default ThreeDChart;
