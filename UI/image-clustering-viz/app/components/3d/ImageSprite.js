'use client'

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Individual image sprite component
export default function ImageSprite({ img, isSelected, onSelect, spacingMultiplier }) {
const meshRef = useRef();

useFrame(({ camera }) => {
    if (meshRef.current) {
    meshRef.current.quaternion.copy(camera.quaternion);
    }
});

return (
    <mesh
    ref={meshRef}
    position={[
        img.position.x * spacingMultiplier,
        img.position.y * spacingMultiplier,
        img.position.z * spacingMultiplier
    ]}
    onClick={(e) => {
        e.stopPropagation();
        onSelect(img.id);
    }}
    >
    <planeGeometry args={[8, 8]} />
    <meshBasicMaterial
        color={isSelected ? '#2C2C2C' : img.color}
        transparent
        opacity={isSelected ? 0.95 : 0.7}
        side={THREE.DoubleSide}
    />
    </mesh>
    );
}