import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Plus, RotateCcw } from 'lucide-react';
import { useCircles } from '../context/CircleContext';

export function Navbar() {
  const location = useLocation();
  const { resetDemo } = useCircles();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/discover', label: 'Discover' },
    { path: '/circle/study-7pm', label: 'Circle Details' },
    { path: '/create', label: 'Create Circle' },
    { path: '/keep-alive', label: 'Keep Alive', badge: '🌱' }
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-2xl bg-[#7C3AED] text-white flex items-center justify-center font-bold text-lg shadow-xs group-hover:scale-105 transition-transform">
            🌱
          </div>
          <div>
            <span className="text-2xl font-black tracking-tight text-stone-900 font-['Outfit']">
              NEST
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                isActive(link.path)
                  ? 'bg-[#F5F3FF] text-[#7C3AED] border border-[#DDD6FE] shadow-xs'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/40'
              }`}
            >
              <span>{link.label}</span>
              {link.badge && <span className="text-xs">{link.badge}</span>}
            </Link>
          ))}
        </nav>

        {/* Right CTA & Reset */}
        <div className="flex items-center gap-2">
          <button
            onClick={resetDemo}
            title="Reset demo data"
            className="p-2 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-100 text-xs transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <Link
            to="/create"
            className="py-2 px-3.5 sm:px-4 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs sm:text-sm font-bold shadow-xs transition-all flex items-center gap-1.5 active:scale-95"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Start circle</span>
            <span className="sm:hidden">Create</span>
          </Link>
        </div>
      </div>

      {/* Mobile Sub-bar */}
      <div className="md:hidden flex items-center justify-between px-3 py-1.5 bg-white border-t border-stone-200/60 overflow-x-auto text-xs font-semibold scrollbar-none">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`px-2.5 py-1 rounded-lg shrink-0 ${
              isActive(link.path)
                ? 'bg-[#F5F3FF] text-[#7C3AED] font-bold'
                : 'text-stone-600'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
