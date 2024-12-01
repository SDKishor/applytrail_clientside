import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowUpRight,
  ArrowDownRight,
  Briefcase,
  Users,
  Calendar,
} from 'lucide-react';

export function AnalyticsOverview() {
  const stats = [
    {
      title: 'Total Applications',
      value: '156',
      change: '+12%',
      trend: 'up',
      icon: Briefcase,
    },
    {
      title: 'Interview Invites',
      value: '28',
      change: '+8%',
      trend: 'up',
      icon: Users,
    },
    {
      title: 'Upcoming Interviews',
      value: '5',
      change: '-2',
      trend: 'down',
      icon: Calendar,
    },
  ];

  return (
    <div className="flex flex-col gap-4 sm:grid sm:max-w-full sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <stat.icon className="h-5 w-5 text-muted-foreground" />
              <span
                className={`flex items-center text-sm ${
                  stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {stat.change}
                {stat.trend === 'up' ? (
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                ) : (
                  <ArrowDownRight className="ml-1 h-4 w-4" />
                )}
              </span>
            </div>
            <div className="mt-4">
              <h3 className="font-heading text-3xl font-bold">{stat.value}</h3>
              <p className="text-sm text-muted-foreground">{stat.title}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
