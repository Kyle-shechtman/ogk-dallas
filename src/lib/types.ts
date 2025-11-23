export interface Volunteer {
  id: string;
  name: string;
  joinDate: string;
  stats: {
    hours: number;
    events: number;
    meals: number;
  };
  weeklyStats: {
    hours: number;
    events: number;
    meals: number;
  };
  monthlyStats: {
    hours: number;
    events: number;
    meals: number;
  };
  milestones: string[];
  eventHistory: EventRecord[];
}

export interface EventRecord {
  id: string;
  name: string;
  date: string;
  hours: number;
  meals: number;
}

export interface Activity {
  id: string;
  volunteerId: string;
  volunteerName: string;
  type: 'event' | 'milestone';
  message: string;
  timestamp: string;
}

export type TimePeriod = 'weekly' | 'monthly' | 'all-time';
