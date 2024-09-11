import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Edges, Text } from '@react-three/drei';
import { Vector3, MathUtils } from 'three';

const barData = [
  { day: 'Monday', height: 2 },
  { day: 'Tuesday', height: 3 },
  { day: 'Wednesday', height: 1 },
  { day: 'Thursday', height: 4 },
  { day: 'Friday', height: 2.5 },
  { day: 'Saturday', height: 3.5 },
  { day: 'Sunday', height: 2 },
];

const Bar = ({ position, height, color, day }) => {
  const textRef = useRef();
  const barRef = useRef();
  const [initialPosition] = useState(position.clone());
  const returnSpeed = 0.05; // Kecepatan kembali ke posisi batas

  const maxPosition = 5; // Batas maksimum posisi bar
  const minPosition = -5; // Batas minimum posisi bar

  useFrame(({ camera }) => {
    if (textRef.current) {
      textRef.current.lookAt(camera.position);
    }

    if (barRef.current) {
      const barPosition = barRef.current.position;

      // Batasi posisi bar pada sumbu X
      if (barPosition.x > maxPosition || barPosition.x < minPosition) {
        barPosition.lerp(initialPosition, returnSpeed);
      }
    }
  });

  return (
    <group ref={barRef} position={position}>
      <mesh>
        <boxGeometry args={[0.7, height, 0.5]} />
        <meshStandardMaterial color={color} />
        <Edges color="black" />
      </mesh>

      <Text
        ref={textRef}
        position={[0, height / 2 + 0.5, 0]}
        fontSize={0.3}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        {day}
      </Text>
    </group>
  );
};

const CameraControls = ({ resetTrigger }) => {
  const cameraRef = useRef();
  const orbitControlsRef = useRef();
  const [initialPosition, setInitialPosition] = useState(new Vector3(5, 5, 5));
  const maxRotationX = MathUtils.degToRad(10); // Batas rotasi 10 derajat pada sumbu X
  const maxRotationY = MathUtils.degToRad(10); // Batas rotasi 10 derajat pada sumbu Y
  const minDistance = 5; // Batas minimum jarak kamera dari pusat
  const maxDistance = 10; // Batas maksimum jarak kamera dari pusat
  const returnSpeed = 0.02; // Kecepatan kamera kembali ke posisi awal

  useEffect(() => {
    if (cameraRef.current) {
      setInitialPosition(cameraRef.current.position.clone());
    }
  }, []);

  useEffect(() => {
    if (resetTrigger && cameraRef.current) {
      cameraRef.current.position.copy(initialPosition);
      cameraRef.current.fov = 50;
      cameraRef.current.updateProjectionMatrix();

      if (orbitControlsRef.current) {
        orbitControlsRef.current.reset();
        orbitControlsRef.current.target.set(0, 0, 0);
        orbitControlsRef.current.update();
      }
    }
  }, [resetTrigger]);

  useFrame(({ camera }) => {
    if (!cameraRef.current) return;

    // Batasi rotasi kamera
    camera.rotation.x = MathUtils.clamp(camera.rotation.x, -maxRotationX, maxRotationX);
    camera.rotation.y = MathUtils.clamp(camera.rotation.y, -maxRotationY, maxRotationY);

    // Batasi posisi kamera dari target (pusat)
    const direction = camera.position.clone().normalize();
    const distance = MathUtils.clamp(camera.position.length(), minDistance, maxDistance);
    camera.position.copy(direction.multiplyScalar(distance));

    // Interpolasi posisi kamera kembali ke posisi awal
    camera.position.lerp(initialPosition, returnSpeed);

    // Untuk menghindari jitter saat kembali
    if (camera.position.distanceTo(initialPosition) < 0.01) {
      camera.position.copy(initialPosition);
    }

    camera.updateProjectionMatrix();
  });

  return (
    <>
      <perspectiveCamera ref={cameraRef} position={[0, 0, 10]} />
      <OrbitControls
        ref={orbitControlsRef}
        enableZoom={false}
        maxPolarAngle={Math.PI} // Rotasi vertikal penuh
        minPolarAngle={0} // Rotasi vertikal penuh
        rotateSpeed={1.0} // Kecepatan rotasi
      />
    </>
  );
};

const ThreeDChart = ({ resetTrigger }) => {
  return (
    <Canvas className="three-d-chart-canvas">
      <ambientLight intensity={5} />
      <pointLight position={[10, 10, 10]} />

      {barData.map((bar, index) => (
        <Bar
          key={bar.day}
          position={new Vector3(index * 1.5 - 4.5, bar.height / 2 - 2, 5)}
          height={bar.height}
          color="skyblue"
          day={bar.day}
        />
      ))}

      <CameraControls resetTrigger={resetTrigger} />
    </Canvas>
  );
};

export default ThreeDChart;
