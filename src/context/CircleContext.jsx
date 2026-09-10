import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { INITIAL_CIRCLES } from '../data/mockData';

const CircleContext = createContext(null);

export function CircleProvider({ children }) {
  const [circles, setCircles] = useState(() => {
    try {
      const saved = localStorage.getItem('nest_mvp_circles');
      return saved ? JSON.parse(saved) : INITIAL_CIRCLES;
    } catch {
      return INITIAL_CIRCLES;
    }
  });

  const [joinedMap, setJoinedMap] = useState(() => {
    try {
      const saved = localStorage.getItem('nest_mvp_joined');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [rsvpMap, setRsvpMap] = useState(() => {
    try {
      const saved = localStorage.getItem('nest_mvp_rsvps');
      return saved ? JSON.parse(saved) : { "study-7pm": true };
    } catch {
      return { "study-7pm": true };
    }
  });

  const [streakCount, setStreakCount] = useState(() => {
    try {
      const saved = localStorage.getItem('nest_mvp_streak');
      return saved ? parseInt(saved) : 1;
    } catch {
      return 1;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('nest_mvp_circles', JSON.stringify(circles));
    } catch {}
  }, [circles]);

  useEffect(() => {
    try {
      localStorage.setItem('nest_mvp_joined', JSON.stringify(joinedMap));
    } catch {}
  }, [joinedMap]);

  useEffect(() => {
    try {
      localStorage.setItem('nest_mvp_rsvps', JSON.stringify(rsvpMap));
    } catch {}
  }, [rsvpMap]);

  useEffect(() => {
    try {
      localStorage.setItem('nest_mvp_streak', streakCount.toString());
    } catch {}
  }, [streakCount]);

  const isJoined = (id) => !!joinedMap[id];

  const joinCircle = (id) => {
    const currentlyJoined = !!joinedMap[id];
    const newStatus = !currentlyJoined;

    setJoinedMap((prev) => ({ ...prev, [id]: newStatus }));

    setCircles((prev) =>
      prev.map((c) => {
        if (c.id === id) {
          const delta = newStatus ? 1 : -1;
          const newCount = Math.max(1, Math.min(c.maxMembers, c.membersCount + delta));
          return { ...c, membersCount: newCount };
        }
        return c;
      })
    );

    if (newStatus) {
      try {
        confetti({
          particleCount: 35,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#7C3AED', '#A78BFA', '#DDD6FE', '#FAF8F5']
        });
      } catch {}
    }
  };

  const toggleRsvp = (id) => {
    setRsvpMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const togglePlanItem = (circleId, itemId) => {
    setCircles((prev) =>
      prev.map((c) => {
        if (c.id === circleId && c.tinyPlan) {
          return {
            ...c,
            tinyPlan: c.tinyPlan.map((item) =>
              item.id === itemId ? { ...item, completed: !item.completed } : item
            )
          };
        }
        return c;
      })
    );
  };

  const createCircle = (data) => {
    const newId = `circle-${Date.now()}`;
    const newCircle = {
      id: newId,
      name: data.name || 'Untitled Circle',
      tagline: data.description || 'Small recurring circle.',
      category: data.activity || 'Study',
      emoji: data.emoji || (data.activity === 'Study' ? '📚' : data.activity === 'Sports' ? '🏸' : data.activity === 'Creative' ? '🎨' : '☕'),
      membersCount: 1,
      maxMembers: parseInt(data.maxMembers) || 6,
      time: data.dateTime || 'Sunday · 10:00 AM',
      location: data.location || 'Local Park / Tapri',
      spotDetails: 'Near the entrance',
      description: data.description || 'A cozy space to meet offline.',
      vibeTags: ['Consistent', 'Chill', 'Small Group'],
      streak: '1 week of showing up',
      members: [
        {
          id: 'u1',
          name: 'You',
          status: 'Circle Starter',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80'
        }
      ],
      tinyPlan: [
        { id: 1, text: 'Meet at agreed spot', completed: false },
        { id: 2, text: 'First 30 min activity', completed: false },
        { id: 3, text: 'Chai & lock in next week', completed: false }
      ]
    };

    setCircles((prev) => [newCircle, ...prev]);
    setJoinedMap((prev) => ({ ...prev, [newId]: true }));

    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#7C3AED', '#A78BFA', '#EDE9FE']
      });
    } catch {}

    return newId;
  };

  const advanceStreak = () => {
    setStreakCount((prev) => prev + 1);
    try {
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.5 },
        colors: ['#7C3AED', '#A78BFA', '#22C55E', '#DDD6FE']
      });
    } catch {}
  };

  const resetDemo = () => {
    localStorage.removeItem('nest_mvp_circles');
    localStorage.removeItem('nest_mvp_joined');
    localStorage.removeItem('nest_mvp_rsvps');
    localStorage.removeItem('nest_mvp_streak');
    setCircles(INITIAL_CIRCLES);
    setJoinedMap({});
    setRsvpMap({ "study-7pm": true });
    setStreakCount(1);
  };

  return (
    <CircleContext.Provider
      value={{
        circles,
        isJoined,
        joinCircle,
        rsvpMap,
        toggleRsvp,
        togglePlanItem,
        createCircle,
        streakCount,
        advanceStreak,
        resetDemo
      }}
    >
      {children}
    </CircleContext.Provider>
  );
}

export function useCircles() {
  const context = useContext(CircleContext);
  if (!context) {
    throw new Error('useCircles must be used within CircleProvider');
  }
  return context;
}
