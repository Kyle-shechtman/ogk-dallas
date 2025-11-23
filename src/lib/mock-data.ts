import { Volunteer, Activity } from './types';

const eventNames = [
  'Community Food Drive',
  'Weekend Meal Prep',
  'Senior Center Delivery',
  'School Lunch Program',
  'Holiday Food Distribution',
  'Farmers Market Collection',
  'Pantry Restocking',
  'Mobile Food Pantry',
  'Nutrition Workshop',
  'Garden Harvest',
];

function generateEventHistory(count: number): Volunteer['eventHistory'] {
  const events = [];
  for (let i = 0; i < count; i++) {
    const daysAgo = Math.floor(Math.random() * 365);
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    events.push({
      id: `event-${i}`,
      name: eventNames[Math.floor(Math.random() * eventNames.length)],
      date: date.toISOString().split('T')[0],
      hours: Math.floor(Math.random() * 4) + 2,
      meals: Math.floor(Math.random() * 2) + 2,
    });
  }
  return events.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

function getMilestones(events: number, hours: number): string[] {
  const milestones = [];
  if (events >= 10) milestones.push('Event Champion');
  if (hours >= 50) milestones.push('Hour Hero');
  return milestones;
}

export const volunteers: Volunteer[] = [
  {
    id: '1',
    name: 'Chase Fagen',
    joinDate: '2023-01-15',
    stats: { hours: 127, events: 24, meals: 60 },
    weeklyStats: { hours: 4, events: 1, meals: 3 },
    monthlyStats: { hours: 16, events: 4, meals: 12 },
    milestones: ['Event Champion', 'Hour Hero'],
    eventHistory: generateEventHistory(24),
  },
  {
    id: '2',
    name: 'Michael Chen',
    joinDate: '2023-03-22',
    stats: { hours: 98, events: 18, meals: 45 },
    weeklyStats: { hours: 3, events: 1, meals: 2 },
    monthlyStats: { hours: 12, events: 3, meals: 10 },
    milestones: ['Event Champion', 'Hour Hero'],
    eventHistory: generateEventHistory(18),
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    joinDate: '2023-02-08',
    stats: { hours: 85, events: 16, meals: 40 },
    weeklyStats: { hours: 4, events: 1, meals: 3 },
    monthlyStats: { hours: 14, events: 3, meals: 11 },
    milestones: ['Event Champion', 'Hour Hero'],
    eventHistory: generateEventHistory(16),
  },
  {
    id: '4',
    name: 'David Kim',
    joinDate: '2023-04-10',
    stats: { hours: 72, events: 14, meals: 35 },
    weeklyStats: { hours: 2, events: 1, meals: 2 },
    monthlyStats: { hours: 10, events: 3, meals: 9 },
    milestones: ['Event Champion', 'Hour Hero'],
    eventHistory: generateEventHistory(14),
  },
  {
    id: '5',
    name: 'Jessica Thompson',
    joinDate: '2023-05-20',
    stats: { hours: 68, events: 12, meals: 30 },
    weeklyStats: { hours: 3, events: 1, meals: 3 },
    monthlyStats: { hours: 11, events: 3, meals: 10 },
    milestones: ['Event Champion', 'Hour Hero'],
    eventHistory: generateEventHistory(12),
  },
  {
    id: '6',
    name: 'Christopher Davis',
    joinDate: '2023-06-01',
    stats: { hours: 54, events: 11, meals: 28 },
    weeklyStats: { hours: 2, events: 1, meals: 2 },
    monthlyStats: { hours: 9, events: 2, meals: 8 },
    milestones: ['Event Champion', 'Hour Hero'],
    eventHistory: generateEventHistory(11),
  },
  {
    id: '7',
    name: 'Amanda Wilson',
    joinDate: '2023-07-15',
    stats: { hours: 48, events: 10, meals: 25 },
    weeklyStats: { hours: 2, events: 1, meals: 2 },
    monthlyStats: { hours: 8, events: 2, meals: 8 },
    milestones: ['Event Champion'],
    eventHistory: generateEventHistory(10),
  },
  {
    id: '8',
    name: 'Robert Garcia',
    joinDate: '2023-08-03',
    stats: { hours: 45, events: 9, meals: 23 },
    weeklyStats: { hours: 3, events: 1, meals: 3 },
    monthlyStats: { hours: 10, events: 2, meals: 9 },
    milestones: [],
    eventHistory: generateEventHistory(9),
  },
  {
    id: '9',
    name: 'Jennifer Lee',
    joinDate: '2023-09-12',
    stats: { hours: 42, events: 8, meals: 20 },
    weeklyStats: { hours: 2, events: 1, meals: 2 },
    monthlyStats: { hours: 8, events: 2, meals: 8 },
    milestones: [],
    eventHistory: generateEventHistory(8),
  },
  {
    id: '10',
    name: 'William Brown',
    joinDate: '2023-10-01',
    stats: { hours: 38, events: 7, meals: 18 },
    weeklyStats: { hours: 2, events: 1, meals: 2 },
    monthlyStats: { hours: 7, events: 2, meals: 8 },
    milestones: [],
    eventHistory: generateEventHistory(7),
  },
  {
    id: '11',
    name: 'Ashley Johnson',
    joinDate: '2023-11-05',
    stats: { hours: 35, events: 7, meals: 18 },
    weeklyStats: { hours: 2, events: 1, meals: 2 },
    monthlyStats: { hours: 6, events: 2, meals: 7 },
    milestones: [],
    eventHistory: generateEventHistory(7),
  },
  {
    id: '12',
    name: 'James Anderson',
    joinDate: '2023-12-10',
    stats: { hours: 32, events: 6, meals: 15 },
    weeklyStats: { hours: 2, events: 1, meals: 2 },
    monthlyStats: { hours: 7, events: 2, meals: 8 },
    milestones: [],
    eventHistory: generateEventHistory(6),
  },
  {
    id: '13',
    name: 'Stephanie Taylor',
    joinDate: '2024-01-15',
    stats: { hours: 28, events: 5, meals: 13 },
    weeklyStats: { hours: 3, events: 1, meals: 3 },
    monthlyStats: { hours: 8, events: 2, meals: 9 },
    milestones: [],
    eventHistory: generateEventHistory(5),
  },
  {
    id: '14',
    name: 'Daniel Moore',
    joinDate: '2024-02-20',
    stats: { hours: 25, events: 5, meals: 13 },
    weeklyStats: { hours: 2, events: 1, meals: 2 },
    monthlyStats: { hours: 6, events: 2, meals: 8 },
    milestones: [],
    eventHistory: generateEventHistory(5),
  },
  {
    id: '15',
    name: 'Nicole White',
    joinDate: '2024-03-08',
    stats: { hours: 22, events: 4, meals: 10 },
    weeklyStats: { hours: 2, events: 1, meals: 2 },
    monthlyStats: { hours: 5, events: 1, meals: 6 },
    milestones: [],
    eventHistory: generateEventHistory(4),
  },
  {
    id: '16',
    name: 'Matthew Harris',
    joinDate: '2024-04-12',
    stats: { hours: 18, events: 4, meals: 10 },
    weeklyStats: { hours: 2, events: 1, meals: 2 },
    monthlyStats: { hours: 5, events: 1, meals: 6 },
    milestones: [],
    eventHistory: generateEventHistory(4),
  },
  {
    id: '17',
    name: 'Rachel Clark',
    joinDate: '2024-05-25',
    stats: { hours: 15, events: 3, meals: 8 },
    weeklyStats: { hours: 2, events: 1, meals: 2 },
    monthlyStats: { hours: 4, events: 1, meals: 5 },
    milestones: [],
    eventHistory: generateEventHistory(3),
  },
  {
    id: '18',
    name: 'Kevin Lewis',
    joinDate: '2024-06-30',
    stats: { hours: 12, events: 3, meals: 8 },
    weeklyStats: { hours: 0, events: 0, meals: 0 },
    monthlyStats: { hours: 3, events: 1, meals: 4 },
    milestones: [],
    eventHistory: generateEventHistory(3),
  },
  {
    id: '19',
    name: 'Megan Walker',
    joinDate: '2024-07-15',
    stats: { hours: 8, events: 2, meals: 5 },
    weeklyStats: { hours: 2, events: 1, meals: 2 },
    monthlyStats: { hours: 4, events: 1, meals: 4 },
    milestones: [],
    eventHistory: generateEventHistory(2),
  },
  {
    id: '20',
    name: 'Brian Hall',
    joinDate: '2024-08-01',
    stats: { hours: 6, events: 1, meals: 3 },
    weeklyStats: { hours: 3, events: 1, meals: 3 },
    monthlyStats: { hours: 6, events: 1, meals: 6 },
    milestones: [],
    eventHistory: generateEventHistory(1),
  },
];

export const activities: Activity[] = [
  {
    id: '1',
    volunteerId: '1',
    volunteerName: 'Chase Fagen',
    type: 'event',
    message: 'volunteered at Community Food Drive',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '2',
    volunteerId: '3',
    volunteerName: 'Emily Rodriguez',
    type: 'milestone',
    message: 'reached 50 hours - Hour Hero!',
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '3',
    volunteerId: '2',
    volunteerName: 'Michael Chen',
    type: 'event',
    message: 'volunteered at Weekend Meal Prep',
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '4',
    volunteerId: '5',
    volunteerName: 'Jessica Thompson',
    type: 'event',
    message: 'volunteered at Senior Center Delivery',
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '5',
    volunteerId: '7',
    volunteerName: 'Amanda Wilson',
    type: 'milestone',
    message: 'completed 10 events - Event Champion!',
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '6',
    volunteerId: '4',
    volunteerName: 'David Kim',
    type: 'event',
    message: 'volunteered at School Lunch Program',
    timestamp: new Date(Date.now() - 18 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '7',
    volunteerId: '8',
    volunteerName: 'Robert Garcia',
    type: 'event',
    message: 'volunteered at Pantry Restocking',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '8',
    volunteerId: '6',
    volunteerName: 'Christopher Davis',
    type: 'event',
    message: 'volunteered at Mobile Food Pantry',
    timestamp: new Date(Date.now() - 30 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '9',
    volunteerId: '20',
    volunteerName: 'Brian Hall',
    type: 'event',
    message: 'joined the volunteer team!',
    timestamp: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '10',
    volunteerId: '10',
    volunteerName: 'William Brown',
    type: 'event',
    message: 'volunteered at Garden Harvest',
    timestamp: new Date(Date.now() - 72 * 60 * 60 * 1000).toISOString(),
  },
];

export function getOrgStats() {
  return {
    totalVolunteers: volunteers.length,
    totalHours: volunteers.reduce((sum, v) => sum + v.stats.hours, 0),
    totalMeals: volunteers.reduce((sum, v) => sum + v.stats.meals, 0),
    totalEvents: volunteers.reduce((sum, v) => sum + v.stats.events, 0),
  };
}

export function getVolunteerById(id: string): Volunteer | undefined {
  return volunteers.find((v) => v.id === id);
}

export function getLeaderboard(period: 'weekly' | 'monthly' | 'all-time', limit: number = 10) {
  const sorted = [...volunteers].sort((a, b) => {
    const statsA = period === 'weekly' ? a.weeklyStats : period === 'monthly' ? a.monthlyStats : a.stats;
    const statsB = period === 'weekly' ? b.weeklyStats : period === 'monthly' ? b.monthlyStats : b.stats;
    return statsB.hours - statsA.hours;
  });
  return sorted.slice(0, limit);
}
