import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Volunteer } from '@/lib/types';
import { MilestoneBadge } from './milestone-badge';

interface VolunteerCardProps {
  volunteer: Volunteer;
}

export function VolunteerCard({ volunteer }: VolunteerCardProps) {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <Link href={`/volunteer/${volunteer.id}`}>
      <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
        <CardContent className="p-6">
          <div className="flex flex-col items-center text-center">
            <Avatar className="w-16 h-16 mb-4">
              <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                {getInitials(volunteer.name)}
              </AvatarFallback>
            </Avatar>
            <h3 className="font-semibold mb-2">{volunteer.name}</h3>
            <div className="flex flex-wrap justify-center gap-1 mb-3">
              {volunteer.milestones.map((m) => (
                <MilestoneBadge key={m} milestone={m} />
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2 w-full text-sm">
              <div>
                <div className="font-bold text-lg">{volunteer.stats.hours}</div>
                <div className="text-muted-foreground text-xs">Hours</div>
              </div>
              <div>
                <div className="font-bold text-lg">{volunteer.stats.events}</div>
                <div className="text-muted-foreground text-xs">Events</div>
              </div>
              <div>
                <div className="font-bold text-lg">{volunteer.stats.meals}</div>
                <div className="text-muted-foreground text-xs">Meals</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
