'use client'

import React from 'react';
import { THEME } from '@/app/utils/constants';

// Right panel showing selected image details
export default function ImageDetailPanel({ selectedImage, data, setSelectedId }) {
if (!selectedImage) return null;

return (
    <div style={{
    position: 'absolute',
    top: '120px',
    right: '14px',
    background: THEME.glass,
    backdropFilter: 'blur(20px)',
    padding: '32px',
    borderRadius: '16px',
    border: `1px solid ${THEME.border}`,
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.04)',
    zIndex: 10,
    width: '370px',
    maxHeight: 'calc(100vh - 150px)',
    overflow: 'auto',
    color: THEME.primary
    }}>
    <h3 style={{ 
        margin: '0 0 24px 0', 
        fontSize: '28px',
        fontWeight: '400',
        color: THEME.primary,
        fontStyle: 'italic',
        letterSpacing: '0.01em'
    }}>
        Selected moment
    </h3>
    
      {/* Image Display */}
    <div style={{
        width: '100%',
        height: '340px',
        background: '#FAFAF8',
        borderRadius: '12px',
        marginBottom: '28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        border: `2px solid ${selectedImage.color}33`,
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)'
    }}>
        <img 
        src={`/data/images/${selectedImage.filename}`}
        alt={selectedImage.filename}
        style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
            position: 'relative',
            zIndex: 1
        }}
        onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextElementSibling.style.display = 'flex';
        }}
        />
        <div style={{
        display: 'none',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: '#F0EBE6',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '32px'
        }}>
        <div style={{ fontSize: '48px', marginBottom: '12px', opacity: 0.3 }}>○</div>
        <div style={{
            color: 'rgba(44, 44, 44, 0.4)',
            fontSize: '13px',
            textAlign: 'center',
            fontFamily: '"Inter", sans-serif',
            letterSpacing: '0.03em'
        }}>
            Image unavailable
        </div>
        </div>
    </div>
    
      {/* Filename */}
    <div style={{
        marginBottom: '24px',
        padding: '18px 20px',
        background: 'rgba(44, 44, 44, 0.02)',
        borderRadius: '10px',
        border: '1px solid rgba(44, 44, 44, 0.06)'
    }}>
        <div style={{ 
        color: THEME.tertiary, 
        fontSize: '11px', 
        marginBottom: '6px', 
        textTransform: 'uppercase', 
        letterSpacing: '0.08em',
        fontFamily: '"Inter", sans-serif',
        fontWeight: '500'
        }}>
        Filename
        </div>
        <div style={{ 
        fontWeight: '400', 
        color: THEME.primary, 
        fontSize: '14px', 
        wordBreak: 'break-all',
        lineHeight: '1.5',
        fontFamily: '"Inter", sans-serif'
        }}>
        {selectedImage.filename}
        </div>
    </div>
    
      {/* Category */}
    <div style={{ 
        display: 'grid',
        gap: '14px',
        marginBottom: '24px'
    }}>
        <div style={{
        background: 'rgba(44, 44, 44, 0.02)',
        padding: '18px 20px',
        borderRadius: '10px',
        border: '1px solid rgba(44, 44, 44, 0.06)'
        }}>
        <div style={{ 
            color: THEME.tertiary, 
            fontSize: '11px', 
            marginBottom: '6px', 
            textTransform: 'uppercase', 
            letterSpacing: '0.08em',
            fontFamily: '"Inter", sans-serif',
            fontWeight: '500'
        }}>
            Collection
        </div>
        <div style={{ 
            fontWeight: '400', 
            color: THEME.primary,
            fontSize: '16px',
            textTransform: 'capitalize',
            fontStyle: 'italic'
        }}>
            {selectedImage.category.replace(/_/g, ' ')}
        </div>
        </div>
    </div>
    
      {/* Similar Images */}
    {selectedImage.similar && selectedImage.similar.length > 0 && (
        <div style={{ 
        paddingTop: '24px', 
        borderTop: `1px solid ${THEME.border}`
        }}>
        <h4 style={{ 
            margin: '0 0 18px 0', 
            fontSize: '12px',
            fontWeight: '500',
            color: THEME.secondary,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            fontFamily: '"Inter", sans-serif'
        }}>
            Similar moments ({selectedImage.similar.length})
        </h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
            {selectedImage.similar.slice(0, 4).map((sim, idx) => {
            const similarImg = data.images.find(img => img.id === sim.index);
            return (
                <div
                key={idx}
                style={{
                    aspectRatio: '1',
                    background: '#FAFAF8',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    border: '1.5px solid rgba(44, 44, 44, 0.08)',
                    transition: 'all 0.3s ease'
                }}
                onClick={() => similarImg && setSelectedId(sim.index)}
                onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.08)';
                    e.currentTarget.style.borderColor = THEME.primary;
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = 'rgba(44, 44, 44, 0.08)';
                }}
                title={similarImg?.filename || 'Unknown'}
                >
                <div style={{
                    fontSize: '18px',
                    fontWeight: '400',
                    color: THEME.primary,
                    fontFamily: '"Inter", sans-serif'
                }}>
                    {(sim.similarity * 100).toFixed(0)}%
                </div>
                </div>
            );
            })}
        </div>
        </div>
    )}
    </div>
);
}