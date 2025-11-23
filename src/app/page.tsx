import Image from 'next/image';
import { HeroStats } from '@/components/hero-stats';
import { Leaderboard } from '@/components/leaderboard';
import { ActivityFeed } from '@/components/activity-feed';
import { VolunteerGrid } from '@/components/volunteer-grid';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <Image
              src="/OGK-logo.avif"
              alt="OGK Dallas"
              width={80}
              height={80}
              className="rounded-lg"
            />
            <nav className="hidden md:flex gap-6 text-sm font-medium">
              <a href="#stats" className="hover:opacity-80 transition-opacity">Stats</a>
              <a href="#leaderboard" className="hover:opacity-80 transition-opacity">Leaderboard</a>
              <a href="#volunteers" className="hover:opacity-80 transition-opacity">Volunteers</a>
              <a href="#activity" className="hover:opacity-80 transition-opacity">Activity</a>
            </nav>
            <nav className="flex md:hidden gap-4 text-xs font-medium">
              <a href="#stats" className="hover:opacity-80 transition-opacity">Stats</a>
              <a href="#leaderboard" className="hover:opacity-80 transition-opacity">Top</a>
              <a href="#volunteers" className="hover:opacity-80 transition-opacity">All</a>
              <a href="#activity" className="hover:opacity-80 transition-opacity">Activity</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Stats */}
      <section id="stats" className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Community Impact</h2>
          <p className="text-muted-foreground">Together, we&apos;re making a difference</p>
        </div>
        <HeroStats />
      </section>

      {/* Leaderboard - Full Width */}
      <section id="leaderboard" className="max-w-7xl mx-auto px-4 pb-8">
        <Leaderboard />
      </section>

      {/* Volunteer Grid */}
      <section id="volunteers" className="max-w-7xl mx-auto px-4 pb-8">
        <VolunteerGrid />
      </section>

      {/* Activity Feed - Full Width */}
      <section id="activity" className="max-w-7xl mx-auto px-4 pb-12">
        <ActivityFeed />
      </section>

      {/* Footer */}
      <footer className="bg-muted py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>OGK Dallas Volunteer Portal</p>
        </div>
      </footer>
    </main>
  );
}
