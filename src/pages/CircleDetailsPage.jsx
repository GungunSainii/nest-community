import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, Check, ArrowLeft, Flame } from 'lucide-react';
import { useCircles } from '../context/CircleContext';

export function CircleDetailsPage() {
  const { id } = useParams();
  const { circles, isJoined, joinCircle, rsvpMap, toggleRsvp, togglePlanItem } = useCircles();

  // Target circle (defaulting to "The 7 PM Study Circle" as specified)
  const targetId = id || 'study-7pm';
  const circle = circles.find((c) => c.id === targetId) || circles[0];

  const joined = isJoined(circle.id);
  const attending = !!rsvpMap[circle.id];

  return (
    <div className="min-h-screen bg-[#FAF8F5] pb-20 bg-grain">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8">
        
        {/* Back Link */}
        <Link
          to="/discover"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-stone-600 hover:text-stone-900 bg-white px-3 py-1.5 rounded-xl border border-stone-200 shadow-xs mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to circles</span>
        </Link>

        {/* Header Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-soft mb-6">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#F5F3FF] text-[#7C3AED] border border-[#DDD6FE]">
                  <span>{circle.emoji}</span>
                  <span>{circle.category}</span>
                </span>

                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-stone-100 text-stone-600">
                  {circle.membersCount}/{circle.maxMembers} members
                </span>

                {circle.streak && (
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span>{circle.streak}</span>
                  </span>
                )}
              </div>

              {/* Exact Example Headline */}
              <h1 className="text-3xl sm:text-4xl font-black text-stone-900 font-['Outfit']">
                {circle.name}
              </h1>

              {/* Exact Prompt Tagline */}
              <p className="text-base sm:text-lg text-stone-600 font-medium mt-2">
                "{circle.tagline || '45 min focused study → 15 min discussion → chai.'}"
              </p>
            </div>

            <button
              onClick={() => joinCircle(circle.id)}
              className={`py-3 px-6 rounded-2xl text-sm font-bold shadow-xs transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer shrink-0 ${
                joined
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#7C3AED] hover:bg-[#6D28D9] text-white'
              }`}
            >
              {joined ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>You're in ✓</span>
                </>
              ) : (
                <span>Join circle</span>
              )}
            </button>
          </div>
        </div>

        {/* 2-Column Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Left Column: Next Meetup & Location */}
          <div className="space-y-6">
            
            {/* NEXT MEETUP */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-soft">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
                Next Meetup
              </h3>
              <div className="flex items-start gap-3">
                <div className="p-3 rounded-2xl bg-[#F5F3FF] text-[#7C3AED] border border-[#DDD6FE]">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-stone-900">{circle.time}</h4>
                  <p className="text-xs text-stone-500 mt-0.5">Weekly recurring meetup</p>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs text-stone-600">Will you show up?</span>
                <button
                  onClick={() => toggleRsvp(circle.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    attending
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#7C3AED] text-white hover:bg-[#6D28D9]'
                  }`}
                >
                  {attending ? "I'm in ✓" : "I'm in"}
                </button>
              </div>
            </div>

            {/* LOCATION */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-soft">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
                Location
              </h3>
              <div className="flex items-start gap-3">
                <div className="p-3 rounded-2xl bg-stone-100 text-stone-700">
                  <MapPin className="w-6 h-6 text-[#7C3AED]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-stone-900">{circle.location}</h4>
                  <p className="text-xs text-stone-500 mt-0.5">{circle.spotDetails}</p>
                </div>
              </div>
            </div>

            {/* CIRCLE VIBE */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-soft">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
                Circle Vibe
              </h3>
              <div className="flex flex-wrap gap-2">
                {circle.vibeTags?.map((vibe, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-2xl bg-[#F5F3FF] border border-[#DDD6FE] text-xs font-bold text-[#7C3AED]"
                  >
                    ✨ {vibe}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Tiny Plan Checklist & Members */}
          <div className="space-y-6">
            
            {/* TINY PLAN CHECKLIST */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-soft">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-400">
                  Today's Tiny Plan
                </h3>
                <span className="text-[11px] text-stone-400">Tap to toggle</span>
              </div>

              <div className="space-y-2">
                {circle.tinyPlan?.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => togglePlanItem(circle.id, item.id)}
                    className={`p-3 rounded-2xl border transition-all flex items-center gap-3 cursor-pointer select-none text-xs sm:text-sm ${
                      item.completed
                        ? 'bg-stone-50 text-stone-400 line-through border-stone-200'
                        : 'bg-white text-stone-800 border-stone-200/80 hover:border-[#DDD6FE]'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 ${
                        item.completed ? 'bg-emerald-600 text-white' : 'border border-stone-300'
                      }`}
                    >
                      {item.completed && <Check className="w-3 h-3" />}
                    </div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* MEMBERS */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-soft">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
                Members ({circle.members?.length || 0})
              </h3>
              <div className="space-y-2.5">
                {circle.members?.map((member) => (
                  <div key={member.id} className="flex items-center justify-between p-2 rounded-2xl hover:bg-stone-50 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-8 h-8 rounded-full object-cover border border-stone-200"
                      />
                      <div>
                        <span className="text-xs font-bold text-stone-900 block leading-tight">{member.name}</span>
                        <span className="text-[10px] text-stone-500">{member.status}</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#F5F3FF] text-[#7C3AED]">
                      Confirmed
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
