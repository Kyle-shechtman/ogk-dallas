'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { getLeaderboard } from '@/lib/mock-data';
import { TimePeriod } from '@/lib/types';
import { MilestoneBadge } from './milestone-badge';

export function Leaderboard() {
  const [period, setPeriod] = useState<TimePeriod>('all-time');
  const leaderboard = getLeaderboard(period, 10);

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <CardTitle className="text-xl">Top Volunteers</CardTitle>
          <Tabs value={period} onValueChange={(v) => setPeriod(v as TimePeriod)}>
            <TabsList>
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="all-time">All Time</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {leaderboard.map((volunteer, index) => {
            const stats =
              period === 'weekly'
                ? volunteer.weeklyStats
                : period === 'monthly'
                ? volunteer.monthlyStats
                : volunteer.stats;

            return (
              <div
                key={volunteer.id}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                  {index + 1}
                </div>
                <Avatar>
                  <AvatarFallback className="bg-secondary text-secondary-foreground">
                    {getInitials(volunteer.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="font-medium truncate">{volunteer.name}</div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {volunteer.milestones.map((m) => (
                      <MilestoneBadge key={m} milestone={m} />
                    ))}
                  </div>
                </div>
                <div className="text-right text-sm">
                  <div className="font-semibold">{stats.hours}h</div>
                  <div className="text-muted-foreground hidden sm:block">
                    {stats.events} events | {stats.meals} meals
                  </div>
                  <div className="text-muted-foreground text-xs sm:hidden">
                    {stats.events}e | {stats.meals}m
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
