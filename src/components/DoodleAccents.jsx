import React from 'react';

export function SproutDoodle({ className = "w-6 h-6 text-[#2D4A3E]" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 44V26" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M24 26C24 16 10 14 10 26C16 26 24 26 24 26Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M24 20C24 12 36 10 36 20C31 20 24 20 24 20Z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
    </svg>
  );
}

export function ChaiDoodle({ className = "w-6 h-6 text-[#C85A32]" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 18H34V34C34 37.3137 31.3137 40 28 40H18C14.6863 40 12 37.3137 12 34V18Z" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="3" />
      <path d="M34 22H37C39.2091 22 41 23.7909 41 26V28C41 30.2091 39.2091 32 37 32H34" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M18 10C18 7 20 5 20 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M24 12C24 9 26 7 26 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M30 10C30 7 32 5 32 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function CurvedArrow({ className = "w-10 h-10 text-[#C85A32]" }) {
  return (
    <svg className={className} viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 40C35 10 65 10 90 35" stroke="currentColor" strokeWidth="2.5" strokeDasharray="4 4" strokeLinecap="round" />
      <path d="M82 34L91 35L92 26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SparkleDoodle({ className = "w-5 h-5 text-[#E59838]" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
    </svg>
  );
}

export function HandDrawnCircle({ className = "w-32 h-16 text-[#C85A32]" }) {
  return (
    <svg className={className} viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 32C12 14 38 6 68 8C98 10 114 24 110 38C106 52 82 56 50 54C22 52 6 42 12 26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function HeartHandDoodle({ className = "w-6 h-6 text-[#C85A32]" }) {
  return (
    <span className={`inline-block select-none ${className}`}>🫶</span>
  );
}
