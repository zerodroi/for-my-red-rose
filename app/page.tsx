"use client";
import React, { useState, useEffect } from 'react';

export default function FarahSpecialGift() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div style={{ 
      backgroundColor: '#000', 
      minHeight: '100vh', 
      color: '#fff', 
      fontFamily: 'serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      overflowX: 'hidden',
      padding: '20px'
    }}>
      {/* Background Music */}
      <audio autoPlay loop src="/song.mp3" />

      <h1 style={{ color: '#8B0000', fontSize: '2rem', marginBottom: '40px', textShadow: '0 0 10px #FF0000' }}>
        For My Red Rose, Farah
      </h1>

      {/* 3D CAROUSEL SECTION (Foto 1-6) */}
      <div className="carousel-container" style={{
        height: '250px',
        perspective: '1000px',
        marginBottom: '100px',
        marginTop: '50px'
      }}>
        <div style={{
          width: '150px',
          height: '200px',
          position: 'relative',
          transformStyle: 'preserve-3d',
          animation: 'rotate 20s linear infinite'
        }}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} style={{
              position: 'absolute',
              width: '150px',
              height: '200px',
              border: '3px solid #8B0000',
              boxShadow: '0 0 15px #FF0000',
              transform: `rotateY(${(i - 1) * 60}deg) translateZ(250px)`
            }}>
              <img src={`/foto${i}.jpg`} alt="Farah" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </div>

      {/* FLIPBOOK BUTTON */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '15px 30px',
          backgroundColor: '#8B0000',
          border: 'none',
          borderRadius: '25px',
          color: 'white',
          fontSize: '1.2rem',
          cursor: 'pointer',
          boxShadow: '0 0 20px #FF0000',
          marginBottom: '50px'
        }}
      >
        {isOpen ? 'Tutup Buku' : 'Buka Buku Kenangan'}
      </button>

      {/* 3D FLIPBOOK SECTION (Foto 7-15) */}
      {isOpen && (
        <div style={{ width: '100%', maxWidth: '400px', textAlign: 'center' }}>
          <p style={{ fontStyle: 'italic', marginBottom: '20px', color: '#FFB6C1' }}>"Swipe atau scroll ke bawah untuk melihat kenangan kita..."</p>
          {[7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => (
            <div key={i} style={{
              width: '100%',
              backgroundColor: '#1a0000',
              padding: '10px',
              marginBottom: '20px',
              border: '2px solid #8B0000',
              borderRadius: '10px'
            }}>
              <img src={`/foto${i}.jpg`} alt="Memory" style={{ width: '100%', borderRadius: '5px' }} />
            </div>
          ))}
          
          <div style={{ marginTop: '50px', padding: '40px', border: '2px dashed #8B0000' }}>
            <h2 style={{ color: '#FF0000' }}>aku sayangg bangett sama ko</h2>
            <p>terus mekar yaa mawar merah kesayangan aku</p>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes rotate {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
        body { margin: 0; padding: 0; }
      `}</style>
    </div>
  );
}

