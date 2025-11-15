'use client'

import React from 'react';
import { THEME } from '@/app/utils/constants';

// Left control panel with filters and options
export default function ControlPanel({ 
filterCategory, 
setFilterCategory, 
showSimilar, 
setShowSimilar,
selectedId,
setSelectedId,
categories,
totalImages,
data
}) {
return (
    <div style={{
    position: 'absolute',
    top: '120px',
    left: '14px',
    background: THEME.glass,
    backdropFilter: 'blur(20px)',
    padding: '32px',
    borderRadius: '16px',
    border: `1px solid ${THEME.border}`,
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.04)',
    zIndex: 10,
    minWidth: '280px',
    maxHeight: 'calc(100vh - 200px)',
    overflow: 'auto'
    }}>
    <div style={{ marginBottom: '28px' }}>
        <label style={{ 
        fontWeight: '500', 
        display: 'block', 
        marginBottom: '10px',
        color: THEME.primary,
        fontSize: '12px',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        fontFamily: '"Inter", sans-serif'
        }}>
            Collection
        </label>
        <select
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
        style={{
            width: '100%',
            padding: '10px 16px',
            borderRadius: '8px',
            border: '1.5px solid rgba(44, 44, 44, 0.12)',
            background: 'white',
            color: THEME.primary,
            fontSize: '15px',
            fontWeight: '400',
            cursor: 'pointer',
            outline: 'none',
            transition: 'all 0.3s ease',
            fontFamily: '"Orpheus Pro", serif',
            fontStyle: 'italic'
        }}
        >
        <option value="all">All Collections ({totalImages})</option>
        {categories.map(cat => {
            const count = data.images.filter(img => img.category === cat).length;
            return (
            <option key={cat} value={cat}>
                {cat.replace(/_/g, ' ')} ({count})
            </option>
            );
        })}
        </select>
    </div>
    
    <div style={{ 
        marginBottom: '18px',
        padding: '18px',
        background: 'rgba(44, 44, 44, 0.03)',
        borderRadius: '10px',
        border: '1px solid rgba(44, 44, 44, 0.06)'
    }}>
        <label style={{ 
        display: 'flex', 
        alignItems: 'center', 
        cursor: 'pointer',
        color: THEME.primary,
        fontSize: '14px',
        fontWeight: '400',
        fontFamily: '"Inter", sans-serif'
        }}>
        <input
            type="checkbox"
            checked={showSimilar}
            onChange={(e) => setShowSimilar(e.target.checked)}
            style={{ 
            marginRight: '12px',
            width: '18px',
            height: '18px',
            cursor: 'pointer',
            accentColor: THEME.primary
            }}
        />
        <span>Show connections</span>
        </label>
    </div>
    
    {selectedId !== null && (
        <button
        onClick={() => setSelectedId(null)}
        style={{
            width: '100%',
            padding: '14px',
            background: THEME.primary,
            color: THEME.background,
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '500',
            fontSize: '13px',
            transition: 'all 0.3s ease',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            fontFamily: '"Inter", sans-serif'
        }}
        onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(44, 44, 44, 0.15)';
        }}
        onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
        }}
        >
            Clear Selection
        </button>
    )}
    </div>
    );
}