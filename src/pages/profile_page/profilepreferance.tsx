import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, MapPin, Coins, Timer } from 'lucide-react';

export function ProfilePreferences() {
  const preferences = [
    {
      icon: Building2,
      label: 'Preferred Industries',
      values: ['Tech', 'Finance', 'Healthcare'],
    },
    {
      icon: MapPin,
      label: 'Preferred Locations',
      values: ['San Francisco', 'New York', 'Remote'],
    },
    {
      icon: Coins,
      label: 'Salary Range',
      values: ['$120k - $180k'],
    },
    {
      icon: Timer,
      label: 'Work Type',
      values: ['Full-time', 'Hybrid'],
    },
  ];

  return (
    <Card className="flex-1 bg-sidebar">
      <CardHeader>
        <CardTitle className="font-heading text-lg">Job Preferences</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {preferences.map((pref) => (
          <div key={pref.label} className="flex items-start space-x-3">
            <pref.icon className="mt-1 h-5 w-5 text-primary/80 dark:text-primary/50" />
            <div>
              <h3 className="mb-2 font-heading font-medium">{pref.label}</h3>
              <div className="mt-1 flex flex-wrap gap-2">
                {pref.values.map((value) => (
                  <Badge key={value} variant="outline">
                    {value}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
