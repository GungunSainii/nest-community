import React, { useState } from 'react';
import { Flame, MapPin } from 'lucide-react';
import { useCircles } from '../context/CircleContext';
import { SproutDoodle } from '../components/DoodleAccents';

export function ProfilePage() {
  const { userProfile, setUserProfile, myCircleIds } = useCircles();
  const [socialEnergy, setSocialEnergy] = useState(userProfile.socialEnergy || 65);

  const handleSliderChange = (e) => {
    const val = parseInt(e.target.value);
    setSocialEnergy(val);
    setUserProfile((prev) => ({ ...prev, socialEnergy: val }));
  };

  const getEnergyDescription = (val) => {
    if (val < 35) return 'Quiet & observant · Prefers 1-on-1s and 3-person circles';
    if (val < 70) return 'Introvert leaning · Thrives in 3–5 person quiet study or chai circles';
    return 'Lively & talkative · Great for games and conversational walks';
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] pb-24 md:pb-16 bg-grain">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        
        {/* Anti-Instagram Disclaimer Banner */}
        <div className="p-3.5 rounded-2xl bg-[#F5EFEB] border border-stone-200/80 text-xs text-stone-600 flex items-center justify-between mb-6 shadow-xs">
          <div className="flex items-center gap-2">
            <span className="text-base">🌿</span>
            <span className="font-semibold text-stone-800">Anti-Social-Media Profile</span>
          </div>
          <span className="text-[11px] font-bold text-stone-500">
            No follower counts · No likes · Real connections only
          </span>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-cozy relative overflow-hidden">
          {/* Subtle sprout doodle in background */}
          <div className="absolute top-5 right-5 opacity-10 pointer-events-none">
            <SproutDoodle className="w-20 h-20 text-stone-800" />
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            {/* Avatar */}
            <div className="relative">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl overflow-hidden border-2 border-stone-200 p-1 bg-white shadow-cozy">
                <img
                  src={userProfile.avatar}
                  alt={userProfile.name}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-[#C85A32] text-white rounded-full flex items-center justify-center text-sm shadow-xs border-2 border-white">
                🌱
              </div>
            </div>

            {/* Basic Info */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <h1 className="text-3xl sm:text-4xl font-black text-stone-900 font-['Outfit']">
                  {userProfile.name}
                </h1>
                <span className="text-xs font-bold text-[#2D4A3E] bg-[#F2F7F4] px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Circle Starter
                </span>
              </div>

              <p className="text-xs sm:text-sm text-stone-500 mt-1 flex items-center justify-center sm:justify-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-stone-400" />
                <span>{userProfile.location}</span>
              </p>

              {/* "Looking for" (Prompt requirement) */}
              <div className="mt-4 p-3 rounded-2xl bg-[#FAF7F2] border border-stone-200 text-xs text-stone-700">
                <span className="font-bold text-stone-900 block mb-0.5">Looking for:</span>
                "{userProfile.lookingFor}"
              </div>
            </div>
          </div>

          {/* SECTION: USUALLY UP FOR (Prompt requirement) */}
          <div className="mt-8 pt-6 border-t border-stone-100">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
              Usually up for
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {userProfile.interests && userProfile.interests.map((item, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#FAF7F2] border border-stone-200 text-xs sm:text-sm font-bold text-stone-800 shadow-xs"
                >
                  <span>{item.label}</span>
                </span>
              ))}
            </div>
          </div>

          {/* SECTION: SOCIAL ENERGY GAUGE (Prompt requirement) */}
          <div className="mt-8 pt-6 border-t border-stone-100">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Social energy
              </h3>
              <span className="text-xs font-bold text-[#C85A32]">
                {socialEnergy}%
              </span>
            </div>

            {/* Slider visual */}
            <div className="space-y-2 mt-3">
              <input
                type="range"
                min="0"
                max="100"
                value={socialEnergy}
                onChange={handleSliderChange}
                className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#C85A32]"
              />
              <div className="flex justify-between text-xs font-bold text-stone-500 select-none">
                <span>Quiet</span>
                <span className="text-[11px] text-[#C85A32] font-semibold">
                  ───────●──
                </span>
                <span>Talkative</span>
              </div>
              <p className="text-xs text-stone-500 italic mt-1">
                {getEnergyDescription(socialEnergy)}
              </p>
            </div>
          </div>

          {/* REAL STATS (Prompt requirement: Circles joined, Meetups attended, Current streak, NO vanity metrics) */}
          <div className="mt-8 pt-6 border-t border-stone-100">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
              The Real Metrics (Zero vanity)
            </h3>

            <div className="grid grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-stone-200/80 text-center">
                <div className="text-2xl sm:text-3xl font-black text-stone-900">
                  {userProfile.circlesJoinedCount || myCircleIds.length}
                </div>
                <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mt-0.5">
                  Circles Joined
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-stone-200/80 text-center">
                <div className="text-2xl sm:text-3xl font-black text-stone-900">
                  {userProfile.meetupsAttendedCount || 11}
                </div>
                <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mt-0.5">
                  Meetups Attended
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-stone-200/80 text-center">
                <div className="text-2xl sm:text-3xl font-black text-amber-600 flex items-center justify-center gap-1">
                  <Flame className="w-5 h-5 fill-amber-500 text-amber-500" />
                  <span>{userProfile.currentStreakWeeks || 4}w</span>
                </div>
                <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mt-0.5">
                  Current Streak
                </div>
              </div>
            </div>
          </div>

          {/* Scrapbook Log / Tiny Memories */}
          {userProfile.scrapbook && userProfile.scrapbook.length > 0 && (
            <div className="mt-8 pt-6 border-t border-stone-100">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
                Meetup Memory Log
              </h3>

              <div className="space-y-3">
                {userProfile.scrapbook.map((entry) => (
                  <div
                    key={entry.id}
                    className="p-4 rounded-2xl bg-[#FAF7F2] border border-stone-200/70 text-xs text-stone-700 flex items-start gap-3"
                  >
                    <span className="text-xl select-none shrink-0">{entry.emoji || '🌱'}</span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-stone-900">{entry.circleName}</span>
                        <span className="text-stone-400">· {entry.date}</span>
                      </div>
                      <p className="mt-1 text-stone-600 leading-relaxed">
                        "{entry.note}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
