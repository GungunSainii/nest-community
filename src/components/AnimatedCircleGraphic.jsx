import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserPlus } from 'lucide-react';
import confetti from 'canvas-confetti';

const SEED_MEMBERS = [
  {
    id: 1,
    name: "Kabir",
    role: "Circle Starter",
    note: "Brings problem sets 📚",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    angle: 0,
    color: "#C85A32"
  },
  {
    id: 2,
    name: "Ananya",
    role: "Regular",
    note: "Chai enthusiast ☕",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    angle: 72,
    color: "#2D4A3E"
  },
  {
    id: 3,
    name: "Rohan",
    role: "Regular",
    note: "Silent pomodoro fan ⏱️",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    angle: 144,
    color: "#D97706"
  },
  {
    id: 4,
    name: "Tanvi",
    role: "Joined last week",
    note: "Never misses Sunday 🌱",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    angle: 216,
    color: "#7C3AED"
  }
];

export function AnimatedCircleGraphic() {
  const [activeCount, setActiveCount] = useState(3);
  const [userJoined, setUserJoined] = useState(false);
  const [activeBubble, setActiveBubble] = useState(1);

  // Auto cycle speech bubble thoughts every 3 seconds for lively feel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBubble((prev) => (prev >= activeCount ? 1 : prev + 1));
    }, 3200);
    return () => clearInterval(timer);
  }, [activeCount]);

  const handleToggleUserJoin = () => {
    if (!userJoined) {
      setUserJoined(true);
      setActiveCount(5);
      try {
        confetti({
          particleCount: 35,
          spread: 50,
          origin: { y: 0.65 },
          colors: ['#C85A32', '#2D4A3E', '#E59838']
        });
      } catch {}
    } else {
      setUserJoined(false);
      setActiveCount(4);
    }
  };

  return (
    <div className="relative w-full max-w-[440px] mx-auto select-none py-4">
      {/* Background soft organic glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#F5EDE4] via-[#FBF9F5] to-[#EAE2D5] rounded-full filter blur-xl opacity-70 -z-10" />

      {/* Main interactive circular stage */}
      <div className="relative aspect-square w-full rounded-full border-2 border-dashed border-[#D6CCC2] bg-[#FAF7F2]/80 shadow-cozy flex items-center justify-center p-6">
        
        {/* Animated dashed ring outline */}
        <div className="absolute inset-4 rounded-full border border-stone-200 pointer-events-none" />

        {/* Center Nest Hub Card */}
        <motion.div 
          className="z-10 text-center bg-white rounded-3xl p-5 shadow-cozy border border-stone-200/80 max-w-[200px]"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FDF6F2] text-[#C85A32] text-xs font-semibold mb-2">
            <span className="w-2 h-2 rounded-full bg-[#C85A32] animate-pulse" />
            <span>Circle #3 active</span>
          </div>

          <h4 className="text-base font-bold text-stone-900 leading-tight">
            Sunday Study & Chai
          </h4>
          <p className="text-xs text-stone-500 mt-1">
            {userJoined ? "5 of 6 spots filled" : `${activeCount} of 6 spots filled`}
          </p>

          <div className="mt-3 flex items-center justify-center gap-1">
            <div className="h-1.5 w-16 bg-stone-100 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-[#C85A32] rounded-full"
                animate={{ width: userJoined ? "83%" : `${(activeCount / 6) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <span className="text-[10px] font-bold text-[#C85A32]">
              {userJoined ? "83%" : `${Math.round((activeCount / 6) * 100)}%`}
            </span>
          </div>
        </motion.div>

        {/* Orbiting Members */}
        {SEED_MEMBERS.map((member, idx) => {
          const isVisible = idx < activeCount;
          // Calculate positions in circle (percentages)
          // 0deg is top, 72deg right, etc.
          const angles = [-90, -18, 54, 126, 198];
          const rad = (angles[idx] * Math.PI) / 180;
          const radiusPercent = 40; // 40% from center
          const leftPercent = 50 + radiusPercent * Math.cos(rad);
          const topPercent = 50 + radiusPercent * Math.sin(rad);

          return (
            <AnimatePresence key={member.id}>
              {isVisible && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 350, damping: 20, delay: idx * 0.15 }}
                  style={{
                    position: 'absolute',
                    left: `${leftPercent}%`,
                    top: `${topPercent}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  className="group z-20"
                >
                  <div className="relative">
                    {/* Member Avatar */}
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full p-0.5 bg-white shadow-cozy border-2 border-stone-200 transition-all transform group-hover:scale-110 group-hover:border-[#C85A32]">
                      <img 
                        src={member.avatar} 
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>

                    {/* Mini role badge */}
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#2D4A3E] text-white rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-white">
                      ✓
                    </div>

                    {/* Floating Thought / Vibe Tag */}
                    <AnimatePresence>
                      {activeBubble === member.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -4, scale: 0.9 }}
                          className="absolute -top-9 left-1/2 -translate-x-1/2 bg-[#1C1917] text-white text-[11px] font-medium py-1 px-2.5 rounded-full whitespace-nowrap shadow-md pointer-events-none z-30"
                        >
                          {member.note}
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1C1917] rotate-45" />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Name label */}
                    <span className="block text-[11px] font-semibold text-stone-700 text-center mt-1 bg-white/90 px-1.5 py-0.5 rounded-md shadow-xs whitespace-nowrap">
                      {member.name}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          );
        })}

        {/* Spot 5: The Open Invitation Slot (User) */}
        {(() => {
          const angles = [-90, -18, 54, 126, 198];
          const userAngle = angles[4]; // 198deg (bottom left)
          const rad = (userAngle * Math.PI) / 180;
          const radiusPercent = 40;
          const leftPercent = 50 + radiusPercent * Math.cos(rad);
          const topPercent = 50 + radiusPercent * Math.sin(rad);

          return (
            <motion.div
              style={{
                position: 'absolute',
                left: `${leftPercent}%`,
                top: `${topPercent}%`,
                transform: 'translate(-50%, -50%)'
              }}
              className="z-20"
            >
              <button
                onClick={handleToggleUserJoin}
                className={`relative group transition-all duration-300 focus:outline-none ${
                  userJoined ? 'cursor-pointer' : 'cursor-pointer'
                }`}
                title={userJoined ? "Click to toggle" : "Click to join circle"}
              >
                {userJoined ? (
                  <motion.div
                    initial={{ scale: 0.5, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    className="relative"
                  >
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full p-0.5 bg-white shadow-cozy border-2 border-[#C85A32]">
                      <img 
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" 
                        alt="Gungun"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#C85A32] text-white rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-white">
                      🌱
                    </div>
                    <span className="block text-[11px] font-bold text-[#C85A32] text-center mt-1 bg-[#FDF6F2] px-1.5 py-0.5 rounded-md shadow-xs border border-[#FBE9E1] whitespace-nowrap">
                      You're in! ✓
                    </span>
                  </motion.div>
                ) : (
                  <div className="flex flex-col items-center">
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full border-2 border-dashed border-[#C85A32] bg-[#FDF6F2] text-[#C85A32] flex items-center justify-center shadow-xs transition-transform group-hover:scale-110 group-hover:bg-[#FBE9E1]">
                      <UserPlus className="w-5 h-5 animate-pulse" />
                    </div>
                    <span className="block text-[10px] font-bold text-[#C85A32] text-center mt-1 bg-white px-2 py-0.5 rounded-full shadow-xs border border-stone-200 whitespace-nowrap group-hover:bg-[#C85A32] group-hover:text-white transition-colors">
                      + Your spot
                    </span>
                  </div>
                )}
              </button>
            </motion.div>
          );
        })()}

      </div>

      {/* Tiny interactive helper footer */}
      <div className="mt-3 flex items-center justify-between text-xs text-stone-500 px-3">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          Offline meetup: Sunday 10 AM · Sector 29
        </span>
        <button
          onClick={handleToggleUserJoin}
          className="text-stone-700 hover:text-[#C85A32] underline font-medium cursor-pointer"
        >
          {userJoined ? "Leave spot" : "Try joining spot"}
        </button>
      </div>
    </div>
  );
}
