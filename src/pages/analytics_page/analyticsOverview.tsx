import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Users, Handshake } from 'lucide-react';

interface AnalyticsOverviewProps {
  application: number;
  interview: number;
  offer: number;
}

export function AnalyticsOverview({
  application,
  interview,
  offer,
}: AnalyticsOverviewProps) {
  const stats = [
    {
      title: 'Total Applications',
      value: application,
      icon: Briefcase,
    },
    {
      title: 'Interview Invites',
      value: interview,
      icon: Users,
    },
    {
      title: 'Offers Received',
      value: offer,
      icon: Handshake,
    },
  ];

  return (
    <div className="flex flex-col gap-4 sm:grid sm:max-w-full sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardContent className="p-6">
            <div className="flex gap-2">
              <stat.icon className="h-5 w-5 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">{stat.title}</p>
            </div>
            <div className="mt-4">
              <h3 className="font-heading text-3xl font-bold">{stat.value}</h3>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
