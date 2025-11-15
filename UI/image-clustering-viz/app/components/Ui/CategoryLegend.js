'use client'

import React from 'react';
import { THEME } from '@/app/utils/constants';

// Bottom legend showing all categories
export default function CategoryLegend({ categories, data, filterCategory, setFilterCategory }) {
return (
    <div style={{
    position: 'absolute',
    bottom: '22px',
    left: '14px',
    background: THEME.glass,
    backdropFilter: 'blur(20px)',
    padding: '28px',
    borderRadius: '16px',
    border: `1px solid ${THEME.border}`,
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.04)',
    zIndex: 10,
    maxWidth: '320px',
    maxHeight: '270px',
    overflow: 'auto'
    }}>
    <h4 style={{ 
        margin: '0 0 20px 0', 
        fontSize: '12px',
        fontWeight: '500',
        color: THEME.secondary,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        fontFamily: '"Inter", sans-serif'
    }}>
        Collections
    </h4>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {Object.entries(categories).slice(0, 8).map(([cat, color]) => {
        const count = data.images.filter(img => img.category === cat).length;
        const isActive = filterCategory === cat;
        return (
            <div 
            key={cat} 
            style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                padding: '10px 14px',
                background: isActive ? 'rgba(44, 44, 44, 0.04)' : 'transparent',
                borderRadius: '8px',
                border: isActive ? '1px solid rgba(44, 44, 44, 0.12)' : '1px solid transparent',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
            }}
            onClick={() => setFilterCategory(cat)}
            onMouseOver={(e) => {
                if (!isActive) e.currentTarget.style.background = 'rgba(44, 44, 44, 0.02)';
            }}
            onMouseOut={(e) => {
                if (!isActive) e.currentTarget.style.background = 'transparent';
            }}
            >
            <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                <div style={{
                width: '10px',
                height: '10px',
                background: color,
                borderRadius: '50%',
                marginRight: '12px',
                flexShrink: 0,
                opacity: 0.7
                }} />
                <span style={{ 
                fontSize: '14px', 
                color: THEME.primary,
                fontWeight: '400',
                textTransform: 'capitalize',
                fontFamily: '"Inter", sans-serif'
                }}>
                {cat.replace(/_/g, ' ')}
                </span>
            </div>
            <span style={{ 
                fontSize: '12px', 
                color: THEME.tertiary,
                fontWeight: '500',
                marginLeft: '26px',
                fontFamily: '"Inter", sans-serif'
                }}>
                {count}
                </span>
            </div>
            );
        })}
        </div>
    </div>
    );
}