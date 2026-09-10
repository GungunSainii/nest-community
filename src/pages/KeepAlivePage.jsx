import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Flame, ArrowRight } from 'lucide-react';
import { useCircles } from '../context/CircleContext';

export function KeepAlivePage() {
  const { advanceStreak } = useCircles();
  const [step, setStep] = useState(1); // 1 = Question, 2 = What next?, 3 = Celebration

  const handleYesWeDid = () => {
    setStep(2);
  };

  const handleSameTime = () => {
    advanceStreak();
    setStep(3);
  };

  const handleDifferent = () => {
    advanceStreak();
    setStep(3);
  };

  const handleBreak = () => {
    setStep(1);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] pb-20 bg-grain">
      <div className="max-w-md mx-auto px-4 sm:px-6 pt-12">
        
        <div className="bg-white rounded-3xl p-7 sm:p-8 border border-stone-200/90 shadow-soft text-center">
          
          {/* Step 1: "Did your circle actually meet?" */}
          {step === 1 && (
            <div>
              <div className="w-16 h-16 mx-auto rounded-3xl bg-[#F5F3FF] border border-[#DDD6FE] flex items-center justify-center text-3xl mb-5 shadow-xs">
                ☕
              </div>

              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#7C3AED] bg-[#F5F3FF] px-3 py-1 rounded-full border border-[#DDD6FE] mb-3">
                Signature Feature
              </span>

              {/* Exact Prompt Headline */}
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 leading-snug font-['Outfit']">
                Did your circle actually meet?
              </h2>

              <p className="text-xs sm:text-sm text-stone-500 mt-2 max-w-xs mx-auto">
                Small circles build deep trust through repeated offline meetups.
              </p>

              {/* Exact Prompt Large CTA */}
              <div className="mt-8 space-y-3">
                <button
                  onClick={handleYesWeDid}
                  className="w-full py-4 px-6 rounded-2xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-extrabold text-base shadow-soft hover:shadow-soft-lg transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>YES, WE DID</span>
                  <span className="text-xl">🫶</span>
                </button>

                <button
                  onClick={() => setStep(1)}
                  className="w-full py-2.5 px-4 rounded-xl border border-stone-200 hover:bg-stone-50 text-stone-500 text-xs font-semibold transition-colors cursor-pointer"
                >
                  We rescheduled
                </button>
              </div>
            </div>
          )}

          {/* Step 2: "What should happen next?" */}
          {step === 2 && (
            <div className="text-left animate-in fade-in duration-200">
              <div className="text-center mb-6">
                <div className="w-12 h-12 mx-auto rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center text-2xl mb-3">
                  🌱
                </div>
                <h3 className="text-2xl font-black text-stone-900 font-['Outfit']">
                  What should happen next?
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Keep the rhythm effortless for the circle.
                </p>
              </div>

              {/* Buttons: "Same time next week", "Try something new", "Take a break" */}
              <div className="space-y-2.5">
                <button
                  onClick={handleSameTime}
                  className="w-full p-4 rounded-2xl border-2 border-[#7C3AED] bg-[#F5F3FF] hover:bg-[#EDE9FE] transition-all flex items-center justify-between cursor-pointer"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-stone-900">Same time next week</span>
                      <span className="text-[10px] font-bold bg-[#7C3AED] text-white px-2 py-0.5 rounded-full">
                        Default
                      </span>
                    </div>
                    <p className="text-xs text-stone-500 mt-0.5">Locks in the weekly rhythm.</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#7C3AED]" />
                </button>

                <button
                  onClick={handleDifferent}
                  className="w-full p-4 rounded-2xl border border-stone-200 hover:bg-stone-50 transition-all flex items-center justify-between cursor-pointer"
                >
                  <div>
                    <span className="text-sm font-bold text-stone-900">Try something new</span>
                    <p className="text-xs text-stone-500 mt-0.5">New spot or activity for next time.</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-stone-400" />
                </button>

                <button
                  onClick={handleBreak}
                  className="w-full p-3.5 rounded-2xl border border-stone-200 hover:bg-stone-50 transition-all flex items-center justify-between cursor-pointer text-stone-600"
                >
                  <span className="text-xs font-semibold">Take a break</span>
                  <span className="text-xs text-stone-400">Skip next week</span>
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Celebration Animation */}
          {step === 3 && (
            <div className="py-2 animate-in zoom-in-95 duration-300">
              <div className="w-20 h-20 mx-auto rounded-3xl bg-[#F5F3FF] border-2 border-[#7C3AED] flex items-center justify-center text-4xl mb-4 shadow-soft">
                🌱
              </div>

              {/* Exact Prompt Text */}
              <h2 className="text-3xl font-black text-stone-900 tracking-tight font-['Outfit']">
                Circle #2 unlocked 🌱
              </h2>

              <p className="text-base font-bold text-[#7C3AED] mt-1">
                "2 weeks of showing up."
              </p>

              <div className="my-6 p-4 rounded-2xl bg-stone-50 border border-stone-200 text-left text-xs space-y-2">
                <div className="flex items-center justify-between text-stone-600 font-semibold">
                  <span>Streak progress</span>
                  <span className="text-amber-600 flex items-center gap-1 font-bold">
                    <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    2-week streak
                  </span>
                </div>
                <div className="w-full h-2 bg-stone-200 rounded-full overflow-hidden">
                  <div className="h-full bg-[#7C3AED] w-1/2 rounded-full" />
                </div>
                <p className="text-[11px] text-stone-500">
                  Next meetup automatically queued for next week!
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <Link
                  to="/discover"
                  className="w-full py-3 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-xs shadow-xs"
                >
                  Back to Circles
                </Link>
                <button
                  onClick={() => setStep(1)}
                  className="w-full py-2.5 rounded-xl border border-stone-200 hover:bg-stone-50 text-stone-600 font-semibold text-xs"
                >
                  Test ritual again
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
