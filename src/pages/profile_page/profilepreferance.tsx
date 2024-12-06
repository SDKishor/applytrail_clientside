import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Coins } from 'lucide-react';

export function ProfilePreferences({
  locations,
  salary,
  workType,
}: {
  locations: string[];
  salary: string;
  workType: string[];
}) {
  const preferences = [
    {
      icon: MapPin,
      label: 'Preferred Locations',
      values: locations,
    },
    {
      icon: Coins,
      label: 'Salary Range',
      values: [salary],
    },
  ];

  return (
    <Card className="flex-1 bg-sidebar">
      <CardHeader>
        <CardTitle className="font-heading text-lg">Job Preferences</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {locations.length > 0 || workType.length > 0
          ? preferences.map((pref, index) => (
              <div
                key={pref.label + index}
                className="flex items-start space-x-3"
              >
                <pref.icon className="mt-1 h-5 w-5 text-primary/80 dark:text-primary/50" />
                <div>
                  <h3 className="mb-2 font-heading font-medium">
                    {pref.label}
                  </h3>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {pref.values.map((value) => (
                      <Badge key={value} variant="outline">
                        {value}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))
          : 'please add your job preferences'}
      </CardContent>
    </Card>
  );
}
