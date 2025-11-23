'use client';

import { Card, CardContent } from '@/components/ui/card';
import { getOrgStats } from '@/lib/mock-data';

export function HeroStats() {
  const stats = getOrgStats();

  const statItems = [
    { label: 'Volunteers', value: stats.totalVolunteers },
    { label: 'Hours', value: stats.totalHours.toLocaleString() },
    { label: 'Meals', value: stats.totalMeals.toLocaleString() },
    { label: 'Events', value: stats.totalEvents },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {statItems.map((stat) => (
        <Card key={stat.label} className="bg-white border">
          <CardContent className="p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold mb-1 text-primary">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
