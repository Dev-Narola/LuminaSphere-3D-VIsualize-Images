'use client'

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ImagePoints from './ImagePoints';
import SelectedPoint from './SelectedPoint';
import ConnectionLines from './ConnectionLines';
import { CAMERA_CONFIG, THEME } from '@/app/utils/constants';
// 3D Scene component with canvas and controls
export default function Scene({
  data, 
  selectedId,
  setSelectedId,
  filterCategory,
  selectedImage,
  showSimilar
  }) {
  return (
    <Canvas
      camera={{
        position: CAMERA_CONFIG.position,
        fov: CAMERA_CONFIG.fov
      }}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      gl={{ antialias: true, alpha: true }}
    >
    <color attach="background" args={[THEME.background]} />
    <ambientLight intensity={1.2} />
    <directionalLight position={[10, 10, 5]} intensity={0.8} />
    <directionalLight position={[-10, -10, -5]} intensity={0.3} />
    <Suspense fallback={null}>
    <ImagePoints
      data={data}
      selectedId={selectedId}
      onSelect={setSelectedId}
      filterCategory={filterCategory}
    />
    
    {selectedImage && (
      <>
        <SelectedPoint position={selectedImage.position} color={selectedImage.color} />
        {showSimilar && <ConnectionLines selectedImage={selectedImage} data={data} />}
      </>
    )}
  </Suspense>
  
  <OrbitControls
    enablePan
    enableZoom
    enableRotate
    maxDistance={CAMERA_CONFIG.maxDistance}
    minDistance={CAMERA_CONFIG.minDistance}
    enableDamping
    dampingFactor={0.05}
    rotateSpeed={0.5}
    zoomSpeed={0.8}
  />
</Canvas>
);
}