import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Users, Check, ArrowRight } from 'lucide-react';
import { useCircles } from '../context/CircleContext';

const FILTERS = ['All', 'Study', 'Sports', 'Creative', 'Chill'];

export function DiscoverPage() {
  const navigate = useNavigate();
  const { circles, isJoined, joinCircle } = useCircles();
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filteredCircles = circles.filter((c) => {
    if (selectedFilter === 'All') return true;
    return c.category.toLowerCase() === selectedFilter.toLowerCase();
  });

  return (
    <div className="min-h-screen bg-[#FAF8F5] pb-20 bg-grain">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10">
        
        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F3FF] text-[#7C3AED] text-xs font-bold border border-[#DDD6FE] mb-2">
            <span>🔍</span>
            <span>Hyperlocal small groups</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight font-['Outfit']">
            Find your kind of people.
          </h1>
          <p className="text-sm sm:text-base text-stone-600 mt-1">
            Small recurring meetups of 3–8 people. Click Join to secure your spot.
          </p>
        </div>

        {/* Filters (All / Study / Sports / Creative / Chill) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none mb-8">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setSelectedFilter(f)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                selectedFilter === f
                  ? 'bg-[#7C3AED] text-white shadow-xs'
                  : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCircles.map((circle) => {
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
                      <span>{circle.membersCount}/{circle.maxMembers}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-stone-900 group-hover:text-[#7C3AED] transition-colors leading-snug">
                    {circle.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 mt-2 line-clamp-2 leading-relaxed">
                    {circle.tagline || circle.description}
                  </p>

                  {/* Vibe Tags */}
                  {circle.vibeTags && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {circle.vibeTags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-stone-50 text-stone-600 border border-stone-200/60"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-5 pt-4 border-t border-stone-100 space-y-3">
                  <div className="space-y-1 text-xs text-stone-600">
                    <div className="flex items-center gap-2 font-semibold text-stone-800">
                      <Calendar className="w-3.5 h-3.5 text-[#7C3AED]" />
                      <span>{circle.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-stone-500">
                      <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                      <span className="truncate">{circle.location}</span>
                    </div>
                  </div>

                  {/* Join Button */}
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        joinCircle(circle.id);
                      }}
                      className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer ${
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

      </div>
    </div>
  );
}
