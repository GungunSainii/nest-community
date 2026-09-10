import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Users, Check, ArrowRight } from 'lucide-react';
import { useCircles } from '../context/CircleContext';

export function HomePage() {
  const navigate = useNavigate();
  const { circles, isJoined, joinCircle } = useCircles();

  // The 4 cards specified by user:
  // 📚 DSA Study Circle, 🏸 Sunday Badminton, 🎨 Sketch & Chai, ☕ Evening Walk & Talk
  const targetIds = ['dsa-study-circle', 'sunday-badminton', 'sketch-and-chai', 'evening-walk-and-talk'];
  const homeCards = targetIds
    .map((id) => circles.find((c) => c.id === id))
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-[#FAF8F5] pb-20 bg-grain">
      {/* Hero Section */}
      <section className="pt-12 sm:pt-20 pb-12 sm:pb-16 px-4 sm:px-6 text-center max-w-4xl mx-auto">
        {/* Subtitle Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F3FF] border border-[#DDD6FE] text-xs sm:text-sm font-semibold text-[#7C3AED] mb-5 shadow-xs">
          <span>🌱</span>
          <span>Small offline circles of 3–8 people</span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-stone-900 tracking-tight leading-[1.1] font-['Outfit']">
          Find a little place <br />
          <span className="text-[#7C3AED] underline decoration-[#DDD6FE] decoration-wavy underline-offset-8">
            to belong.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-2xl text-stone-600 mt-5 max-w-2xl mx-auto font-normal leading-relaxed">
          Small circles. Real meetups. People who actually show up.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
          <Link
            to="/discover"
            className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-sm shadow-soft transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            <span>Explore Circles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/create"
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 font-bold text-sm shadow-xs transition-all active:scale-95"
          >
            <span>Create a Circle</span>
          </Link>
        </div>
      </section>

      {/* 4 Activity Cards Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-black text-stone-900 font-['Outfit']">
              Circles Meeting This Week
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
              Capped at 4–6 members. Real humans, low pressure.
            </p>
          </div>
          <Link
            to="/discover"
            className="text-xs sm:text-sm font-bold text-[#7C3AED] hover:underline"
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {homeCards.map((circle) => {
            const joined = isJoined(circle.id);
            return (
              <div
                key={circle.id}
                onClick={() => navigate(`/circle/${circle.id}`)}
                className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#F5F3FF] text-[#7C3AED] border border-[#DDD6FE]">
                      <span>{circle.emoji}</span>
                      <span>{circle.category}</span>
                    </span>

                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-stone-100 text-stone-600 flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-stone-400" />
                      <span>{circle.membersCount}/{circle.maxMembers} members</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-stone-900 group-hover:text-[#7C3AED] transition-colors">
                    {circle.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 mt-2 line-clamp-2 leading-relaxed">
                    {circle.tagline || circle.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-stone-100 space-y-3">
                  <div className="space-y-1 text-xs text-stone-600">
                    <div className="flex items-center gap-2 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#7C3AED]" />
                      <span>{circle.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-stone-500">
                      <MapPin className="w-3.5 h-3.5 text-stone-400" />
                      <span className="truncate">{circle.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        joinCircle(circle.id);
                      }}
                      className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer ${
                        joined
                          ? 'bg-emerald-600 text-white'
                          : 'bg-[#7C3AED] hover:bg-[#6D28D9] text-white shadow-xs'
                      }`}
                    >
                      {joined ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>You're in ✓</span>
                        </>
                      ) : (
                        <span>Join circle</span>
                      )}
                    </button>

                    <button
                      onClick={() => navigate(`/circle/${circle.id}`)}
                      className="p-2.5 rounded-xl border border-stone-200 text-stone-600 hover:text-stone-900 hover:bg-stone-50 transition-colors"
                      title="View Details"
                    >
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
