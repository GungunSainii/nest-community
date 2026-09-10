import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCircles } from '../context/CircleContext';

export function Toast() {
  const { toast } = useCircles();

  return (
    <div className="fixed bottom-20 md:bottom-6 right-6 z-50 pointer-events-none">
      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            className="flex items-center gap-3 px-4 py-3 bg-[#1C1917] text-white rounded-2xl shadow-cozy-lg border border-stone-800 text-sm font-medium pointer-events-auto max-w-sm"
          >
            <span className="text-lg select-none">{toast.icon || '🌱'}</span>
            <span>{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
