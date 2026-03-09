"use client";
import React, { useState, useEffect } from 'react';

export default function FarahLuxuryGift() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <div style={{ 
      backgroundColor: '#000', minHeight: '100vh', color: '#fff', 
      fontFamily: "'Playfair Display', serif", overflowX: 'hidden' 
    }}>
      <audio autoPlay loop src="/song.mp3" />

      {/* LUXURY OVERLAY: ROSE PETALS ANIMATION */}
      <div className="petals-container" style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 10 }}>
        {[...Array(15)].map((_, i) => (
          <div key={i} className="petal" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 5}s`
          }}>🌹</div>
        ))}
      </div>

      {/* HERO SECTION: 3D FLOATING CAROUSEL */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '60px' }}>
        <h1 style={{ 
          fontSize: '2.5rem', color: '#D4AF37', letterSpacing: '4px', textAlign: 'center',
          textTransform: 'uppercase', marginBottom: '10px' 
        }}>Farah</h1>
        <p style={{ color: '#8B0000', fontStyle: 'italic', marginBottom: '50px' }}>The Most Beautiful Rose in My Garden</p>

        <div className="carousel-3d" style={{
          height: '300px', perspective: '1200px', position: 'relative'
        }}>
          <div style={{
            width: '180px', height: '240px', transformStyle: 'preserve-3d',
            animation: 'rotate3d 25s linear infinite'
          }}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} style={{
                position: 'absolute', width: '180px', height: '240px',
                border: '1px solid #D4AF37', boxShadow: '0 0 20px rgba(139, 0, 0, 0.8)',
                transform: `rotateY(${(i - 1) * 60}deg) translateZ(280px)`,
                backgroundColor: '#050000', padding: '5px'
              }}>
                <img src={`/foto${i}.jpg`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LUXURY INTERACTIVE BOOK SECTION */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '120px', paddingBottom: '100px' }}>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          style={{
            padding: '15px 40px', backgroundColor: 'transparent', color: '#D4AF37',
            border: '2px solid #D4AF37', borderRadius: '0', fontSize: '1rem',
            letterSpacing: '3px', cursor: 'pointer', transition: '0.3s'
          }}>
          {isOpen ? 'CLOSE JOURNAL' : 'OPEN LUXURY JOURNAL'}
        </button>
      </div>

      {isOpen && (
        <div style={{ maxWidth: '500px', margin: '0 auto', padding: '0 20px' }}>
          {[7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => (
            <div key={i} style={{ marginBottom: '60px', textAlign: 'center' }}>
              <div style={{ border: '1px solid #222', padding: '15px', position: 'relative' }}>
                <img src={`/foto${i}.jpg`} style={{ width: '100%', filter: 'contrast(1.1) brightness(0.9)' }} />
                <div style={{ position: 'absolute', bottom: '-20px', right: '10px', color: '#D4AF37', fontSize: '0.8rem' }}>
                  MEMOIR No. 0{i-6}
                </div>
              </div>
            </div>
          ))}
          
          <div style={{ textAlign: 'center', padding: '100px 0', borderTop: '1px solid #D4AF37' }}>
            <h2 style={{ color: '#D4AF37', fontSize: '2rem' }}>Eternally Yours.</h2>
            <p style={{ color: '#8B0000', fontSize: '1.2rem', marginTop: '20px' }}>I Love You, Farah.</p>
          </div>
        </div>
      )}

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
        @keyframes rotate3d { from { transform: rotateY(0deg); } to { transform: rotateY(360deg); } }
        @keyframes fall {
          0% { transform: translateY(-10vh) rotate(0deg); }
          100% { transform: translateY(110vh) rotate(360deg); }
        }
        .petal {
          position: fixed; color: #8B0000; font-size: 20px;
          animation: fall linear infinite; top: -10%;
        }
      `}</style>
    </div>
  );
}
 
