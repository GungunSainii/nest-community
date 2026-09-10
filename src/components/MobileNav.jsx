import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Compass, Users, PlusCircle } from 'lucide-react';
import { useCircles } from '../context/CircleContext';

export function MobileNav() {
  const location = useLocation();
  const { myCircleIds, userProfile } = useCircles();

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-lg border-t border-stone-200/90 px-3 py-2">
      <div className="flex items-center justify-around">
        {/* Home */}
        <Link
          to="/"
          className={`flex flex-col items-center gap-1 py-1 px-2.5 rounded-xl transition-colors ${
            isActive('/') ? 'text-[#C85A32] font-bold' : 'text-stone-500 hover:text-stone-800'
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px]">Home</span>
        </Link>

        {/* Discover */}
        <Link
          to="/discover"
          className={`flex flex-col items-center gap-1 py-1 px-2.5 rounded-xl transition-colors ${
            isActive('/discover') ? 'text-[#C85A32] font-bold' : 'text-stone-500 hover:text-stone-800'
          }`}
        >
          <Compass className="w-5 h-5" />
          <span className="text-[10px]">Discover</span>
        </Link>

        {/* Create (Centered prominent) */}
        <Link
          to="/create"
          className="flex flex-col items-center -mt-5"
        >
          <div className="w-12 h-12 rounded-full bg-[#C85A32] text-white flex items-center justify-center shadow-cozy-lg border-2 border-[#FAF7F2] active:scale-95 transition-transform">
            <PlusCircle className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-bold text-[#C85A32] mt-0.5">Create</span>
        </Link>

        {/* My Circles */}
        <Link
          to="/my-circles"
          className={`relative flex flex-col items-center gap-1 py-1 px-2.5 rounded-xl transition-colors ${
            isActive('/my-circles') ? 'text-[#C85A32] font-bold' : 'text-stone-500 hover:text-stone-800'
          }`}
        >
          <Users className="w-5 h-5" />
          <span className="text-[10px]">Circles</span>
          {myCircleIds.length > 0 && (
            <span className="absolute top-0 right-2 w-2 h-2 rounded-full bg-[#C85A32]" />
          )}
        </Link>

        {/* Profile */}
        <Link
          to="/profile"
          className={`flex flex-col items-center gap-1 py-1 px-2.5 rounded-xl transition-colors ${
            isActive('/profile') ? 'text-[#C85A32] font-bold' : 'text-stone-500 hover:text-stone-800'
          }`}
        >
          <div className="w-5 h-5 rounded-full overflow-hidden border border-stone-400">
            <img src={userProfile.avatar} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <span className="text-[10px]">Profile</span>
        </Link>
      </div>
    </nav>
  );
}
