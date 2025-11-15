'use client'

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { SPACING_MULTIPLIER } from '@/app/utils/constants';

// Highlight ring for selected point
export default function SelectedPoint({ position, color }) {
const meshRef = useRef();

useFrame(({ clock, camera }) => {
    if (meshRef.current) {
      const pulse = 1 + Math.sin(clock.elapsedTime * 2) * 0.1;
    meshRef.current.scale.setScalar(pulse);
    meshRef.current.quaternion.copy(camera.quaternion);
    }
});

const posArray = [
    position.x * SPACING_MULTIPLIER,
    position.y * SPACING_MULTIPLIER,
    position.z * SPACING_MULTIPLIER
];

return (
    <group position={posArray}>
        <mesh ref={meshRef}>
        <ringGeometry args={[9, 12, 32]} />
        <meshBasicMaterial 
            color="#2C2C2C" 
            transparent 
            opacity={0.6}
            side={THREE.DoubleSide}
            depthTest={false}
        />
        </mesh>
    </group>
    );
}