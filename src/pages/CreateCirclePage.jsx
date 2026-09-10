import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { useCircles } from '../context/CircleContext';

const ACTIVITIES = ['Study', 'Sports', 'Creative', 'Chill', 'Games'];

export function CreateCirclePage() {
  const navigate = useNavigate();
  const { createCircle } = useCircles();

  const [submitted, setSubmitted] = useState(false);
  const [createdId, setCreatedId] = useState('');

  // Form Fields as specified:
  // Activity, Circle name, Description, Date/time, Location, Maximum members
  const [activity, setActivity] = useState('Creative');
  const [name, setName] = useState('Sketch & Chai');
  const [description, setDescription] = useState('Walk → chai → sketch whatever happened this week.');
  const [dateTime, setDateTime] = useState('Saturday · 4:00 PM');
  const [location, setLocation] = useState('Lodhi Art District, Block 15');
  const [maxMembers, setMaxMembers] = useState('5');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = createCircle({
      activity,
      name,
      description,
      dateTime,
      location,
      maxMembers
    });
    setCreatedId(newId);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] pb-20 bg-grain">
      <div className="max-w-xl mx-auto px-4 sm:px-6 pt-10">
        
        {!submitted ? (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-soft">
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F3FF] text-[#7C3AED] text-xs font-bold border border-[#DDD6FE] mb-2">
                <span>🌱</span>
                <span>Start something small</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-stone-900 font-['Outfit']">
                Create a Circle
              </h1>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                Gather 3–8 people around a recurring offline habit.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Field 1: Activity */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                  Activity
                </label>
                <div className="grid grid-cols-5 gap-1.5">
                  {ACTIVITIES.map((act) => (
                    <button
                      key={act}
                      type="button"
                      onClick={() => setActivity(act)}
                      className={`py-2 px-1 rounded-xl text-xs font-bold text-center transition-all cursor-pointer ${
                        activity === act
                          ? 'bg-[#7C3AED] text-white shadow-xs'
                          : 'bg-stone-50 text-stone-700 hover:bg-stone-100 border border-stone-200/60'
                      }`}
                    >
                      {act}
                    </button>
                  ))}
                </div>
              </div>

              {/* Field 2: Circle Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                  Circle Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sketch & Chai"
                  className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-sm text-stone-900 focus:outline-none focus:border-[#7C3AED] focus:bg-white"
                />
              </div>

              {/* Field 3: Description */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                  Description
                </label>
                <textarea
                  rows={2}
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="e.g. 45 min focused study → 15 min discussion → chai."
                  className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-sm text-stone-900 focus:outline-none focus:border-[#7C3AED] focus:bg-white"
                />
              </div>

              {/* Field 4: Date/time */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                  Date / Time
                </label>
                <input
                  type="text"
                  required
                  value={dateTime}
                  onChange={(e) => setDateTime(e.target.value)}
                  placeholder="e.g. Saturday · 4:00 PM"
                  className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-sm text-stone-900 focus:outline-none focus:border-[#7C3AED] focus:bg-white"
                />
              </div>

              {/* Field 5: Location */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                  Location
                </label>
                <input
                  type="text"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Lodhi Art District or Blue Tokai Sector 29"
                  className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-sm text-stone-900 focus:outline-none focus:border-[#7C3AED] focus:bg-white"
                />
              </div>

              {/* Field 6: Maximum members */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                  Maximum Members (3–8)
                </label>
                <select
                  value={maxMembers}
                  onChange={(e) => setMaxMembers(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-sm text-stone-900 focus:outline-none focus:border-[#7C3AED] focus:bg-white"
                >
                  <option value="4">4 members (Quiet & intimate)</option>
                  <option value="5">5 members</option>
                  <option value="6">6 members (Recommended)</option>
                  <option value="8">8 members (Maximum limit)</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-sm shadow-soft transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Create circle</span>
                  <Sparkles className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* After submitting, show: "Your circle is alive 🌱" */
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200/90 shadow-soft text-center animate-in fade-in zoom-in duration-300">
            <div className="w-20 h-20 mx-auto rounded-3xl bg-[#F5F3FF] border border-[#DDD6FE] flex items-center justify-center text-4xl mb-5 shadow-xs">
              🌱
            </div>

            <h2 className="text-3xl font-black text-stone-900 font-['Outfit']">
              Your circle is alive 🌱
            </h2>
            <p className="text-stone-600 text-sm mt-2">
              <strong>{name}</strong> is ready. Capped at {maxMembers} members.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => navigate(`/circle/${createdId}`)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-xs shadow-xs cursor-pointer"
              >
                View Circle Room
              </button>
              <button
                onClick={() => navigate('/discover')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl border border-stone-200 hover:bg-stone-50 text-stone-700 font-bold text-xs cursor-pointer"
              >
                Go to Discover
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
