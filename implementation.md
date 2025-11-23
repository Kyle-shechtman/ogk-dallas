# OGK Dallas Volunteer Engagement Portal - Implementation Plan

## Overview
A Strava-inspired live dashboard showcasing volunteer stats, leaderboards, and activity feed. No auth required - a public-facing engagement tool that celebrates community contribution.

---

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + shadcn/ui
- **Data**: Mock data (JSON/TypeScript)

---

## Design System

### Colors
- **Primary/Background**: White (`#ffffff`)
- **Secondary/Accent**: OGK Green (`#2b3210`)
- **Text**: Dark variants of secondary
- **Cards**: Light gray/white with subtle shadows

### Typography
- Clean sans-serif (Inter or system fonts)
- Large, bold numbers for stats
- Readable hierarchy

### Vibe
- "We're in this together" community feel
- Celebratory, social, encouraging
- Clean and modern like Strava

---

## Core Features

### 1. Hero Section - Org Stats
Community-wide impact at a glance:
- Total volunteers
- Total hours contributed
- Total meals facilitated
- Total events completed

### 2. Leaderboard
Top 10 volunteers with toggle for:
- Weekly
- Monthly
- All-time

Display per volunteer:
- Rank
- Name + profile icon
- Hours | Events | Meals

### 3. Activity Feed
Real-time-style feed showing:
- "Sarah volunteered at Food Drive"
- "Mike hit 50 hours milestone! 🎉"
- "Lisa completed her 10th event! 🏆"

### 4. Volunteer Cards Grid
Clickable cards showing:
- Profile icon
- Name
- Hours | Events | Meals
- Milestones earned

### 5. Individual Volunteer Profile (Modal or Page)
Detailed view:
- Full stats
- Event history
- Milestones achieved
- Join date

---

## Milestones System
- **10 Events** - "Event Champion"
- **50 Hours** - "Hour Hero"

(Displayed as badges on cards and in feed)

---

## Mock Data Structure

### Volunteer
```typescript
{
  id: string
  name: string
  joinDate: string
  stats: {
    hours: number
    events: number
    meals: number
  }
  milestones: string[]
  eventHistory: Event[]
}
```

### Activity
```typescript
{
  id: string
  volunteerId: string
  type: 'event' | 'milestone'
  message: string
  timestamp: string
}
```

---

## File Structure
```
/app
  /page.tsx              # Main dashboard
  /volunteer/[id]/page.tsx  # Individual profile
/components
  /hero-stats.tsx        # Org totals
  /leaderboard.tsx       # Top 10 with time toggles
  /activity-feed.tsx     # Recent activity
  /volunteer-card.tsx    # Grid card
  /volunteer-grid.tsx    # Cards container
  /milestone-badge.tsx   # Badge component
/lib
  /mock-data.ts          # 20 mock volunteers + activities
  /types.ts              # TypeScript interfaces
/public
  /OGK-logo.avif         # Logo (already present)
```

---

## Implementation Steps

### Phase 1: Setup
- [ ] Initialize Next.js project with Tailwind
- [ ] Install and configure shadcn/ui
- [ ] Set up color theme (white + #2b3210)
- [ ] Add OGK logo to layout

### Phase 2: Data Layer
- [ ] Define TypeScript types
- [ ] Create mock data (20 volunteers)
- [ ] Generate activity feed data
- [ ] Build data utility functions (sorting, filtering)

### Phase 3: Components
- [ ] Hero stats section
- [ ] Leaderboard with time period toggle
- [ ] Activity feed
- [ ] Volunteer card
- [ ] Volunteer grid
- [ ] Milestone badges

### Phase 4: Pages
- [ ] Main dashboard layout
- [ ] Individual volunteer profile (modal or page)
- [ ] Responsive design (mobile + desktop)

### Phase 5: Polish
- [ ] Animations/transitions
- [ ] Loading states
- [ ] Final styling pass
- [ ] Test on mobile

---

## Questions Resolved
- ✅ Stats: Hours, events, meals, milestones
- ✅ Data: Mock (20 volunteers)
- ✅ Leaderboard: Top 10
- ✅ Time periods: Weekly, monthly, all-time
- ✅ Milestones: 10 events, 50 hours
- ✅ Layout: Org totals → Leaderboard → Activity → Volunteer cards
- ✅ Profiles: Clickable for detail view
- ✅ Responsive: Both mobile and desktop

---

## Ready to Build?
Review this plan and let me know if you'd like any changes before I start coding!
