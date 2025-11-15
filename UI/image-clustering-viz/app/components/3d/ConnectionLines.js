'use client'

import React from 'react';
import * as THREE from 'three';
import { SPACING_MULTIPLIER } from '@/app/utils/constants';

// Lines connecting similar images
export default function ConnectionLines({ selectedImage, data }) {
if (!selectedImage || !selectedImage.similar) return null;

const lines = selectedImage.similar.slice(0, 5).map((sim) => {
    const targetImage = data.images.find(img => img.id === sim.index);
    if (!targetImage) return null;
    
    return (
    <line key={sim.index}>
        <bufferGeometry>
        <bufferAttribute
            attach="attributes-position"
            count={2}
            array={new Float32Array([
              selectedImage.position.x * SPACING_MULTIPLIER, 
              selectedImage.position.y * SPACING_MULTIPLIER, 
              selectedImage.position.z * SPACING_MULTIPLIER,
              targetImage.position.x * SPACING_MULTIPLIER, 
              targetImage.position.y * SPACING_MULTIPLIER, 
              targetImage.position.z * SPACING_MULTIPLIER
            ])}
            itemSize={3}
        />
        </bufferGeometry>
        <lineBasicMaterial 
        color="#181717ff" 
        transparent 
        opacity={0.2} 
        linewidth={1} 
        />
    </line>
    );
}).filter(Boolean);

return <group>{lines}</group>;
}