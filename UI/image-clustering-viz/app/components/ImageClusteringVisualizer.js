'use client'

import React, { useState, useMemo } from 'react';
import { useImageData } from '@/app/hooks/useImageData';
import LoadingScreen from './ui/LoadingScreen';
import Header from './ui/Header';
import ControlPanel from './ui/ControlPanel';
import ImageDetailPanel from './ui/ImageDetailPanel';
import CategoryLegend from './ui/CategoryLegend';
import Scene from './3d/Scene';
import { THEME } from '@/app/utils/constants';

// Main orchestrator component
export default function ImageClusteringVisualizer() {
    const { data, loading, error } = useImageData();
    const [selectedId, setSelectedId] = useState(null);
    const [filterCategory, setFilterCategory] = useState('all');
    const [showSimilar, setShowSimilar] = useState(true);

    const selectedImage = useMemo(() => {
    if (!data) return null;
    return data.images.find(img => img.id === selectedId);
    }, [selectedId, data]);

    if (loading) {
    return <LoadingScreen />;
    }

    if (error) {
    return (
        <div style={{ 
        width: '100vw', 
        height: '100vh', 
        background: THEME.background,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        color: '#8B7355',
        padding: '40px',
        fontFamily: '"Orpheus Pro", "Playfair Display", serif'
    }}>
        <div style={{ fontSize: '48px', marginBottom: '20px' }}>⚠</div>
        <div style={{ fontSize: '24px', marginBottom: '16px', fontWeight: '400', fontStyle: 'italic' }}>
            Unable to load collection
        </div>
        <div style={{ 
            background: 'rgba(139, 115, 85, 0.08)', 
            padding: '20px 28px', 
            borderRadius: '8px',
            border: '1px solid rgba(139, 115, 85, 0.15)',
            maxWidth: '500px',
            fontSize: '14px',
            lineHeight: '1.6'
        }}>
            {error}
        </div>
        </div>
    );
    }
    
    if (!data) return null;
    
    const categories = Object.keys(data.categories);
    
    return (
    <div style={{ 
        width: '100vw', 
        height: '100vh', 
        background: THEME.background,
        position: 'relative',
        fontFamily: '"Orpheus Pro", "Playfair Display", serif',
        overflow: 'hidden'
    }}>
        <Header 
        totalImages={data.images.length} 
        totalCategories={categories.length} 
        />

        <ControlPanel
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
        showSimilar={showSimilar}
        setShowSimilar={setShowSimilar}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        categories={categories}
        totalImages={data.images.length}
        data={data}
    />
    
    <ImageDetailPanel
        selectedImage={selectedImage}
        data={data}
        setSelectedId={setSelectedId}
    />
    
    <CategoryLegend
        categories={data.categories}
        data={data}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
    />
    
    <Scene
        data={data}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        filterCategory={filterCategory}
        selectedImage={selectedImage}
        showSimilar={showSimilar}
    />
    </div>
    );
}
