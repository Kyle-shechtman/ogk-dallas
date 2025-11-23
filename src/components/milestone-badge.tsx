import { Badge } from '@/components/ui/badge';

interface MilestoneBadgeProps {
  milestone: string;
}

export function MilestoneBadge({ milestone }: MilestoneBadgeProps) {
  const getIcon = (milestone: string) => {
    switch (milestone) {
      case 'Event Champion':
        return '🏆';
      case 'Hour Hero':
        return '⭐';
      default:
        return '🎖️';
    }
  };

  return (
    <Badge variant="secondary" className="text-xs">
      {getIcon(milestone)} {milestone}
    </Badge>
  );
}
