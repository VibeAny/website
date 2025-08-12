import React from 'react';

interface I18nIconProps {
  className?: string;
  size?: number;
}

export const I18nIcon: React.FC<I18nIconProps> = ({ 
  className = "h-4 w-4", 
  size = 16 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Document background */}
      <rect 
        x="3" 
        y="2" 
        width="18" 
        height="20" 
        rx="2" 
        ry="2" 
        fill="none"
        stroke="currentColor" 
        strokeWidth="1.5"
      />
      
      {/* Document corner fold */}
      <path 
        d="M17 2v5h4" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Simplified i18n text */}
      <g fill="currentColor" fontSize="8" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600">
        <text x="7" y="14" textAnchor="middle">i</text>
        <text x="10" y="14" textAnchor="middle">1</text>
        <text x="13" y="14" textAnchor="middle">8</text>
        <text x="16" y="14" textAnchor="middle">n</text>
      </g>
      
      {/* Language indicator underline */}
      <path 
        d="M6 16h12" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        opacity="0.6"
      />
      
      {/* Translation dots */}
      <g fill="currentColor" opacity="0.4">
        <circle cx="8" cy="19" r="1" />
        <circle cx="12" cy="19" r="1" />
        <circle cx="16" cy="19" r="1" />
      </g>
    </svg>
  );
};