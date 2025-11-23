'use client';

import { volunteers } from '@/lib/mock-data';
import { VolunteerCard } from './volunteer-card';

export function VolunteerGrid() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Our Volunteers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {volunteers.map((volunteer) => (
          <VolunteerCard key={volunteer.id} volunteer={volunteer} />
        ))}
      </div>
    </div>
  );
}
