import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronUp, ChevronDown, Play } from 'lucide-react';
import { useCircles } from '../context/CircleContext';

export function DemoTourGuide() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { openKeepAliveModal } = useCircles();

  const STEPS = [
    {
      num: 1,
      title: "Home Hero & Visual",
      desc: "Warm headline, people joining animated circle",
      action: () => navigate('/')
    },
    {
      num: 2,
      title: "Discover Small Circles",
      desc: "Browse categories, search, capped groups (3–8)",
      action: () => navigate('/discover')
    },
    {
      num: 3,
      title: "The 7 PM Study Circle",
      desc: "Join circle, observe real-time headcount bump (5→6)",
      action: () => navigate('/circle/study-7pm')
    },
    {
      num: 4,
      title: "Circle Room: Tiny Plan & RSVP",
      desc: "Click 'I\\'m in' + tick off interactive checklist",
      action: () => navigate('/circle/study-7pm')
    },
    {
      num: 5,
      title: "Create 'Sketch & Chai'",
      desc: "Guided 4-step wizard + 'Your circle is alive 🌱'",
      action: () => navigate('/create')
    },
    {
      num: 6,
      title: "My Circles & Keep Alive",
      desc: "Signature feature: 'Did your circle meet?' → Streak unlock",
      action: () => navigate('/my-circles')
    }
  ];

  return (
    <div className="fixed bottom-20 md:bottom-5 left-4 z-40 select-none">
      {isOpen ? (
        <div className="bg-[#1C1917] text-white p-4 rounded-3xl shadow-cozy-xl border border-stone-800 w-80 max-w-[90vw]">
          <div className="flex items-center justify-between pb-3 border-b border-stone-800">
            <div className="flex items-center gap-2">
              <span className="text-base">🎯</span>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Hackathon Demo Guide
                </h4>
                <p className="text-[11px] text-stone-400">Step-by-step judge walkthrough</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-3 space-y-2 max-h-64 overflow-y-auto pr-1">
            {STEPS.map((step) => (
              <div
                key={step.num}
                onClick={step.action}
                className="p-2 rounded-xl bg-stone-900/90 hover:bg-stone-800 transition-colors cursor-pointer flex items-start gap-2.5 group"
              >
                <span className="w-5 h-5 rounded-full bg-stone-800 text-amber-400 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-amber-400 group-hover:text-stone-950 transition-colors">
                  {step.num}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold text-stone-200 group-hover:text-white flex items-center justify-between">
                    <span>{step.title}</span>
                    <Play className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 text-amber-400 transition-opacity" />
                  </div>
                  <p className="text-[10px] text-stone-400 truncate">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 pt-2 border-t border-stone-800 flex items-center justify-between text-[10px] text-stone-400">
            <span>Click any step to jump</span>
            <button
              onClick={() => openKeepAliveModal('sunday-reset-club')}
              className="text-amber-400 hover:underline font-bold"
            >
              Test Keep Alive Modal →
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 py-2 px-3.5 rounded-full bg-[#1C1917] hover:bg-stone-800 text-white text-xs font-bold shadow-cozy-lg border border-stone-700/80 transition-all hover:scale-105 active:scale-95 cursor-pointer"
        >
          <span className="text-sm">🎯</span>
          <span>Demo Flow Guide</span>
          <ChevronUp className="w-3.5 h-3.5 text-stone-400" />
        </button>
      )}
    </div>
  );
}
