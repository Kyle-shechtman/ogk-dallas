import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getVolunteerById, volunteers } from '@/lib/mock-data';
import { MilestoneBadge } from '@/components/milestone-badge';

export function generateStaticParams() {
  return volunteers.map((volunteer) => ({
    id: volunteer.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function VolunteerProfile({ params }: PageProps) {
  const { id } = await params;
  const volunteer = getVolunteerById(id);

  if (!volunteer) {
    notFound();
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <Link href="/">
            <Button variant="ghost" className="text-primary-foreground hover:bg-white/10 mb-4">
              ← Back to Dashboard
            </Button>
          </Link>
          <div className="flex items-center gap-4">
            <Avatar className="w-20 h-20 border-4 border-white/20">
              <AvatarFallback className="bg-white text-primary text-2xl font-bold">
                {getInitials(volunteer.name)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{volunteer.name}</h1>
              <p className="text-sm opacity-90">Member since {formatDate(volunteer.joinDate)}</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                {volunteer.stats.hours}
              </div>
              <div className="text-sm text-muted-foreground">Total Hours</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                {volunteer.stats.events}
              </div>
              <div className="text-sm text-muted-foreground">Events</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                {volunteer.stats.meals}
              </div>
              <div className="text-sm text-muted-foreground">Meals</div>
            </CardContent>
          </Card>
        </div>

        {/* Milestones */}
        {volunteer.milestones.length > 0 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {volunteer.milestones.map((milestone) => (
                  <MilestoneBadge key={milestone} milestone={milestone} />
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Event History */}
        <Card>
          <CardHeader>
            <CardTitle>Event History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {volunteer.eventHistory.map((event) => (
                <div
                  key={event.id}
                  className="flex items-center justify-between p-4 rounded-lg bg-muted"
                >
                  <div>
                    <div className="font-medium">{event.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {formatDate(event.date)}
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary">{event.hours}h</Badge>
                    <div className="text-sm text-muted-foreground mt-1">
                      {event.meals} meals
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
