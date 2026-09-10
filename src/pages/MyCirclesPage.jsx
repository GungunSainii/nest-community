import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Calendar,
  MapPin,
  Users,
  Flame,
  Plus,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useCircles } from '../context/CircleContext';

export function MyCirclesPage() {
  const navigate = useNavigate();
  const { circles, myCircleIds, openKeepAliveModal } = useCircles();

  // Filter circles that the user belongs to
  const myCircles = circles.filter((c) => myCircleIds.includes(c.id));

  return (
    <div className="min-h-screen bg-[#FAF7F2] pb-24 md:pb-16 bg-grain">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-stone-200/80">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDF6F2] text-[#C85A32] text-xs font-bold border border-[#FBE9E1] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#C85A32] animate-pulse" />
              <span>Small Offline Communities</span>
            </div>
            {/* Title from prompt */}
            <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight font-['Outfit']">
              Your circles
            </h1>
            <p className="text-sm text-stone-600 mt-1">
              Groups where you're not just a face in a crowd. You show up, talk, and keep the streak alive.
            </p>
          </div>

          <Link
            to="/create"
            className="self-start sm:self-auto py-2.5 px-5 rounded-2xl bg-[#C85A32] hover:bg-[#B24E2A] text-white text-xs sm:text-sm font-bold shadow-cozy flex items-center gap-2 active:scale-95 transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Create new circle</span>
          </Link>
        </div>

        {/* SIGNATURE RITUAL BANNER: "KEEP THE CIRCLE ALIVE" */}
        <div className="mt-8 bg-gradient-to-r from-[#FDF6F2] via-white to-[#F7F4EC] rounded-3xl p-6 sm:p-7 border border-[#FBE9E1] shadow-cozy flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#C85A32] text-white flex items-center justify-center text-2xl shrink-0 shadow-xs">
              🫶
            </div>
            <div>
              <div className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#C85A32]">
                <Sparkles className="w-3 h-3 text-[#C85A32]" />
                <span>Signature Ritual</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-0.5">
                Did your circle just finish a meetup?
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                Confirm your offline meetup, level up your circle streak, and queue next week's session.
              </p>
            </div>
          </div>

          <button
            onClick={() => openKeepAliveModal(myCircles[0]?.id || 'sunday-reset-club')}
            className="w-full sm:w-auto py-3 px-6 rounded-2xl bg-[#1C1917] hover:bg-stone-800 text-white font-bold text-xs sm:text-sm shadow-cozy transition-all flex items-center justify-center gap-2 active:scale-95 shrink-0 cursor-pointer"
          >
            <span>Keep Circle Alive</span>
            <span>🌱</span>
          </button>
        </div>

        {/* Circles Cards List */}
        <div className="mt-8 space-y-5">
          {myCircles.length > 0 ? (
            myCircles.map((circle) => (
              <div
                key={circle.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/90 shadow-cozy hover:shadow-cozy-lg transition-all duration-200 flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                {/* Left Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xl select-none">{circle.categoryEmoji || '🌱'}</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-stone-900 hover:text-[#C85A32] transition-colors cursor-pointer" onClick={() => navigate(`/circle/${circle.id}`)}>
                      {circle.name}
                    </h3>

                    {/* Streak Badge */}
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200/70">
                      <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      <span>{circle.streakWeeks}-week streak</span>
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 line-clamp-1">
                    {circle.tagline || circle.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-stone-500">
                    <span className="flex items-center gap-1.5 text-stone-700 font-semibold">
                      <Users className="w-3.5 h-3.5 text-stone-400" />
                      {circle.membersCount} members
                    </span>

                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#C85A32]" />
                      <span>Next meetup: <strong>{circle.nextMeetup?.date}</strong> ({circle.nextMeetup?.time})</span>
                    </span>

                    <span className="flex items-center gap-1.5 text-stone-500">
                      <MapPin className="w-3.5 h-3.5 text-stone-400" />
                      <span className="truncate max-w-[200px]">{circle.nextMeetup?.location}</span>
                    </span>
                  </div>
                </div>

                {/* Right Action Buttons: "Open circle" and "Plan next meetup" (Prompt requirement) */}
                <div className="flex items-center gap-2.5 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-stone-100">
                  {/* Keep circle alive quick trigger */}
                  <button
                    onClick={() => openKeepAliveModal(circle.id)}
                    className="p-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200/80 text-xs font-bold transition-colors cursor-pointer"
                    title="Log meetup & keep circle alive"
                  >
                    <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
                  </button>

                  {/* Plan next meetup */}
                  <button
                    onClick={() => navigate(`/circle/${circle.id}`)}
                    className="py-2.5 px-4 rounded-xl border border-stone-200 hover:bg-stone-50 text-stone-700 font-bold text-xs transition-colors cursor-pointer"
                  >
                    Plan next meetup
                  </button>

                  {/* Open circle */}
                  <button
                    onClick={() => navigate(`/circle/${circle.id}`)}
                    className="py-2.5 px-5 rounded-xl bg-[#2D4A3E] hover:bg-[#233B31] text-white font-bold text-xs shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Open circle</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8 shadow-xs">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#FDF6F2] flex items-center justify-center text-3xl mb-4">
                🌱
              </div>
              <h3 className="text-xl font-bold text-stone-900">You haven't joined any circles yet</h3>
              <p className="text-sm text-stone-500 mt-1 max-w-sm mx-auto">
                Explore small hyperlocal circles meeting this week or create your own in 2 minutes.
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <Link
                  to="/discover"
                  className="px-5 py-2.5 rounded-xl bg-[#C85A32] text-white text-xs font-bold hover:bg-[#B24E2A]"
                >
                  Discover Circles
                </Link>
                <Link
                  to="/create"
                  className="px-5 py-2.5 rounded-xl border border-stone-200 text-stone-700 text-xs font-bold hover:bg-stone-50"
                >
                  Create One
                </Link>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
