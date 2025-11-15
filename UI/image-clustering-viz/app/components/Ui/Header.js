'use client'

import React from 'react';
import { THEME } from '@/app/utils/constants';

// Header component with title and stats
export default function Header({ totalImages, totalCategories }) {
return (
    <div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: '22px 48px',
    background: 'rgba(245, 241, 237, 0.95)',
    backdropFilter: 'blur(12px)',
    zIndex: 10,
    borderBottom: `1px solid ${THEME.border}`
    }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
        <h1 style={{ 
            margin: 0, 
            fontSize: '42px', 
            fontWeight: '400',
            color: THEME.primary,
            letterSpacing: '0.01em',
            fontStyle: 'italic',
            lineHeight: '1.1'
        }}>
            Visual Memory
        </h1>
        <p style={{ 
            margin: '6px 0 0 0', 
            color: THEME.secondary, 
            fontSize: '15px',
            fontWeight: '400',
            letterSpacing: '0.03em',
            textTransform: 'uppercase',
            fontFamily: '"Inter", sans-serif'
        }}>
            {totalImages} Moments · {totalCategories} Collections
        </p>
        </div>
        <div style={{ 
            padding: '12px 28px',
            border: `1.5px solid ${THEME.primary}`,
            borderRadius: '50px',
            fontSize: '13px',
            fontWeight: '500',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            fontFamily: '"Inter", sans-serif',
            color: THEME.primary,
            cursor: 'pointer',
            transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => {
            e.currentTarget.style.background = THEME.primary;
            e.currentTarget.style.color = THEME.background;
        }}
        onMouseOut={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = THEME.primary;
        }}>
            Explore
        </div>
        </div>
    </div>
    );
}