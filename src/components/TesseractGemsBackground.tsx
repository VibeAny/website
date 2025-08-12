'use client';

import { useEffect, useState } from 'react';

interface Gem {
  id: number;
  shape: string;
  animation: string;
  left: number;
  top: number;
  delay: number;
  size: number;
}

// Seeded random function for consistent rendering
function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const gemShapes = [
  'gem-diamond',
  'gem-hexagon', 
  'gem-octagon',
  'gem-star',
  'gem-triangle',
  'gem-crystal',
  'gem-tesseract'  // Special Tesseract shape
];

const gemAnimations = [
  'gem-float-1',
  'gem-float-2', 
  'gem-float-3',
  'gem-pulse',
  'gem-tesseract-rotate'  // Special Tesseract rotation
];

// Pre-generated gem data for consistent rendering
const preGeneratedGems: Gem[] = [
  { id: 0, shape: 'gem-diamond', animation: 'gem-float-1', left: 25.3, top: 15.7, delay: 2.1, size: 0.8 },
  { id: 1, shape: 'gem-hexagon', animation: 'gem-pulse', left: 67.2, top: 43.8, delay: 5.4, size: 0.6 },
  { id: 2, shape: 'gem-tesseract', animation: 'gem-tesseract-rotate', left: 12.1, top: 78.5, delay: 1.3, size: 1.2 },
  { id: 3, shape: 'gem-star', animation: 'gem-float-2', left: 89.6, top: 22.4, delay: 8.7, size: 0.7 },
  { id: 4, shape: 'gem-octagon', animation: 'gem-float-3', left: 45.8, top: 65.2, delay: 3.9, size: 0.9 },
  { id: 5, shape: 'gem-crystal', animation: 'gem-pulse', left: 78.4, top: 8.1, delay: 6.2, size: 0.5 },
  { id: 6, shape: 'gem-tesseract', animation: 'gem-tesseract-rotate', left: 33.7, top: 52.6, delay: 4.8, size: 1.1 },
  { id: 7, shape: 'gem-triangle', animation: 'gem-float-1', left: 91.2, top: 71.3, delay: 7.5, size: 0.8 },
  { id: 8, shape: 'gem-diamond', animation: 'gem-float-2', left: 18.5, top: 29.7, delay: 2.7, size: 0.6 },
  { id: 9, shape: 'gem-hexagon', animation: 'gem-float-3', left: 56.9, top: 84.2, delay: 9.1, size: 0.9 },
  { id: 10, shape: 'gem-star', animation: 'gem-pulse', left: 74.3, top: 37.5, delay: 1.8, size: 0.7 },
  { id: 11, shape: 'gem-tesseract', animation: 'gem-tesseract-rotate', left: 41.6, top: 12.8, delay: 5.6, size: 1.3 }
];

// Pre-generated sparkle data
const sparkleData = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  width: 2.5 + (i * 0.3) % 3.5,
  height: 2.2 + (i * 0.4) % 3.8,
  left: (15 + i * 7.5) % 100,
  top: (8 + i * 8.2) % 100,
  duration: 6 + (i * 0.6) % 8,
  delay: (i * 1.2) % 12,
  gradient: i % 3
}));

// Pre-generated energy particle data  
const energyData = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  left: (20 + i * 15) % 100,
  top: (35 + i * 12) % 100,
  animation: (i % 3) + 1,
  duration: 20 + (i * 2) % 10,
  delay: (i * 2.5) % 15
}));

export default function TesseractGemsBackground() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Don't render anything on server to avoid hydration mismatch
  if (!isClient) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {preGeneratedGems.map((gem) => (
        <div
          key={gem.id}
          className={`tesseract-gem ${gem.shape} ${gem.animation}`}
          style={{
            left: `${gem.left}%`,
            top: `${gem.top}%`,
            animationDelay: `${gem.delay}s`,
            transform: `scale(${gem.size})`,
            opacity: 0.6
          }}
        />
      ))}
      
      {/* Enhanced sparkle effects with different sizes and behaviors */}
      <div className="absolute inset-0">
        {sparkleData.map((sparkle) => (
          <div
            key={`sparkle-${sparkle.id}`}
            className="absolute rounded-full opacity-30"
            style={{
              width: `${sparkle.width}px`,
              height: `${sparkle.height}px`,
              background: sparkle.gradient === 0 
                ? 'linear-gradient(45deg, hsl(var(--primary)), hsl(var(--secondary)))'
                : sparkle.gradient === 1
                ? 'linear-gradient(45deg, hsl(var(--secondary)), hsl(var(--accent)))'
                : 'linear-gradient(45deg, hsl(var(--accent)), hsl(var(--primary)))',
              left: `${sparkle.left}%`,
              top: `${sparkle.top}%`,
              animation: `gemSparkle ${sparkle.duration}s ease-in-out infinite`,
              animationDelay: `${sparkle.delay}s`
            }}
          />
        ))}
      </div>
      
      {/* Floating energy particles */}
      <div className="absolute inset-0">
        {energyData.map((energy) => (
          <div
            key={`energy-${energy.id}`}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"
            style={{
              left: `${energy.left}%`,
              top: `${energy.top}%`,
              animation: `gemFloat${energy.animation} ${energy.duration}s ease-in-out infinite`,
              animationDelay: `${energy.delay}s`,
              boxShadow: '0 0 10px hsl(var(--primary) / 0.3)'
            }}
          />
        ))}
      </div>
    </div>
  );
}