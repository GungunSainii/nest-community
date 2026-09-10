import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Sparkles, Flame, ArrowRight, Calendar } from 'lucide-react';
import { useCircles } from '../context/CircleContext';

export function KeepAliveModal() {
  const {
    circles,
    keepAliveModal,
    closeKeepAliveModal,
    confirmKeepAlive
  } = useCircles();

  const [step, setStep] = useState('QUESTION'); // 'QUESTION' | 'DECISION' | 'CELEBRATION'

  if (!keepAliveModal.isOpen) return null;

  const circle = circles.find((c) => c.id === keepAliveModal.circleId) || circles[0];
  const currentStreak = circle?.streakWeeks || 1;
  const nextStreak = currentStreak + 1;

  const handleYesWeDid = () => {
    setStep('DECISION');
  };

  const handleSameTime = () => {
    confirmKeepAlive(circle?.id, 'SAME_TIME');
    setStep('CELEBRATION');
  };

  const handleDifferentPlan = () => {
    confirmKeepAlive(circle?.id, 'SAME_TIME');
    setStep('CELEBRATION');
  };

  const handleTakeBreak = () => {
    confirmKeepAlive(circle?.id, 'BREAK');
    closeKeepAliveModal();
  };

  const handleClose = () => {
    setStep('QUESTION');
    closeKeepAliveModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-xs">
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 8 }}
        className="relative w-full max-w-md bg-[#FAF7F2] rounded-3xl p-7 shadow-cozy-xl border border-stone-200 overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-200/50 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* STEP 1: Did your circle actually meet? */}
        {step === 'QUESTION' && (
          <div className="text-center py-2">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-[#FDF6F2] border border-[#FBE9E1] flex items-center justify-center text-3xl mb-4 shadow-xs">
              ☕
            </div>

            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#C85A32] bg-[#FDF6F2] px-3 py-1 rounded-full border border-[#FBE9E1] mb-2">
              Signature Ritual · NEST
            </span>

            <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 leading-tight">
              Did your circle actually meet?
            </h3>

            <p className="text-sm text-stone-600 mt-2 max-w-xs mx-auto">
              Checking in for <span className="font-semibold text-stone-900">{circle?.name}</span>. No photos needed, just real humans showing up offline.
            </p>

            <div className="mt-8 space-y-3">
              {/* LARGE CTA */}
              <button
                onClick={handleYesWeDid}
                className="w-full py-4 px-6 rounded-2xl bg-[#C85A32] hover:bg-[#B24E2A] text-white font-bold text-base shadow-cozy hover:shadow-cozy-lg transition-all duration-200 transform active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>YES, WE DID</span>
                <span className="text-xl">🫶</span>
              </button>

              <button
                onClick={handleTakeBreak}
                className="w-full py-3 px-4 rounded-xl border border-stone-200/80 bg-white hover:bg-stone-100 text-stone-600 text-xs font-semibold transition-colors cursor-pointer"
              >
                Not this time / We had to reschedule
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: What should happen next? */}
        {step === 'DECISION' && (
          <div className="text-center py-2">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-2xl mb-3">
              🌱
            </div>

            <h3 className="text-2xl font-bold text-stone-900">
              What should happen next?
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Circles build momentum when you make the next meet an effortless default.
            </p>

            <div className="mt-6 space-y-2.5 text-left">
              {/* Option 1: Same time next week (Recommended) */}
              <button
                onClick={handleSameTime}
                className="w-full p-4 rounded-2xl border-2 border-[#C85A32] bg-white hover:bg-[#FDF6F2] transition-all duration-150 flex items-center justify-between group cursor-pointer shadow-xs"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-stone-900">Same time next week</span>
                    <span className="text-[10px] font-bold bg-[#C85A32] text-white px-2 py-0.5 rounded-full">
                      Recommended
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Lock in the rhythm. Keeps the habit frictionless.
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-[#C85A32] group-hover:translate-x-1 transition-transform shrink-0" />
              </button>

              {/* Option 2: Try something new */}
              <button
                onClick={handleDifferentPlan}
                className="w-full p-4 rounded-2xl border border-stone-200 bg-white hover:bg-stone-50 transition-all duration-150 flex items-center justify-between group cursor-pointer"
              >
                <div>
                  <span className="text-sm font-bold text-stone-900">Try something new</span>
                  <p className="text-xs text-stone-500 mt-0.5">
                    New location or small variation for next week.
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-stone-400 group-hover:translate-x-1 transition-transform shrink-0" />
              </button>

              {/* Option 3: Take a break */}
              <button
                onClick={handleTakeBreak}
                className="w-full p-3.5 rounded-2xl border border-stone-200/80 bg-white hover:bg-stone-50 transition-all duration-150 flex items-center justify-between group cursor-pointer"
              >
                <div>
                  <span className="text-xs font-semibold text-stone-700">Take a break</span>
                  <p className="text-[11px] text-stone-400">
                    Pause for a week. Circle stays intact.
                  </p>
                </div>
                <span className="text-xs text-stone-400">Skip</span>
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: CELEBRATION */}
        {step === 'CELEBRATION' && (
          <div className="text-center py-3">
            <motion.div
              initial={{ scale: 0.3, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 15 }}
              className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-[#FDF6F2] to-[#FBE9E1] border-2 border-[#C85A32] flex items-center justify-center text-4xl mb-4 shadow-cozy"
            >
              🌱
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/70 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>Rhythm Maintained</span>
              </span>

              <h3 className="text-3xl font-extrabold text-stone-900 tracking-tight">
                Circle #{nextStreak} unlocked 🌱
              </h3>

              <p className="text-base font-medium text-[#C85A32] mt-1">
                "You're becoming a real circle."
              </p>

              <div className="my-6 p-4 rounded-2xl bg-white border border-stone-200/80 text-left shadow-xs">
                <div className="flex items-center justify-between text-xs text-stone-500 font-medium mb-1">
                  <span>Circle Streak</span>
                  <span className="font-bold text-amber-600 flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    {currentStreak}w → {nextStreak}w
                  </span>
                </div>

                <div className="flex items-center gap-1.5 mt-2">
                  {Array.from({ length: Math.max(nextStreak, 4) }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 flex-1 rounded-full transition-all duration-500 ${
                        i < nextStreak ? 'bg-[#C85A32]' : 'bg-stone-200'
                      }`}
                    />
                  ))}
                </div>

                <div className="mt-3 text-xs text-stone-600 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#C85A32]" />
                  <span>Next meetup automatically queued for next week!</span>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="w-full py-3.5 px-5 rounded-xl bg-[#2D4A3E] hover:bg-[#233B31] text-white font-bold text-sm shadow-cozy transition-colors cursor-pointer"
              >
                Back to my circles
              </button>
            </motion.div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
