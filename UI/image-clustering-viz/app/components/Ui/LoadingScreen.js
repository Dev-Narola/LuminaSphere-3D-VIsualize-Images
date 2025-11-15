'use client'

import React from 'react';
import { THEME } from '@/app/utils/constants';

// Loading screen component
export default function LoadingScreen() {
return (
    <div style={{ 
        width: '100vw', 
        height: '100vh', 
        background: THEME.background,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        color: THEME.primary,
        fontFamily: '"Orpheus Pro", "Playfair Display", serif'
    }}>
    <div style={{ 
        fontSize: '32px', 
        fontWeight: '400',
        marginBottom: '24px',
        letterSpacing: '0.02em',
        fontStyle: 'italic'
    }}>
        Loading your collection
        </div>
        <div style={{ 
        width: '200px', 
        height: '2px', 
        background: '#E8DFD6',
        borderRadius: '2px',
        overflow: 'hidden',
        position: 'relative'
        }}>
        <div style={{
            position: 'absolute',
            height: '100%',
            width: '40%',
            background: THEME.primary,
            animation: 'loading 2s cubic-bezier(0.4, 0, 0.2, 1) infinite',
            borderRadius: '2px'
        }} />
        </div>
    </div>
    );
}