'use client'

import React, { useRef, useMemo } from 'react';
import ImageSprite from './ImageSprite';
import { SPACING_MULTIPLIER } from '@/app/utils/constants';

// Collection of all image points
export default function ImagePoints({ data, selectedId, onSelect, filterCategory }) {
const groupRef = useRef();

const filteredData = useMemo(() => {
    if (!data || !data.images) return [];
    if (filterCategory === 'all') return data.images;
    return data.images.filter(img => img.category === filterCategory);
}, [data, filterCategory]);

return (
    <group ref={groupRef}>
    {filteredData.map((img) => (
        <ImageSprite
            key={img.id}
            img={img}
            isSelected={selectedId === img.id}
            onSelect={onSelect}
            spacingMultiplier={SPACING_MULTIPLIER}
        />
        ))}
    </group>
    );
}