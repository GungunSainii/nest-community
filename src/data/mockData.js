// Mock Data for NEST Frontend MVP

export const INITIAL_CIRCLES = [
  {
    id: "study-7pm",
    name: "The 7 PM Study Circle",
    tagline: "45 min focused study → 15 min discussion → chai.",
    category: "Study",
    emoji: "📚",
    membersCount: 5,
    maxMembers: 6,
    time: "Today · 7:00 PM",
    location: "Blue Tokai, Sector 29",
    spotDetails: "Corner community table with power strips",
    description: "45 min focused study → 15 min discussion → chai. A tight, distraction-free study sprint for people prepping for interviews, reading papers, or finishing work without doomscrolling.",
    vibeTags: ["Focused", "Quiet", "Consistent"],
    streak: "3 weeks of showing up",
    members: [
      { id: "m1", name: "Kabir", status: "Host · Bringing notes", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80" },
      { id: "m2", name: "Ananya", status: "DSA prep", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80" },
      { id: "m3", name: "Rohan", status: "Reading papers", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80" },
      { id: "m4", name: "Tanvi", status: "Web development", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80" },
      { id: "m5", name: "Aditya", status: "System design", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80" }
    ],
    tinyPlan: [
      { id: 1, text: "Meet at corner table (6:55 PM)", completed: true },
      { id: 2, text: "45 min silent pomodoro sprint", completed: false },
      { id: 3, text: "15 min review & hot cutting chai", completed: false },
      { id: 4, text: "Decide next week's focus topic", completed: false }
    ]
  },
  {
    id: "dsa-study-circle",
    name: "DSA Study Circle",
    tagline: "45 min focused problem solving followed by discussion over tea.",
    category: "Study",
    emoji: "📚",
    membersCount: 4,
    maxMembers: 6,
    time: "Wednesday · 6:30 PM",
    location: "Central Park, Connaught Place",
    spotDetails: "Benches opposite amphitheater",
    description: "We pick 2 medium problems ahead of time, explain our logic on paper without IDE hints, and help each other get unstuck.",
    vibeTags: ["Coding", "Quiet", "Consistent"],
    streak: "2 weeks of showing up",
    members: [
      { id: "d1", name: "Kavya", status: "Host · Brings problem list", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80" },
      { id: "d2", name: "Harsh", status: "Recursion enthusiast", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80" },
      { id: "d3", name: "Siddharth", status: "Python & graphs", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&auto=format&fit=crop&q=80" },
      { id: "d4", name: "Gungun", status: "Attending", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80" }
    ],
    tinyPlan: [
      { id: 1, text: "Quick problem briefing (5 min)", completed: true },
      { id: 2, text: "40 min individual dry-run on paper", completed: false },
      { id: 3, text: "Solution exchange & chai", completed: false }
    ]
  },
  {
    id: "sunday-badminton",
    name: "Sunday Badminton",
    tagline: "Casual doubles rallies, zero intimidation, and nimbu paani.",
    category: "Sports",
    emoji: "🏸",
    membersCount: 3,
    maxMembers: 4,
    time: "Sunday · 8:00 AM",
    location: "Siri Fort Sports Complex, Court 3",
    spotDetails: "Wooden indoor badminton court #3",
    description: "Friendly amateur rallies, fresh sweat, and cold drinks. All skill levels welcome, strictly friendly with zero sports gatekeeping.",
    vibeTags: ["Active", "Friendly", "Morning"],
    streak: "4 weeks of showing up",
    members: [
      { id: "b1", name: "Arjun", status: "Host · Bringing shuttles", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80" },
      { id: "b2", name: "Megha", status: "Racket ready", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80" },
      { id: "b3", name: "Sameer", status: "Early bird", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&auto=format&fit=crop&q=80" }
    ],
    tinyPlan: [
      { id: 1, text: "Warm-up rallies (10 min)", completed: true },
      { id: 2, text: "3 rotating casual doubles matches", completed: false },
      { id: 3, text: "Nimbu paani recharge at canteen", completed: false }
    ]
  },
  {
    id: "sketch-and-chai",
    name: "Sketch & Chai",
    tagline: "Pocket sketchbooks, watercolor pencils, and street tapri tea.",
    category: "Creative",
    emoji: "🎨",
    membersCount: 2,
    maxMembers: 5,
    time: "Saturday · 4:00 PM",
    location: "Lodhi Art District, Block 15",
    spotDetails: "Near peacock mural corner tapri",
    description: "No art school background needed. We pick a quiet corner, draw street vignettes or abstract doodles for 40 minutes, and share our pages over chai.",
    vibeTags: ["Creative", "Introvert-Friendly", "Relaxed"],
    streak: "1 week of showing up",
    members: [
      { id: "s1", name: "Pranav", status: "Host · Spare pencils ready", avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&auto=format&fit=crop&q=80" },
      { id: "s2", name: "Alisha", status: "Watercolor tin ready", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80" }
    ],
    tinyPlan: [
      { id: 1, text: "Meet by the peacock mural", completed: false },
      { id: 2, text: "35 min quiet sketching", completed: false },
      { id: 3, text: "Chai round & show sketchbooks", completed: false }
    ]
  },
  {
    id: "evening-walk-and-talk",
    name: "Evening Walk & Talk",
    tagline: "Decompress after work with an easy unhurried stroll around the lake.",
    category: "Chill",
    emoji: "☕",
    membersCount: 3,
    maxMembers: 5,
    time: "Friday · 7:00 PM",
    location: "Deer Park, Hauz Khas",
    spotDetails: "Entrance gazebo near lake trail",
    description: "An unhurried sunset walk around Hauz Khas lake to shed screen fatigue. We walk at an easy conversation pace, pause by the monument, and finish with chai.",
    vibeTags: ["Chill", "Consistent", "Talkative"],
    streak: "3 weeks of showing up",
    members: [
      { id: "w1", name: "Divya", status: "Host · Walking shoes on", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80" },
      { id: "w2", name: "Raghav", status: "Photography fan", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80" },
      { id: "w3", name: "Simran", status: "Lake loop regular", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=120&auto=format&fit=crop&q=80" }
    ],
    tinyPlan: [
      { id: 1, text: "Gather by the gazebo", completed: true },
      { id: 2, text: "25 min lakeside loop", completed: false },
      { id: 3, text: "Hot tea & unwind", completed: false }
    ]
  }
];

export const INITIAL_MY_CIRCLES_IDS = ["study-7pm", "dsa-study-circle"];
export const INITIAL_USER_PROFILE = { name: "You" };
