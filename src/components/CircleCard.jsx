import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Calendar, Users, Flame, ArrowRight, Check } from 'lucide-react';
import { useCircles } from '../context/CircleContext';

export function CircleCard({ circle, featured = false }) {
  const navigate = useNavigate();
  const { isJoined, joinCircle } = useCircles();
  const joined = isJoined(circle.id);

  const handleJoinClick = (e) => {
    e.stopPropagation();
    joinCircle(circle.id);
  };

  const handleCardClick = () => {
    navigate(`/circle/${circle.id}`);
  };

  const isFull = circle.membersCount >= circle.maxMembers && !joined;

  return (
    <div
      onClick={handleCardClick}
      className={`group relative bg-white rounded-3xl p-6 border transition-all duration-300 cursor-pointer select-none flex flex-col justify-between ${
        featured
          ? 'border-stone-300/80 shadow-cozy hover:shadow-cozy-lg hover:-translate-y-1 hover:border-[#C85A32]/40'
          : 'border-stone-200/90 shadow-cozy hover:shadow-cozy-lg hover:-translate-y-1 hover:border-[#C85A32]/40'
      }`}
    >
      {/* Top Meta Bar */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          {/* Category Tag */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F7F4EC] text-stone-700 border border-stone-200/60">
            <span>{circle.categoryEmoji || '🌱'}</span>
            <span>{circle.category}</span>
          </span>

          {/* Member Count Badge (Capped small circle!) */}
          <div className="flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-stone-50 border border-stone-200/70 text-stone-600">
            <Users className="w-3.5 h-3.5 text-stone-400" />
            <span className={circle.membersCount >= circle.maxMembers ? "text-[#C85A32] font-semibold" : ""}>
              {circle.membersCount}/{circle.maxMembers} people
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-stone-900 group-hover:text-[#C85A32] transition-colors leading-snug">
          {circle.name}
        </h3>

        {/* Short description */}
        <p className="text-sm text-stone-600 mt-2 line-clamp-2 leading-relaxed">
          {circle.tagline || circle.description}
        </p>

        {/* Vibe Tags */}
        {circle.vibeTags && circle.vibeTags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3.5">
            {circle.vibeTags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#FAF7F2] text-stone-600 border border-stone-200/50"
              >
                {tag.startsWith('#') ? tag : `#${tag}`}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Section: Next Meetup Info & CTA */}
      <div className="mt-5 pt-4 border-t border-stone-100 flex flex-col gap-3">
        {/* Next Meet Details */}
        <div className="space-y-1.5 text-xs text-stone-600">
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-[#C85A32]" />
            <span className="font-semibold text-stone-800">
              {circle.nextMeetup?.date} · {circle.nextMeetup?.time}
            </span>
            {circle.streakWeeks > 1 && (
              <span className="ml-auto inline-flex items-center gap-0.5 text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/50">
                <Flame className="w-3 h-3 text-amber-500 fill-amber-500" />
                {circle.streakWeeks}w streak
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 text-stone-500">
            <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <span className="truncate">{circle.nextMeetup?.location}</span>
          </div>
        </div>

        {/* Buttons Row */}
        <div className="flex items-center gap-2 mt-1">
          <button
            onClick={handleJoinClick}
            disabled={isFull && !joined}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer ${
              joined
                ? 'bg-[#2D4A3E] text-white hover:bg-[#233B31]'
                : isFull
                ? 'bg-stone-100 text-stone-400 cursor-not-allowed'
                : 'bg-[#C85A32] text-white hover:bg-[#B24E2A] shadow-xs'
            }`}
          >
            {joined ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>You're in ✓</span>
              </>
            ) : isFull ? (
              <span>Circle full (6/6)</span>
            ) : (
              <span>Join circle</span>
            )}
          </button>

          <button
            onClick={handleCardClick}
            className="p-2.5 rounded-xl border border-stone-200 text-stone-600 hover:text-stone-900 hover:bg-stone-50 transition-colors"
            title="Open circle room"
          >
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
