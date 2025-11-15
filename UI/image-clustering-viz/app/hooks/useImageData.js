'use client'

import { useState, useEffect } from 'react';

// Custom hook for loading and managing image data
export function useImageData() {
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
    const loadData = async () => {
    try {
        const [vizResponse, categoryResponse] = await Promise.all([
            fetch('/data/visualization_data.json'),
            fetch('/data/category_stats.json')
        ]);
        
        if (!vizResponse.ok || !categoryResponse.ok) {
            throw new Error('Failed to load data files');
        }
        
        const [vizData, categoryData] = await Promise.all([
            vizResponse.json(),
            categoryResponse.json()
        ]);
        
        if (!vizData || !vizData.images || !Array.isArray(vizData.images)) {
            throw new Error('Invalid data format');
        }
        
        const categoryColors = {};
        for (const [category, info] of Object.entries(categoryData)) {
            if (info && info.color) {
            categoryColors[category] = info.color;
            }
        }
        
        const transformedData = {
            images: vizData.images.map((img) => ({
            id: img.id,
            position: img.position,
            category: img.category,
            subcluster: img.subcluster,
            confidence: img.confidence,
            color: img.color || categoryColors[img.category] || '#D4C5B9',
            filename: img.filename,
            similar: img.similar || []
            })),
            categories: categoryColors,
            categoryStats: categoryData
        };
        
        setData(transformedData);
        setLoading(false);
        } catch (err) {
        setError(err.message);
        setLoading(false);
        }
    };
    
    loadData();
    }, []);

    return { data, loading, error };
}