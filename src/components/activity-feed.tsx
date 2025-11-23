'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { activities } from '@/lib/mock-data';

export function ActivityFeed() {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);

    if (hours < 1) return 'Just now';
    if (hours < 24) return `${hours}h ago`;
    if (days === 1) return 'Yesterday';
    return `${days}d ago`;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-secondary text-secondary-foreground text-xs">
                  {getInitials(activity.volunteerName)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm">
                  <span className="font-medium">{activity.volunteerName}</span>{' '}
                  <span className="text-muted-foreground">{activity.message}</span>
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {formatTime(activity.timestamp)}
                </p>
              </div>
              {activity.type === 'milestone' && (
                <span className="text-lg">🎉</span>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
